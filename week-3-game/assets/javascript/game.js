var Main = {};
Main.wordArray = [];
Main.wordUArray = [];

Main.lives = 4;
Main.numbWord = words.Length;

var word = ["test"];
Main.wordU = "";

//Functions

Main.pullWord = function(){
	Main.word = words.List[(Math.floor(Math.random()*Main.numbWord))]
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
	Main.pullWord();
	Main.setUnderline();







