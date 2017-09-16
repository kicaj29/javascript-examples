'use strict';

function JavaScriptDeclarationsAreHoisted_Example1() {
    x = 5; // Assign 5 to x

    var elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x
}

function JavaScriptDeclarationsAreHoisted_Example2() {
    var x; // Declare x
    x = 5; // Assign 5 to x

    var elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element
}

function  JavaScriptInitializationsAreNotHoisted_Example1() {
    var x = 5; // Initialize x
    var y = 7; // Initialize y

    var elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y
}

function  JavaScriptInitializationsAreNotHoisted_Example2() {
    var x = 5; // Initialize x

    //yy = 15; //this will cause error in run time if we use strict mode!!!
    y = 5;
    var elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y

    var y = 7; // Initialize y
}

function hoist() {
    a = 20;
    var b = 100;
}
hoist();

function AllUndeclaredVariablesAreGlobalVariables() {

    /**
     * Accessible as a global variable outside hoist() function
     * Output: 20
     */
    console.log(a);
    /**
     * Since it was declared, it is confined to the hoist() function scope.
     * We can't print it out outside the confines of the hoist() function.
     * Output: ReferenceError: b is not defined
     */
    console.log(b);
}

function LetVsVar() {
    console.log(myhoist);
    let myhoist = 'The variable has been hoisted.';   //let is not hoisted so we get an error: Uncaught ReferenceError: hoist is not defined
    //var myhoist = 'The variable has been hoisted.'; //it works always, variable hoist is hoisted so we get undefined
}

function ClassDeclarationsExample1() {
    var Frodo = new Hobbit();
    Frodo.height = 100;
    Frodo.weight = 300;
    console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

    class Hobbit {
        constructor(height, weight) {
            this.height = height;
            this.weight = weight;
        }
    }
}

function ClassDeclarationsExample2() {
    class Hobbit {
        constructor(height, weight) {
            this.height = height;
            this.weight = weight;
        }
    }

    var Frodo = new Hobbit();
    Frodo.height = 100;
    Frodo.weight = 300;
    console.log(Frodo); // Output: ReferenceError: Hobbit is not defined
}



function classVsFunction() {
    debugger;
    var fooF = new BarF();
    console.log(fooF.x)     // here we get undefined!
    BarF.defaultX = 0;


    var fooC = new BarC(); // ReferenceError, move class BarC up to not have this error
    console.log(fooC.x);
    BarC.defaultX = 0;

    function BarF(x) {
        this.x = x || BarF.defaultX;
    }

    class BarC {
        constructor (x = BarC.defaultX) {
            this.x = x;
        }
    }
}

function sampleWhyClassesAreNotHoisted() {

    /**
     * If class Dog were hoisted to the top the code would break at the moment where the extends Animal is interpreted
     * because Animal is undeclared at that moment. The important thing to note here is that the extends part has to be
     * evaluated at the right point in time. Therefore classes aren’t hoisted.
     */
    debugger;
    let Animal = function Animal() {
        this.move = function () {
            alert(defaultMove);
        }
    }

    class Dog extends Animal{

    }

    let defaultMove = "moving";

    let dog = new Dog();
    dog.move();
}