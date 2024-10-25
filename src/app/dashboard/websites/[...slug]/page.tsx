"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import InvalidRequest from '@/components/IsValidUUID';
import { isValidUUID } from '@/utils/constants';
import { useGetWebsiteById } from '@/hooks/useWebsites';

const WebsitePage: React.FC = () => {
    const router = useRouter();
    const params = useParams();

    const slug = params.slug && Array.isArray(params.slug) ? params.slug[0] : '';
    const isValid = isValidUUID(slug);

    const { data, isLoading, isError } = useGetWebsiteById(isValid ? slug : '');

    // Debugging logs
    console.log(params.slug, "Nziko azampoza amarira");
    console.log("Full data response:", data);

    // Handle invalid UUID
    if (!isValid) {
        return <InvalidRequest />;
    }

    // Handle loading state
    if (isLoading) {
        return <p className="text-center">Fetching website...</p>;
    }

    // Handle error state
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

    // Check if data is available
    if (!data || !data.website) {
        console.log("No website data available.");
        router.push('/not-found');
        return null;
    }

    // Render website details
    return (
        <>
            {/* Back Button */}
            <div
                className="fixed bg-background rounded-full top-4 left-4 z-30 p-2 md:hidden cursor-pointer"
                onClick={() => router.push('/dashboard')}
            >
                <ArrowLeft size={21} />
            </div>

            {/* Website Information */}
            <div className="w-full">
                <h3 className='mb-3 text-right md:text-start mt-4 md:mt-0 mr-4 md:mr-0'>
                    {data.website.name}
                </h3>

                {/* Cover Image and Logo */}
                <div className="mb-3 relative">
                    <img 
                        src={data.website.cover_image} 
                        alt={data.website.cover_image} 
                        className="w-full h-[30vh] sm:h-[40vh] object-cover mt-8 md:mt-0 brightness-50" 
                    />
                    <div className='absolute flex items-center justify-center h-full w-full top-0'>
                        <img 
                            src={data.website.logo} 
                            alt={data.website.logo} 
                            className="object-cover max-h-[10rem] max-w-[90%]" 
                        />
                    </div>
                </div>

                {/* Description and Link */}
                <div className="p-4 md:p-4">
                    <h3 className="text-main">Description</h3>
                    <p className="mt-3">{data.website.description}</p>
                    <div className="mt-4">
                        <p>
                            For more visit: 
                            <Link 
                                href={data.website.link} 
                                className="text-main ml-2 hover:text-blue-500 hover:underline" 
                                target='_blank'
                            >
                                {data.website.name}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebsitePage;
