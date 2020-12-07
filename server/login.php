<?php

$userName = $_POST['userName'];
$userPwd = $_POST['userPwd'];

$host = '127.0.0.1';
$user = 'root';
$pwd = 'root';
$dbname = 'job';
$port = 3306;

$link = mysqli_connect($host, $user, $pwd, $dbname, $port);

//$sql = "INSERT INTO `login`(`name` , `pwd`) VALUES('{$userName}' , '{$userPwd}')"; 注册

$sql = "SELECT * FROM `login` WHERE `name`='{$userName}' AND `pwd`='{$userPwd}'"; // 登录

$result = mysqli_query($link, $sql);
echo $result;

// // 写入成功,执行结果是true,写入失败是false
if($result == true){
    echo json_encode('1');
}else{
    echo json_encode('0');
}