export type ScreenerRequest = {
    only: Array<string>;
    dividend_frequency: Array<string>;
    asset_class?: string;
    per_page: number
}

export type ScreenerResponse = {
    meta: Meta,
    data: Array<Data> 
}

type Meta = {
    total_records: number
}

type Data = {
    ytd: string,
    price: string,
    symbol: Symbol
}

type Symbol = {
    text: string
}