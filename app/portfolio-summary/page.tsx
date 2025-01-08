import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StockMetrics } from "@/components/stock-metrics"

export default function PortfolioSummary() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Portfolio Summary</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Stock Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <StockMetrics />
        </CardContent>
      </Card>
    </div>
  )
}

