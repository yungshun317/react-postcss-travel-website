import '../styles/styles.css';
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
// import Modal from './modules/Modal';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let stickyHeader = new StickyHeader();
// new Modal();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
       e.preventDefault();
       if (typeof modal == "undefined") {
           import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
               modal = new x.default();
               setTimeout(() => modal.openTheModal(), 20);
           }).catch(() => console.log("There was a problem."));
       } else {
           modal.openTheModal();
       }
    });
});

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