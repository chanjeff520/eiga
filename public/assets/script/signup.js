const signupHandler= async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-input').value.trim()
    const password = document.getElementById('password-input').value.trim()

    console.log(username, password)

    if(username && password){
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            console.log(response);
            document.location.replace("/");
        }else{
            alert(response.statusText);
        }
    }else{
        alert("No username or password inputted!!")
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);
