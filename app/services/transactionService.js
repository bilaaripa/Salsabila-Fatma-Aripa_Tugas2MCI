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

const getTransactionByPaymentStatus = async (total_payment) => {
    try {
        const transaction = await transactionRepository.getTransactionByPaymentStatus(total_payment);
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

const updateTransaction = async (data, total_payment) => {
    try{
        const transaction = await transactionRepository.updateTransaction(data, total_payment);
        return transaction;
    }
    catch(err) {
        return err
    }
}

const deleteTransaction = async (total_payment) => {
    try{
        const transaction = await transactionRepository.deleteTransaction(total_payment);
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