import { performanceData } from '@/lib/data';
import {
  TrendingUp,
  Check,
  BarChart3,
  Users,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const StatCard = ({ icon, title, value, subtext, valueColor }: { icon: React.ReactNode, title: string, value: string, subtext: string, valueColor?: string }) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm font-medium">
          {icon}
          <span>{title}</span>
        </div>
        <div className={`text-4xl font-bold text-foreground ${valueColor}`}>{value}</div>
        <div className="text-xs text-muted-foreground mt-1">{subtext}</div>
      </CardContent>
    </Card>
);

export default function TrackRecordPage() {
  return (
    <div className="pt-32 min-h-screen bg-secondary">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 tracking-tight text-foreground font-headline">
            Performance Track Record
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We believe transparency is the ultimate currency in this industry.
            Below is a complete, auditable list of every official call made
            since inception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard icon={<TrendingUp className="w-4 h-4" />} title="Avg. Return" value="+34.2%" subtext="Per recommendation" />
            <StatCard icon={<Check className="w-4 h-4" />} title="Win Rate" value="68%" subtext="Positive trades closed" />
            <StatCard icon={<BarChart3 className="w-4 h-4" />} title="vs S&P 500" value="+18.5%" subtext="Alpha generated" valueColor="text-green-600" />
            <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-primary-foreground/80 text-sm font-medium">
                        <Users className="w-4 h-4" />
                        <span>Active Members</span>
                    </div>
                    <div className="text-4xl font-bold">2,405</div>
                    <div className="text-xs text-primary-foreground/70 mt-1">Reading our research</div>
                </CardContent>
            </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center bg-background">
            <h3 className="font-bold text-lg text-foreground">Trade Log</h3>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open Positions
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticker</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entry Date</TableHead>
                  <TableHead>Entry Price</TableHead>
                  <TableHead>Current/Exit</TableHead>
                  <TableHead className="text-right">Return</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-bold text-foreground">
                      {item.ticker}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.type.toUpperCase()}</Badge>
                    </TableCell>
                    <TableCell>{item.entryDate}</TableCell>
                    <TableCell>${item.entryPrice.toFixed(2)}</TableCell>
                    <TableCell className="font-medium">
                      {item.exitPrice
                        ? `$${item.exitPrice.toFixed(2)}`
                        : `$${item.currentPrice?.toFixed(2)}`}
                    </TableCell>
                    <TableCell
                      className={`text-right font-bold ${
                        item.return > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {item.return > 0 ? '+' : ''}
                      {item.return}%
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          item.status === 'Open' ? 'default' : 'outline'
                        }
                        className={item.status === 'Open' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                      >
                         {item.status === 'Open' && <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 bg-secondary/50 border-t text-xs text-muted-foreground text-center">
            * Past performance is not indicative of future results. Returns
            calculated based on closing price of alert date.
          </div>
        </Card>
      </div>
    </div>
  );
}
