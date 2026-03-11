import { MTGCardFilters } from "@mtgcardvis/shared";

export function buildMTGCardFilter(params: MTGCardFilters)  {
    const filter: any = {};

    if (params.name) {
        filter.name = { $regex: params.name, $options: 'i' };
    }
    if (params.set) {
        filter.set = params.set;
    }
    if (params.rarity) {
        filter.rarity = params.rarity;
    }
    if (params.manaCost) {
        filter.manaCost = params.manaCost;
    }
    if (params.power) {
        filter.power = params.power;
    }
    if (params.toughness) {
        filter.toughness = params.toughness;
    }
    return filter;
}
