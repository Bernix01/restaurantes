const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
	fechaEmision: {type: Date, required: true},
    origen: {type: String, required: true, unique: true},
    destino: {type: String, required: true, unique: true},
	precio: {type: Number, required: true},
	adquiriente: {type: String, required: true, unique: true},
	puesto: {type: Number, required: true}
})

const Ticket = mongoose.model('ticket', TicketSchema, 'ticket');

module.exports = {
	Ticket: Ticket
};