//Function to create options
var displayer = document.getElementById("displayentry");
var bodyElem = document.getElementById("gridbox");
var arr = [];
var obj = {};
var divs;
var y;
var x;
var adddentry = document.getElementById("addentry");
var remove_entry = document.getElementById("deleteentries");
var j = 1;
var selector = document.getElementById("selector");
for (i = 1; i <= 100; i++) {
	var choose_option = document.createElement("option");
	choose_option.value = i;
	choose_option.innerHTML = i;
	selector.appendChild(choose_option);
}

//Funtion to store data()
function store_data() {
	var takeinput = document.getElementById("takeinput").value;
	obj[j] = takeinput;
	j++;
}
adddentry.addEventListener("click", store_data);

//Function to display data
function display_data() {
	bodyElem.innerHTML = "";
	for (i = 0; i < Object.keys(obj).length; i++) {
		divs = document.createElement("divs");
		divs.setAttribute("class", "class1");
		bodyElem.appendChild(divs);
		divs.innerHTML = Object.keys(obj)[i] + "." + " " + Object.values(obj)[i];
	}
}
displayer.addEventListener("click", display_data);

//Function to store the particular selector value
function store_values() {
	x = this.value;
	return x;
}
selector.addEventListener("click", store_values);

function delete_allentry(a) {
	console.log();
	y = document.querySelectorAll("divs");
	//console.log(y);
	if (a <= y.length) {
		y[a - 1].remove();
	}
}
remove_entry.addEventListener("click", delete_allentry);

//Function to delete a particular div
