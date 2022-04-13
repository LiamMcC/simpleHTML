var express = require("express"); // call express to be used by the application.
var app = express();

const path = require('path');


app.use(express.static("views")); // allow the application to access the views folder contents to use in the application
// If you have images, styles etc code you need to replicate this code and change the bit in the brackets
// function to set up a simple hello response 


// function to render the home page
app.get('/', function(req, res){
   
    res.sendFile(path.join(__dirname +'/index.html'));
  
});




// We need to set the requirements for teh application to run

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ......... Yessssssssssssss!")
});



 // var clubData = new Club("Liam FC", "On A Pitch Somewhere").display()