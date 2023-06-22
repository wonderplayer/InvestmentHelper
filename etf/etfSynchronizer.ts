import { Data, ScreenerRequest, ScreenerResponse } from "./dtos/screener.ts";
import { Constants } from '../constants.ts';
import * as mod from 'https://deno.land/std@0.192.0/csv/mod.ts';

const etfDbApiUrl = 'https://etfdb.com/api/screener/';
const filename = "/home/rolandsstrakis/SoftwareDevelopment/InvestmentHelper/etfResponse.csv";

export default class EtfSynchronizer {
    public async synchronize(): Promise<void> {
        const url: URL = new URL(Constants.proxyUrl + etfDbApiUrl);
        const body: ScreenerRequest = { only: ["meta", "data"], per_page: 1, dividend_frequency: ["Monthly"], tab: "dividends" };
        const headers: HeadersInit = { 'Content-Type': 'application/json' };

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers
        });
        await this.saveResponse(response);
    }

    private async saveResponse(response: Response) {
        const screenerResponse: ScreenerResponse = await response.json();
        const csvHeaders: string[] = EtfSynchronizer.constructHeaders();
        const output: mod.DataItem[] = [csvHeaders];
        screenerResponse.data.forEach(row => {
            output.push(this.constructCsvRow(row));
        })
        Deno.writeTextFile(filename, mod.stringify(output, {headers: false}));
    }

    private static constructHeaders(): string[] {
        return ['Symbol', 'DividendPrice', 'DividendYield', 'AnnualDividend', 'DividendFrequency'];
    }

    private constructCsvRow(dividendRow: Data): mod.DataItem {
        return [dividendRow.symbol.text, dividendRow.dividend, dividendRow.dividend_yield, dividendRow.annual_dividend, dividendRow.dividend_frequency];
    }
}