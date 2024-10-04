"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import RatingRow from './RatingRow';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useCreateRating } from '@/hooks/useRating';
import { useAuthStore } from '@/store/useAuthStore';
import { useParams } from 'next/navigation';
import Confetti from 'react-confetti';
import { useWindowHeight, useWindowSize, useWindowWidth} from "@react-hook/window-size";

const feedbackSchema = z.object({
    feedback: z.string(),
});

interface RatingsState {
    relevance: number | null;
    impact_to_society: number | null;
    performance: number | null;
    progress: number | null;
}

interface dialogProps {
    projectName: string;
}

const RateUsDialog: React.FC<dialogProps> = ({ projectName }) => {
    const [ratingsState, setRatingsState] = useState<RatingsState>({
        relevance: null,
        impact_to_society: null,
        performance: null,
        progress: null,
    });
    const { user } = useAuthStore();
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const ratingMutation = useCreateRating();

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: zodResolver(feedbackSchema),
    });

    const onSubmit = async (data: any) => {
        const allRated = Object.values(ratingsState).every((rating) => rating !== null);

        if (!allRated) {
            toast.error('Please rate all fields before submitting.');
            return;
        }
        const { feedback } = data;
        try {
            const response = await ratingMutation.mutateAsync({
                ...(feedback ? { feedback } : {}),
                ...ratingsState,
                userId: user.id,
                projectId: params.slug[0],
            });
            if (response.success) {
                setSubmitted(true);
            } else {
                toast.error(response.error.msg);
            }
        } catch (error) {
            console.log(error);
            toast.error("Rating failed please try again!");
        }
    };

    const handleRatingChange = (category: keyof RatingsState, value: number) => {
        setRatingsState((prev) => ({ ...prev, [category]: value }));
    };

    const width=useWindowWidth()
    const height=useWindowHeight()

    return (
        <Dialog
            open={open}
            onOpenChange={() => {
                setOpen(!open);
                setSubmitted(false);
            }}
        >
            <DialogTrigger asChild>
                <Button className="bg-main py-6 px-8 rounded w-3/4 sm:w-[300px] mt-6">Rate Us!</Button>
            </DialogTrigger>
            <DialogContent className={`!border-none max-w-[320px] min-w-[90%] md:min-w-[50%] lg:min-w-[40%] overflow-y-auto max-h-[90vh] ${submitted ? 'bg-main' : 'bg-white'}`}>
                <DialogHeader className="bg-main text-white p-4 -ml-6 -mt-6 -mr-6 flex items-center md:p-6">
                    <DialogTitle>Rate {projectName}</DialogTitle>
                </DialogHeader>
                {!submitted ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            {[
                                ['Relevance', 'relevance'],
                                ['Impact to society', 'impact_to_society'],
                                ['Performance', 'performance'],
                                ['Progress', 'progress'],
                            ].map((category, index) => (
                                <RatingRow
                                    key={index}
                                    label={category[0]}
                                    selectedRating={ratingsState[category[1] as keyof RatingsState]}
                                    onRatingChange={(value: number) => handleRatingChange(category[1] as keyof RatingsState, value)}
                                />
                            ))}
                        </div>
                        <div>
                            <label htmlFor="feedback" className="text-main">Feedback</label>
                            <Textarea
                                id="feedback"
                                {...register('feedback')}
                                placeholder="Type your feedback here"
                                className="w-full mt-2 bg-transparent focus:!ring-0 !ring-offset-0"
                            />
                            {errors.feedback && <span className="text-red-500">{errors.feedback.message?.toString()}</span>}
                        </div>
                        <div className="flex justify-center gap-4 mt-6 items-center">
                            <Button className='!rounded' variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button className='!rounded' type="submit" disabled={ratingMutation.isPending}>
                                {ratingMutation.isPending ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="p-4 flex flex-col gap-4 text-center items-center bg-main h-[50vh] justify-center relative">
                        <h2 className="text-white text-2xl">Thanks for your feedback!</h2>
                        <Button onClick={() => setOpen(false)} className="w-fit bg-white text-main hover:text-white">
                            <Link href="/dashboard">Back To Dashboard</Link>
                        </Button>
                        <Confetti
                            width={width}
                            height={height}
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default RateUsDialog;
