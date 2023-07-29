<?php
include 'connect.php';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];

    $sql = "INSERT INTO `info` (`Name`, `Email`, `Mobile`, `Password`) VALUES ('$name', '$email', '$mobile', '$password')";
    $result = mysqli_query($connect, $sql);
    if ($result) {
        // echo "Data inserted successfully";
        header('location:display.php');
    } else {
        die(mysqli_error($connect));
    }
}


?>


<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Crud Operation 02</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <style>
        body {
            background-color: #FFEEB3;

        }

        .container {
            width: 60%;
            margin: 20px auto;

        }

        .container h1 {
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container my-5">
        <h1>Lab Perfomence</h1>
        <form method="post">
            <div class="mb-3">
                <label>Name</label>
                <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name:">
            </div>
            <div class="mb-3">
                <label>Email</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email:">
            </div>
            <div class="mb-3">
                <label>Mobile Number</label>
                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="Enter your phone number:">
            </div>
            <div class="mb-3">
                <label>Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Enter your password:">
            </div>

            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>

</html>