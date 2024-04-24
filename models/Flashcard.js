const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  flashcards: [{
    definition: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
  }]
});




const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;