var Main = {};
Main.wordArray = [];
Main.wordUArray = [];

Main.lives = 8;

Main.word = ["test"];
Main.wordU = "";

//Make word list


var words = [
	"cattle",
	"texas",
	"fishsticks",
	"howdy",
	"cowboy",
	"amarillo",
	"chicken",
	"thunderstorm",
	"fishing",
	"coffee",
	"avalanche"
]

Main.numbWord = words.length;

//words.length = words.list.length;
//Functions

Main.pullWord = function(){
	Main.word = words[(Math.floor(Math.random()*Main.numbWord))];
	console.log(Main)
}


Main.setUnderline = function(){
	Main.wordUArray = [];
	for (i=0; i < Main.word.length; i++) {
		 Main.wordUArray[i] = "_";
	}

	Main.wordU = Main.wordUArray.join(" ");
	document.getElementById("WORD").innerHTML = Main.wordU;
	document.getElementById("numLetters").innerHTML = Main.word.length;
}

Main.updateLetter = function(letter){
	console.log('updateLetter', letter);
	Main.changes = 0;
	for (i = 0; i < Main.word.length; i++){
		// Main.wordArray[i] = Main.word.charAt(i);
		if(Main.word.charAt(i) === letter){
			Main.wordUArray[i] = letter;
			Main.changes++;
		}
	}

	if(Main.changes < 1){
		Main.lives--;
		document.getElementById("lives").innerHTML = Main.lives;
	}

	Main.wordU = Main.wordUArray.join(" ");
	document.getElementById("WORD").innerHTML = Main.wordU;

	if(Main.wordU.indexOf('_') < 0) {
		alert("You Win! Now a new word");
		Main.pullWord()
		Main.setUnderline();
	}

	if(Main.lives < 1){
		console.log(Main.lives);
		document.getElementById("WORD").innerHTML === Main.word1;
		alert("You Dead!!!");
		window.location.reload();
	}
}

$(".letter").click(function(event){
	event.preventDefault();
	Main.updateLetter(this.id);
	console.log(this.id);
});

Main.pullWord();
Main.setUnderline();







