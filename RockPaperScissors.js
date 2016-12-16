
function newChoice() {

	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();

	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	} document.getElementById('output1').value ="Computer: " + computerChoice;

	function compare(choice1, choice2) {
    if (choice1 === choice2)
    document.getElementById('output2').value ="The result is a tie!";

    else if (choice1 === "rock")
        if (choice2 === "scissors")
        document.getElementById('output2').value ="You win with rock!";
        else document.getElementById('output2').value ="Computer wins with paper!";

    else if (choice1 === "paper")
        if (choice2 === "rock")
        document.getElementById('output2').value ="You win with paper!";
        else document.getElementById('output2').value ="Computer wins with scissors!";

		else if (choice1 === "scissors")
				if (choice2 === "paper")
				document.getElementById('output2').value ="You win with scissors!";
				else document.getElementById('output2').value ="Computer wins with rock!";

			}
	compare(userChoice, computerChoice);
}
