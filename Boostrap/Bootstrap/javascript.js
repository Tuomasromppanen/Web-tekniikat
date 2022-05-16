  
// Ensmmäisen sivun painikkeen manipulointi

    var element = document.getElementById("new");


    if (element) {

    var tag = document.createElement("button");
    var text = document.createTextNode("Tervetuloa sivustolle");
    tag.appendChild(text);
    element.appendChild(tag);

    var button = document.getElementsByTagName("button");
    button[1].classList.add("button");
    button[1].setAttribute("id", "go");

    document.getElementById("go").onclick = function () {location.href = "./sivut/tervetuloa.html"}

}

// Elementtien hakeminen ja manipulointi
        

    var galleryImages = document.querySelectorAll(".gallery-img");
    var getLatestOpenedImg;
    var windowWidth = window.innerWidth;

    if(galleryImages) {
        galleryImages.forEach(function(image, index){
            image.onclick = function() {
              var getElemntCss = window.getComputedStyle(image);
              var getFullImgUrl = getElemntCss.getPropertyValue("background-image");
              var getImgUrlPos = getFullImgUrl.split("/logo/");  
              var setNewImgUrl = getImgUrlPos[1].replace('")', '',);
              getLatestOpenedImg = index + 1;

              var container = document.body;
              var newImgWindow = document.createElement("div");
              container.appendChild(newImgWindow);
              newImgWindow.setAttribute("class", "img-window");
              newImgWindow.setAttribute("onclick", "closeImg()");

              var newImg = document.createElement("img");
              newImgWindow.appendChild(newImg);
              newImg.setAttribute("src", "../logo/" + setNewImgUrl);

            }
        });
    }


    function closeImg() {
        document.querySelector(".img-window").remove();
    }
    


// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä ja eventtien käyttö

    var elem = document.getElementsByTagName("span");

    if(elem[1]) {

    elem[1].classList.add("show");
    elem[2].classList.add("show_1"); 
    elem[3].classList.add("show_2"); 
    elem[4].classList.add("show_3"); 
    elem[5].classList.add("show_4"); 
    
    var span = document.querySelector(".boat");
    var visibility = document.querySelector(".show");

    span.addEventListener("mouseover", doSome);
    visibility.addEventListener("mouseover", doSome);

    span.addEventListener("mouseleave", doNext);
    visibility.addEventListener("mouseleave", doSome);

    function doSome() {
        span.classList.add("mrwhite");
        visibility.classList.add("visibility");
    }

    function doNext() {
        span.classList.remove("mrwhite");
        visibility.classList.remove("visibility");
    }


// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä ja eventtien käyttö

    var span_1 =  document.querySelector(".mountain");
    var visibility_1 = document.querySelector(".show_1");

    span_1.addEventListener("mouseover", doSome_1);
    visibility_1.addEventListener("mouseover", doSome);

    span_1.addEventListener("mouseleave", doNext_1);
    visibility_1.addEventListener("mouseleave", doNext_1);

    function doSome_1() {
        span_1.classList.add("mrwhite");
        visibility_1.classList.add("visibility");
    }

    function doNext_1() {
        span_1.classList.remove("mrwhite");
        visibility_1.classList.remove("visibility");
    }

// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä ja eventtien käyttö

    var span_2 =  document.querySelector(".lake");
    var visibility_2 = document.querySelector(".show_2");

    span_2.addEventListener("mouseover", doSome_2);
    visibility_2.addEventListener("mouseover", doSome_2);

    span_2.addEventListener("mouseleave", doNext_2);
    visibility_2.addEventListener("mouseleave", doNext_2);

    function doSome_2() {
        span_2.classList.add("mrwhite");
        visibility_2.classList.add("visibility");
    }

    function doNext_2() {
        span_2.classList.remove("mrwhite");
        visibility_2.classList.remove("visibility");
    }

// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä eventtien käyttö

    var span_3 =  document.querySelector(".snow");
    var visibility_3 = document.querySelector(".show_3");

    span_3.addEventListener("mouseover", doSome_3);
    visibility_3.addEventListener("mouseover", doSome_3);

    span_3.addEventListener("mouseleave", doNext_3);
    visibility_3.addEventListener("mouseleave", doNext_3);

    function doSome_3() {
        span_3.classList.add("mrwhite");
        visibility_3.classList.add("visibility");
    }

    function doNext_3() {
        span_3.classList.remove("mrwhite");
        visibility_3.classList.remove("visibility");
    }

// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä eventtien käyttö

    var span_4 =  document.querySelector(".sunset");
    var visibility_4 = document.querySelector(".show_4");

    span_4.addEventListener("mouseover", doSome_4);
    visibility_4.addEventListener("mouseover", doSome_4);

    span_4.addEventListener("mouseleave", doNext_4);
    visibility_4.addEventListener("mouseleave", doNext_4);

    function doSome_4() {
        span_4.classList.add("mrwhite");
        visibility_4.classList.add("visibility");
    }

    function doNext_4() {
        span_4.classList.remove("mrwhite");
        visibility_4.classList.remove("visibility");
    }
    
}
    
// Elementtien lisäämistä html:n runkoonm, css tyyli määrittelyä ja eventtien käyttö

    var green_button = document.querySelectorAll("#hello");

    if (green_button) {

    green_button.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".popup").style.display = "flex";
        })
    })
}
    var circle =  document.querySelector(".bi-x-lg");

    if (circle) {
    circle.addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    })}

// Rest Apin käyttö

    var imageRandom = document.getElementById("image");

    if (imageRandom) {

    function getRandomImage() {
        var radnomImage = "https://dog.ceo/api/breeds/image/random"

        fetch(radnomImage)
        .then(function(response) {
            return response.json()
        })

        .then(function(json){
            var imageUrl = json.message;
            imageRandom.src = imageUrl;
        })

        .catch(function(error){
            console.log(error)
        })

    }

    getRandomImage();

    }




