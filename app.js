
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
     
			// récupération du formulaire + écouteur d'évènement
      const formChoixPo = document.querySelector('form');
			formChoixPo.addEventListener('submit', app.handleFamilyGroup);  
    },

		handleFamilyGroup: function(evt) {
			
			// stoppe l'envoi des données
			evt.preventDefault();
			
			// récupération input + valeur
			const inputUser = document.querySelector('.name');
			let inputUserValue = inputUser.value.trim();
			inputUserValue = inputUserValue.toUpperCase();

			// clear input
			inputUser.value = '';

			// appelle d'une fonction qui check si la saisie est correcte
			if (app.checkInputUser(inputUserValue) === true) {

				// clear error message
				app.clearError();
				
				// appelle d'une fonction qui affiche la maison de l'utilisateur
				app.choixPoToSay(inputUserValue);
			}
			else {

				// clear error message
				app.clearError();

				let errorMessage = document.createElement('p');
				errorMessage.textContent = 'Ça ne fonctionne qu\'avec un nom, pardi !';

				document.querySelector('.wrapper').append(errorMessage);
			}
		},

		clearError: function() {

			if(document.querySelector('.wrapper p')) {
				const removeError = document.querySelector('.wrapper p');
				document.querySelector('.wrapper').removeChild(removeError);
			}
		},

		clearFamily: function() {
			if(document.querySelector('.speech img')) {
				const speechFamily = document.querySelector('.speech img');
				document.querySelector('.speech').removeChild(speechFamily);
			}
		},

		convertToFamily: function(inputUserValue) {

			if(inputUserValue.length === 8) {
				return 'images/maxopus.png';
			}
			else if(inputUserValue[0] === 'L' || inputUserValue[inputUserValue.length - 1] === 'X') {
				return 'images/lustrix.png';
			}
			else if(inputUserValue.length%5 === 0 || inputUserValue.length%3 === 0) {
				return 'images/anthorvus.png';
			}
			else {
				return 'images/darioptera.png';
			}
		},

		choixPoToSay: function(inputUserValue) {

			// réinitialise l'image en cas de resoumission du formulaire
			app.clearFamily();

			// supprime la petite phrase du choixPo au moment ou on ajoute l'image
			document.querySelector('.speech').textContent = '';

			// récupération de la maison de l'utilisateur
			const familyUser = app.convertToFamily(inputUserValue);

			// création du balise img + src de l'image
			const speechFamily = document.createElement('img');
			speechFamily.src = familyUser;

			// ajout au DOM
			document.querySelector('.speech').append(speechFamily);
		},

		checkInputUser: function(inputUserValue) {
			console.log(inputUserValue);
			
			if(inputUserValue !== undefined && isNaN(inputUserValue) && inputUserValue.length > 2) {
				return true;
			}
			else {
				return false;
			}
		}
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
