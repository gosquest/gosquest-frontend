import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAllProjects = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/projects/create"));
};

const createProject = (formData: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.post('/projects/create', formData));
};

export const useGetAllProjects = () =>
    useQuery<any, Error>({ queryKey: ["projects"], queryFn: getAllProjects });

export const useCreateProject = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, any>({
        mutationFn: createProject, onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        },
    })
}