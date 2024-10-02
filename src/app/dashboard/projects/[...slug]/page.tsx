"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import navigo from "../../../../../public/uploads/headers/navigo.png";
import thanks from "../../../../../public/images/thank.png";
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
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
         <h6 className="text-main w-[10%] md:w-fit">{label}</h6>
         <div className="flex gap-4 overflow-x-auto">
            {ratings.map((rating) => (
               <div
                  key={rating}
                  onClick={() => onRatingChange(rating)}
                  className={`flex items-center justify-center p-4 shadow border rounded-full w-[20px] h-[20px] md:w-[40px] md:h-[40px] cursor-pointer ${
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

   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
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
      <Dialog
         open={open}
         onOpenChange={() => {
            setOpen(!open);
            setSubmitted(false);
         }}
      >
         <DialogTrigger asChild>
            <Button className="bg-main py-6 px-8 rounded-full w-3/4 sm:w-[300px] mt-6">
               Rate Us!
            </Button>
         </DialogTrigger>
         <DialogContent
            className={`border border-main w-[95%] md:w-[80%] xl:w-[70%] p-6 overflow-y-auto max-h-[90vh] ${
               !submitted ? "bg-white" : "bg-main"
            }`}
         >
            {!submitted ? (
               <>
                  <DialogHeader className="bg-main text-white p-4 rounded-t-lg -ml-6 -mt-6 -mr-6 flex items-center md:p-6">
                     <DialogTitle>Rate NaviGo</DialogTitle>
                  </DialogHeader>
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="flex flex-col gap-4"
                  >
                     <div className="flex flex-col gap-4 overflow-x-auto">
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
                     </div>
                     <div className="p-4 flex flex-col gap-2 md:flex-row md:gap-4">
                        <label
                           htmlFor="comment"
                           className="text-main"
                        >
                           Comment
                        </label>
                        <div className="w-full">
                           <Textarea
                              id="comment"
                              {...register("comment")}
                              placeholder="Type your comment here"
                              className="w-full mt-2 bg-transparent"
                           />
                           {errors.comment && (
                              <span className="text-red-500">
                                 {errors.comment.message?.toString()}
                              </span>
                           )}
                        </div>
                     </div>
                     <DialogFooter className="flex justify-center gap-4 mt-6 items-center">
                        <Button type="submit">Submit</Button>
                        <Button
                           variant="outline"
                           onClick={() => setOpen(false)}
                        >
                           Cancel
                        </Button>
                     </DialogFooter>
                  </form>
               </>
            ) : (
               <div className="p-4 flex flex-col gap-4 text-center items-center bg-main">
                  <Image
                     src={thanks}
                     alt="thanks"
                  />
                  <Button
                     onClick={() => setOpen(false)}
                     className="w-fit"
                  >
                     <Link href="/dashboard"> Back To Dashboard</Link>
                  </Button>
               </div>
            )}
         </DialogContent>
      </Dialog>
   );
};

const Page: React.FC = () => {
   const router = useRouter();

   return (
      <>
         <div
            className="fixed bg-background rounded-full top-4 left-4 z-30 p-3 sm:hidden cursor-pointer"
            onClick={() => router.push("/dashboard/projects")}
         >
            <ArrowLeft />
         </div>
         <div className="w-full">
            <div className="mb-6 sm:mt-40 md:mt-10">
               <Image
                  src={navigo}
                  alt="project"
                  className="w-full h-[30vh] sm:h-full"
               />
            </div>
            <div className="p-8">
               <h3 className="text-main">Description</h3>
               <p className="mt-3">
                  NaviGo is an innovative AI-driven company dedicated to solving
                  transportation challenges. We specialize in traffic management
                  and efficient transport services, collaborating with industry
                  leaders to enhance mobility. Harnessing AI's power, we're
                  transforming the future of transportation.
               </p>
               <div className="mt-4">
                  <p>
                     For more visit:{" "}
                     <span className="text-main ml-4">navigo.rw</span>
                  </p>
                  <div className="flex items-center justify-center mt-4">
                     <RateUsDialog />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Page;
