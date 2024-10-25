const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const productos = require('./productos');
const categorias = require('./categorias' );

app.use(cors());
app.get('/productos', (req, res)=>{
    res.json(productos);
});
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
  
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  });


app.get('/categorias',(req,res)=>{
  res.json(categorias);
});
app.get('/categorias/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const categoria=categorias.find(c => c.id ===id);
  if (categoria){
    res.json(categoria);
  }else{
    res.status(404).send('Categoria no encontrada')
  }
});

app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});