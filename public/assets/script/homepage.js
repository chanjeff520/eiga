
//dynically generate
//get api
//

function generateMovieCards(data) {
    //main Container
    const cardContainer = document.getElementById("card-container");

    for(let i=0; i< data.length; i++){
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
    cardImg.setAttribute("src", data[i].image);
    cardImg.setAttribute("alt", "Movie Poster");
    //cardBody attributes
    cardBody.setAttribute("class", "card-body");
    //cardTitle attriubtes
    cardTitle.setAttribute("class", "card-title d-flex justify-content-center");
    //cardLink Attributes
    cardLink.textContent = data[i].title;
    cardLink.setAttribute("href", `/movie/${i+1}`);
    cardLink.setAttribute("class", "text-center");

    //appending childs to approiate places
    cardTitle.appendChild(cardLink);
    cardBody.appendChild(cardTitle);
    //appending to the card
    cardEl.appendChild(cardImg); cardEl.appendChild(cardBody);
    //appending to cardContainer
    cardContainer.appendChild(cardEl);

    }

}

//basic of fetch requires
fetch('/api/movie')
  .then((response) => response.json())
  .then((data) => generateMovieCards(data));



console.log("MEOWWW")







// Automatic Slideshow - change image every 20 second

// let ghibliArray = ["/assets/background-images/Ghibli_Cagliostro_House_Background.png", "/assets/background-images/Ghibli_Farmland_Background.jpg", "/assets/background-images/Ghibli_Forest_Background.jpg", "/assets/background-images/Ghibli_God_Ray_Forest_Background.png", "/assets/background-images/Ghibli_Howl_Castle_Alps_Background.jpg", "/assets/background-images/Ghibli_Island_Background.jpg", "/assets/background-images/Ghibli_Night_City_Background.jpg", "/assets/background-images/Ghibli_Spirit_Away_Train_Background.png"]

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