"use client";

import React, { useEffect } from 'react';
import { ArrowLeft, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useGetWebsiteById } from '@/hooks/useWebsites';

const WebsitePage: React.FC = () => {
    const router = useRouter();
    const params = useParams();
  
    const slug = params.slug && Array.isArray(params.slug) ? params.slug[0] : '';

    const { data, isLoading, isError } = useGetWebsiteById(slug);

    useEffect(() => {
        console.log("Initial data loading state:", { data, isLoading, isError });
    }, [data, isLoading, isError]);


    if (isLoading) {
        return <p className="text-center">Fetching website...</p>;
    }

    if (isError) {
        return (
            <main className="flex flex-col justify-center">
                <p className="text-center text-red-500 mb-3">Failed to fetch website</p>
                <Button variant="secondary" onClick={() => location.reload()}>
                    Reload
                </Button>
            </main>
        );
    }

    if (!data?.website) {
        console.log("No website data available.");
        router.push('/not-found');
        return null;
    }

    return (
        <>
            <div
                className="fixed bg-background rounded-full top-4 left-4 z-30 p-2 md:hidden cursor-pointer"
                onClick={() => router.push('/dashboard')}
            >
                <ArrowLeft size={21} />
            </div>

            <div className="w-full">
                <h3 className='mb-3 text-right md:text-start mt-4 md:mt-0 mr-4 md:mr-0'>
                    {data.website.name}
                </h3>

                <div className="mb-3 relative">
                    <img 
                        src={data.website.cover_image} 
                        alt={data.website.name} 
                        className="w-full h-[30vh] sm:h-[40vh] object-cover mt-8 md:mt-0 brightness-50" 
                    />
                    <div className='absolute flex items-center justify-center h-full w-full top-0'>
                        <img 
                            src={data.website.logo} 
                            alt={data.website.name} 
                            className="object-cover max-h-[10rem] max-w-[90%]" 
                        />
                    </div>
                </div>

                <div className="p-4 md:p-4">
                    <h3 className="text-main">Description</h3>
                    <p className="mt-3">{data.website.description}</p>
                    <div className="mt-4">
                        <p>
                            For more visit: 
                            <Link 
                                href={data.website.url} 
                                className="text-main ml-2 hover:text-blue-500 hover:underline" 
                                target='_blank'
                            >
                                {data.website.name}
                            </Link>
                        </p>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <div className="flex items-center gap-2 p-2 px-4 rounded-lg cursor-pointer text-white bg-green-500 hover:bg-green-600">
                            <ThumbsUp size={20} />
                            Like
                        </div>
                        <div className="flex items-center gap-2 p-2 px-4 rounded-lg cursor-pointer text-white bg-red-500 hover:bg-red-600">
                            <ThumbsDown size={20} />
                            Dislike
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebsitePage;
