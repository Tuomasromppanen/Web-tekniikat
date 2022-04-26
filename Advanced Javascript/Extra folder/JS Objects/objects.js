/*let person = {
    // Kirjaimellinen objektimerkintä
    name: "john",
    age: 22,
    // get/set
    //getInfo: function() {
       // return this.name + " " + this.age;
    //}
    // Yksinkertaisempi menetelmä
    get info() {
        return this.name + " " + this.age;
    }
};

// console.log(person.name);
// person.age = 23;

// console.log(person.getInfo());

// console.log(person.info);

// Objektiarvot
    var valueArray = Object.values(person);
    for (const i of valueArray) {
        console.log(i);
    }*/



/*function person(name, age) {
    // Objektin konstruktori
    this.name = name;
    this.age = age;
    this.info = function() {
        return this.name + " " + this.age;
    }
}*/

//let p = new person("john", 23);

//console.log(p.info());

// Objektin viittaukset
    // let person2 = person;
    // person2.age = 50;
    // console.log(person.age + " " + person2.age)

// Objektin kopioiminen
    //let person2 = Object.create(person);
    //person2.age = 50;
    //console.log(person.age + " " + person2.age)




// Luokan malli   
    class Product{
        constructor(name, category, price) {
            this.name = name;
            this.category = category;
            this.price = price;
        }


        getProductDetails(){
            return this.name + " " + this.category + " " + this.price;
        }

    }
    
        let product = new Product("Macbook Pro", "Computers", 1399);
        product.price = 1400;
        console.log(product.getProductDetails());
