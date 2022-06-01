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

router.get('/getallactiveplan', async (req, res) => {
    try {
        const plans = await Plan.find({ isActive: true });
        res.send(plans);
    }
    catch (err) {
        return res.status(400).json(err);
    }
})


router.post('/editplan', async (req, res) => {
    try {
        const plan = await Plan.findOne({ _id: req.body._id });
        plan.name = req.body.name;
        plan.monthly_price = req.body.monthly_price;
        plan.yearly_price = req.body.yearly_price;
        plan.desc = req.body.desc;
        plan.benefit1 = req.body.benefit1;
        plan.benefit2 = req.body.benefit2;
        plan.benefit3 = req.body.benefit3;

        await plan.save();
        res.send('plan details updated successfully');
    }
    catch (err) {
        return res.status(400).json(err);
    }
})

router.post('/editactiveplan', async (req, res) => {
    try {
        const plan = await Plan.findOne({ _id: req.body._id });
        plan.isActive = req.body.isActive;

        await plan.save();
        res.send('plan activity updated successfully');

    }
    catch (err) {
        return res.status(400).json(err);
    }
})

router.post('/deleteplan', async (req, res) => {

    try {
        await Plan.findOneAndDelete({ _id: req.body.planid });
        res.send('plan deleted successfully');
        
    }
    catch (err) {
        return res.status(400).json(err);
    }
})



module.exports = router;
