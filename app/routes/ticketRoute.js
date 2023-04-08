const router = require('express').Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getAllTicket);
router.get('/:ticket_price', ticketController.getTicketByPrice);
router.post('/', ticketController.createTicket);
router.put('/:ticket_price', ticketController.updateTicket);
router.delete('/:ticket_price', ticketController.deleteTicket);

module.exports = router;