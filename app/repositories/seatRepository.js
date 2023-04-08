const {seat} = require('../models')

const getAllSeat = () => {
    return seat.findAll(
        {
            attributes: ['seat_code', 'seat_category']
        }
    )
}

const getSeatByCode = (seat_code) => {
    return seat.findOne(
        {
            where: {
                seat_code: seat_code
            }
        }
    )
}

const createSeat = (data) => {
    return seat.create(data)
}

const updateSeat = (data, seat_code) => {
    return seat.update(data, {
        where: {
            seat_code: seat_code
        }
    })
}

const deleteSeat = (seat_category) => {
    return seat.destroy({
        where: {
            seat_category: seat_category
        }
    })
}

module.exports = {
    getAllSeat,
    getSeatByCode,
    createSeat,
    updateSeat,
    deleteSeat
}