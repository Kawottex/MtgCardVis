import express from 'express';
import MTGCardModel from '../models/MTGCard';
import { getMTGCards } from '../controllers/mtgcards.controller';

const router = express.Router();

// GET all MTG cards
router.get('/', getMTGCards);

// POST create a new MTG card
router.post('/', async (req, res) => {
  const card = new MTGCardModel(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err instanceof Error ? err.message : String(err) });
  }
});

export default router;