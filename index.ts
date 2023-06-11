import { ScreenerRequest, ScreenerResponse } from './eftDb/dtos/screener.ts';

const url: URL = new URL('https://thingproxy.freeboard.io/fetch/https://etfdb.com/api/screener/');
const body: ScreenerRequest = { only: ["meta", "data"], per_page: 1, dividend_frequency: ["Monthly"] };
const headers: HeadersInit = { 'Content-Type': 'application/json' };

const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
});
const jsonResponse: ScreenerResponse = await response.json();
const filename = "/home/rolandsstrakis/SoftwareDevelopment/InvestmentHelper/etfResponse.json";
Deno.writeTextFile(filename, JSON.stringify(jsonResponse));