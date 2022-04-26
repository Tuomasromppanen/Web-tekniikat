// querySelector method returns the first descendant element of the node with the matching selector

// First p-element in the document

let pElement = document.querySelector("p");

// First element with the id “content” in the document

let idElement = document.querySelector("#content")

// First element with the class “important in the document

let importantElement = document.querySelector(".important")

// First list item element inside the idElement, 

let listElement = idElement.querySelector("li")



// QuerySelectorAll Returns all descendant elements of the node with the matching selector as NodeList

// Getting all list items inside the document

let elements = document.querySelectorAll("li");

// Getting the first (index 0) of the list items in NodeList

let firstElem = elements[0]

// Looping through the nodes and printing each element tag name.


// Visual code is sometimes unable to see the type of variable. This may be a problem e.g. in looping when calling the node methods.
// Here VS won’t recognize the type of element and thus not showing all the properties., 

/** @type{Element} */

// Defining the variable and type Element for it explicitly. 

let element
for (element of elements) {
    console.log(element.tagName);
}