let users = JSON.parse(localStorage.getItem('users')) || []

function Register() {
    let fName = document.getElementById('InputFName1').value,
        lName = document.getElementById('InputLName1').value,
        email = document.getElementById('InputEmail1').value,
        password = document.getElementById('InputPassword1').value;
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
        alert('Register Successfully')
        window.location.replace("http://localhost:63342/Demus/index.html");
    } else {
        users.push({email, password})
        localStorage.setItem('users', JSON.stringify(users));
    }
}
