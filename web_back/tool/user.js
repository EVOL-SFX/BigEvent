var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN, // url地址是从config.js中获取的，要学会习惯
            // 用户传入请求参数
            data: options.data,
            // 用户传入回调函数
            success: options.callback
        });
    },
}