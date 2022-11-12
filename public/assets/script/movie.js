
var movieData;


//get movie id number into string literal


async function getMovieData(){
  const res = await fetch(`/api/movie/${window.location.href.split('movie/')[1]}`)
  const data = await res.json()
  console.log(data);
  generateLeftSide(data);
}

getMovieData();

async function getReviewData(){
  const res = await fetch(`/api/user/${movieData.review[0].user_id}`)
  const data = await res.json()
  console.log(data)
}

getReviewData();

function generateLeftSide(data){
  //for title
  const divEl = document.getElementById('filmTitle');
  let filmTitle = document.createElement('h2');
  filmTitle.setAttribute('class', 'ml-5');
  filmTitle.textContent = data.title;
  console.log(data.title)
  divEl.appendChild(filmTitle);
  //for movie image under title
  const imgCont = document.getElementById('imgCont');
  let filmImage = document.createElement('img');
  filmImage.setAttribute('class', 'img-thumbnail')
  filmImage.setAttribute('src', data.image);
  imgCont.appendChild(filmImage);
}

generateLeftSide();