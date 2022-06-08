var express = require("express");
var app = express();
var { autores } = require("./models");
var { livros } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

//Usuarios = autores
//Empresa = livros

//autores

app.get("autores/:id/livros" , async function (req, res){
  let resultado = await autores.findByPk(req.params.id,{
    incluid: 'livros'
  });
  res.json(resultado.livros);
});

app.get("/autores",async function(req, res){
   var resul = await autores.findAll(req.body);
  res.json(resul);
});

app.get("/autores/:id", async function(req, res){
  var mostrar = await autores.findOne( {where: {id:req.params.id} });
    res.json(mostrar);
});

app.post("/autores",function(req, res){
  var resultado = autores.create(req.body);
  res.json(resultado);
});

app.put("/autores/:id", function(req, res){
  var mudar = autores.update(req.body, {where: {id: req.params.id} });
  res.json(mudar);
});

app.delete("/autores/:id", function(req, res){
  var deletar = autores.destroy({where: {id: req.params.id} });
  res.json(deletar);
});

//livros

app.get("livros/:id/autores" , async function (req, res){
  let resultado = await empresa.findByPk(req.params.id,{
    incluid: 'usuario'
  });
  res.json(resultado.usuario);
});

app.get("/livros",async function(req, res){
   var resul = await livros.findAll(req.body);
  res.json(resul);
});

app.get("/livros/:id", async function(req, res){
  var mostrar = await livros.findOne( {where: {id:req.params.id} });
    res.json(mostrar);
});

app.post("/livros",function(req, res){
  var resultado = livros.create(req.body);
  res.json(resultado);
});

app.put("/livros/:id", function(req, res){
  var mudar = livros.update(req.body, {where: {id: req.params.id} });
  res.json(mudar);
});

app.delete("/livros/:id", function(req, res){
  var deletar = livros.destroy({where: {id: req.params.id} });
  res.json(deletar);
});


app.listen(3007, function(){
  console.log("eba");
});