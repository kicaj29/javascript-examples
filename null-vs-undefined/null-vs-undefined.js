'use strict';

function nullVsUndefined_Example1(){
	var x = null;
	var y;
	var z = '';
	var zz = ' ';
	
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
}
