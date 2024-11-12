// auth.provider.ts
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import {jwtDecode} from "jwt-decode";
import BounceLoader from "react-spinners/BounceLoader";

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const { setUser, setRoles } = useAuthStore();
    const [loading, setLoading] = useState(true);

    const fetchUserData = () => {
        try {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("auth-token="))
                ?.split("=")[1];
    
            if (token) {
                const decodedToken: any = jwtDecode(token);
                setUser({ id: decodedToken.id, fullName: decodedToken.fullName });
                setRoles(decodedToken.roles);
            } else {
                console.error("No token found.");
            }
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="items-center justify-center flex min-h-screen">
                <BounceLoader color="#4A90E2" size={60} />
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthProvider;
