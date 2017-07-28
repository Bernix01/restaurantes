var express = require("express");
var bodyParser = require('body-parser');
var Factura = require('./models.js').Factura;
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/docs'));

app.listen(process.env.PORT || 8080, function () {
  console.log('Node app is running on port', process.env.PORT || 8080);
});

app.get('/hola', function (req, res) {
  res.send(200, "HOLA!");
});
app.post('/contacto', function (req, res) {
  res.send(200, "recibido!");
});

app.post('/like', function (req, res) {
  let rest = req.body.params.restaurant;
  rest.likes++;
  res.send(200, rest);
});

app.get('/api/facturas', function (req, res) {
  Factura
    .find({})
    .catch((err) => {
      console.log(err);
      res.send(500, "error!");
    })
    .then((facturas) => {
      res.send(200, facturas);
    });
});

app.get('/api/facturas', function (req, res) {
  Factura
    .find({})
    .catch((err) => {
      console.log(err);
      res.send(500, "error!");
    })
    .then((facturas) => {
      res.send(200, facturas);
    });
});
//obtener por id
app.get('/api/facturas/:id', function (req, res) {
  Factura
    .findById(req.params.id)
    .then((factura) => {
      res.send(200, factura);
    })
    .catch((err) => {
      res.send(500, "derp");
    })
});

//borrar
app.delete('/api/facturas',(req,res) => {
  Factura.findByIdAndRemove(req.params.id).then(()=>{
    res.send(200,"ok");
  }).catch((err)=>{
    console.log("error deleting",err);
    res.send(500,"derp");
  })
})

//crear
app.put('/api/facturas', function (req, res) {});

app.get('/datos', function (req, res) {
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

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/docs/index.html');
});
