export interface MTGCard {
    _id: string;
    name: string;
    set: string;
    rarity: string;
    manaCost: number;
    white: boolean;
    blue: boolean;
    black: boolean;
    red: boolean;
    green: boolean;
    power: number;
    toughness: number;
}

export interface MTGCardFilters {
    name?: string;
    set?: string;
    rarity?: string;
    manaCost?: number;
    power?: number;
    toughness?: number;
}