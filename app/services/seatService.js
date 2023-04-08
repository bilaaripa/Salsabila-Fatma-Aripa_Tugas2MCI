const seatRepository = require('../repositories/seatRepository');

const getAllSeat = async () => {
    try {
        const seats = await seatRepository.getAllSeat();
        return seats;
    }
    catch(err) {
        return err;
    }
}

const getSeatByCode = async (seat_code) => {
    try {
        const seat = await seatRepository.getSeatByCode(seat_code);
        return seat;
    }
    catch(err) {
        return err;
    }
}

const createSeat = async (data) => {
    try{
        const seat = await seatRepository.createSeat(data);
        return seat;
    }
    catch(err) {
        return err
    }
}

const updateSeat = async (data, seat_code) => {
    try{
        const seat = await seatRepository.updateSeat(data, seat_code);
        return seat;
    }
    catch(err) {
        return err
    }
}

const deleteSeat = async (seat_category) => {
    try{
        const seat = await seatRepository.deleteSeat(seat_category);
        return seat;
    }
    catch(err){
        return err
    }
}

module.exports = {
    getAllSeat,
    getSeatByCode,
    createSeat,
    updateSeat,
    deleteSeat
}