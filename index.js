var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
  console.log('"🚀 ~ file: index.js:25 ~ greeting"');
});

app.get("/api/timestamp", function (req, res) {
  var now = new Date();
  res.json({ unix: now.getTime(), utc: now.toUTCString() });
});

app.get("/api/timestamp/:date", function (req, res) {
  console.log("🚀 ~ file: index.js:29 ~ req", req.params);
  const dateString = req.params.date;
  console.log("🚀 ~ file: index.js:31 ~ dateString", dateString);
  const checkedDate = new Date(dateString);
  console.log("🚀 ~ file: index.js:33 ~ checkedDate", checkedDate);
  if (checkedDate == "Invalid Date") {
    res.json({ error: "Invalid date" });
  } else {
    res.json({ unix: checkedDate.getTime(), utc: checkedDate.toUTCString() });
  }
});

var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
