var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('root');
});

app.get('/liff', (req, res, next) => {
  res.render('index', {});
});

app.post('/work', (req, res) => {
  console.log('post request is comming');
})

app.listen(8888);
