//var movieData;
//get movie id number into string literal
async function getMovieData(){
  const res = await fetch(`/api/movie/${window.location.href.split('movie/')[1]}/review`)
  const data = await res.json()
  console.log(data);
  generateLeftSide(data);
  generateRightSide(data);
}

//to generate the movie info and title
function generateLeftSide(data){
  //for title
  const divEl = document.getElementById('filmTitle');
  let filmTitle = document.createElement('h2');
  filmTitle.setAttribute('class', 'ml-5 bg-light px-2 rounded text-center');
  filmTitle.textContent = data.title;
  divEl.appendChild(filmTitle);
  //for movie image under title
  const imgCont = document.getElementById('imgCont');
  let filmImage = document.createElement('img');
  filmImage.setAttribute('class', 'img-thumbnail');
  filmImage.setAttribute('src', data.image);
  imgCont.appendChild(filmImage);

  //for background image
  document.body.style.backgroundImage= `url(${data.movie_banner})`;
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize = 'cover';
}

//to generate the reviews and author names
async function generateRightSide(data){
  const reviewCardContainer = document.getElementById('review-section');

  for(let i=0; i<data.reviews.length; i++){

    //fetch the author
    const res = await fetch(`/api/user/${data.reviews[i].user_id}`)
    const userData = await res.json();
    
    //for the review card
    let reviewCard = document.createElement('div');
    reviewCard.setAttribute('class', 'border border-dark bg-light rounded mt-1');

    //for the title row
    let titleDiv = document.createElement('div');
    let titleEl = document.createElement('h4');
    titleDiv.setAttribute('class', 'row');
    titleEl.setAttribute('class', 'ml-5');
    titleEl.textContent = data.reviews[i].title + " by " + userData.username;

    //for the content of inside the review row
    let reviewDiv = document.createElement('div');
    let contentContainer = document.createElement('div');
    let content = document.createElement('p');
    reviewDiv.setAttribute('class', 'row');
    //contentContainer.setAttribute('class', 'border border-dark rounded')
    content.setAttribute('class', 'ml-4');
    content.textContent = data.reviews[i].content;

    /*  Appending  */
    //appending title 
    titleDiv.appendChild(titleEl);
    //appending content
    contentContainer.appendChild(content); 
    reviewDiv.appendChild(contentContainer);
    //appending to reviewCard
    reviewCard.appendChild(titleDiv); reviewCard.appendChild(reviewDiv);
    //appending everything to the reviewCardContainer
    reviewCardContainer.appendChild(reviewCard);
  }
}

//this works 
const makeReviewHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById('title-modal').value.trim();
  const content = document.getElementById('content-modal').value.trim();
  let movie_id = window.location.href.split('movie/')[1];

  if(title && content){
    const response = await fetch(`/api/movie/${movie_id}/review`, {
      method: 'POST',
      body: JSON.stringify({title, content, movie_id}),
      headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
      document.location.replace(`/movie/${movie_id}`)
    }else{
      alert(response.statusText);
    }
  }else{
    alert("No input for title or content!");
  }

}

document.getElementById('post-modal').addEventListener('click', makeReviewHandler);

getMovieData();