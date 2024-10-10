function getMessage() {
    let namef = document.getElementById("firstname");
    let namel = document.getElementById("lastname");
    let email = document.getElementById("@email");
    let phone = document.getElementById("@phone");
    let message = document.getElementById("message");

    localStorage.setItem("namef", namef.value);
    localStorage.setItem("namel", namel.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("message", message.value);
    
    window.location.href = "message.html";
}
