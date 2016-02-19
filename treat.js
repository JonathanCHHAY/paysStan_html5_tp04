/**
 * 
 */

listePays = ["Azerbaïdjan", "Turkménistan", "Ouzbékistan", "Afghanistan" ,"Pakistan", "Tadjikistan", "Kirghizistan"]

var interfaceJS = document.getElementById("interface");

function remplirListes() {
	
	var forms = "";
	
	for(var i = 0 ; i < listePays.length ; i++ ) {
		forms += 
			'<span id="numero' + i + '">' + (i + 1) + '</span>'
			+ '<select id="liste' + i + '">'
			+ "<option value=\"\">Choisir...</option>" ;
		
			for(var j = 0 ; j < listePays.length ; j++) {
				forms += 
					'<option value="' + listePays[j] + '">'+ listePays[j] +'</option>'
			}
			
		forms += '</select> <br />';
			
	}
	
	interfaceJS.innerHTML = forms;
}

function reset() {

	for(var i = 0 ; i < listePays.length ; i++) {
		document.getElementById("numero" + i).classname = "";
		document.getElementById("liste" + i).selectedIndex = 0;
	}
}

function validate() {
	
	for(var i = 0 ; i < listePays.length ; i++) {
		console.log(i + " : " + 
				document.
				getElementById("liste" + i).value
				);
		
		// Réponse juste
		if(document.getElementById("liste" + i).value
				=== listePays[i] ) {
			document.getElementById("numero" + i).className = "rightAnswer";
		}
		
		else {
			document.getElementById("numero" + i).className = "wrongAnswer";
		}
		
		console.log(document.
				getElementById("numero" + i).className
				);
	}
	
	
}
