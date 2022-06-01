const express = require('express');
const app = express();
const env = require('dotenv');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');
const planRoutes = require('./routes/planRoute');
const faqsRoutes = require('./routes/faqsRoute');
const subscriberRoutes = require('./routes/subscriberRoute');

env.config();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/faqs', faqsRoutes);
app.use('/api/subscriberes', subscriberRoutes);








const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));

