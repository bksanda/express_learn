var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function (req, res){
	res.render('guac', {allergies: "onions"});
});

app.get("/add/:x/:y", function (req,res) {
	//res.send("result: " + (parseInt(req.params.x) + parseInt(req.params.y)) );
	res.render("taco", {sum: parseInt(req.params.x) + parseInt(req.params.y)});
});

app.get("/multiply/:x/:y", function (req,res) {
	res.send("result: " + (parseInt(req.params.x) * parseInt(req.params.y)) );
});

app.get("/hello", function(req,res) {
	res.send("this is the second page.");
})

app.listen(3000);