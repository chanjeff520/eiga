const loginFormHandler = async (event) => {
    event.preventDefault();

    //get values
    const userName = document.getElementById('userLoginInput').value;
    const password = document.getElementById('userPasswordInput').value;

    if (userName && password) {
        const response = await fetch('api/user/login',{
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
          } else {
            alert(response.statusText);
        }
    } 
};

document.querySelector('.login-form').addEventListener('submit',loginFormHandler)