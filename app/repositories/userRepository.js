const {user} = require('../models')

const getAllUser = () => {
    return user.findAll(
        {
            attributes: ['ktp', 'name', 'phone_number', 'email']
        }
    )
}

const getUserByName = (name) => {
    return user.findOne(
        {
            where: {
                name: name
            }
        }
    )
}

const createUser = (data) => {
    return user.create(data)
}

const updateUser = (data, ktp) => {
    return user.update(data, {
        where: {
            ktp: ktp
        }
    })
}

const deleteUser = (ktp) => {
    return user.destroy({
        where: {
            ktp: ktp
        }
    })
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}