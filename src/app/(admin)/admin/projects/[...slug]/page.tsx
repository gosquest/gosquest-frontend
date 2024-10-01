"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import navigo from "../../../../../../public/uploads/headers/navigo.png";
import thanks from "../../../../../../public/images/thank.png"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const ratings = [1, 2, 3, 4, 5];


interface RatingRowProps {
  label: string;
  selectedRating: number | null;
  onRatingChange: (rating: number) => void;
}


const commentSchema = z.object({
  comment: z.string().min(1, "Comment is required"),
});


const RatingRow: React.FC<RatingRowProps> = ({
  label,
  selectedRating,
  onRatingChange,
}) => {
  return (
    <div className="p-4 flex items-center justify-between border rounded-lg">
      <h5 className="text-main">{label}</h5>
      <div className="flex gap-4">
        {ratings.map((rating) => (
          <div
            key={rating}
            onClick={() => onRatingChange(rating)}
            className={`flex items-center justify-center p-4 shadow border rounded-full w-[60px] h-[60px] cursor-pointer ${
              selectedRating === rating ? "bg-main text-white" : ""
            }`}
          >
            {rating}
          </div>
        ))}
      </div>
    </div>
  );
};

interface RatingsState {
  relevance: number | null;
  impact: number | null;
  performance: number | null;
  progress: number | null;
}

const RateUsDialog: React.FC = () => {
  const [ratingsState, setRatingsState] = useState<RatingsState>({
    relevance: null,
    impact: null,
    performance: null,
    progress: null,
  });
  const [open, setOpen] = useState(false);  
  const [submitted, setSubmitted] = useState(false); 

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: any) => {
    console.log({ ...data, ratings: ratingsState });
    setSubmitted(true);
  };

  const handleRatingChange = (category: keyof RatingsState, value: number) => {
    setRatingsState((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={() => { setOpen(!open); setSubmitted(false); }}>
      <DialogTrigger asChild>
        <Button className="bg-main py-6 px-8">Rate Us!</Button>
      </DialogTrigger>
      <DialogContent className={`border border-main max-w-[90%] md:max-w-[60%] p-6  ${!submitted ? "bg-white":"bg-main"}`}>
        {!submitted ? (
          <>
            <DialogHeader className="bg-main text-white p-4 rounded-t-lg -ml-6 -mt-6 -mr-6 flex items-center md:p-6">
              <DialogTitle>Rate NaviGo</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <RatingRow
                label="Relevance"
                selectedRating={ratingsState.relevance}
                onRatingChange={(value: number) =>
                  handleRatingChange("relevance", value)
                }
              />
              <RatingRow
                label="Impact on Community"
                selectedRating={ratingsState.impact}
                onRatingChange={(value: number) =>
                  handleRatingChange("impact", value)
                }
              />
              <RatingRow
                label="Performance"
                selectedRating={ratingsState.performance}
                onRatingChange={(value: number) =>
                  handleRatingChange("performance", value)
                }
              />
              <RatingRow
                label="Progress"
                selectedRating={ratingsState.progress}
                onRatingChange={(value: number) =>
                  handleRatingChange("progress", value)
                }
              />

              <div className="p-4 flex flex-col gap-2 md:flex-row md:gap-4">
                <label htmlFor="comment" className="text-main">
                  Comment
                </label>
                <Textarea
                  id="comment"
                  {...register("comment")}
                  placeholder="Type your comment here"
                  className="md:w-full mt-2 bg-transparent"
                />
                {errors.comment && (
                  <span className="text-red-500">
                    {errors.comment.message?.toString()}
                  </span>
                )}
              </div>

              <DialogFooter className="flex justify-center gap-4 mt-6 items-center">
                <Button type="submit">Submit</Button>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <div className="p-4 flex flex-col gap-4 text-center items-center bg-main">
             <Image src={thanks} alt="thanks"/>
              <Button onClick={() => setOpen(false)} className="w-fit">Close</Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Page: React.FC = () => {
  return (
    <div className="pt-[400px]">
      <div className="fixed left-0 w-full top-0">
        <Image src={navigo} alt="project" className="w-full" />
      </div>
      <h3 className="text-main">Description</h3>
      <p className="mt-3">
        NaviGo is an innovative AI-driven company dedicated to solving
        transportation challenges. We specialize in traffic management and
        efficient transport services, collaborating with industry leaders to
        enhance mobility. Harnessing AI's power, we're transforming the future
        of transportation.
      </p>
      <div className="mt-4">
        <p>
          For more visit: <span className="text-main ml-4">navigo.rw</span>
        </p>
        <div className="flex items-center justify-center mt-2">
          <RateUsDialog />
        </div>
      </div>
    </div>
  );
};

export default Page;
