var express = require('express');
var app = express();
var path = require('path')

var port = process.env.PORT;

app.set('view engine'. 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));


app.get('/', funtion(req, res){
	res.render('index.ejs');
});


app.listen(port, funtion(){
	console.log('SERVER RUNNING... PORT: ' + port);
})