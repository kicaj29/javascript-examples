function JavaScriptDeclarationsAreHoisted_Example1() {
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x
}

function JavaScriptDeclarationsAreHoisted_Example2() {
    var x; // Declare x
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element
}

function  JavaScriptInitializationsAreNotHoisted_Example1() {
    var x = 5; // Initialize x
    var y = 7; // Initialize y

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y
}

function  JavaScriptInitializationsAreNotHoisted_Example2() {
    var x = 5; // Initialize x
    var y;

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y

    y = 7; // Initialize y
}