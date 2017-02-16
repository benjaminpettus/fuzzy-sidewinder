var keys = document.getElementsByClassName('keys')
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
