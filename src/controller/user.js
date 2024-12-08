const User = require("../models/user");

const GetUserByID = async (req, res, next) => {
    const {id} = req.user

    try {
        const user = await User.findOne({where: {id: id}})

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }
          
        res.status(200).json({
            message: `Get user by id ${id} successful`, 
            data: {
                user
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}


const UpdateUser = async (req, res, next) => {
    const {id} = req.user
    const {username, phone_number} = req.body
    const {file} = req

    try {

        const user = await User.findOne({where: {id: id}})

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }
        
        if (file) {
            user.image = `uploads/${file.filename}`
        } else {
            user.image = null
        }

        user.username = username
        user.phone_number = phone_number

        await user.save()

        res.status(200).json({
            message: `Update user by id ${id} successful`,
            data: {
                user
            }
        })

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}


module.exports = {GetUserByID, UpdateUser}