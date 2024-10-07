import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

const register = (userData: any) => {
    return handleApiRequest(() => authorizedAPI.post('/users/register', userData));
}

const deleteUser = (userId: string) => {
    return handleApiRequest(() => authorizedAPI.delete(`/users/${userId}`));
}

const updateUser = ({ userId, formData }: any) => {
    return handleApiRequest(() => authorizedAPI.put(`/users/update/${userId}`, formData));
}

export const useLogin = () => useMutation<any, Error, any>({ mutationFn: login })

export const useGetAllUsers = () =>
    useQuery<any, Error>({ queryKey: ["users"], queryFn: getAllUsers });

export const useGetAllAdmins = () =>
    useQuery<any, Error>({ queryKey: ["users-admins"], queryFn: getAllAdmins });

export const useGetAllUsersByAdmin = () =>
    useQuery<any, Error>({ queryKey: ["users-by-admin"], queryFn: getAllUserByAdmin });

export const useRegister = () => {
    const queryClient = useQueryClient()
    return (
        useMutation<any, Error, any>({
            mutationFn: register,
            onSuccess() {
                queryClient.invalidateQueries({ queryKey: ['users-by-admin'] })
            }
        })
    )
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient()
    return(
        useMutation<any, Error, string>({ 
            mutationFn: deleteUser,
            onSuccess(){
                queryClient.invalidateQueries({queryKey: ['users-by-admin']})
            }
        })
    )
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    return(
        useMutation<any, Error, any>({ 
            mutationFn: updateUser,
            onSuccess(){
                queryClient.invalidateQueries({queryKey: ['users-by-admin']})
            }
        })
    )
}