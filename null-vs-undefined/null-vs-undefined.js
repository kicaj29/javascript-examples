'use strict';

function nullVsUndefined_Example1(){
	var x = null;
	var y;
	var z = '';
	var zz = ' ';
	var u = undefined;
	
	debugger;
	
	console.log('x:' + x);
	console.log('y:' + y);
	console.log('z:' + z);
	console.log('zz:' + zz);
	
	if (x){
		console.log('x');
	}
	
	if (!x){
		console.log('!x');
	}
	
	if (y){
		console.log('y');
	}
	
	if (!y){
		console.log('!y');
	}
	
	if (z){
		console.log('z');
	}
	
	if (!z){
		console.log('!z');
	}
	
	if (zz){
		console.log('zz');
	}
	
	if (!zz){
		console.log('!zz');
	}
	
	if (y !== 'abc'){
		console.log('y !== "abc"');
	}
	
	if (u) {
		console.log('u');
	}
	
	if (u !== undefined) {
		console.log('u !== undefined');
	}
	
	if (!u) {
		console.log('!u');
	}
	
	if (u == undefined) {
		console.log('u == undefined');
	}
}
