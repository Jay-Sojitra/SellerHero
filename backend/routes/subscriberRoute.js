const express = require('express')
const router = express.Router();
const Subscriber = require('../models/subscriberModel')

router.post('/subscribe', async (req, res) => {

    try {
        const newsubscriber = Subscriber(req.body);
        await newsubscriber.save();
        res.send('subscriber subscribed successfully');
    }
    catch (err) {
        return res.status(400).json(err);
    }

})

module.exports = router;
