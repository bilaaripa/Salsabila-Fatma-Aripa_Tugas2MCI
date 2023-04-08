const ticketRepository = require('../repositories/ticketRepository');

const getAllTicket = async () => {
    try {
        const tickets = await ticketRepository.getAllTicket();
        return tickets;
    }
    catch(err) {
        return err;
    }
}

const getTicketByPrice = async (ticket_price) => {
    try {
        const ticket = await ticketRepository.getTicketByPrice(ticket_price);
        return ticket;
    }
    catch(err) {
        return err;
    }
}

const createTicket = async (data) => {
    try{
        const ticket = await ticketRepository.createTicket(data);
        return ticket;
    }
    catch(err) {
        return err
    }
}

const updateTicket = async (data, ticket_price) => {
    try{
        const ticket = await ticketRepository.updateTicket(data, ticket_price);
        return ticket;
    }
    catch(err) {
        return err
    }
}

const deleteTicket = async (ticket_price) => {
    try{
        const ticket = await ticketRepository.deleteTicket(ticket_price);
        return ticket;
    }
    catch(err){
        return err
    }
}

module.exports = {
    getAllTicket,
    getTicketByPrice,
    createTicket,
    updateTicket,
    deleteTicket
}