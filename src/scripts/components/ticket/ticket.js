const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ticket = new Schema({
	fechaEmision: {type: Date, required: true},
    origen: {type: String, required: true, unique: true},
    destino: {type: String, required: true, unique: true},
	precio: {type: Number, required: true},
	adquiriente: {type: String, required: true, unique: true},
	puesto: {type: Number, required: true}
})

FacturaSchema.path('adquiriente').validate(function(dato){
	return dato.length === 16;
});

const Factura = mongoose.model('ticket', ReciboSchema, 'ticket');

module.exports = {
	Ticket: Ticket
};