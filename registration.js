var displayname = document.getElementById("view_name").children[1];
var displayemail = document.getElementById("view_email").children[1];
var displaymobile = document.getElementById("view_mobile").children[1];
var registerbox = document.getElementById("register_box");

//Function to check valid name and print not valid if not valid
function checkname() {
	var namedetails = document.getElementsByClassName("name_details")[0];
	var viewname = document.getElementById("view_name").children[1];

	if (
		namedetails.value.toString().length < 3 ||
		namedetails.value.toString().length > 10
	) {
		namedetails.nextElementSibling.innerHTML = "Enter a valid name";
		namedetails.nextElementSibling.style.color = "red";
	} else {
		viewname.innerHTML = namedetails.value;
		viewname.style.marginLeft = "0px";
		namedetails.innerHTML = "";
	}
}
registerbox.addEventListener("click", checkname);

//Function to check valid eamil and print not valid if not valid
function checkemail() {
	var emaildetails = document.getElementsByClassName("email_details")[0];
	var viewemail = document.getElementById("view_email").children[1];
	console.log(emaildetails.value);
	viewemail.innerHTML = emaildetails.value;
	viewemail.style.marginLeft = "0px";
}
registerbox.addEventListener("click", checkemail);

//Fucntion to check valid mobile number and print not valid if not valid
function checkmobile() {
	var mobiledetails = document.getElementsByClassName("number_details")[0];
	var viewmobile = document.getElementById("view_mobile").children[1];
	console.log(mobiledetails.value);
	if (
		mobiledetails.value.toString().length < 10 ||
		mobiledetails.value.toString().length > 10
	) {
		mobiledetails.nextElementSibling.innerHTML = "Enter a valid mobile number";
		mobiledetails.nextElementSibling.style.color = "red";
	} else {
		viewmobile.innerHTML = mobiledetails.value;
		viewmobile.style.marginLeft = "0px";
	}
}
registerbox.addEventListener("click", checkmobile);
