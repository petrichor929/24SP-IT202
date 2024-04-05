$(document).ready( () => {
    //set focus on email input
    $("#email").focus(); //allows the cusrsor to be inside the email box

    //handle submit even on email form
    $("#email_form").submit( (event) => {
        const email = $("#email").val();
        let isValid = true;

        //validate the email address
        if(email === "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        //submit the form ONLY if all entries are valid
        if(isValid) {
            $("#email_form").submit();
        } else {
            event.preventDefault();
        }
    });

    //handle click on Reset Form button
    $("#reset_button").click( () => {
        $("#email").val("");
        //reset span element
        $("#email").next().text("*");
        $("#email").focus();
    });
});