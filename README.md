# javascript-examples

## JavaScript Hoisting

### JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
To understand this, you have to understand the term "hoisting".   
__Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).__

### JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.

### Strict Mode
Thanks to a utility of the es5 version of JavaScript known as strict-mode, we can be more careful about how we declare our variables.
By enabling strict mode, we opt into a restricted variant of JavaScript that will not tolerate the usage of variables if they are not explicate declared.      
NOTE: hoisting is still working but if declaration is missing at all we will ger an error in run time. It means that
implicate declarations are disabled!

#### ECMAScript 6 - let
Variables declared with the keyword let are block scoped and not function scoped.   
That's significant, but it shouldn't trouble us.   Briefly, however, it just means that the variable's scope is bound to the block in which it is declared and not the function in which it is declared.   
      
### Hoisting classes
Classes are hoisted but they are not initialised! It means that we cannot create instance of a class if class initialization was not executed!
NOTE: some people say that because of this we should say that they are not hoisted :)

https://www.w3schools.com/js/js_hoisting.asp   
https://stackoverflow.com/questions/35537619/why-are-es6-classes-not-hoisted    
https://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html     
https://scotch.io/tutorials/understanding-hoisting-in-javascript   

### null-vs-undefined
undefined means a variable has been declared but has not yet been assigned a value.
On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.
Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

### merge-objects

## Date and Time
https://www.codementor.io/ayushgupta/date-and-time-in-javascript-fg1zamk72

> Where new Date() is called with more than one argument, the specifed arguments represent local time. When called with one argument, it simply uses that as count of milliseconds from epoch(UTC or local doesn't matter here).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

> Where Date is called as a constructor with more than one argument, the specified arguments represent local time. If UTC is desired, use new Date(Date.UTC(...)) with the same arguments.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

