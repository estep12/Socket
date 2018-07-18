var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

io.on("connection", (socket) => {
    console.log("a user connected");
    // socket.emit("message", "you are connected")
    // socket.on('message', function (message) {
    //     console.log('A client is speaking to me! They’re saying: ' + message);
    // }); 
    // socket.on("chat message", (msg) => {
    //     io.emit("chat message", msg)
    //     console.log(("message: " + msg));

    // })

})


  


http.listen(3000, function () {
    console.log('listening on *:3000');
});