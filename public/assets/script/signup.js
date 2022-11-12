const signupHandler= async (event) => {
    //event.stopImmediatePropagation();
    event.preventDefault();
    event.stopPropagation()
    console.log("crap")

    const username = document.getElementById('username-input').value.trim()
    const password = document.getElementById('password-input').value.trim()

    console.log(username, password)

    if(username && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            //document.location.replace();
            //document.location.replace('/profile');
            console.log(response);
        }else{
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('sumbit', signupHandler);
