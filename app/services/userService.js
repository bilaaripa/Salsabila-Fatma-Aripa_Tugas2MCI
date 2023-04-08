const userRepository = require('../repositories/userRepository');

const getAllUser = async () => {
    try {
        const users = await userRepository.getAllUser();
        return users;
    }
    catch(err) {
        return err;
    }
}

const getUserByName = async (name) => {
    try {
        const user = await userRepository.getUserByName(name);
        return user;
    }
    catch(err) {
        return err;
    }
}

const createUser = async (data) => {
    try{
        const user = await userRepository.createUser(data);
        return user;
    }
    catch(err) {
        return err
    }
}

const updateUser = async (data, ktp) => {
    try{
        const user = await userRepository.updateUser(data, ktp);
        return user;
    }
    catch(err) {
        return err
    }
}

const deleteUser = async (ktp) => {
    try{
        const user = await userRepository.deleteUser(ktp);
        return user;
    }
    catch(err){
        return err
    }
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}