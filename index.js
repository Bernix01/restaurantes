const express = require("express");
const bodyParser = require('body-parser');
const Factura = require('./src/models/FacturaModel.js').Factura;
const Recibo = require('./src/models/ReciboModel.js').Recibo;
const Ticket = require('./src/models/Ticket.js').Ticket;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_HOST || 'mongodb://localhost:27017/restaurantes');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/docs'));

app.listen(process.env.PORT || 8080, () => {});

app.get('/hola', (req, res) => {
  res.send(200, "HOLA!");
});
app.post('/contacto', (req, res) => {
  res.send(200, "recibido!");
});

app.post('/like', (req, res) => {
  let rest = req.body.restaurant;
  rest.likes++;
  res.send(200, rest);
});



//obtener todos
app.get('/api/facturas', (req, res) => {
  Factura
    .find({})
    .catch((err) => {
      res.send(500, "error!");
    })
    .then((facturas) => {
      res.json(facturas);
    });
});

app.get('/api/recibos', (req, res) => {
  Recibo
    .find({})
    .catch((err) => {
      res.send(500, "error!");
    })
    .then((recibos) => {
      res.json(recibos);
    });
});

//actualizar crear
app.post('/api/facturas/:id', (req, res) => {
  console.log(req.body)
  Factura.findOneAndUpdate({
    "_id": req.params.id
  }, req.body).then((factura) => {
    console.log("updated!")
    res.send(200, "ok");
  }).catch((err) => {
    res.send(500, "La factura no pudo ser modificada");
  })
});

app.post('/api/recibos/:id', (req, res) => {
  console.log(req.body)
  Recibo.findOneAndUpdate({
    _id: req.param.id
  }, req.body).then((recibo) => {
    console.log("updated!")
    res.send(200, "ok");
  }).catch((err) => {
    res.send(500, "El recibo no se pudo modificar");
  })
});

//obtener por id
app.get('/api/facturas/:id', (req, res) => {
  //verificar si el id es valido
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Factura
    .findById({_id: req.params.id})
    .then((factura) => {
      res.json(factura);
    })
    .catch((err) => {
      res.send(500, "derp");
    })
});

app.get('/api/recibos/:id', (req, res) => {
  if(!req.params.id.match(/^[0-9a-fA-F]{24}$/))
    res.send(400, "bad id");
  Recibo
    .findById({_id: req.param.id})
    .then((recibo) => {
      res.json(recibo);
    })
  .catch((err) => {
    res.send(500, "derp");
  })
});

//borrar
app.delete('/api/facturas', (req, res) => {
  if (!req.query.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Factura
    .findByIdAndRemove(req.query.id)
    .catch((err) => {
      res.send(500, "derp");
    })
    .then(() => {
      res.send(200, "ok");
    })

})

app.delete('/api/recibos', (req, res) => {
  if (!req.query.id.match(/^[0-9a-fA-F]{24}$/))
    res.send(400, "bad id");
  Recibo
    .findByIdAndRemove(req.query.id)
    .catch((err) => {
      res.send(500, "derp");
    })
    .then(() => {
      res.send(200, "ok");
    })
});

//crear
app.put('/api/facturas', (req, res) => {
  let factura = new Factura({numFactura: req.body.numfactura, nombreEmpresa: req.body.cliente, fechaPago: req.body.date, cantidad: req.body.costo, estado: req.body.estado});
  factura
    .save()
    .then((factura) => {
      res.send(200, "ok");
    })
    .catch((err) => {
      res.send(500, "La factura ya existe");
    })
});

app.put('/api/recibos', (req, res) => {
  let recibo = new Recibo({numRecibo: req.body.numrecibo, fechaPago: req.body.date, nombreRecibido: req.body.nombrerecibido, estado: req.body.estadoactual, concepto: req.body.concep});
  recibo
    .save()
    .then((recibo) => {
      res.send(200, "ok");
    })
    .catch((err) => {
      res.send(500, "El recibo ya existe");
    })
});


//obtener todos
app.get('/api/tickets', (req, res) => {
  Ticket
    .find({})
    .catch((err) => {
      res.send(500, "error!");
    })
    .then((tickets) => {
      res.json(tickets);
    });
});

//update
app.post('/api/tickets/:id', (req, res) => {
  if(!req.body)
    return res.send(400,"You failed!");
  console.log(req.params.id)
  Ticket.findOneAndUpdate({
    _id: req.params.id 
  }, req.body).then((recibo) => {
    console.log("updated!")
    res.send(200, "ok");
  }).catch((err) => {
    console.log(err)
    res.send(500, "El recibo no se pudo modificar");
  })
});

//crear
app.put('/api/tickets', (req, res) => {
  let ticket = new Ticket({
    origen: req.body.origen,
    fechaPago: req.body.fechaPago,
    destino: req.body.destino,
    adquiriente: req.body.adquiriente,
    puesto: req.body.puesto,
    precio:req.body.precio} );
  ticket
    .save()
    .then((ticket) => {
      res.send(200, "ok");
    })
    .catch((err) => {
      console.log(err);
      res.send(500, "El ticket ya existe");
    })
});

//borrar
app.delete('/api/tickets', (req, res) => {
  if (!req.query.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Ticket
    .findByIdAndRemove(req.query.id)
    .catch((err) => {
      console.log(err);
      res.send(500, "derp");
    })
    .then(() => {
      res.send(200, "ok");
    })

});


//obtener por id
app.get('/api/tickets/:id', (req, res) => {
  //verificar si el id es valido
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) 
    res.send(400, "bad id");
  Ticket
    .findById({_id: req.params.id})
    .then((ticket) => {
      res.json(ticket);
    })
    .catch((err) => {
      res.send(500, "derp");
    })
});

app.get('/datos', (req, res) => {
  res.send(200, {
    "mas-votados": [
      {
        "nombre-plato": "Encebollado",
        "restaurante": "COCA COLA",
        "img": "http://via.placeholder.com/200x130",
        "fecha": "Martes 4",
        "likes": 54

      }, {
        "nombre-plato": "Arroz con pollo",
        "restaurante": "CELEX",
        "img": "http://via.placeholder.com/200x130",
        "fecha": "Jueves 6",
        "likes": 61
      }

    ],
    "esta-semana": [
      {
        "date": "Lunes",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Martes",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }, {
        "date": "Miércoles",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Jueves",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }, {
        "date": "Viernes",
        "menu": [
          {
            "nombre-plato": "Lasagna",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 50
          }, {
            "nombre-plato": "Cazuela",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 20
          }, {
            "nombre-plato": "Estofado de carne",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 35
          }
        ]
      }, {
        "date": "Sábado",
        "menu": [
          {
            "nombre-plato": "Caldo de salchicha",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 30
          }, {
            "nombre-plato": "Caldo de bola",
            "restaurante": "COCA COLA",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 15
          }, {
            "nombre-plato": "Sancocho de pescado",
            "restaurante": "CELEX",
            "dscr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
                " tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandi" +
                "t elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris m" +
                "o lestie elit, et lacinia ipsum quam nec dui.",
            "likes": 23
          }
        ]
      }
    ]
  });

});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/docs/index.html');
});
