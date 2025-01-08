import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { StockPerformance } from "@/components/stock-performance"
import { TotalPortfolioValue } from "@/components/total-portfolio-value"
import { StockMetrics } from "@/components/stock-metrics"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioOverview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stock Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <StockPerformance />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <TotalPortfolioValue />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Stock Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <StockMetrics />
        </CardContent>
      </Card>
    </div>
  )
}

