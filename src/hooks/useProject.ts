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

export const useGetProjectById = (_id: string) => useQuery<any, Error, any>({ queryKey: ['user-roles', _id], queryFn: getProjectById });