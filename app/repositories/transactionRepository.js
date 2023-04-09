const {transaction} = require('../models')

const getAllTransaction = () => {
    return transaction.findAll(
        {
            attributes: ['number_of_ticket', 'total_payment', 'payment_method', 'time', 'payment_status']
        }
    )
}

const getTransactionByPaymentStatus = (total_payment) => {
    return transaction.findOne(
        {
            where: {
                total_payment: total_payment
            }
        }
    )
}

const createTransaction = (data) => {
    return transaction.create(data)
}

const updateTransaction = (data, total_payment) => {
    return transaction.update(data, {
        where: {
            total_payment: total_payment
        }
    })
}

const deleteTransaction = (total_payment) => {
    return transaction.destroy({
        where: {
            payment_status: total_payment
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