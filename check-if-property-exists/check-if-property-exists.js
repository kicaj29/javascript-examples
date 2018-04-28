'use strict';

function Person(name, secondName){
	this.name = name;
	this.secondName = secondName;
}

function checkIfExists(){

	var p = new Person('', 'Placek');
	console.log(p['name']);
	if (p['name']){
		console.log('has name property');
	}

	console.log(p['nameyyyy']);
	if (p['nameyyyy']){
		console.log('has nameyyyy property');
	}
	
}
