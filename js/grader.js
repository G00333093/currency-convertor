function gradeResult() {
	var myEnglishResult = parseInt(document.getElementById("value-English").value);
	var myIrishResult = parseInt(document.getElementById("value-Irish").value);
	var myMathsResult = parseInt(document.getElementById("value-Maths").value);
	var englishGrade, IrishGrade, MathsGrade;
	
	if(!myEnglishResult)
		alert("please enter your English result");
	else if (myEnglishResult < 0 || myEnglishResult > 100)
	alert("Please enter a valid number between 0 and 100");
		else if (myEnglishResult > 90) {
			englishGrade = 'A';
		} else if (myEnglishResult > 80) {
			englishGrade = 'B';
		} else if (myEnglishResult > 70) {
			englishGrade = 'B-';
		} else if (myEnglishResult > 60) {
			englishGrade = 'C';
		} else if (myEnglishResult > 50) {
			englishGrade = 'C-';
		} else if (myEnglishResult > 40) {
			englishGrade = 'D';
		} else if (myEnglishResult > 30) {
			englishGrade = 'E';
		} else if (myEnglishResult > 20) {
			englishGrade = 'F';			
			
		}	
		var message = 'Your result of ' + myEnglishResult + ' gets you a grade ' + englishGrade;
		console.log("English results" + myEnglishResult + "" + englishGrade);
		document.getElementById ("Englishresultsentence").innerHTML = message;
	
	
	if(!myIrishResult)
		alert("please enter your Irish result");
	else if (myIrishResult < 0 || myIrishResult > 100)
	alert("Please enter a valid number between 0 and 100");
		else if (myIrishResult > 90) {
			IrishGrade = 'A';
		} else if (myIrishResult > 80) {
			IrishGrade = 'B';
		} else if (myIrishResult > 70) {
			IrishGrade = 'B-';
		} else if (myIrishResult > 60) {
			IrishGrade = 'C';
		} else if (myIrishResult > 50) {
			IrishGrade = 'C-';
		} else if (myIrishResult > 40) {
			IrishGrade = 'D';
		} else if (myIrishResult > 30) {
			IrishGrade = 'E';
		} else if (myIrishResult > 20) {
			IrishGrade = 'F';		
		}	
		var message = 'Your result of ' + myIrishResult + ' gets you a grade ' + IrishGrade;
		console.log("Irish results" + myIrishResult + "" + IrishGrade);
		document.getElementById ("Irishresultsentence").innerHTML = message;
		
		
	if(!myMathsResult)
		alert("please enter your Maths result");
	else if (myMathsResult < 0 || myMathsResult > 100)
	alert("Please enter a valid number between 0 and 100");
		else if (myMathsResult > 90) {
			MathsGrade = 'A';
		} else if (myMathsResult > 80) {
			MathsGrade = 'B';
		} else if (myMathsResult > 70) {
			MathsGrade = 'B-';
		} else if (myMathsResult > 60) {
			MathsGrade = 'C';
		} else if (myMathsResult > 50) {
			MathsGrade = 'C-';
		} else if (myMathsResult > 40) {
			MathsGrade = 'D';
		} else if (myMathsResult > 30) {
			MathsGrade = 'E';
		} else if (myMathsResult > 20) {
			MathsGrade = 'F';		
		}	
		var message = 'Your result of ' + myMathsResult + ' gets you a grade ' + MathsGrade;
		console.log("Maths results" + myMathsResult + "" + MathsGrade);
		document.getElementById ("Mathsresultsentence").innerHTML = message;
}		