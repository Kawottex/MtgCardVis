import express from 'express';
import { getMTGCards, createMTGCard } from '../controllers/mtgcards.controller';

const router = express.Router();

// GET all MTG cards
router.get('/', getMTGCards);

// POST create a new MTG card
router.post('/', createMTGCard);

export default router;