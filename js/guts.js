function generateRandomNumber()
{
	return Math.floor(Math.random() + 1);
}

function checkGuess(guess, generatedRandomNumber)
{
	// Do not change these two lines
	var statusCode = -1;
	var statusMessage = "YOUR STATUS MESSAGE GOES HERE";

	// YOUR CODE GOES HERE
  if(guess === generatedRandomNumber){
    statusCode = 0;
    statusMessage = "CORRECT!";
  } else if (guess > generatedRandomNumber){
    statusCode = 1;
    statusMessage = "TOO HIGH!";
  } else {
    statusCode = 2;
    statusMessage = "WAY TOO LOW!";
  }
	// Do not change this line
	return { "statusCode": statusCode, "statusMessage": statusMessage };
}