<?php
include "./api.php";

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

$row = mysqli_fetch_array($result,MYSQLI_ASSOC); //值传给数组

if($row['name']===$userName && $row['pwd'] ===$userPwd){
    Response::json(200, "数据返回成功", $row);
    //如果有用户名和密码匹配，则echo
}else{
    Response::json(0, "数据返回失败", '');
}