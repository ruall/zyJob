<?php
    class Response {
        public static function json($code, $message = '', $data = []){

            # 判断参数有效性及错误处理
            // code...

            # 结果(最终数组)
            $result = [
                "code" => $code,
                "msg" => $message,
                "data" => $data
            ];

            # 转换为json并打印测试
            echo json_encode($result);
            exit;
        }
    }