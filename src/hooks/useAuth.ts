import { useMutation, useQuery } from '@tanstack/react-query';
import { unauthorizedAPI } from "@/lib/api";
import handleApiRequest from '@/utils/handleApiRequest';

const login = (userData: any) => {
    return handleApiRequest(() => unauthorizedAPI.post('/users/login', userData));
}

const getAllUsers = (): Promise<any> => {
    return handleApiRequest(() => unauthorizedAPI.get("/users/all"));
};

export const useLogin = () => useMutation<any, Error, any>({ mutationFn: login })

export const useGetAllUsers = () =>
    useQuery<any, Error>({ queryKey: ["users"], queryFn: getAllUsers });