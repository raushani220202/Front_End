// // get and set attribute
// let div =document.querySelector("div");
// console.log(div);
// //get
// let id = div.getAttribute("id");
// console.log(id);
// //set
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","new"))

//
// let div =document.querySelector("div");
// console.log(div);

// div.style.backgroundColor ="green";


// div.style.fontSize = "20px";

// div.innerText ="Hello";

//insertelement
// syntax document.createElement("")

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p")
para.remove();
