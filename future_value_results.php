<?php
//get the form from the form
$investment = filter_input(INPUT_POST, 'investment', FILTER_VALIDATE_FLOAT);
$interest_rate = filter_input(INPUT_POST, 'interest_rate' FILTER_VALIDATE_FLOAT);
$years = filter_input(INPUT_POST, 'years', FILTER_VALIDATE_INT);

$error_message = '';

//validate investment
if( $investment === FALSE) [
    error_message = "Investment must be a valid number."; //this shows the user that their input isnt valid
]

if( $error_message == '') {
    include("future_value_form.php");
    exit();
}

//calculate the future value
?>