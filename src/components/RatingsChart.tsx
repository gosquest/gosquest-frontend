import { TrendingUp } from "lucide-react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

const defaultChartConfig: ChartConfig = {
  likes: {
    label: "Daily Website Likes",
    color: "hsl(var(--chart-1))",
  },
};

function getLikesByDay(likesArray: any[]): Record<DaysOfWeek, number> {
  const daysOfWeek: DaysOfWeek[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const likeCounts: Record<DaysOfWeek, number> = {
    Sunday: 0, Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0,
  };

  likesArray.forEach(like => {
    const day = daysOfWeek[new Date(like.createdAt).getDay()] as DaysOfWeek;
    if (like.like) { 
      likeCounts[day]++;
    }
  });

  return likeCounts;
}

export function RatingsChart({ websiteData }: { websiteData: any }) {

  const chartData = websiteData?.websites.map((website: any) => {
    const likesByDay = getLikesByDay(website.likes || []);
    return {
      name: website.name,
      ...likesByDay,
    };
  }) || [];

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle><p className="hidden">Website Likes by Day</p></CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={defaultChartConfig}>
          <LineChart data={chartData} margin={{ left: 1, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis 
              domain={[0, 4]} 
              tickCount={5} 
              allowDecimals={false} 
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            {(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as DaysOfWeek[]).map((day, index) => (
              <Line key={day} dataKey={day} type="monotone" stroke={`hsl(var(--chart-${index + 1}))`} strokeWidth={2} dot={false} />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
