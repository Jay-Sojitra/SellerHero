const express = require('express')
const router = express.Router();
const Admin = require('../models/adminModel')

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    try {
        
        const user = await Admin.findOne({ username, password })
        if (user) {
            res.send(user);
        }
        else {
            return res.status(400).json('admin is not registered');
        }
    }
    catch (err) {
        return res.status(400).json(err);
    }
})

router.post('/register', async (req, res) => {

    try {
        const newuser = Admin(req.body);
        await newuser.save();
        res.send('Admin registered successfully');
    }
    catch (err) {
        return res.status(400).json(err);
    }

})



module.exports = router;
