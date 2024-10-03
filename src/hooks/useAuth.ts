import { useMutation, useQuery } from '@tanstack/react-query';
import { authorizedAPI, unauthorizedAPI } from "@/lib/api";
import handleApiRequest from '@/utils/handleApiRequest';

const login = (userData: any) => {
    return handleApiRequest(() => unauthorizedAPI.post('/users/login', userData));
}

const getAllUsers = (): Promise<any> => {
    return handleApiRequest(() => unauthorizedAPI.get("/users/all"));
};

const getAllAdmins = (): Promise<any> => {
    return handleApiRequest(() => unauthorizedAPI.get("/users/admin"));
};

const getAllUserByAdmin = (): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.get("/users/all/admin"));
};

export const useLogin = () => useMutation<any, Error, any>({ mutationFn: login })

export const useGetAllUsers = () =>
    useQuery<any, Error>({ queryKey: ["users"], queryFn: getAllUsers });

export const useGetAllAdmins = () =>
    useQuery<any, Error>({ queryKey: ["users-admins"], queryFn: getAllAdmins });

export const useGetAllUsersByAdmin = () =>
    useQuery<any, Error>({ queryKey: ["users-by-admin"], queryFn: getAllUserByAdmin });