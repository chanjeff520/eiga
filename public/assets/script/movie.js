const { create } = require("../../../models/User");

var movieData;


//get movie id number into string literal


async function getMovieData(){
  const res = await fetch(`/api/movie/${window.location.href.split('movie/')[1]}/review`)
  const data = await res.json()
  console.log(data);
  generateLeftSide(data);
  generateRightSide(data);
}

getMovieData();

/*
async function getReviewData(){
  const res = await fetch(`/api/user/${movieData.review[0].user_id}`)
  const data = await res.json()
  console.log(data)
}

getReviewData();
*/

function generateLeftSide(data){
  //for title
  const divEl = document.getElementById('filmTitle');
  let filmTitle = document.createElement('h2');
  filmTitle.setAttribute('class', 'ml-5');
  filmTitle.textContent = data.title;
  console.log(data.title);
  divEl.appendChild(filmTitle);
  //for movie image under title
  const imgCont = document.getElementById('imgCont');
  let filmImage = document.createElement('img');
  filmImage.setAttribute('class', 'img-thumbnail');
  filmImage.setAttribute('src', data.image);
  imgCont.appendChild(filmImage);
}

function generateRightSide(data){
  const reviewCardContainer = document.getElementById('review-section');

  for(let i=0; i<data.review.length; i++){
    //for the review card
    let reviewCard = document.createElement('div');
    reviewCard.setAttribute('class', 'border border-dark rounded');

    //for the title row
    let titleDiv = document.createElement('div');
    let titleEl = document.createElement('h3');
    titleDiv.setAttribute('class', 'row');
    titleEl = document.setAttribute('class', 'ml-5');
    titleEl.textContent = data.review[i].title;

    //for the content of inside the review row
    let reviewDiv = document.createElement('div');
    let contentContainer = document.createElement('div');
    let content = document.createElement('p');
    reviewDiv.setAttribute('class', 'row');
    //contentContainer.setAttribute('class', 'border border-dark rounded')
    content.setAttribute('class', 'ml-4');
    content.textContent = data.review[i].content;

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

generateLeftSide();