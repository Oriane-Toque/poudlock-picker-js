
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
			
			// appelle d'une fonction qui check si la saisie est correcte
			if (app.checkInputUser() === true) {
				
				// appelle d'une fonction qui check les données pour correspondre à une famille
				app.convertToFamily();
			}
			
			

		},

		convertToFamily: function() {
			// =========
		},

		checkInputUser: function() {

			// récupération input + valeur
			const inputUser = document.querySelector('.name');
			const inputUserValue = inputUser.value;
			// clear input
			inputUser.value = '';
			
			if(inputUserValue !== undefined && isNaN(inputUserValue) && inputUserValue.length > 2) {
				console.log(true);
			}
			else {
				console.log(false);
			}
		}
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
