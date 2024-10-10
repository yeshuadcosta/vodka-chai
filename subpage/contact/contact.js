let validation = true;

function getMessage() {
    let namef = document.getElementById("firstname");
    let namel = document.getElementById("lastname");
    let email = document.getElementById("@email");
    let phone = document.getElementById("@phone");
    let message = document.getElementById("message");

    if (namef.value == "" || namel.value == "" || email.value == "" || phone.value == 0 || message.value == "") {
        alert("Empty Fields detected, ensure that all the fields are filled in correctly!");
        validation = false;
    } else {
        localStorage.setItem("namef", namef.value);
        localStorage.setItem("namel", namel.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("message", message.value);

        window.location.href = "message.html";
    }
}
