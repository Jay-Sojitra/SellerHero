const express = require('express')
const router = express.Router();
const Plan = require('../models/planModel')

router.post('/create', async (req, res) => {

    try {
        const newplan = Plan(req.body);
        await newplan.save();
        res.send('plan created successfully');
    }
    catch (err) {
        return res.status(400).json(err);
    }

})

router.get('/getallplan', async (req, res) => {

    try {
        const plans = await Plan.find();
        res.send(plans);
    }
    catch (err) {
        return res.status(400).json(err);
    }

})
module.exports = router;
