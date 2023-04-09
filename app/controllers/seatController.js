const seat = require('../models/seat');
const seatService = require('../services/seatService');

const getAllSeat = async (req, res) => {
    seatService.getAllSeat()
    .then(seats => {
        if(!seats) {
            res.status(404).send({
                status : 'error',
                message : 'Data Seat tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data Seat berhasil ditemukan',
                data : seats
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

const getSeatByCode = async (req, res) => {
    const seat_code = req.params.seat_code;
    seatService.getSeatByCode(seat_code)
    .then(seat => {
        if(seat!==5) {
            res.status(404).send({
                status : 'error',
                message : 'Data seat tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seat berhasil ditemukan',
                data : seat
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

const createSeat = async (req, res) => {
    console.log(req.body)
    const data = {
        seat_code : req.body.seat_code,
        seat_category : req.body.seat_category
    }
    seatService.createSeat(data)
    .then(seat => {
        res.status(200).send({
            status : 'success',
            message : 'Data seat berhasil ditambahkan',
            data : seat
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

const updateSeat = (req, res) => {
    const seat_code = req.params.seat_code;
    if(seat_code.length !== 5) {
        return res.status(400).send({
            status : 'error',
            message : 'Seat code tidak valid',
            data : {}
        });
    }
    seatService.updateSeat(req.body, seat_code)
    .then(seat => {
        res.status(200).send({
            status : 'success',
            message : 'Data seat code berhasil diupdate',
            data : seat
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

const deleteSeat = (req, res) => {
    const seat_category = req.params.seat_category;
    if(seat_category.length === 0) {
        return res.status(400).send({
            status : 'error',
            message : 'Seat category tidak valid',
            data : {}
        });
    }
    seatService.deleteSeat(seat_category)
    .then(seat => {
        res.status(200).send({
            status : 'success',
            message : 'Data seat berhasil dihapus',
            data : seat
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
    getAllSeat,
    getSeatByCode,
    createSeat,
    updateSeat,
    deleteSeat
}