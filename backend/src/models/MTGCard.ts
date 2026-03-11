import { Schema, model } from 'mongoose';
import { MTGCard } from '@mtgcardvis/shared';

const mtgCardSchema = new Schema<MTGCard>({
    name: { type: String, required: true },
    set: { type: String, required: true },
    rarity: { type: String, required: true },
    manaCost: { type: Number, required: true },
    white: { type: Boolean, required: true },
    blue: { type: Boolean, required: true },
    black: { type: Boolean, required: true },
    red: { type: Boolean, required: true },
    green: { type: Boolean, required: true },
    power: { type: Number, required: true },
    toughness: { type: Number, required: true },
});

export default model<MTGCard>('MTGCard', mtgCardSchema);
