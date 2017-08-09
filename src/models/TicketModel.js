const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
	fechaEmision: {type: Date, required: true, unique: true},
	origen: {type: String, required: true},
	destino: {type: String, required: true},
	precio: {type: Number, required: true},
    adquirente: {type: String, required: true},
	puesto : {type: Number, required: true}
})

TicketSchema.path('adquirente').validate(function(dato){
	return dato.length === 10;
});

const Ticket = mongoose.model('ticket', TicketSchema, 'ticket');

module.exports = {
	Ticket: Ticket
};