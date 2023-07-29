<?php 
  $server='localhost';
  $username='root';
  $password='';
  $dbName='crud02';

  $connect=new mysqli($server,$username,$password,$dbName);
  if(!$connect){
    die (mysqli_error($connect));
  }
