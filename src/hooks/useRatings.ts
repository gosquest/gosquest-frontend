import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const createLikeDislike = (data: any): Promise<any> => {
   return handleApiRequest(() => authorizedAPI.post("/ratings", data));
};

export const useCreateLikeDislike = () => {
   return useMutation<any, Error, any>({
      mutationFn: createLikeDislike,
   });
};

const fetchLikedWebsites = (userId: string): Promise<any> => {
   return handleApiRequest(() => authorizedAPI.get(`/ratings/user/${userId}`));
};

export const useLikedWebsites = (userId: string) =>
   useQuery({
      queryKey: ["likedWebsites", userId],
      queryFn: () => fetchLikedWebsites(userId),
      enabled: !!userId,
   });