<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "kennyjayona7@gmail.com";
    $from = htmlspecialchars($_POST['from']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = "From: " . $from . "\n\n" . htmlspecialchars($_POST['body']);
    $headers = "From: no-reply@yourdomain.com" . "\r\n" .
               "Reply-To: " . $from . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (filter_var($from, FILTER_VALIDATE_EMAIL)) {
        if (mail($to, $subject, $message, $headers)) {
            header("Location: index.html?status=success");
            exit();
        } else {
            header("Location: index.html?status=error");
            exit();
        }
    } else {
        header("Location: index.html?status=invalid-email");
        exit();
    }
}
?>
