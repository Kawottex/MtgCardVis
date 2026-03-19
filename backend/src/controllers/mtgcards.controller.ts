import { Request, Response } from "express";
import MTGCardModel from "../models/MTGCard";
import { buildMTGCardFilter } from "../filters/mtgcards.filter";

export async function getMTGCards(req: Request, res: Response) {
    const filter = buildMTGCardFilter(req.query);
    console.log('Filter applied:', filter);
    const cards = await MTGCardModel.find(filter);
    const result = cards.map(card => {
        const obj = card.toObject();
        return obj;
    });
    res.json(result);
}

export async function createMTGCard(req: Request, res: Response) {
    const cardData = req.body;
    console.log(cardData)
    if (cardData.image && cardData.image.data) {
        cardData.image.data = Buffer.from(cardData.image.data);
    }
    const card = new MTGCardModel(cardData);
    try {
        const newCard = await card.save();
        console.log('Card created successfully:', newCard);
        res.status(201).json(newCard);
    } catch (err) {
        console.log("Error when uploading card:", err);
        res.status(400).json({ message: err instanceof Error ? err.message : String(err) });
    }
}
