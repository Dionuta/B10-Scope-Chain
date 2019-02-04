function b() { // lexically sits on the global enviroment 	
	console.log(myVar);//looks for myVar on the global scope.
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();