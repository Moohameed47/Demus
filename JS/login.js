let users = JSON.parse(localStorage.getItem('users')) || []

function Login() {
    let email = document.getElementById('InputEmail1').value,
        password = document.getElementById('InputPassword1').value;
    if (email && password) {
        let obj = {
            "email": email,
            "password": password,
        }
        if (exist(obj)) {
            alert('Login Successfully')
            window.location.replace("http://localhost:63342/Demus/index.html");
        } else
            alert('Invalid Email Or Password')
    } else
        alert("Please Enter The Data")
}

function exist(obj) {
    console.log(users)
    for (let i = 0; i < users.length; i++)
        if (users[i].email === obj.email && users[i].password === obj.password) {
            return true
        }
    return false
}