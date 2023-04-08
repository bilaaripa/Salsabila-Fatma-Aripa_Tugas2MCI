const user = require('../models/user');
const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    userService.getAllUser()
    .then(users => {
        if(!users) {
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : users
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

const getUserByName = async (req, res) => {
    const name = req.params.name;
    userService.getUserByName(name)
    .then(user => {
        if(!user) {
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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

const createUser = async (req, res) => {
    console.log(req.body)
    const data = {
        nama : req.body.ktp,
        nrp : req.body.name,
        jurusan : req.body.phone_number,
        umur : req.body.email
    }
    userService.createUser(data)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil ditambahkan',
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

const updateUser = (req, res) => {
    const ktp = req.params.ktp;
    if(ktp.length !== 16) {
        return res.status(400).send({
            status : 'error',
            message : 'KTP tidak valid',
            data : {}
        });
    }
    userService.updateUser(req.body, ktp)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil diupdate',
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

const deleteUser = (req, res) => {
    const ktp = req.params.ktp;
    if(ktp.length !== 16) {
        return res.status(400).send({
            status : 'error',
            message : 'KTP tidak valid',
            data : {}
        });
    }
    userService.deleteUser(nrp)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil dihapus',
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
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}