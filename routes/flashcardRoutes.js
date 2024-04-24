const express = require('express');
const flashCardController = require('../controllers/flashCardController');
const flashCardRouter = express.Router();

flashCardRouter.get('/', flashCardController.getFlashcards);
flashCardRouter.get('/search', flashCardController.searchFlashcards);
// insertFlashcards 
// flashCardRouter.post('/add-cards', flashCardController.insertFlashcards);

module.exports = flashCardRouter;
