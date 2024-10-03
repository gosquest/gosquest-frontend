import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAllProjects = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/projects"));
};

const createProject = (formData: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.post('/projects', formData));
};

const updateProject = ({ formData, _id }: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.put(`/projects/${_id}`, formData));
};

const getProjectById = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/projects/${_id}`));
};

const getUnratedProjects = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/projects/unrated/${_id}`));
};

const getRatedProjects = ({ queryKey }: any): Promise<any> => {
    const [_, _id] = queryKey;
    return handleApiRequest(() => authorizedAPI.get(`/projects/rated/${_id}`));
};

export const useGetAllProjects = () =>
    useQuery<any, Error>({ queryKey: ["projects"], queryFn: getAllProjects });

export const useCreateProject = () => {
    return useMutation<any, Error, any>({
        mutationFn: createProject
    })
}

export const useUpdateProject = () => {
    return useMutation<any, Error, any>({
        mutationFn: updateProject
    })
}

export const useGetProjectById = (_id: string) => useQuery<any, Error, any>({ queryKey: ['project', _id], queryFn: getProjectById });

export const useGetRatedProjects = (_id: string) => useQuery<any, Error, any>({ queryKey: ['rated-projects', _id], queryFn: getRatedProjects });

export const useGetUnRatedProjects = (_id: string) => useQuery<any, Error, any>({ queryKey: ['unrated-projects', _id], queryFn: getUnratedProjects });