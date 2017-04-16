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
  /*$(".altText").typeIt({
     speed: 10,
     autoStart: false
    }); */
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
 	$(".image8").fadeIn(3000);
 	$(".image8").fadeOut(7000);
 	$(".image8").hide(7000);;
 	$(".image7").fadeIn(11000);
 	document.getElementById("soundtrack5").play(4000);
 	});

$(".next9").click(function(){
	$(".altText15").show();
 	$(".altText14").hide();
 	$(".image7").fadeOut(2000);
 	$(".image13").fadeIn(2000);
 	$(".image17").show(6000);
 	$(".image17").slideUp(6000);
});

$("#choice5").click(function(){
 	$(".altText16").show();
 	$(".altText13").hide();
 	$(".image12").fadeIn(2000);
 	$(".image12").fadeOut(5000);
 	$(".image10").fadeIn(5000);
 	$(".image10").fadeOut(9000);
 	$(".image9").fadeIn(9000);
 	document.getElementById("soundtrack6").play(24000);
 	$(".image18").fadeIn(9000);
 	$(".image18").slideUp(14000);
 	});

$("#choice7").click(function(){
 	$(".altText17").show();
 	$(".altText16").hide();
 	$(".image16").fadeIn(4000);
 	$(".image18").hide()
 	$(".image19").fadeIn(14000);
 	document.getElementById("soundtrack7").play(24000);
 	});

$(".next10").click(function(){
	$(".altText18").show();
 	$(".altText17").hide();
 	$(".image20").fadeIn(4000);
});

$("#choice8").click(function(){
 	$(".altText19").show();
 	$(".altText16").hide();
 	document.getElementById("soundtrack8").play(8000);
 	$(".image11").fadeIn(4000);
 	$(".image11").fadeOut(9000);
 	$(".image15").fadeIn(9000);
});

$(".next11").click(function(){
	$(".altText20").show();
 	$(".altText19").hide();
 	$(".image22").fadeIn(4000);
 	document.getElementById("soundtrack9").play(1000);
});

$(".next12").click(function(){
	$(".altText21").show();
 	$(".altText20").hide();
 	$(".image22").hide(2000);
 	$(".image23").fadeIn(2000);
 	$("#textBox").fadeIn(9400);
 	document.getElementById("soundtrack10").play(2000);
});

//Sets volume of the audio
document.getElementById("soundtrack").volume = 0.1;
document.getElementById("soundtrack2").volume = 0.6;
document.getElementById("soundtrack3").volume = 1;
document.getElementById("soundtrack4").volume = 1;
document.getElementById("soundtrack5").volume = 0.8;
document.getElementById("soundtrack6").volume = 0.7;
document.getElementById("soundtrack7").volume = 0.8;
document.getElementById("soundtrack8").volume = 1;
document.getElementById("soundtrack9").volume = 1;
document.getElementById("soundtrack10").volume = 1;
});