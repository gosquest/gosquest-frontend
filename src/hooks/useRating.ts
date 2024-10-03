import { authorizedAPI } from "@/lib/api";
import handleApiRequest from "@/utils/handleApiRequest";
import { useMutation } from "@tanstack/react-query";

const createRating = (formData: any): Promise<any> => {
    return handleApiRequest(() => authorizedAPI.post('/ratings', formData));
};

export const useCreateRating = () => {
    return useMutation<any, Error, any>({
        mutationFn: createRating
    })
}