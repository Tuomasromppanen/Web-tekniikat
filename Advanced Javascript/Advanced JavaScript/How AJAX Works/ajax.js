// Creating an XMLHttpRequiest object

let xmlhttp = new XMLHttpRequest(); 
xmlhttp.open("GET", "file:///C:/Users/tuoma/OneDrive/Desktop/Github/Advanced%20Javascript/How%20AJAX%20Works/index.html", true); //Url?
xmlhttp.send(); //console.log(xmlhttp)


// Creating an XMLHttp response
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById("myDIV").innerHTML= xmlhttp.responseText
    }
}