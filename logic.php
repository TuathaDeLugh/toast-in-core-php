<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    setcookie("data", "Welcome $name", time() + 5, "/");
    header("location:./index.php");
}
else{
    header('location:./index.php');
}
?>
