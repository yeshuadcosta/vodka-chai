let uName;
let uPass1;
let uPass2;

// This variable is created for the sake of user validation
let valid = true;

function buttonClicked() {
    uName = document.getElementById("username");
    uPass1 = document.getElementById("password1");
    uPass2 = document.getElementById("password2");

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
    if (uPass1.value == "") {
        uPass1.style.border = "3px dashed red";
        indicate.innerHTML += "The password field is empty!<br />";
        indicate.style.backgroundColor = "red";
        valid = false;
    } else {
        uPass1.style.border = "2px dotted grey";
    }
    if (uPass2.value == "") {
        uPass2.style.border = "3px dashed red";
        indicate.innerHTML += "The password field is empty!<br />";
        indicate.style.backgroundColor = "red";
        valid = false;
    } else {
        uPass2.style.border = "2px dotted grey";
    }

    if (valid == true) {
        // And this part checks whether the two password fields match!
        if (uPass1.value == uPass2.value && uPass1.value != "" && uPass2.value != "") {
            indicate.style.backgroundColor = "green";
            indicate.innerHTML = "Sign Up Successful!";

            // Storing the username and password in localStorage
            localStorage.setItem("username", uName.value);
            localStorage.setItem("password", uPass1.value);
        } else {
            indicate.style.backgroundColor = "red";
            indicate.innerHTML += "The Passwords don't match!";
        }
    }
}
