import EtfSynchronizer from "./etf/etfSynchronizer.ts";

let etfSynchronizer = new EtfSynchronizer();
await etfSynchronizer.synchronize();