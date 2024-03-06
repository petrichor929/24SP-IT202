<?php
//get the form from the form
$investment = filter_input(INPUT_POST, 'investment', FILTER_VALIDATE_FLOAT);
$interest_rate = filter_input(INPUT_POST, 'interest_rate', FILTER_VALIDATE_FLOAT);
$years = filter_input(INPUT_POST, 'years', FILTER_VALIDATE_INT);

$error_message = '';

//validate investment
if( $investment === FALSE) [
    $error_message .= 'Investment must be a valid number.'<br>; //this shows the user that their input isnt valid
] else if ( $interest <= 0) {
    $error_message .= 'Investment must be greater than zero.'<br>;
}

//validaye interest rate
if( $interest_rate === FALSE) {
    $error_message .= 'Interest rate must be a valid number.'<br>;
} else if ( $interest_rate <= 0) {
    $error_message .= 'Interest rate must be greater than zero.'<br>;
}

//validate years
if( $years === FALSE) {
    $error_message .= 'Years must be valid whole number.'<br>;
} else if ( $years <= 0) {
    $error_message .= 'Years must be greater than zero.'<br>;
} else if ( $years > 30) {
    $error_message .= 'Years must be less than 30.'<br>;
}

//if an error message exists, go to the index page
if( $error_message == '') {
    include("future_value_form.php");
    exit();
}

//calculate the future value
$future_value = $investment;
for($index = 1; $index <= $years; $index++) {
    future_value += $future_value * $interest_rate * 0.01;
}

//apply formatting
$investment_f = '$' . number_format($investment, 2);
$yearly_rate_f = $interest_rate . '%';
$future_value_f = '$' . number_format($future_value, 2);
?>

<html>
<head>
    <title>Future Value Calculator</title>
</head>
<body>
    <h1>Future Value Calculator</h1>
    <label>Investment Amount:</label>
    <span><?php echo $investment_f; ?></span>
    <br>
    <label>Yearly Interest Rate:</label>
    <span><?php echo $yearly_rate_f; ?></span>
    <br>
    <label>Number of Years:</label>
    <span><?php echo $years; ?></span>
    <br>
    <label>Future Value:</label>
    <span><?php echo $future_value_f; ?></span>
  </body>
</html>