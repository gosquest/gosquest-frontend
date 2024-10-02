import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useQuery } from "@tanstack/react-query";

const getAllProjects = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/projects/create"));
};

export const useGetAllProjects = () =>
    useQuery<any, Error>({ queryKey: ["projects"], queryFn: getAllProjects });