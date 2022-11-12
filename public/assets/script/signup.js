


async function signupHandler(event){
    event.preventDefault();

    const username = document.getElementById('userSignupInput')
    const password = document.getElementById('passwordSignupInput')

    if(username && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.okay) {
            //document.location.replace()
        }else{
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('sumbit', signupHandler);