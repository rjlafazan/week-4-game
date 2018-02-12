


// generates a random crystal value to guess between crystal value between 19 and 120
var targetNumber;
function generateTargetNumber() {
	targetNumber = Math.floor((Math.random() * 101) + 19);
	console.log(targetNumber);
}
// I was frunk and duck when I wrote this code

generateTargetNumber();

// Places the generated target number into the html at the id guessNumber
$('#guessNumber').text(targetNumber);

// sets the base values for the crystal guess count and win and loss number
var counter = 0;
var wins = 0;
var loss = 0;

// Creates an array with a length of 4 and assigns a random value from 1-12 to each item in the array
var crystalValues
function generateCrystalValues () {
	crystalValues = Array.from( {length: 5}, () => Math.floor((Math.random() * 11) + 1));
	console.log(crystalValues);
}
generateCrystalValues();


// array of  sexy drunken images
var imageArray = [
	'https://static.hykso.com/wp-content/uploads/2017/01/punchspeed512x.png',
	'https://cdn2.iconfinder.com/data/icons/boxing/500/Boxing_15-256.png',
	'https://cdn2.iconfinder.com/data/icons/boxing/500/Boxing_16-256.png',
	'https://cdn3.iconfinder.com/data/icons/fight/500/fight-wrangle-brawl-action_10-256.png',
	'https://cdn4.iconfinder.com/data/icons/ios7-line-strategy-2/512/strike-256.png'
]

// This takes the array length and creates images for each piece of the array
for (var i = 0; i < crystalValues.length; i++) {

	var mkCrystalImg = $('<img>');

	mkCrystalImg.addClass('crystalImg');

	mkCrystalImg.attr('src', imageArray[i]);

	mkCrystalImg.attr('data-crystalvalue', crystalValues[i]);

	$('#crystals').append(mkCrystalImg);

}


// On image click, takes the randomly assigned value and puts creates an integer for the 
$('.crystalImg').on('click', function() {

	var individValue = ($(this).attr("data-crystalvalue"));

	individValue = parseInt(individValue);
	console.log(parseInt(individValue));

	counter += individValue;

	$('#counterNumber').text(counter);


	if (counter === targetNumber) {
		alert('KO! Congratulations! You are the Champion!');
		wins ++;
		console.log(wins);
		$('#winNumber').text(wins);
	} else if (counter >= targetNumber) {
		alert('You got Knocked Out!');
		loss ++;
		console.log(loss);
		$('#lossNumber').text(loss);
	}

// Re-runs the targetNumber function and crystalValue function 
	if (counter === targetNumber || counter >= targetNumber) {

		// set counter back to 0
		counter = 0;
		$('#counterNumber').text(counter);

		// re-generates targetNumber
		generateTargetNumber();
		$('#guessNumber').text(targetNumber);

		// re-generates crystalValues
		generateCrystalValues();
		
	}

});
