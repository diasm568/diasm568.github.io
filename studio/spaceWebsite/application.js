window.onload = function () {
	
	var enterBlackClicked = document.getElementById('enterIcon'); 
	enterIconClick.addEventListener('click', enterIconClicked);
	
}

function enterIconClicked () {
		var getContainer = document.getElementById('outerContainer'); 
		getContainer.setAttribute('class', 'dontShow')
		
		var getContainer2 = document.getElementById('outerContainer2'); 
		getContainer2.setAttribute('class', 'show')
		}