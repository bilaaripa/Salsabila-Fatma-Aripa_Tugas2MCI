const transactionRepository = require('../repositories/transactionRepository');

const getAllTransaction = async () => {
    try {
        const transactions = await transactionRepository.getAllTransaction();
        return transactions;
    }
    catch(err) {
        return err;
    }
}

const getTransactionByPaymentStatus = async (payment_status) => {
    try {
        const transaction = await transactionRepository.getTransactionByPaymentStatus(payment_status);
        return transaction;
    }
    catch(err) {
        return err;
    }
}

const createTransaction = async (data) => {
    try{
        const transaction = await transactionRepository.createTransaction(data);
        return transaction;
    }
    catch(err) {
        return err
    }
}

const updateTransaction = async (data, payment_status) => {
    try{
        const transaction = await transactionRepository.updateTransaction(data, payment_status);
        return transaction;
    }
    catch(err) {
        return err
    }
}

const deleteTransaction = async (payment_status) => {
    try{
        const transaction = await transactionRepository.deleteTransaction(payment_status);
        return transaction;
    }
    catch(err){
        return err
    }
}

module.exports = {
    getAllTransaction,
    getTransactionByPaymentStatus,
    createTransaction,
    updateTransaction,
    deleteTransaction
}