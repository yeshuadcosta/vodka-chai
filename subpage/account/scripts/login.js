// Retrieving the username and password from localStorage
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

// This variable is created for the sake of user validation
let valid = true;

function buttonClicked() {
    let uName = document.getElementById("username");
    let uPass = document.getElementById("password");

    // This section is the login indicator
    let indicate = document.getElementById("indicate");
    indicate.style.display = "block";
    indicate.innerHTML = "";

    // This section examines whether the fields are empty or not!
    if (uName.value == "") {
        uName.style.border = "3px dashed red";
        indicate.innerHTML += "The username field is empty!<br />";
        indicate.style.backgroundColor = "red";
        valid = false;
    } else {
        uName.style.border = "2px dotted grey";
    }
    if (uPass.value == "") {
        uPass.style.border = "3px dashed red";
        indicate.innerHTML += "The password field is empty!<br />";
        indicate.style.backgroundColor = "red";
        valid = false;
    } else {
        uPass.style.border = "2px dotted grey";
    }
    
    // It there is no account created
    if (username == null || password == null){
        uName.style.border = "3px dashed red";
        uPass.style.border = "3px dashed red";
        indicate.innerHTML += "Sign up for an account!<br />";
        indicate.style.backgroundColor = "red";
        valid = false;        
    }

    // Password check only if the fields are filled in
    if (valid == true) {
        if (uName.value == username && uPass.value == password) {
            indicate.style.backgroundColor = "green";
            indicate.innerHTML += "Correct Password!";
        } else {
            indicate.style.backgroundColor = "red";
            indicate.innerHTML += "Incorrect Password!";
        }
    }
}
