const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            unique : true,
            required: true
        }
    }
);

const subscriberModel = new mongoose.model('subscriberes',subscriberSchema);

module.exports = subscriberModel;
