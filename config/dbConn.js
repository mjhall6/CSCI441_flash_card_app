const mongoose = require('mongoose');

// DATABASE_URI=mongodb+srv://admin:6yLnMHI1NjsDUrGc@cluster0.qza6fel.mongodb.net/flashcards_db?retryWrites=true&w=majority



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    }   catch (err){
        console.error(err);
    }
}


module.exports = connectDB