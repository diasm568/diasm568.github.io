$(".circle").click(function() {

	if($(this).hasClass("off")) {
	document.getElementById("ice").play();
	}
	
	if($(this).hasClass("on")) {
		//play chomp sound
		document.getElementById("chomp").play();
	}
	
	$(this).toggleClass('on');
	
	$(this).toggleClass('off');
	
});


// 	console.log("test");
// 		//play icing sound
// 		var audio = {};
// 		audio["ice"] = new Audio();
// 		audio["ice"].src = "ice.mp3";
// 		audio["ice"].addEventListener('load', function() {
//    		audio["ice"].play();
//    		console.log("loaded");});