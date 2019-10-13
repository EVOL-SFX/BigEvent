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

    logout:function(options){
        $.ajax({
            type:'post',
            url: USER_LOGOUT,
            success:options.callback
        })
    },

    getInfo:function(options){
        $.ajax({
            url:USER_INFO,
            success:options.callback
        });
    },

    info_get:function(options){
        $.ajax({
            url:USER_INFO_GET,
            success:options.callback
        });
    },

    info_edit:function(options){
        $.ajax({
            type:'post',
            url:USER_INFO_EDIT,
            data:options.data,
            contentType:false,
            processData:false,
            success:options.callback
        });
    }
}