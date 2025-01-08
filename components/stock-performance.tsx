"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", AAPL: 4000, GOOGL: 2400, MSFT: 2400 },
  { name: "Feb", AAPL: 3000, GOOGL: 1398, MSFT: 2210 },
  { name: "Mar", AAPL: 2000, GOOGL: 9800, MSFT: 2290 },
  { name: "Apr", AAPL: 2780, GOOGL: 3908, MSFT: 2000 },
  { name: "May", AAPL: 1890, GOOGL: 4800, MSFT: 2181 },
  { name: "Jun", AAPL: 2390, GOOGL: 3800, MSFT: 2500 },
]

export function StockPerformance() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="AAPL" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="GOOGL" stroke="#82ca9d" />
          <Line type="monotone" dataKey="MSFT" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

