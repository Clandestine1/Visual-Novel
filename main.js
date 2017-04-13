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
 	$(".image1").show();
 	$(".image3").hide();
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
 	document.getElementById("soundtrack2").play();
 	$(".image1").hide();
 	$(".image2").show();
 	$(".image2").fadeOut(2000);
 	$(".image2").fadeIn(4000);
 	$(".image2").fadeOut(3000);
 	});
});

$(document).ready(function(){
	$(".next4").click(function(){
 	$(".altText6").show();
 	$(".altText5").hide();
 	$(".image2").hide();
 	});
});

$(document).ready(function(){
	$(".next5").click(function(){
 	$(".altText7").show();
 	$(".altText6").hide();
 	});
});

$(document).ready(function(){
	$("#choice3").click(function(){
 	$(".altText8").show();
 	$(".altText7").hide();
 	});
});

$(document).ready(function(){
	$(".next6").click(function(){
 	$(".altText9").show();
 	$("#textBox").hide();
 	document.getElementById("soundtrack3").play(200);
 	$(".image4").fadeIn(640);
 	$(".altText8").hide();
 	$("#textBox").fadeIn(6400);
 	});
});

$(document).ready(function(){
	$("#choice4").click(function(){
 	$(".altText10").show();
 	$(".altText7").hide();
 	$(".image6").fadeIn(14000);
 	document.getElementById("soundtrack4").play(28000);
 	});
});

$(document).ready(function(){
	$(".next7").click(function(){
 	$(".altText11").show();
 	$("#textBox").hide();
 	$(".image5").fadeIn(400);
 	$(".altText10").hide();
 	$(".image6").hide();
 	$("#textBox").fadeIn(2800);
 	});
});

$(document).ready(function(){
	$("#choice1").click(function(){
 	$(".altText12").show();
 	$(".altText").hide();
 	});
});


//Sets volume of audio
document.getElementById("soundtrack").volume = 0.2;
document.getElementById("soundtrack2").volume = 0.7;
document.getElementById("soundtrack3").volume = 2;
document.getElementById("soundtrack4").volume = 2;