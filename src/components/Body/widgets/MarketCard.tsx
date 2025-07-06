import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { PredictionChart } from "./PredictionChart";

  export function MarketCard() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
            <PredictionChart />
        </CardContent>
        <CardFooter>
            <p>Total Trading Volume</p>
        </CardFooter>
        </Card>
    )
  }