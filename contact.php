<?php
/* Set e-mail recipient */
$myemail  = "gecmartins@zoho.com";

/* Check all form inputs using check_input function */
$first_name = check_input($_POST['first_name'], "Enter your name");
$last_name  = check_input($_POST['last_name'], "Write a subject");
$email    = check_input($_POST['email']);
$comments = check_input($_POST['comments'], "Write your comments");
$subject = "Hello, Gui! This is ".$first_name;

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */
$message = "Hello, Gui!

Your contact form has been submitted by:

First Name: $first_name
Last Name: $last_name
E-mail: $email

Comments:
$comments

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>