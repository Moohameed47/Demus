let users = JSON.parse(localStorage.getItem('users')) || []

function Register() {
    let fname = document.getElementById('InputFName1').value,
        lname = document.getElementById('InputLName1').value,
        email = document.getElementById('InputEmail1').value,
        password = document.getElementById('InputPassword1').value;
    if (fname && lname && email && password) {
        let obj = {
            "email": email,
            "password": password,
        }
        if (exist(obj)) {
            alert('Already Exist')
        } else {
            alert('Register Successfully')
            users.push({email, password})
            localStorage.setItem('users', JSON.stringify(users));
            window.location.replace("http://localhost:63342/Demus/index.html");
        }
    } else {
        alert("Please Enter The Data")
    }
}

function exist(obj) {
    console.log(users)
    for (let i = 0; i < users.length; i++)
        if (users[i].email === obj.email && users[i].password === obj.password) {
            return true
        }
    return false
}