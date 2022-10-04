<?php

mailOutputForm($_POST['name'], $_POST['subject'], $_POST['email'], $_POST['message']);

function mailOutputForm($name, $subject, $email, $message)
{
    mail('madalenaantunessousa@gmail.com',
        $subject,
        'The Contact Name: ' . $name . 'The Message' . $message,
        'From: ' . $email);
}

header('Location: ../contactconcluded.php');