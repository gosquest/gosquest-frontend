import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAllWebsites = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/websites"));
};

const createWebsite = (formData: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.post('/websites', formData));
};

const updateWebsite = ({ formData, _id }: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.put(`/websites/${_id}`, formData));
};

const getWebsiteById = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/websites/${_id}`));
};


const getUnratedWebsites = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/websites/unrated/${_id}`));
};

const getRatedWebsites = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/websites/rated/${_id}`));
};

export const useGetAllWebsites = () =>
    useQuery<any, Error>({ queryKey: ["websites"], queryFn: getAllWebsites });

export const useCreateWebsite = () => {
    return useMutation<any, Error, any>({
        mutationFn: createWebsite
    })
}

export const useUpdateWebsite = () => {
    return useMutation<any, Error, any>({
        mutationFn: updateWebsite
    })
}

export const useGetWebsiteById = (_id: string) => useQuery<any, Error, any>({ queryKey: ['website', _id], queryFn: getWebsiteById });

export const useGetRatedWebsites = (_id: string) => useQuery<any, Error, any>({ queryKey: ['rated-websites', _id], queryFn: getRatedWebsites });

export const useGetUnRatedWebsites = (_id: string) => useQuery<any, Error, any>({ queryKey: ['unrated-websites', _id], queryFn: getUnratedWebsites });
