"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const stocks = [
  { name: "Apple Inc.", ticker: "AAPL", buyPrice: 150, currentPrice: 175, change: 16.67 },
  { name: "Microsoft Corporation", ticker: "MSFT", buyPrice: 200, currentPrice: 220, change: 10 },
  { name: "Amazon.com, Inc.", ticker: "AMZN", buyPrice: 3000, currentPrice: 2900, change: -3.33 },
  { name: "Alphabet Inc.", ticker: "GOOGL", buyPrice: 2500, currentPrice: 2700, change: 8 },
  { name: "Tesla, Inc.", ticker: "TSLA", buyPrice: 700, currentPrice: 650, change: -7.14 },
]

export function StockMetrics() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Stock Name</TableHead>
          <TableHead>Ticker</TableHead>
          <TableHead>Buy Price</TableHead>
          <TableHead>Current Price</TableHead>
          <TableHead>Change (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.ticker}>
            <TableCell>{stock.name}</TableCell>
            <TableCell>{stock.ticker}</TableCell>
            <TableCell>${stock.buyPrice.toFixed(2)}</TableCell>
            <TableCell>${stock.currentPrice.toFixed(2)}</TableCell>
            <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
              {stock.change.toFixed(2)}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}



