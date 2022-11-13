const loginFormHandler = async (event) => {
    event.preventDefault();

    //get values
    const username = document.getElementById('userLoginInput').value;
    const password = document.getElementById('userPasswordInput').value;
    


    if (username && password) {
        const response = await fetch('api/user/login',{
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            window.location.replace("/"); // Redirecting to other page.
          } else {
            alert("Username or password invalid!");
        }
    } else {
        alert("Username and/or password cannot be blink!");
    }
};


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


document.getElementById('logInButton').addEventListener('click',loginFormHandler)
