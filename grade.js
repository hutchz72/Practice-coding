const prompt = require("prompt-sync")();

function gradeCalculator() {
    let score = parseFloat(prompt("Enter student score: "))
    let result;
    if (score < 0 || score > 100) {
        result = "Student score is incorrect";
    } 

    else if (score >= 80) {
        result = "A";
    } else if (score >= 70) { 
        result = "B";
    } else if (score >= 60) {
        result = "C";
    } else if (score >= 50) {
        result = "D";
    } else {
        result = "F"; 
    }

    console.log(result);
}

gradeCalculator();