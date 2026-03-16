<?php
session_start();
?>

<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Fashion Shop</title>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>

body{
margin:0;
font-family:Arial;
background:linear-gradient(135deg,#1e1e2f,#3a3a5a);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
color:white;
}

.container{
text-align:center;
background:rgba(255,255,255,0.1);
padding:40px;
border-radius:12px;
backdrop-filter:blur(10px);
box-shadow:0 10px 25px rgba(0,0,0,0.3);
}

h1{
margin-bottom:25px;
}

.btn{
display:block;
margin:12px auto;
padding:12px 20px;
width:220px;
border:none;
border-radius:8px;
font-size:16px;
cursor:pointer;
text-decoration:none;
color:white;
transition:0.3s;
}

.login{
background:#3498db;
}

.register{
background:#27ae60;
}

.admin{
background:#ff9800;
}

.shop{
background:#9b59b6;
}

.btn:hover{
transform:translateY(-3px);
box-shadow:0 6px 12px rgba(0,0,0,0.3);
}

</style>
</head>

<body>

<div class="container">

<h1><i class="fa fa-shirt"></i> Fashion Shop</h1>

<a class="btn login" href="login.php">
<i class="fa fa-right-to-bracket"></i> Đăng nhập
</a>

<a class="btn register" href="register.php">
<i class="fa fa-user-plus"></i> Đăng ký
</a>

<a class="btn admin" href="admin.php">
<i class="fa fa-user-shield"></i> Admin Panel
</a>

<a class="btn shop" href="frontend/">
<i class="fa fa-store"></i> Vào cửa hàng
</a>

</div>

</body>
</html>