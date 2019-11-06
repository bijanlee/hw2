$(document).ready(function () {

    $("#nameError").hide();
    $("#question1Error").hide();
    $("#question1Correct").hide();
    $("#question1Wrong").hide();
    $("#question2Error").hide();
    $("#question2Correct").hide();
    $("#question2Wrong").hide();
    $("#question3Error").hide();
    $("#question3Correct").hide();
    $("#question3Wrong").hide();
    $("#scoreMessage").hide();

    //event listener
	$("#submitQuizBtn").click(function() {
        handleFormSubmit();
	});

    function calculateScore() {
        var q1Response = $("input[name=question1]:checked").val();
        var q2Response = $("input[name=question2]:checked").val();
        var q3Response = $("input[name=question3]:checked").val();
        var score = 0;
        if (q1Response == "option2") {
            score++;
            $("#question1Correct").show();
            $("#question1Wrong").hide();
        } else {
            $("#question1Wrong").show();
            $("#question1Correct").hide();
        }
        if (q2Response == "option3") {
            score++;
            $("#question2Correct").show();
            $("#question2Wrong").hide();
        } else {
            $("#question2Wrong").show();
            $("#question2Correct").hide();
        }
        if (q3Response == "option2") {
            score++;
            $("#question3Correct").show();
            $("#question3Wrong").hide();
        } else {
            $("#question3Wrong").show();
            $("#question3Correct").hide();
        }

        return score;
    }

    function showScore(name) {
        $("#studentNameMessage").html("Hello " + name + "!");
        var score = calculateScore();
        $("#scoreMessage").html("Your score was " + score + "/3!");
        $("#scoreMessage").show();
        $("#studentNameMessage").show();
    }

    function handleFormSubmit() {
        //var x = document.forms["myForm"]["studentName"].value;
        
        var form = document.forms["myForm"];
        var name = form["studentName"].value;
        var question1Radios = document.getElementsByName("question1");
        var question2Radios = document.getElementsByName("question2");
        var question3Radios = document.getElementsByName("question3");

        var studentNameValid = false;
        var question1Valid = false;
        var question2Valid = false;
        var question3Valid = false;
        var i = 0;

        while (!question1Valid && i < question1Radios.length) {
            if (question1Radios[i].checked) {
                question1Valid = true;
            }
            i++;
        }

        i = 0;

        while (!question2Valid && i < question2Radios.length) {
            if (question2Radios[i].checked) {
                question2Valid = true;
            }
            i++;
        }

        i = 0;

        while (!question3Valid && i < question3Radios.length) {
            if (question3Radios[i].checked) {
                question3Valid = true;
            }
            i++;
        }

        if (name == "") {
            studentNameValid = false;
        }
        else {
            studentNameValid = true;
        }


        if (!studentNameValid) {
            $("#nameError").show();
        } else {
            $("#nameError").hide();
        }

        if (!question1Valid) {
            $("#question1Error").show();
        } else {
            $("#question1Error").hide();
        }

        if (!question2Valid) {
            $("#question2Error").show();
        } else {
            $("#question2Error").hide();
        }

        if (!question3Valid) {
            $("#question3Error").show();
        } else {
            $("#question3Error").hide();
        }

        if (studentNameValid && question1Valid && question2Valid && question3Valid) {
            showScore(name);
        }
    }
});