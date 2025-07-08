"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", yes: 222, no: 150 },
  { date: "2024-04-02", yes: 97, no: 180 },
  { date: "2024-04-03", yes: 167, no: 120 },
  { date: "2024-04-04", yes: 242, no: 260 },
  { date: "2024-04-05", yes: 373, no: 290 },
  { date: "2024-04-06", yes: 301, no: 340 },
  { date: "2024-04-07", yes: 245, no: 180 },
  { date: "2024-04-08", yes: 409, no: 320 },
  { date: "2024-04-09", yes: 59, no: 110 },
  { date: "2024-04-10", yes: 261, no: 190 },
]

const chartConfig = {
  yes: {
    label: "Yes Price",
    color: "var(--color-yes)",
  },
  no: {
    label: "No Price",
    color: "var(--color-no)",
  },
} satisfies ChartConfig

export function PredictionChart() {
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <Card className="border border-gold-500/20 bg-black/50 backdrop-blur-sm">
      <CardHeader className="border-b border-gold-500/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-gold-300 font-serif text-xl">
              Will Multi Reality be suspended by the Nika before October 2025?
            </CardTitle>
            <CardDescription className="text-gold-500/80">
              Showing prediction prices for the last 30 days
            </CardDescription>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] border-gold-500/30 text-gold-300">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="border-gold-500/20 bg-black">
              <SelectItem value="7d" className="hover:bg-gold-900/20">
                Last 7 days
              </SelectItem>
              <SelectItem value="30d" className="hover:bg-gold-900/20">
                Last 30 days
              </SelectItem>
              <SelectItem value="90d" className="hover:bg-gold-900/20">
                Last 90 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorNo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B8860B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#B8860B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#4d4d4d" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#FFD700' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => new Date(value).getDate() + '/' + (new Date(value).getMonth()+1)}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              contentStyle={{
                background: 'rgba(0, 0, 0, 0.8)',
                borderColor: '#FFD700',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="yes"
              stroke="url(#colorYes)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#FFD700' }}
            />
            <Line
              type="monotone"
              dataKey="no"
              stroke="url(#colorNo)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#B8860B' }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      
      <CardFooter className="border-t border-gold-500/10 pt-4">
        <div className="flex w-full items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gold-300">
            <TrendingUp className="h-4 w-4 text-gold-400" />
            <span>Yes price trending up by 12.4% this week</span>
          </div>
          <div className="text-gold-500/80">
            Total volume: <span className="text-gold-300">1.24M</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}