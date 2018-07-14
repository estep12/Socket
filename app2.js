var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index2.html');
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("new_notification", (data) => {
        console.log(data.title,data.message);
        io.sockets.emit("show_notifications", {
            title: data.title,
            message: data.message, 
            icon: data.icon
        });
    });
}); 
 


http.listen(3000, function () {
    console.log('listening on *:3001');
});


