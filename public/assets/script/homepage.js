
//dynically generate
//get api
//

function generateMovieCards() {
    
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