let form = document.querySelector("form");

form.addEventListener("submit", sendData);

/**
 * 
 * @param {Event} event 
 */

function sendData(event) {
    //Estää sivun päivittämisen
    event.preventDefault();

    // let inputField = document.getElementById("fname");

    // console.log(inputField.value);

    let formData = new FormData(event.currentTarget);

    console.log(formData.get("fname"));
    console.log(formData.get("lname"));
    console.log(formData.get("age"));
}