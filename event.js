// ///Make a list
// var ul = document.createElement("ul");
// ul.textContent = " you have clicked on ul list";
// document.body.appendChild(ul);

// var li1 = document.createElement("li");
// li1.textContent = "u have clicke dlist 1";
// var li2 = document.createElement("li");
// li2.textContent = "u ahve clicked on list2";
// ul.appendChild(li1);
// document.body.appendChild(li2);

// function hide(e) {
// 	// e.target refers to the clicked <li> element
// 	// This is different than e.currentTarget which would refer to the parent <ul> in this context
// 	e.target.style.visibility = "hidden";
// 	e.target.style.visibility = "hidden";
// }

// Attach the listener to the list
// It will fire when each <li> is clicked
// li2.addEventListener("click", hide);
alert("dgdhd")
var divs = document.getElementById("count1")

function hide(event){
  event.target.style.color = "red"
    

    // When this function is used as an event handler: this === e.currentTarget
  }
  divs.addEventListener("click",hide)
var h2 = document.querySelector("h2")
h2.addEventListener("click",stop)

  function stop(event){
    event.stopImmediatePropagation()
    event.target.style.color = "blue"
    
  }
   

//   var ps = document.getElementsByTagName('p');

//   for(var i = 0; i < ps.length; i++){
//     // Console: print the clicked <p> element
//     ps[i].addEventListener('click', hide, false);
//   }
//   // Console: print <body>
// //   document.body.addEventListener('click', hide, false);

// var maindiv1 = document.getElementById("count1");
// var maindiv2 = document.getElementById("count2");
// var ul = document.getElementsByTagName("ul");

// function checkevent(e) {
// 	e.target.style.border = "1px solid black";
// }
// maindiv1.addEventListener("click", checkevent);
