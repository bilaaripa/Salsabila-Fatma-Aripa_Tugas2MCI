const transaction = require('../models/transaction');
const transactionService = require('../services/transactionService');

const getAllTransaction = async (req, res) => {
    transactionService.getAllTransaction()
    .then(transactions => {
        if(!transactions) {
            res.status(404).send({
                status : 'error',
                message : 'Data Transaksi tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data Transaksi berhasil ditemukan',
                data : transactions
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

const getTransactionByPaymentStatus = async (req, res) => {
    const payment_status = req.params.payment_status;
    transactionService.getTransactionByPaymentStatus(payment_status)
    .then(transaction => {
        if(!transaction) {
            res.status(404).send({
                status : 'error',
                message : 'Data Transaksi tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data Transaksi berhasil ditemukan',
                data : transaction
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

const createTransaction = async (req, res) => {
    console.log(req.body)
    const data = {
        number_of_ticket : req.body.number_of_ticket,
        total_payment : req.body.total_payment,
        payment_method : req.body.payment_method,
        time : req.body.time,
        payment_status : req.body.payment_status
    }
    transactionService.createTransaction(data)
    .then(transaction => {
        res.status(200).send({
            status : 'success',
            message : 'Data Transaksi berhasil ditambahkan',
            data : transaction
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

const updateTransaction = (req, res) => {
    const payment_status = req.params.payment_status;
    if(!payment_status) {
        return res.status(400).send({
            status : 'error',
            message : 'Payment Status tidak valid',
            data : {}
        });
    }
    transactionService.updateTransaction(req.body, payment_status)
    .then(transaction => {
        res.status(200).send({
            status : 'success',
            message : 'Data Transaksi berhasil diupdate',
            data : transaction
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

const deleteTransaction = (req, res) => {
    const payment_status = req.params.payment_status;
    if(!payment_status) {
        return res.status(400).send({
            status : 'error',
            message : 'Payment Status tidak valid',
            data : {}
        });
    }
    transactionService.deleteTransaction(payment_status)
    .then(transaction => {
        res.status(200).send({
            status : 'success',
            message : 'Data Transaksi berhasil dihapus',
            data : user
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
    getAllTransaction,
    getTransactionByPaymentStatus,
    createTransaction,
    updateTransaction,
    deleteTransaction
}