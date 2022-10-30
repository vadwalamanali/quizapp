const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path=require('path');

app.use(express.json());

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 app.use(express.static('public'))

 app.use(express.static(path.join(__dirname, '/frontend/build')));

app.all('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 app.use(express.urlencoded({ extended: true }));

 


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'))
  //res.send({ message: "Welcome." });
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});