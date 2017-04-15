/* Manipulates the dom to make the power button fade the computer screen
in on click and back off with another click */
$(document).ready(function(){
    $("#powerUp").click(function(){
    $("#computerScreen").fadeToggle(4400);
    });

  /*All game assets are hidden until it is displayed via an onlick event. 
  Every choice is linked to a button that triggers the onclick event when pressed
  Buttons also are linked to images and sound to add to the game atmosphere*/ 
$(".next").click(function(){
 	$(".altText").show();
 	$("#text").hide();
 	});

$("#choice2").click(function(){
	$(".altText3").show();
	$(".altText").hide();
 	$(".image1").show();
 	$(".image3").hide();
	});

$(".next2").click(function(){
 	$(".altText4").show();
 	$(".altText3").hide();
 	});

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

$(".next4").click(function(){
 	$(".altText6").show();
 	$(".altText5").hide();
 	$(".image2").hide();
 	});

$(".next5").click(function(){
 	$(".altText7").show();
 	$(".altText6").hide();
 	});

$("#choice3").click(function(){
 	$(".altText8").show();
 	$(".altText7").hide();
 	});

$(".next6").click(function(){
 	$(".altText9").show();
 	$("#textBox").hide();
 	document.getElementById("soundtrack3").play(200);
 	$(".image4").fadeIn(640);
 	$(".altText8").hide();
 	$("#textBox").fadeIn(6400);
 	});

$("#choice4").click(function(){
 	$(".altText10").show();
 	$(".altText7").hide();
 	$(".image6").fadeIn(14000);
 	document.getElementById("soundtrack4").play(28000);
 	});

$(".next7").click(function(){
 	$(".altText11").show();
 	$("#textBox").hide();
 	$(".image5").fadeIn(400);
 	$(".altText10").hide();
 	$(".image6").hide();
 	$("#textBox").fadeIn(2800);
 	});	

$("#choice1").click(function(){
 	$(".altText12").show();
 	$(".altText").hide();
 	});

$(".next8").click(function(){
 	$(".altText13").show();
 	$(".altText12").hide();
 	});

$("#choice6").click(function(){
 	$(".altText14").show();
 	$(".altText13").hide();
 	$(".image3").fadeOut(3000);
 	$(".image13").fadeIn(3000);
 	$(".image13").fadeOut(6000);
 	$(".image13").hide(8000);
 	$(".image8").fadeIn(8000);
 	$(".image8").fadeOut(11000);
 	$(".image8").hide(13000);
 	$(".image7").fadeIn(13000);
 ;
 	});
});

//Sets volume of the audio
document.getElementById("soundtrack").volume = 0.2;
document.getElementById("soundtrack2").volume = 0.6;
document.getElementById("soundtrack3").volume = 1;
document.getElementById("soundtrack4").volume = 1;