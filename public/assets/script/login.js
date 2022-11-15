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


document.getElementById('logInButton').addEventListener('click',loginFormHandler)
document.getElementById('create-user-btn').addEventListener('click', () => {
    window.location.replace('/signup');
});