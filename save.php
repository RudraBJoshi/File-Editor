<?php
$content = $_POST['content'];
$isHtml = $_POST['isHtml'];

$fileName = $isHtml ? 'document.html' : 'document.txt';
file_put_contents($fileName, $content);
?>
