import '../styles/styles.css';
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'));
new RevealOnScroll(document.querySelectorAll('.testimonial'));

if (module.hot) {
    module.hot.accept();
}

/*
var john = {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".")
    }
}

john.greet();

var jane = {
    name: "Jane Smith",
    favoriteColor: "green",
    greet: function() {
        console.log("Hello, my name is " + jane.name + " and my favorite color is " + jane.favoriteColor + ".")
    }
}

john.greet();
 */

/*
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}
*/

/*
// Inheritance
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes zero taxes.");
    }
}

let john = new Person("John Doe", "blue");
john.greet();

// let jane = new Person("Jane Smith", "green");
let jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();
 */