var keys = document.getElementsByTagName('li')
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var clear = 0;

for( var i = 0; i < keys.length; i++ ) {
  keys[ i ].onclick = function ( event ) {
	var btnVal = this.innerHTML;
	var input = document.querySelector( '.screen' );
	var inputVal = input.innerHTML;

	if( input.innerHTML == 0 || input == clear ) {
		input.innerHTML = '';
	}



	//clear
	if( btnVal == 'AC' ) {
		input.innerHTML = clear;
		decimalAdded = false;
	}

	//calculate result
	else if( btnVal == '=' ) {
		var equation = inputVal;
		var lastChar = equation[ equation.length - 1 ];


		equation = equation.replace(/x/g, '*').replace(/÷/g, '/');


		if( operators.indexOf(lastChar) > -1 || lastChar == '.' )
			equation = equation.replace( /.$/, '' );

		if( equation )
			input.innerHTML = eval( equation );

		decimalAdded = false;
	}

	else if( operators.indexOf( btnVal ) > -1 ) {

		var lastChar = inputVal[ inputVal.length - 1 ];


		if( inputVal != '' && operators.indexOf( lastChar ) == -1 )
			input.innerHTML += btnVal;


		else if( inputVal == '' && btnVal == '-' )
			input.innerHTML += btnVal;


		if( operators.indexOf( lastChar ) > -1 && inputVal.length > 1 ) {

			input.innerHTML = inputVal.replace( /.$/, btnVal );
		}

		decimalAdded =false;
	}


	else if( btnVal == '.' ) {
		if( !decimalAdded ) {
			input.innerHTML += btnVal;
			decimalAdded = true;
		}
	}


	else {
		input.innerHTML += btnVal;
	}
	event.preventDefault();
	}
}

document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var input = document.querySelector('.screen');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
	var lastChar = inputVal[inputVal.length - 1];
	var equation = inputVal;

	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

	if (key_press == 1) {
		input.innerHTML += key_press;
	}
	if (key_press == 2) {
		input.innerHTML += key_press;
	}
	if (key_press == 3 || key_code == 32) {
		input.innerHTML += key_press;
	}
	if (key_press == 4) {
		input.innerHTML += key_press;
	}
	if (key_press == 5) {
		input.innerHTML += key_press;
	}
	if (key_press == 6 && event.shiftKey == false) {
		input.innerHTML += key_press;
	}
	if (key_press == 7) {
		input.innerHTML += key_press;
	}
	if (key_press == 8 && event.shiftKey == false) {
		input.innerHTML += key_press;
	}
	if (key_press == 9) {
		input.innerHTML += key_press;
	}
	if (key_press == 0) {
		input.innerHTML += key_press;
	}

//handling keypress operators
	if( ( inputVal != '' && operators.indexOf(lastChar) == -1 &&
	 	key_code == 187 && event.shiftKey) || (key_code == 107) ||
		(key_code == 61 && event.shiftKey ) ) {
		document.querySelector('.screen').innerHTML += '+';
	}

	if( ( inputVal != '' && operators.indexOf(lastChar) == -1 &&
	 	key_code == 189 && event.shiftKey) || (inputVal != ''
		&& operators.indexOf(lastChar) == -1 && key_code == 107)) {
		document.querySelector('.screen').innerHTML += '-';
	}

	if(( inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) ||
		(inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
			document.querySelector('.screen').innerHTML += 'x';
	}

	if( (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) ||
		(inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
			document.querySelector('.screen').innerHTML += '÷';
	}
	 // add percent button
	// if( (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) ||
	// 	(inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
	// 		document.querySelector('.screen').innerHTML += '%';
	// }

	if( key_code == 13 || key_code == 187 && event.shiftKey == false) {
		input.innerHTML = eval(equation);
		decimalAdded = false;
	}


	if ( key_code == 8 || key_code == 46 ) {
		input.innerHTML = '';
		decimalAdded = false;
	}






}
