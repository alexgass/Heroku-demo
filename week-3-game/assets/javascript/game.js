var Main = {};
Main.wordArray = [];
Main.wordUArray = [];

Main.lives = 4;

Main.word = ["test"];
Main.wordU = "";

//Make word list


var words = [];

words[0] = "cattle";
words[1] = "texas";
words[2] = "fishsticks";
words[3] = "howdy";
words[4] = "cowboy";
words[5] = "amarillo";
words[6] = "chicken";
words[7] = "thunderstorm";
words[8] = "fishing";
words[9] = "coffee";
words[10] = "avalanche";

Main.numbWord = words.length;

//words.length = words.list.length;
//Functions

Main.pullWord = function(){
	Main.word = words[(Math.floor(Math.random()*Main.numbWord))];
	console.log(Main)
}


Main.setUnderline = function(){
	Main.pullWord();
	for (i=0; i < words.length; i++) {
		 Main.wordArray[i] = Main.word.charAt(i);
		 Main.wordUArray[i] = "_";
	}
	Main.wordU = Main.wordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.wordU;
	document.getElementById("numLetters").innerHTML = words.length;
}

Main.updateLetter = function(letter){
	Main.changes = 0;
	for (i = 0; i < words.length; i++){
		Main.wordArray[i] = Main.word.charAt(i);
		if(Main.word.charAt(i) === letter){
			Main.wordUArray[i] = letter;
			Main.changes++;
		}
	}
	if(Main.changes < 1){
		Main.lives--;
		document.getElementById("lives").innerHTML = Main.lives;
	}

	Main.wordU = Main.wordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.wordU;

	Main.word1 = Main.wordArray.join("");
	Main.word2 = Main.wordUArray.join("");

	if(Main.word1 === Main.word2) {
		alert("You Win! Now a new word");
	}

	if(Main.lives < 1){
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







