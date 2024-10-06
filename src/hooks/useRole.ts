import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useQuery } from "@tanstack/react-query";

const getAllRoles = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/roles"));
};

export const useGetAllRoles = () =>
    useQuery<any, Error>({ queryKey: ["users"], queryFn: getAllRoles });