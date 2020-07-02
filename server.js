const express = require("express");
const app = express();
// socket.io stuff
const server = require("http").createServer(app) // passing app to server
// const io = require("socket.io")(server) // then passing server to socket.io
const mongoose = require("mongoose");

require("dotenv").config();


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// io.on("connection", (socket) => {
//     console.log("Client connected");
//     socket.on("disconnect", () => console.log("Client disconnected"));
// });

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// setInterval(() => io.emit('time', new Date().toTimeString()), 3000);