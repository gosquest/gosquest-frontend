import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authorizedAPI, unauthorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useAuthStore } from "@/store/useAuthStore";

interface User {
   id: string;
   fullName: string;
   email: string;
}

interface UpdateUserData {
   userId: string;
   formData: Partial<User>;
}

interface LoginData {
   email: string;
   password: string;
}

// API call functions
const loginUser = (userData: LoginData) => {
   return handleApiRequest(() =>
      unauthorizedAPI.post("/users/login", userData)
   );
};

const fetchAllUsers = (): Promise<User[]> => {
   return handleApiRequest(() => unauthorizedAPI.get("/users/all"));
};

const fetchAllAdmins = (): Promise<User[]> => {
   return handleApiRequest(() => unauthorizedAPI.get("/users/admin"));
};

const fetchUsersByAdmin = (): Promise<User[]> => {
   return handleApiRequest(() => authorizedAPI.get("/users/all/admin"));
};

const registerUser = (userData: Partial<User>) => {
   return handleApiRequest(() =>
      authorizedAPI.post("/users/register", userData)
   );
};

const removeUser = (userId: string) => {
   return handleApiRequest(() => authorizedAPI.delete(`/users/${userId}`));
};

const modifyUser = ({ userId, formData }: UpdateUserData) => {
   return handleApiRequest(() =>
      authorizedAPI.put(`/users/update/${userId}`, formData)
   );
};

// React Query Hooks
export const useLoginUser = () => {
   const setUser = useAuthStore((state) => state.setUser);
   const setRoles = useAuthStore((state) => state.setRoles);

   return useMutation({
      mutationFn: loginUser,
      onSuccess: (data) => {
         console.log("Login successful:", data);
         if (data && data.success) {
            setUser(data.data);
            setRoles(data.data.roles);
            document.cookie = `auth-token=${data.data.token}; path=/;`;
         }
      },
      onError: (error) => {
         console.error("Login error:", error);
      },
   });
};

export const useFetchAllUsers = () =>
   useQuery<User[], Error>({
      queryKey: ["users"],
      queryFn: fetchAllUsers,
   });

export const useFetchAllAdmins = () =>
   useQuery<User[], Error>({
      queryKey: ["admins"],
      queryFn: fetchAllAdmins,
   });

export const useFetchUsersByAdmin = () =>
   useQuery<User[], Error>({
      queryKey: ["users-by-admin"],
      queryFn: fetchUsersByAdmin,
   });

export const useRegisterUser = () => {
   const setUser = useAuthStore((state) => state.setUser);
   const setRoles = useAuthStore((state) => state.setRoles);

   return useMutation({
      mutationFn: registerUser,
      onSuccess: (data) => {
         console.log("Signup successful:", data);
         if (data && data.success) {
            setUser(data.data);
            setRoles(data.data.roles);
            document.cookie = `auth-token=${data.data.token}; path=/;`;
         }
      },
      onError: (error) => {
         console.error("Signup error:", error);
      },
   });
};

export const useRemoveUser = () => {
   const queryClient = useQueryClient();
   return useMutation<void, Error, string>({
      mutationFn: removeUser,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["users-by-admin"] });
      },
   });
};

export const useModifyUser = () => {
   const queryClient = useQueryClient();
   return useMutation<void, Error, UpdateUserData>({
      mutationFn: modifyUser,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["users-by-admin"] });
      },
   });
};
