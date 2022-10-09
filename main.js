//Sources used to make the assigment (quiz):
//Radio buttons: https://nicklasdean.gitbook.io/ita22-1-semester/web-technology/11-js-dom-1#radio-buttons
//Bits of HTML and JS is inspired by: https://youtu.be/Z_VSdgO0AV4
//Form tag: https://www.w3schools.com/tags/tag_form.asp
//Flex-direction: column; src: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//Button css styling src: https://www.w3schools.com/css/css3_buttons.asp
//CSS is also inspired by the portfolio assignment: https://abdu1rh.github.io/Portfolio/
//Alert/pop up: https://www.w3schools.com/js/js_popup.asp & https://nicklasdean.gitbook.io/ita22-1-semester/web-technology/11-js-dom-1#exercise-2-level-1

alert("Take A Deep Breath And Get Ready To Answer Some Questions 😄 ");


function check () {

    const Question1 = document.quiz.Question1.value;

    const Question2 = document.quiz.Question2.value;

    const Question3 = document.quiz.Question3.value;

    const Question4 = document.quiz.Question4.value;

    const Question5 = document.quiz.Question5.value;

    const Question6 = document.quiz.Question6.value;

    const Question7 = document.quiz.Question7.value;

    const Question8 = document.quiz.Question8.value;

    const Question9 = document.quiz.Question9.value;

    let correct = 0;



    if (Question1 === "London") {
        correct++;
    }

    if (Question2 === "7") {
        correct++;
    }

    if (Question3 === "Water") {
        correct++;
    }

    if (Question4 === "Jake") {
        correct++;
    }

    if (Question5 === "Portuguese") {
        correct++;
    }

    if (Question6 === "Tomorrow") {
        correct++;
    }

    if (Question7 === "Incorrectly") {
        correct++;
    }

    if (Question8 === "Age") {
        correct++;
    }

    if (Question9 === "2nd") {
        correct++;
    }


    if (correct < 3) {
        console.log("Your score is  ", +correct, "/9 😢,", "  you should definitely try again!");
        document.write("Your score is  ", +correct, "/9 😢,", "  you should definitely try again!");

    }

    else if (correct < 6) {
        console.log("Your score is  ", +correct, "/9 😐,", "  you did alright, but try again!");
        document.write("Your score is  ", +correct, "/9 😐,", "  you did alright, but try again!");

    }

    else if (correct < 8) {
        console.log("Your score is  ", +correct, "/9 😄,", "  you nearly got all questions right, give it another try!");
        document.write("Your score is  ", +correct, "/9 😄,", "  you nearly got all questions right, give it another try!");

    }


    else if (correct === 9) {
        console.log("Congrats 🥳, your score is ", +correct, "/9,", " you got all questions right!");
        document.write("Congrats 🥳, your score is ", +correct, "/9,", " you got all questions right!");
    }



}