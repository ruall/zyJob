$("[name='submit']").click(function(){
    $.ajax({
        url:'./server/login.php',
        data:{userName:$('[name="userName"]').val(),userPwd:$('[name="userPwd"]').val()},
        type:'post',
        dataType:'json',
        success(res){
            if(res == 200){
                alert($('[name="userName"]').val()+'登录成功');
            }else{
                alert('登录失败，账号或密码错误！')
            }
        }
    })
    console.log($('[name="userName"]').val())
})