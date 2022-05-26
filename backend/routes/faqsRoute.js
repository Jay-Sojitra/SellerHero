const express = require('express')
const router = express.Router();
const Faqs = require('../models/faqsModel')

router.post('/create', async (req, res) => {

    try{
        const newfaqs = Faqs(req.body);
        await newfaqs.save();
        res.send('Faqs created successfully');
    }
    catch(err){
        return res.status(400).json(err);
    }

})

router.get('/getallfaqs', async (req, res) => {

    try {
        const faqs = await Faqs.find();
        res.send(faqs);
    }
    catch (err) {
        return res.status(400).json(err);
    }

})
module.exports = router;
