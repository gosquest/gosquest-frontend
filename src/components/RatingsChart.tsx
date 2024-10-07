import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
import { useGetAllProjects } from "@/hooks/useProject";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const defaultChartConfig: ChartConfig = {};

export function RatingsChart() {
  const { data, isLoading, isError } = useGetAllProjects();

  if (isLoading) {
    return <p className="text-center">Loading ratings...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to fetch ratings</p>;
  }


  const ratingsCount = {
    excellent: 0,
    veryGood: 0,
    good: 0,
    bad: 0,
  };

  let totalScore = 0;
  let validRatingsCount = 0;

  data?.projects.forEach((project: any) => {
    if (project.Rating && project.Rating.length > 0) {
      project.Rating.forEach((rating: any) => {
        const { relevance, impact_to_society, performance, progress } = rating;

        const validRatings = [relevance, impact_to_society, performance, progress].filter(
          (rating) => typeof rating === "number" && rating >= 0 && rating <= 5
        );

        if (validRatings.length === 4) {
          const averageRating = validRatings.reduce((sum, rating) => sum + rating, 0) / 4;

          totalScore += averageRating;
          validRatingsCount += 1;

          if (averageRating > 4) {
            ratingsCount.excellent += 1;
          } else if (averageRating > 3) {
            ratingsCount.veryGood += 1;
          } else if (averageRating > 2) {
            ratingsCount.good += 1;
          } else {
            ratingsCount.bad += 1;
          }
        }
      });
    }
  });

  const chartData =
    validRatingsCount === 0
      ? [{ rating: "No Ratings", value: 1, fill: "#E5EDFF" }]
      : [
          { rating: "Excellent", value: ratingsCount.excellent, fill: "#4caf50" },
          { rating: "Very Good", value: ratingsCount.veryGood, fill: "#ffeb3b" },
          { rating: "Good", value: ratingsCount.good, fill: "#ff9800" },
          { rating: "Bad", value: ratingsCount.bad, fill: "#f44336" },
        ];

  const overallPercentage = validRatingsCount
    ? Math.round((totalScore / validRatingsCount / 5) * 100)
    : 0; 

  return (
    <div className="p-4 rounded-md ">
      <ChartContainer
        config={defaultChartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie data={chartData} dataKey="value" nameKey="rating" innerRadius={60} strokeWidth={5}>
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
                        {validRatingsCount === 0 ? "--" : `${overallPercentage}%`}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {validRatingsCount === 0 ? "No Ratings" : "Overall"}
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      {validRatingsCount > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm p-2 border-b">
            <div className="flex items-center space-x-2">
              <span style={{ color: "#4caf50" }}>●</span>
              <span>Excellent</span>
            </div>
            <span className="font-bold text-gray-700">{ratingsCount.excellent}</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 border-b">
            <div className="flex items-center space-x-2">
              <span style={{ color: "#ffeb3b" }}>●</span>
              <span>Very Good</span>
            </div>
            <span className="font-bold text-gray-700">{ratingsCount.veryGood}</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 border-b">
            <div className="flex items-center space-x-2">
              <span style={{ color: "#ff9800" }}>●</span>
              <span>Good</span>
            </div>
            <span className="font-bold text-gray-700">{ratingsCount.good}</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2">
            <div className="flex items-center space-x-2">
              <span style={{ color: "#f44336" }}>●</span>
              <span>Bad</span>
            </div>
            <span className="font-bold text-gray-700">{ratingsCount.bad}</span>
          </div>
        </div>
      )}
    </div>
  );
}
