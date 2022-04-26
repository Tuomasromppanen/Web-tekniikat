// Funktion luominen javascriptillä

    /*let button = document.getElementById("ok");

    button.addEventListener("click", doSome);

    function doSome(){
    console.log("painettu nappia")
    }*/

// Elementin muttaminen klikkauksen yhteydessä

    /*let button = document.getElementById("ok");

    button.addEventListener("mouseover", doSome);
    button.addEventListener("mouseleave", doSome);
    // button.addEventListener("mouseup", doSome);


    function doSome(){
        button.classList.toggle("strong");
        }*/


// Event target

    let button = document.getElementById("header");

    button.addEventListener("click", doSome);
    // button.addEventListener("mouseleave", doSome);
    // button.addEventListener("mouseup", doSome);
    
    /**
    * 
    * @param {Event} event 
    */
    
    function doSome(event){
    // event.target.classList.add("strong")
    // event.currentTarget.classList.add("strong")
    }