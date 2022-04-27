// Anonyymi funktiot

    /*function doSomething(x) {
        console.log("Basic function with parameter" + x);
    }

    var myAnoFunc = function(x) {
        console.log("Anonymous function with parameter" +x);
    }

    doSomething("Hello!");
    myAnoFunc("Hello!");*/

// Lamba lauseke

    /*var myLamdaFunc = (x) => {
        console.log("Lambda function with parameter" + x);
    }

    myLamdaFunc("Hello!");*/

 
// Lamda, jolla on palautusarvo

    /*var func = (x) => {
        return 2 * x;
    }

    var func = x => 2*x;

    var result = func(5);

    console.log(result)*/


// Toimi parametrina

    /*function myLog(logText) {
        console.log("************");
        console.log("-------" + logText);
    }

    function handleArray(items, handler){
        for (let i = 0; i < items.length; i++) {
            handler(items[i]);
        }
    }

    let texts = ["Hello", "Error occurred", "Something spicy..."];

    handleArray(texts, myLog);*/


// Matriisit - etuosto

    /*var days = ["Monday", "Tuesday", "Wednesday"];

    function printItems(item) {
        console.log(item);
    }

    days.forEach(printItems);*/


// Valikoima

    /*var days = ["Monday", "Tuesday", "Wednesday"];

    days.forEach(function(item){console.log(item);})

    days.forEach(item => console.log(item));*/


    /*var numbers = [4,3,5,2,7];

    var multiplied = numbers.map(item => item*2);
    console.log(multiplied)*/


    /*var points = [11, 8, 5, 13, 5];

    var levels = points.map(item => {
        if(item>10)
            return "Pro";
        else
            return "Noob";
    });

    console.log(levels);*/


// Valikoima suodatin

   /* var ages = [22, 34, 13, 19, 14];
    var adults = ages.filter(item => item => 18);
    console.log(adults);

    var names = ["Risto", "Matti", "Raisa", "Maisa", "Roni"];
    var rNames = names.filter (item => item[0] === "R");
    console.log(rNames);*/


// Jokin

    /*let persons = [{n:"Repe", age:13}, {n:"Tiina", age:23}, {n:"Marko", age:10}];
    console.log(persons)

    let adultFound = persons.some(x=>x.age >= 18);
    console.log(adultFound)*/

    /*let numbers = [1,3,2,6,3,6];
    console.log(numbers)

    let contains = numbers.some(x => x > 5);
    console.log(contains)*/

