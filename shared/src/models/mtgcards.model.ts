export interface MTGCard {
    _id: string;
    name: string;
    expansion: string;
    rarity: string;
    manaCost: number;
    colors: {
        red: boolean;
        black: boolean;
        blue: boolean;
        green: boolean;
        white: boolean;
    };
    power: number;
    toughness: number;
    image : {
        data: Uint8Array,
        contentType: String
    }
}

export interface MTGCardFilters {
    name?: string;
    expansion?: string;
    rarity?: string;
    manaCost?: number;
    power?: number;
    toughness?: number;
}