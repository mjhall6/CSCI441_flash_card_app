const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const morgan= require('morgan');
require('dotenv').config();
//test com
const flashcardRoutes = require('./routes/flashcardRoutes');
const userRoutes = require('./routes/userRoutes');



connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: '*'}));
app.use(morgan('dev'));
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
    res.send('FlashCard API');
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
    )




