	

	let displayChico = document.getElementById('numeroActual');
	let displayGrande = document.getElementById('resultado');

	let buttons = Array.from(document.getElementsByClassName('boton'));

	
	buttons.map ( boton => {

		boton.addEventListener('click', (e) => {
 				
			switch(e.target.innerText){

				case 'AC':

					displayChico.innerText = '';
					displayGrande.innerText = '';
					break;

				case 'C':

					displayChico.innerText = '' ;
					break;

				case '←':

					displayChico.innerText = displayChico.innerText.slice(0, -1);
					break;
				
			
				case '=':

					try {
							displayGrande.innerText = eval(displayChico.innerText);
							displayChico.innerText = '';
					} catch {

						displayGrande.innerText = 'Error! ..virgo' ;
						displayChico.innerText = '';
					}

										
					break;

				default:

					displayChico.innerText += e.target.innerText ;

			}

		})	
	  }
		
	)
