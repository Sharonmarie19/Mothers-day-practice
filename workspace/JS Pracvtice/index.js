let n = 1
while( n < 10) {
    n++
}
console.log( "This is false");

let fruit = ["apples", "bananas", "pears", "peaches"]
let phrase = [" was awesome", " was so nasty", " not ripe", " was too sweet."]
let i = 0
while ( i < fruit.length){
    console.log("The " + fruit[i] +  phrase[i])
    i++
}

let kids = ["Averi", "Jayden", "Xavier", "Angel", "Nyla"]
let sentence = [" My daughter is ", " My nephew is ", " My nephew that doesn't talk to me is ", " My niece is ", "My dog-daughter is "]

let k = 0
while( k < kids.length){
    console.log(sentence[k] + kids[k])
    k++
}

let rainbow = ("Red, Orange, Yellow, Green, Blue, Indigo, Violet");
console.log(rainbow);





let person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person.firstName);
console.log(person.lastName);

let person2 = {
    firstName: "Jane",
    lastName:"Doe"
};

console.log(person2["firstName"]);
console.log(person2["lastName"]);

let address = {
    "building no": 3960,
    street: "North 1st street",
    state: "CA" ,
    country: "USA"
};
console.log(address);
