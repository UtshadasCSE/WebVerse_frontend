<?php
include 'connect.php';
if (isset($_GET['deleteid'])) {
    $id = $_GET['deleteid'];

    $sql = "delete from `info` where id=$id";
    $result = mysqli_query($connect, $sql);
    if ($result) {
        header("location:display.php");
    } else {
        die(mysqli_error($connect));
    }
}