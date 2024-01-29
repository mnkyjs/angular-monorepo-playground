export interface PokedexResponse {
    count: number;
    next: string;
    previous: null | string;
    results: PokedexRecord[];
}

export interface PokedexRecord {
    name: string;
    url: string;
}
