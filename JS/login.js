let users = JSON.parse(localStorage.getItem('users')) || []

function Login() {
    let email = document.getElementById('InputEmail1').value
    let password = document.getElementById('InputPassword1').value
    let obj = {
        "email": email,
        "password": password,
    }
    if ((obj) => {
        for (let i = 0; i < users.length; i++)
            if (users[i].email === email && users[i].password === password)
                return true
        return false
    }) {
        alert('Login Successfully')
        window.location.replace("http://localhost:63342/Demus/index.html");
    } else alert('Invalid Email Or Password')
}
