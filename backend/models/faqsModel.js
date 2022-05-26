const mongoose = require('mongoose');

const faqsSchema = new mongoose.Schema(
    {
        que: {
            type : String,
            required: true
        },
        ans: {
            type : String,
            required: true
        }
        
    }
);

const faqsModel = new mongoose.model('faqs',faqsSchema);

module.exports = faqsModel;
