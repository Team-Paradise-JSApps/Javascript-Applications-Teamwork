import io from 'socket.io/socket.io.js';

export default function chatController() {
        var socket = io(),
            $messageField = $("#message"),
            $chat = $("#chat"),
            $submitBtn = $("#submitBtn");

    socket.emit('')

        $submitBtn.on('click', function (ev) {
            ev.preventDefault();
            if ($messageField.val()) {
                socket.emit('sent-message', $messageField.val());
                $messageField.val('');
            }
        });

        $("#message").keypress(function (e) {
            var key = e.which;
            if (key == 13) {
                $submitBtn.click();
            }
        });

        socket.on('new-message', function (data, msg) {
            $chat.append('<b>' + data.username + ': </b>' + msg + '<br>');

        });
    }
