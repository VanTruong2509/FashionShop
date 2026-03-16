<?php
session_start();
include "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

$email = $_POST['email'];
$password = $_POST['password'];

/* ===== kiểm tra admin ===== */

$sql = "SELECT * FROM admin WHERE email='$email'";
$result = $conn->query($sql);

if($result->num_rows > 0){

$admin = $result->fetch_assoc();

if($password == $admin['password']){

$_SESSION['admin'] = $admin['fullname'];

header("Location: ../frontend/admin.html");
exit();

}else{

echo "<script>
alert('Sai mật khẩu admin');
window.location='../frontend/login.html';
</script>";

}

}else{

/* ===== kiểm tra user ===== */

$sql2 = "SELECT * FROM users WHERE email='$email'";
$result2 = $conn->query($sql2);

if($result2->num_rows > 0){

$user = $result2->fetch_assoc();

if(password_verify($password,$user['password'])){

$_SESSION['user'] = $user['fullname'];

header("Location: ../frontend/admin.html");
exit();

}else{

echo "<script>
alert('Sai mật khẩu');
window.location='../frontend/login.html';
</script>";

}

}else{

echo "<script>
alert('Email không tồn tại');
window.location='../frontend/login.html';
</script>";

}

}

}
?>