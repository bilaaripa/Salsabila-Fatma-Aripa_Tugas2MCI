const router = require('express').Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.getAllTransaction);
router.get('/:payment_status', transactionController.getTransactionByPaymentStatus);
router.post('/', transactionController.createTransaction);
router.put('/:payment_status', transactionController.updateTransaction);
router.delete('/:payment_status', transactionController.deleteTransaction);

module.exports = router;