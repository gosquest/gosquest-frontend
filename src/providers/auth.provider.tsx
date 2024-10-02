"use client";

import { ReactNode, useEffect, useState } from 'react';
import { authorizedAPI } from '@/lib/api';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setUser, setRoles } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authorizedAPI.get('/users/validate/token');
        if (response.status === 200) {
          const userData = response.data;
          setUser(userData.user);
          setRoles(userData.roles);
        } else {
          redirectToLogin();
        }
      } catch {
        redirectToLogin();
      } finally {
        setLoading(false);
      }
    };

    const redirectToLogin = () => {
      if (!['/auth/login', '/'].includes(pathName)) {
        window.location.replace('/auth/login')
      }
    };

    checkAuth();
  }, [pathName, router, setUser]);

  if (loading) {
    return <p className="text-center py-8 text-gray-700">Loading...</p>;
  }

  return <>{children}</>;
};

export default AuthProvider;