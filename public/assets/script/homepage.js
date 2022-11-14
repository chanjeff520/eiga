//dynically generate
//get api
//

function generateMovieCards(data) {
  //main Container
  const cardContainer = document.getElementById("card-container");

  for (let i = 0; i < data.length; i++) {
    //containers that need to be generated
    let cardEl = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardImgLink = document.createElement('a');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardLink = document.createElement('a');

    //cardEl attributes
    //<div>
    cardEl.setAttribute("class", "card m-2");
    cardEl.setAttribute("style", "width: 16rem");

    cardImgLink.setAttribute("href", `/movie/${i+1}`);

    //cardImg attributes
    //<img>
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", data[i].image);
    cardImg.setAttribute("alt", "Movie Poster");

    //cardBody attributes
    //<div>
    cardBody.setAttribute("class", "card-body");

    //cardTitle attriubtes
    //<h5>
    cardTitle.setAttribute("class", "card-title d-flex justify-content-center");

    //cardLink Attributes
    //<a>
    cardLink.textContent = data[i].title;
    cardLink.setAttribute("href", `/movie/${i+1}`);
    cardLink.setAttribute("class", "text-center");

    //appending childs to approiate places
    //<h5> child <a>
    //<div> child <h5>
    cardTitle.appendChild(cardLink);
    cardBody.appendChild(cardTitle);

    cardImgLink.appendChild(cardImg);

    //appending to the card
    cardEl.appendChild(cardImgLink);
    cardEl.appendChild(cardBody);

    //appending to cardContainer
    cardContainer.appendChild(cardEl);

  }

}

//basic of fetch requires
fetch('/api/movie')
  .then((response) => response.json())
  .then((data) => generateMovieCards(data));




// Automatic Slideshow - change image every 20 second

let ghibliArray = ["/assets/background-images/Ghibli_Cagliostro_House_Background.png", "/assets/background-images/Ghibli_Farmland_Background.jpg", "/assets/background-images/Ghibli_Forest_Background.jpg", "/assets/background-images/Ghibli_God_Ray_Forest_Background.png", "/assets/background-images/Ghibli_Howl_Castle_Alps_Background.jpg", "/assets/background-images/Ghibli_Island_Background.jpg", "/assets/background-images/Ghibli_Night_City_Background.jpg", "/assets/background-images/Ghibli_Spirit_Away_Train_Background.png"]

let body = document.querySelector("body")

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
  body.setAttribute("style", `background-image: url(${ghibliArray[myIndex-1]})`)
  // console.log("22") 
  setTimeout(carousel, 3000);    
}

console.log(document.cookie.username)
console.log(document.session.username)