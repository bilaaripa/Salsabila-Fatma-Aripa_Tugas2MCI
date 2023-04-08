const {ticket} = require('../models')

const getAllTicket = () => {
    return ticket.findAll(
        {
            attributes: ['ticket_price']
        }
    )
}

const getTicketByPrice = (ticket_price) => {
    return ticket.findOne(
        {
            where: {
                ticket_price: ticket_price
            }
        }
    )
}

const createTicket = (data) => {
    return ticket.create(data)
}

const updateTicket = (data, ticket_price) => {
    return ticket.update(data, {
        where: {
            ticket_price: ticket_price
        }
    })
}

const deleteTicket = (ticket_price) => {
    return ticket.destroy({
        where: {
            ticket_price: ticket_price
        }
    })
}

module.exports = {
    getAllTicket,
    getTicketByPrice,
    createTicket,
    updateTicket,
    deleteTicket
}