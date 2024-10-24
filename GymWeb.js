const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
if(req.url=='/' ){
    res.sendFile(__dirname + "/GymWeb.html");
}

else if (req.url == '/About') {
    res.sendFile(__dirname + "/About.html");
}

else if (req.url == '/ContactUS') {
    res.sendFile(__dirname + "/ContactUS.html");
}

});