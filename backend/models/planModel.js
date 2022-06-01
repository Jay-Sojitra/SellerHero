const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        monthly_price: {
            type: Number,
            required: true
        },
        yearly_price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        benefit1: {
            type: String,
            required: true
        },
        benefit2: {
            type: String,
            required: true
        },
        benefit3: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true,
            default: false
        }

    }
);

const planModel = new mongoose.model('plans', planSchema);

module.exports = planModel;
