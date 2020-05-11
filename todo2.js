var btn = document.getElementById("btn");
var z = 0;
var i = 1;
function add_items() {
	var bdy = document.querySelector("body");
	var take_input = document.getElementById("add_items");

	var divs = document.createElement("div");
	divs.style.margin = "10px";
	var creat_divs = document.createElement("div");
	creat_divs.textContent = take_input.value;

	var create_btn = document.createElement("button");
	create_btn.addEventListener("click", remove_items);
	create_btn.textContent = "delete" + i;
	create_btn.style.margin = "10px";

	bdy.append(divs);
	divs.append(creat_divs, create_btn);

	var edit_input = document.createElement("input");
	edit_input.setAttribute("placeholder", "Edit items");
	edit_input.setAttribute("class", "class1");
	edit_input.style.marginLeft = "10px";

	var edit_btn = document.createElement("button");
	edit_btn.addEventListener("click", edit_items);
	edit_btn.textContent = "edit";
	edit_btn.setAttribute("class", "class2");
	divs.append(edit_btn, edit_input);

	i++;
}
btn.addEventListener("click", add_items);

function remove_items() {
	event.currentTarget.parentNode.remove();
}
function edit_items() {
	// var take_edit_input = document.getElementsByClassName("class1");
	var take_edit_input = event.target.nextSibling.value;
	//console.log(take_edit_input);
	event.target.parentElement.children[0].textContent = take_edit_input;
}
