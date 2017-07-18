var questions = [
	{question:"What is the longest river in the United States?",
		answer1:"Colorado River",
		answer2:"Mississippi River",
		answer:"Missouri River"
	},
	{question:"Death Valley is located in what U.S. state?",
		answer1:"Nevada",
		answer2:"Utah",
		answer:"California"
	},
	{question:" Pierre is the capital of what U.S. state?",
		answer1:"Wisconsin",
		answer2:"Montana",
		answer:"South Dakota"
	},
	{question:" What is the tallest mountain in the United States?",
		answer1:"Mount Ranier",
		answer2:"Mount Hood",
		answer:"Mount McKinley"
	},
	{question:" What is the smallest U.S. state?",
		answer1:"Delaware",
		answer2:"Maryland",
		answer:"Rhode Island"
	},	

	{question:" Lake Okeechobee is located in what U.S. state?",
		answer1:"Wyoming",
		answer2:"Oklahoma",
		answer:"Florida"
	}
];

console.log(questions);
console.log(questions.length);
var numQuestions = questions.length;




var correct = 0; //to keep count of correct answers
var incorrect = 0; //to keep count of incorrect answers

var totalQuestions = 4; //questions to display 
var correctAns;
$(document).ready(function() {
		var random = Math.floor(Math.random() * numQuestions);
			console.log(random);
		var selection = questions[random];
		
		currentQuestion = selection.question;
		$("#question").html(currentQuestion);
		
		type1 = selection.answer1;
		$("#answer1").html(type1);
		
		type2 = selection.answer2;
		console.log("Option 2 =" + type2);
		$("#answer2").html(type2);
		correctAns = selection.answer; 
		console.log("correct answer" + correctAns);
		$("#answer").html(correctAns);
		//$("#question").html(selection["question"]);
		$("#new").hide();

	});

$('.choice').click(function(event) {
	console.log("click")
	var selectedAnswer = $(this).text();
	console.log("selected answer" + selectedAnswer);
	$("#result").show();
	$("#option").hide();

	if (selectedAnswer === correctAns) {
		console.log("yes")
		correct ++;
		$("#correctAns").text(correct);
	}
	else {
		console.log("no")
		incorrect ++;
		$("#incorrectAns").text(incorrect);
	}
	$("#new").show();
});
