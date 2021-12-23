<?php
$to      = 'joshleonwraymusic@gmail.com';
$from    = 'contact-us';
$email   = $_POST['email'];
$subject = 'Received New Email!';
$message = "Name: ".$_POST['name']."\nEmail: ".$_POST['email']."\nSubject: ".$_POST["subject"]."\nMessage: ".$_POST['message']."";
$headers = 'From: '.$from."\r\n" .
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers))
{
	echo'<script>swal("Thank you!", "Message has been sent successfully!", "success")</script>';
	echo'<script>$("#reset")[0].reset()</script>';
}
else
{
	echo'<script>swal("oops", "email not send!", "info")</script>';
}
?>