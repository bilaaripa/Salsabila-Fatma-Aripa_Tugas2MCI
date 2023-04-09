const ticket = require('../models/ticket');
const ticketService = require('../services/ticketService');

const getAllTicket = async (req, res) => {
    ticketService.getAllTicket()
    .then(tickets => {
        if(!tickets) { 
            res.status(404).send({
                status : 'error',
                message : 'Data Tiket tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data Tiket berhasil ditemukan',
                data : tickets
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createTicket = async (req, res) => {
    console.log(req.body)
    const data = {
        ticket_price : req.body.ticket_price,
    }
    ticketService.createTicket(data)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data Tiket berhasil ditambahkan',
            data : ticket
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const updateTicket = (req, res) => {
    const ticket_price = req.params.ticket_price;
    if(ticket_price === 0) {
        return res.status(400).send({
            status : 'error',
            message : 'Ticket price tidak valid',
            data : {}
        });
    }
    ticketService.updateTicket(req.body, ticket_price)
    .then(ticket => {
        res.status(200).send({
            status : 'success',
            message : 'Data Tiket berhasil diupdate',
            data : ticket
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const deleteTicket = (req, res) => {
    const ticket_price = req.params.ticket_price;
    if(ticket_price.length === 0) {
        return res.status(400).send({
            status : 'error',
            message : 'Ticket Price tidak valid',
            data : {}
        });
    }
    ticketService.deleteTicket(ticket_price)
    .then(ticket => {
        res.status(200).send({
            status : 'success',
            message : 'Data Tiket berhasil dihapus',
            data : ticket
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

module.exports = {
    getAllTicket,
    createTicket,
    updateTicket,
    deleteTicket
}