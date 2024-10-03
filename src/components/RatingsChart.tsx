"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with rating data";

const chartData = [
  { rating: "Excellent", value: 100, fill: "#4caf50" }, 
  { rating: "Very Good", value: 80, fill: "#ffeb3b" },  
  { rating: "Good", value: 60, fill: "#ff9800" },      
  { rating: "Bad", value: 30, fill: "#f44336" },        
];

const chartConfig: ChartConfig = {
  excellent: { label: "Excellent", color: "#4caf50" },
  veryGood: { label: "Very Good", color: "#ffeb3b" },
  good: { label: "Good", color: "#ff9800" },
  bad: { label: "Bad", color: "#f44336" },
};

export function RatingsChart() {
  const totalRatings = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="rating"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalRatings}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Total Ratings
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4">
        <p className="text-sm">
          <span style={{ color: "#4caf50" }}>●</span> Excellent
        </p>
        <p className="text-sm">
          <span style={{ color: "#ffeb3b" }}>●</span> Very Good
        </p>
        <p className="text-sm">
          <span style={{ color: "#ff9800" }}>●</span> Good
        </p>
        <p className="text-sm">
          <span style={{ color: "#f44336" }}>●</span> Bad
        </p>
      </div>
    </div>
  );
}
