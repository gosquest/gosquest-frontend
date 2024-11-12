"use client"
import axios from 'axios';

// Helper function for API requests
const handleApiRequest = async (apiCall: () => Promise<any>): Promise<any> => {
    try {
        const response = await apiCall();
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Error response:', error.response);
            return error.response.data;
        } else {
            console.error('Unexpected error:', error);
            throw error;        
        }
    }
};

export default handleApiRequest;