//let div = document.querySelector("div");

console.log(div.getAttribute("id"));

let div =  document.querySelector("div");
console.log(div.getAttribute("class"));

div.setAttribute("class","box1");
console.log(div.getAttribute("class"))

let p = document.querySelector("p");
p.style.color= "blue";
p.style.backgroundColor ="pink";
p.style.fontSize =" 20px";


let btn = document.createElement("button");
btn.innerText= "Click me";
console.log(btn);
 
let div1 = document.querySelector("div");
div.after(btn); 


//Four types of the ap
node.append(element); //used to add the elemnt at the end of the node (inside);
node.prepend(element); //used to add the elemnt at the end of the node (inside)
node.before(element); //used to add the elemnt at the end of the node (outside)
node.after(element);  //used to add the elemnt at the end of the node (outside)

//node.remove();
// document.querySelector("P").remove();