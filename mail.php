<?php $name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile number'];
$message= $_POST['message'];
$formcontent=" From: $name \n Phone: $phone \n Message: $message";
$recipient = "YOUREMAIL@HERE.COM";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
