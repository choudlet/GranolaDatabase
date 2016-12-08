const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const knex = require('./db/knex');
const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Listening on ${port}`);
});

app.get('/granola_bars', function(req,res) {
  knex('granola_bar_type').then((data) => {
    res.json(data);
  });
});

app.get('/granola_bars/:id', function(req,res) {
  let id = req.params.id;
  console.log(id);
  knex('granola_bar_type').where('id', id).first().then((data) => {
    res.json(data);
  }).catch(function(e){
    res.json(e);
  });
});

app.post('/granola_bars', function(req,res){
  let bar = req.body;
  knex('granola_bar_type').insert(bar)
  .then(function(){
    res.send("Success");
  }).catch(function(e){
    res.json(e);
  });
});
