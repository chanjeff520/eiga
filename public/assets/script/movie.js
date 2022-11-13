//const { create } = require("../../../models/User");

//var movieData;
//get movie id number into string literal


async function getMovieData(){
  const res = await fetch(`/api/movie/${window.location.href.split('movie/')[1]}/review`)
  const data = await res.json()
  console.log(data);
  generateLeftSide(data);
  generateRightSide(data);
}

//fetch the user author
/*
async function getReviewData(data, count){
  const res = await fetch(`/api/user/${data.review[count].user_id}`)
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

async function generateRightSide(data){
  const reviewCardContainer = document.getElementById('review-section');

  for(let i=0; i<data.reviews.length; i++){

    //fetch the author
    const res = await fetch(`/api/user/${data.reviews[i].user_id}`)
    const userData = await res.json();
    console.log(userData);
    
    //for the review card
    let reviewCard = document.createElement('div');
    reviewCard.setAttribute('class', 'border border-dark rounded mt-1');

    //for the title row
    let titleDiv = document.createElement('div');
    let titleEl = document.createElement('h4');
    titleDiv.setAttribute('class', 'row');
    titleEl.setAttribute('class', 'ml-5');
    titleEl.textContent = data.reviews[i].title + " By " + userData.username;

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

const makeReviewHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById('title-modal').value.trim();
  const content = document.getElementById('content-modal').value.trim();




}

getMovieData();