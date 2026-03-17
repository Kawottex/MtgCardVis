export interface MTGCard {
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
        data: number[],
        contentType: string
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