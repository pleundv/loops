function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}



// Write a for loop that iterates from 60 to 100. This value indicates the "score" of a student. During each iteration, call the assignGrade function with the current and log the following statement:
// "For scoring 80 points, you get an C" 

for (let i = 60; i <= 100; i++) {
    console.log("for scoring" + i + " points, you get an " + assignGrade(i))
}

