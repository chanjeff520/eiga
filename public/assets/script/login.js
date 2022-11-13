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
            window.location = "profile.html"; // Redirecting to other page.
            console.log(response);
          } else {
            alert(response.statusText);
        }
    } 
};

document.querySelector('.login-form').addEventListener('submit',loginFormHandler)