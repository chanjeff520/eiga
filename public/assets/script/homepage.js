
//dynically generate
//get api
//

function generateMovieCards(data) {
    //main Container
    var mainContainer = document.getElementById("card-container")

    //containers that need to be generated
    var cardEl = document.createElement('div');
    var cardImg = document.createElement('img');
    var cardBody= document.createElement('div');
    var cardTitle= document.createElement('h5');
    var cardLink = document.createAttribute('a');

    //cardEl attributes
    cardEl.setAttribute("class", "card m-2");
    cardEl.setAttribute("style", "width: 18rem");
    //cardImg attributes
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", data[0].image);
    cardImg.setAttribute("alt", "Movie Poster");
    //cardBody attributes
    cardBody.setAttribute("class", "card-body");
    //cardTitle attriubtes
    cardTitle.setAttribute("class", "card-title d-flex justify-content-center");
    cardLink.setAttribute("href", `/movie/${1}`)

    cardEl.appendChild()

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