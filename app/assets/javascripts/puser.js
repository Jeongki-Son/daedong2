 $(function() {
     var pusher = new Pusher('1027adb1b8bdf7461125', {
  encrypted: true
});
var channel = pusher.subscribe('onlyone');
channel.bind('new_message', function(data) {
  var txt = data.message;
            $("#chat_list").append("<p>"+txt+"</p>");
    });

    $("#submit_msg").click(function(){
    $.ajax({
        data: {nickname: $("#chat_nickname").val()},
        data: {content: $("#chat_content").val()},
        url: "/home/send_msg",
        success: function(){
            $("#chat_nickname").val('');
            $("#chat_nickname").focus();
            $("#chat_content").val('');
            $("#chat_content").focus();
        }
        });
    });
})
                    