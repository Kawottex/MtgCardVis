import { Request, Response } from "express";
import MTGCardModel from "../models/MTGCard";
import { buildMTGCardFilter } from "../filters/mtgcards.filter";

export async function getMTGCards(req: Request, res: Response) {
    const filter = buildMTGCardFilter(req.query);
    console.log('Filter applied:', filter);
    const cards = await MTGCardModel.find(filter);
    res.json(cards);
}

export async function createMTGCard(req: Request, res: Response) {
    const cardData = req.body;
    if (cardData.image && cardData.image.data) {
        cardData.image.data = Buffer.from(cardData.image.data);
    }
    const card = new MTGCardModel(cardData);
    try {
        console.log('Creating card with data:', cardData);
        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : String(err) });
    }
}
