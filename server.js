var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var GitHubApi = require("node-github");
var github = new GitHubApi({
      version: "3.0.0"
});


app.use ("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/" , function(req, res){
    res.sendFile(process.cwd() + "/views/index.html");
});
app.get("/register" , function(req, res){
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get("/dashboard", function(){
  res.sendFile(process.cwd() + "/views/dashboard.html");

});
  


app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);

});
