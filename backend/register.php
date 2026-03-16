<?php
include "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];

$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users(fullname,email,phone,password,role)
VALUES('$fullname','$email','$phone','$password','user')";

if($conn->query($sql) === TRUE){

echo "<script>
alert('Đăng ký thành công');
window.location='../frontend/login.html';
</script>";

}else{

echo "<script>
alert('Email đã tồn tại');
window.location='../frontend/register.html';
</script>";

}

}
?>