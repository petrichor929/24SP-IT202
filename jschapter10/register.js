$(document).ready( () => {
    //move focus to the first textbox
    $("#email").focus();

    //the handler for the change event of the radio buttons
    $(":radio").change( () => {
        const radioButtonValue = $(":radio:checked").val();
        if(radioButtonValue == "corporate") {
            //enable company name input
            $("#company_name").prop("disabled", false);
            $("#company_name").next().text("*");
        } else {
            //readio button value is indiividual
            //disable company name input
            $("#company_name").prop("disabled", true);
            $("#company_name").next().text("");
        }
    });
    
    //the handler for submit event
    $("#member_form").submit( event => {
        let isValid = true;

        //validate the email with regular expression
        const emailPattern =
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val();

        if(email == "") {
            //Step 1: inform the user
            $("#email").next().text("This field is required.");
            //Step 2: set the flag
            isValid = false;
        } else if(emailPattern.test(email) == false){
            //Step 1 and 2
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        //validate password entry
        const password = $("#password").val();
        if(password.length < 6) {
            $("#password").next().text("Must be 6 characters or more");
            isValid = false;
        } else {
            $("#password").next().text("");
        }

        //validate company name entry
        if($("#company_name").prop("disabled") == false) {
            const companyName = $("#company_name").val();
            isValid = true;
            //retrieve company_name value
            //if value is empty
            //set .next().text to 'this field is required'
            //and set isValid flag to false
             //otherwise
            //clear .next() text
            if(companyName == "") {
                //Step 1: inform the user
                $("#company_name").next().text("This field is required.");
                //Step 2: set the flag
                isValid = false;
            } else {
                $("#company_name").next().text("");
            }
        }
        //prevent the submission of the form
        //if any of the entries are invalid
        if(isValid == false) {
            event.preventDefault();
        }
    });
});

