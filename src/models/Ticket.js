const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
	origen: {type: String, required: true, unique: true},
    fechaPago: {type: Date, required: true},
    destino: {type: String, required: true},
    adquiriente: {type: String, required: true},
    puesto: {type: String, required: true},
	precio: {type: Number, required: true},
})


const Ticket = mongoose.model('ticket', TicketSchema, 'ticket');

module.exports = {
	Ticket: Ticket
};