const router = require('express').Router();
const seatController = require('../controllers/seatController');

router.get('/', seatController.getAllSeat);
router.get('/:seat_code', seatController.getSeatByCode);
router.post('/', seatController.createSeat);
router.put('/:seat_code', seatController.updateSeat);
router.delete('/:seat_category', seatController.deleteSeat);

module.exports = router;