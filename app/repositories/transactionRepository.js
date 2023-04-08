const {transaction} = require('../models')

const getAllTransaction = () => {
    return transaction.findAll(
        {
            attributes: ['number_of_ticket', 'total_payment', 'payment_method', 'time', 'payment_status']
        }
    )
}

const getTransactionByPaymentStatus = (payment_status) => {
    return transaction.findOne(
        {
            where: {
                payment_status: payment_status
            }
        }
    )
}

const createTransaction = (data) => {
    return transaction.create(data)
}

const updateTransaction = (data, payment_status) => {
    return transaction.update(data, {
        where: {
            payment_status: payment_status
        }
    })
}

const deleteTransaction = (payment_status) => {
    return transaction.destroy({
        where: {
            payment_status: payment_status
        }
    })
}

module.exports = {
    getAllTransaction,
    getTransactionByPaymentStatus,
    createTransaction,
    updateTransaction,
    deleteTransaction
}