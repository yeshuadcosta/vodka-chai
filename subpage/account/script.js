let username = "stb19170@stbrendanscsbirr.ie";
let password = "Dcosta123!?";

function buttonClick() {
	let uName = document.getElementById("username");
	let uPass = document.getElementById("password");
	
	if (uName.value == "" || uPass.value == ""){
		if (uName.value == "")
			alert("The username field is empty...");	
		if (uPass.value == "")
			alert("The password field is empty...");
	} else {
		if (uName.value == username && uPass.value == password){
			alert("Correct Password...");
		} else {
			alert("Incorrect Password...");
		}
	}
}

