<?php

$userName = $_POST['userName'];
$userPwd = $_POST['userPwd'];

$host = '127.0.0.1';
$user = 'root';
$pwd = 'root';
$dbname = 'job';
$port = 3306;

$link = mysqli_connect($host, $user, $pwd, $dbname, $port);

$sql = "SELECT * FROM `login` WHERE `name`='{$userName}' AND `pwd`='{$userPwd}'";

$result = mysqli_query($link, $sql);

$row = mysqli_fetch_array($result); //值传给数组

if($row['name']===$userName && $row['pwd'] ===$userPwd){
    echo json_encode('200');
    //如果有用户名和密码匹配，则echo
}else{
    echo json_encode('0');
}