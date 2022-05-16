// Selektorin kutsuminen
let firstli = document.querySelector("li");

// Hakee kaikki lista itemit
let aLLli = document.querySelectorAll("li");

// Toistorakenteen käyminen läpi
let i = 1;
for (elem of aLLli) {
    elem.textContent = i++;
    // console.log(elem.textContent)
}

/*for (let i = 0; i < aLLli.length; i++) {
    /**@type{Element} */
    //const element = aLLli[i];
    //console.log(element.textContent)
    
//}

// let x = document.querySelectorAll("#days>li")

// let x = document.querySelector("#days li.special")

// Tekstielementtiä voidaan muokata
// firstli.textContent = "<h1>Tuomas Mikael Romppanen</h1>"

// Testaamiseen
//firstli.innerHTML = "<h1>Tuomas<h1>"

// Palauttaa tagname
// console.log(firstli.tagName);

// Palauttaa tagin sisällä olevan elementin
// console.log(firstli.textContent);

// Elementtien hakeminen

// let content = document.getElementById("content");
// let listOfTags = document.getElementsByClassName("special");



