export type ScreenerRequest = {
    only: Array<string>;
    dividend_frequency: Array<string>;
    asset_class?: string;
    per_page: number;
    tab: string
}

export type ScreenerResponse = {
    meta: Meta,
    data: Array<Data> 
}

type Meta = {
    total_records: number
}

export type Data = {
    ytd: string,
    dividend: string,
    dividend_yield: string,
    annual_dividend: string,
    dividend_frequency: string,
    symbol: Symbol
}

type Symbol = {
    text: string
}