// a) tehtävä
let IdElement = document.querySelector("content");
elem = document.querySelector("#content");
console.log(elem.tagName)

// b) tehtävä
elem = document.querySelector(".basic");
console.log(elem.tagName)

// c) tehtävä
let liElems = document.querySelectorAll("li");
// liElems = document.getElementsByTagName("li");

for(elem of liElems) {
console.log(elem.textContent)
}

// d) tehtävä
let bodyDesc = document.querySelectorAll("body *");
for(elem of bodyDesc) {
console.log(elem.nodeName);
}

// e) tehtävä
let articleDesc = document.querySelectorAll("article p");
for(elem of articleDesc) {
console.log(elem.textContent)
}

// f) tehtävä
for(elem of liElems) {
elem.textContent = "John Doe"
}
