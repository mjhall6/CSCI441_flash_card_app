const express = require('express');
const flashCardController = require('../controllers/flashCardController');
const flashCardRouter = express.Router();

flashCardRouter.get('/', flashCardController.getFlashcards);

// insertFlashcards 
// flashCardRouter.post('/add-cards', flashCardController.insertFlashcards);

module.exports = flashCardRouter;
