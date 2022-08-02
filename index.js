	
	//Var declaration.
	let smallDisplay = document.getElementById('numeroActual');
	let bigDisplay = document.getElementById('resultado');
	let buttons = Array.from(document.getElementsByClassName('boton'));

	//Boolean, check if its the first number inputted in smallDisplay.
	let firstInput = true;

	//Bolean, check if theres any data left to delete.
	let everythingDeleted = true;

	buttons.map ( boton => {

		boton.addEventListener('click', (e) => {
 				
			switch(e.target.innerText){

				case 'AC':

					smallDisplay.innerText = '0';
					bigDisplay.innerText = '0';

					//Change firstInput to true since, after hitting 'AC' the next button pressed will be the first input of smallDisplay.
					firstInput = true;
					break;

				case 'C':

					smallDisplay.innerText = '0' ;

					//Change firstInput to true since, after hitting 'C' the next button pressed will be the first input of smallDisplay.
					firstInput = true;
					break;

				case '←':

					if ( smallDisplay.innerText.length == 1 ){

						smallDisplay.innerText = "0";
						firstInput = true;
						everythingDeleted = true;
					}

					if(everythingDeleted != true) {
							
						smallDisplay.innerText = smallDisplay.innerText.slice(0, -1);
						console.log(smallDisplay.innerText.length);
					}

					break;
				
			
				case '=':

					try {
							bigDisplay.innerText = eval(smallDisplay.innerText);
							smallDisplay.innerText = '0';

							//Change firstInput to true since, after hitting 'equals' the next button pressed will be the first input of smallDisplay.
							firstInput = true;

					} catch {

						bigDisplay.innerText = 'Error!' ;
						smallDisplay.innerText = '';
					}

										
					break;

				default:

					//If its the first input, erase all things in smallDisplay to only have the number.
					if ( firstInput == true ) {

						smallDisplay.innerText = '';

					}

					//If theres a number in bigDisplay, delete it and put it in smallDisplay, to use the result into the next equation. For ex "3+100 = 103" --> press "+2" and smallDisplay "103+2" without having to write 103
					if ( bigDisplay.innerText != "0" && firstInput == true && ("+,-,*,/".includes(e.target.innerText))) {

						smallDisplay.innerText = bigDisplay.innerText + "";
						bigDisplay.innerText = "";

					}

					smallDisplay.innerText += e.target.innerText ;
					firstInput = false;
					everythingDeleted = false;

			}

		})	
	  }
		
	)
