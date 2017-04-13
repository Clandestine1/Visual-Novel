/* Manipulates the dom to make the power button fade the computer screen
in on click and back off with another click */
$(document).ready(function(){
    $("#powerUp").click(function(){
    $("#computerScreen").fadeToggle(4400);
    });
});

//Makes text div hidden and altText div appear when #next button is clicked
$(document).ready(function(){
	$(".next").click(function(){
 	$(".altText").show();
 	$("#text").hide();
 	});
});

$(document).ready(function(){
	$("#choice2").click(function(){
 	$(".altText3").show();
 	$(".altText").hide();
 	});
});

$(document).ready(function(){
	$(".next2").click(function(){
 	$(".altText4").show();
 	$(".altText3").hide();
 	});
});

$(document).ready(function(){
	$(".next3").click(function(){
 	$(".altText5").show();
 	$(".altText4").hide();
 	});
});

//Sets volume of main audio to a lower volume
document.getElementById("soundtrack").volume = 0.4;