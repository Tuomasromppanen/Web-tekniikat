// Harj 1
    let h1 = document.querySelector("h1");
    h1.classList.add("color");
    h1.style.width = "80%";

// Harj 2
    let p = document.querySelector("p")
    p.addEventListener("mouseenter".changeColor)
    p.addEventListener("mouseleave".changeColor)

    function changeColor() {
        p.classList.toggle("textcolor");
    }

    function changeBg() {
        p.classList.toggle("textbg");
    }

// Harj 3
    let sotu = document.getElementById("sotu");
    sotu.addEventListener("input", checkValidity);
    function checkValidity() {
        let text = sotu.ariaValueMax;

        if(text.length == 11) {
            sotu.classList.remove("invalid")
        } else {
            sotu.classList.add("invalid")
        }
    }