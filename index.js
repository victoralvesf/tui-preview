const express = require("express");
const app = express();

app.listen(8090, () => {
  console.log("Application started and Listening on port 8090");
});

// serve your css as static
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/components", (req, res) => {
  res.sendFile(__dirname + "/components/index.html");
});

app.get("/components/*", (req, res) => {
  res.sendFile(__dirname + req._parsedUrl.pathname + "/index.html");
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});