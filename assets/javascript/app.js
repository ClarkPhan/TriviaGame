$(document).ready(function() {
    //Num of correct/incorrect ans
    var correctAns = 0;
    var incorrectAns = 0;

    var isGameOver = false;
    //For traversing questions & choices array
    var index = 0;

    //Trivia question and choices
    var questions = ["<h2>This Champion is known as the Dark Child, has the ability to control fire, and has a small companion. What is their name?</h2>",
        "<h2>This Champion is a powerful assassin and is also known as the Widowmaker. Who is this?</h2>",
        "<h2>This Champion is covered from head to toe in strange tattoos, and is the Rogue Mage. Who is this?</h2>",
        "<h2>This Champion uses a sword, and wears a strange yellow helmet. Known as the Wuju Bladesman, who is this person?</h2>",
        "<h2>This Champion is a completely different creature, and is known as the Mouth of the Abyss. What is this?</h2>"];
    var choices=["<label><input id=ans1 type=radio name=one>Tristana</input></label><p></p><label><input id=ans2 type=radio name=one>Syndra</input></label><p></p><label><input id=ans3 type=radio name=one>Annie</input></label><p></p>",
                "<label><input id=2ans1 type=radio name=one>Talon</input></label><p></p><label><input id=2ans2 type=radio name=one>Evelyn</input></label><p></p><label><input id=2ans3 type=radio name=one>Elise</input></label><p></p>",
                "<label><input id=3ans1 type=radio name=one>Ryze</input></label><p></p><label><input id=3ans2 type=radio name=one>Kassadin</input></label><p></p><label><input id=3ans3 type=radio name=one>Veigar</input></label><p></p>",
                "<label><input id=4ans1 type=radio name=one>Jax</input></label><p></p><label><input id=4ans2 type=radio name=one>Master Yi</input></label><p></p><label><input id=4ans3 type=radio name=one>Yasuo</input></label><p></p>",
                "<label><input id=5ans1 type=radio name=one>Cho'Gath</input></label><p></p><label><input id=5ans2 type=radio name=one>Kog'Maw</input></label><p></p><label><input id=5ans3 type=radio name=one>Karthus</input></label><p></p>"];
    
    //Variable that will hold our setInterval that runs the stopwatch
    var intervalId; 

    //Starting time left
    var timer = 30;

    function startQuiz() {
        $(".jumbotron").css("padding-top", "0");
        startTimer();
        addQuestions();
    }
    
    function startTimer() {
        //Begin counting down
        intervalId = setInterval(countDown, 1000);

        //Add h2 element to div
        $(".jumbotron").append("<div id=timer></div>");
        $("#timer").append("<h2 id=time>Time left: " + timer + "</h2>");
    }

    //Count down timer
    function countDown() {
        //Update time left
        timer--;
        if (timer === 0) {
            gameOver();
            return;
        }
        document.querySelector("#time").textContent = "Time left: " + timer;
    }

    //Check for correct answers
    function checkAnswer() {
        if ($("#ans3").is(":checked")) {
            console.log("correct");
            correctAns++;
        } else if ($("#2ans2").is(":checked")) {
            console.log("correct");
            correctAns++;
        } else if ($("#3ans1").is(":checked")) {
            console.log("correct");
            correctAns++;
        } else if ($("#4ans2").is(":checked")) {
            console.log("correct");
            correctAns++;
        } else if ($("#5ans2").is(":checked")) {
            console.log("correct");
            correctAns++;
        } else {
            console.log("incorrect");
            incorrectAns++;
        }
        index++;

        if (index > questions.length - 1) {
            gameOver();
            isGameOver = true;
            console.log("game over");
        }
    }

    function addQuestions() {
        //Empty quiz div and add questions div
        $("#quiz").empty();
        $("#quiz").append("<div id=question></div>");

        //Add questions and choices to questions div
        $("#question").append(questions[index]);
        $("#question").append(choices[index]);

        //Add next button
        $("#quiz").append("<div id=next></div>");
        $("#next").append("<button id=nextBtn type=button class=btn btn-primary>Next</button>");
    }

    //Restart game and add end screen elements
    function gameOver() {
        $("#quiz").empty();
        $("#timer").empty();
        $(".jumbotron").append("<h2>Game Over!</h2>");
        $(".jumbotron").append("<h2>Correct Answers: " + correctAns + "</h2>");
        $(".jumbotron").append("<h2>Incorrect Answers: " + incorrectAns + "</h2>");
        clearInterval(intervalId);
    }

    //Start button starts quiz
    $("#startBtn").on("click", function(){
        startQuiz();
    });

    //Next button checks answer and checks if game is over
    $(document).on("click", "#nextBtn", function(){
        checkAnswer();
        if (isGameOver === false) {
            addQuestions();
        }
    });


});