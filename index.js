var express = require("express");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/docs'));


app.listen(process.env.PORT || 8080, function () {
    console.log('Node app is running on port', process.env.PORT || 80);
});

app.get('/hola',function(req,res){
	res.send(200,"HOLA!");
});
app.post('/contacto',function(req,res){
	res.send(200,"recibido!");
});

app.post('/like',function(req,res){
	
console.log(req.body.restaurant);
	
});


app.get('/datos',function(req,res){
	res.send(200, {
    "mas-votados" : [
        {
            "nombre-plato" : "Encebollado",
            "restaurante" : "COCA COLA",
            "img" : "http://via.placeholder.com/200x130",
            "fecha" : "Martes 4",
            "likes" : 54

        },
        {
            "nombre-plato" : "Arroz con pollo",
            "restaurante" : "CELEX",
            "img" : "http://via.placeholder.com/200x130",
            "fecha" : "Jueves 6",
            "likes" : 61
        }
        
    ],
    "esta-semana" : [
        {
            "date" : "Lunes",
            "menu" : [
                {
                    "nombre-plato" : "Lasagna",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 50
                },
                {
                    "nombre-plato" : "Cazuela",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 20
                },
                {
                    "nombre-plato" : "Estofado de carne",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 35
                }
            ]
        },
        {
            "date" : "Martes",
            "menu" : [
                {
                    "nombre-plato" : "Caldo de salchicha",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 30
                },
                {
                    "nombre-plato" : "Caldo de bola",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 15
                },
                {
                    "nombre-plato" : "Sancocho de pescado",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 23
                }
            ]
        },
        {
            "date" : "Miércoles",
            "menu" : [
                {
                    "nombre-plato" : "Lasagna",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 50
                },
                {
                    "nombre-plato" : "Cazuela",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 20
                },
                {
                    "nombre-plato" : "Estofado de carne",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 35
                }
            ]
        },
        {
            "date" : "Jueves",
            "menu" : [
                {
                    "nombre-plato" : "Caldo de salchicha",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 30
                },
                {
                    "nombre-plato" : "Caldo de bola",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 15
                },
                {
                    "nombre-plato" : "Sancocho de pescado",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 23
                }
            ]
        },
        {
            "date" : "Viernes",
            "menu" : [
                {
                    "nombre-plato" : "Lasagna",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 50
                },
                {
                    "nombre-plato" : "Cazuela",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 20
                },
                {
                    "nombre-plato" : "Estofado de carne",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 35
                }
            ]
        },
        {
            "date" : "Sábado",
            "menu" : [
                {
                    "nombre-plato" : "Caldo de salchicha",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 30
                },
                {
                    "nombre-plato" : "Caldo de bola",
                    "restaurante" : "COCA COLA",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 15
                },
                {
                    "nombre-plato" : "Sancocho de pescado",
                    "restaurante" : "CELEX",
                    "dscr" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo lestie elit, et lacinia ipsum quam nec dui.",
                    "likes" : 23
                }
            ]
        }
    ]
});

});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/docs/index.html');
});
