const User = require('../model/User')

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber } = req.body;
        const user = new User({ firstName, lastName, email, mobileNumber });
        await user.save();
        return res.json(user);
    }
    catch (error) {
        return res.status(400).json('Error creating user');
    }
}

const getUsers = async (req, res) => {
    try {
        //
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.status(400).json('Error getting users');
    }
}

const patchUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, req.body);
        if (!user) {
            return res.status(400).json('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        return res.status(400).json('Error modifying users');
    }
}

const removeUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(400).json('User not found');
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json('Error deleting users');
    }
}

module.exports = {
    createUser,
    getUsers,
    patchUser,
    removeUser
}
