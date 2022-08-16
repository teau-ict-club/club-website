<?php
//start session
session_start();

//if user is already logged in then redirect to home page
if(isset($_SESSION["userid"]) && $_SESSION["userid"]==true) {
    header("location: ../index.php");
    exit;
}
?>