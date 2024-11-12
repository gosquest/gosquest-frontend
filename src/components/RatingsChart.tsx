import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const defaultChartConfig: ChartConfig = {
  likes: {
    label: "Total Website Likes",
    color: "hsl(var(--chart-1))",
  },
};

export function RatingsChart({ websiteData }: { websiteData: any }) {
  const chartData =
    websiteData?.websites
      .map((website: any) => {
        const totalLikes = website.likes ? website.likes.length : 0;
        return {
          name: website.name,
          totalLikes,
        };
      })
      .sort((a: any, b: any) => b.totalLikes - a.totalLikes)
      .slice(0, 5) || [];

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-sm hidden">Top 5 Most Liked Websites</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={defaultChartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ left: 0, right: 16 }}
          >
            {/* Define gradient */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#021b39" />
                <stop offset="50%" stopColor="#ff45ff" />
                <stop offset="100%" stopColor="#4285f4" />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tick={false}
              tickLine={false}
              axisLine={false}
            />
            <XAxis type="number" allowDecimals={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="totalLikes" fill="url(#barGradient)" radius={4} barSize={20}>
              <LabelList dataKey="name" position="insideLeft" offset={8} fontSize={12} />
              <LabelList dataKey="totalLikes" position="right" offset={8} fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
