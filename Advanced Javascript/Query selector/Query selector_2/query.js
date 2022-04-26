let content = document.querySelector("#content");

console.log(content.innerHTML);
console.log(content.innerText);
console.log(content.TextContent);

// Omitting the chhild nodes text content
// requires different approach

console.log(content.childNodes[0].nodeValue);

let items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "<p style= 'background-color: cyan '>Default item text</p>";

}
