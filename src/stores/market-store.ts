import { create } from 'zustand'


type PredictionMarketState = {
    name: string,
}

export const PredictionMarketStore = create<PredictionMarketState>((_set) => ({
    name: "PredictionMarket 1",
}))