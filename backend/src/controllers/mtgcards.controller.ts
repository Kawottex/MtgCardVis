import { Request, Response } from "express";
import MTGCardModel from "../models/MTGCard";
import { buildMTGCardFilter } from "../filters/mtgcards.filter";

export async function getMTGCards(req: Request, res: Response) {
    const filter = buildMTGCardFilter(req.query);
    const cards = await MTGCardModel.find(filter);
    res.json(cards);
}
