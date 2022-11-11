
//dynically generate
//get api
//

function generateMovieCards(data) {
    //main Container
    const cardContainer = document.getElementById("card-container");

    //containers that need to be generated
    let cardEl = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardBody= document.createElement('div');
    let cardTitle= document.createElement('h5');
    let cardLink = document.createElement('a');

    //cardEl attributes
    cardEl.setAttribute("class", "card m-2");
    cardEl.setAttribute("style", "width: 16rem");
    //cardImg attributes
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", data[0].image);
    cardImg.setAttribute("alt", "Movie Poster");
    //cardBody attributes
    cardBody.setAttribute("class", "card-body");
    //cardTitle attriubtes
    cardTitle.setAttribute("class", "card-title d-flex justify-content-center");
    //cardLink Attributes
    cardLink.textContent = data[0].title;
    cardLink.setAttribute("href", `/movie/${1}`);

    //appending childs to approiate places
    cardTitle.appendChild(cardLink);
    cardBody.appendChild(cardTitle);
    //appending to the card
    cardEl.appendChild(cardImg); cardEl.appendChild(cardBody);
    //appending to cardContainer
    cardContainer.appendChild(cardEl);

}

//basic of fetch requires
fetch('/api/movie')
  .then((response) => response.json())
  .then((data) => generateMovieCards(data));



console.log("MEOWWW")







// Automatic Slideshow - change image every 20 second
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("ghibliBackGround");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
  console.log("22") 
  setTimeout(carousel, 3000);    
}