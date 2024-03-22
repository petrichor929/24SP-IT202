const scores_array = [];
let score = 0;

do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores.", -1));
    if (score >= 0 && score <= 100) {
        //add this score element to our array
        scores_array[scores_array.length] = score;
    } else if (score != -1) {
        alert("Score must be a valid number from 0 to 100.");
    }
} while (score != -1);

if (scores_array.length > 0) {
    //display the contents of the array
    //using for-in loop
    for (let index in scores_array) {
        document.write(`Score ${index}: ${scores_array[index]}`);
        document.write("<br>");
    }

    //TODO write a for loop (any of the 3 types)
    // to sum all the values in the scores_array
    sum = 0;
    for (var index = 0; index < scores_array.length; index++) {
        sum = sum + scores_array[index];
    }
    document.write("Sum is "+ sum);
    document.write("<br>");
    //calculate average by dividing sum by the array's length
    //and print this value using document.write
    for (let index in scores_array) {
        average = sum / scores_array.length;
        document.write("Average score is " + average);
        document.write("<br>");
    }
}
