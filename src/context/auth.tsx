import { storage } from "@/utils/storage.utils";
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  token: string | null;
  user: { email: string } | null;
  login: (token: string, user: { email: string }) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Claves para localStorage
const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

let _token: string | null = null; // acceso auxiliar para axios interceptor

export const getAuthToken = () => _token; // usado por axios

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar datos del localStorage al inicializar
  useEffect(() => {
    const loadStoredAuth = () => {
      try {
        const storedToken = storage.get(TOKEN_KEY);
        const storedUser = storage.get(USER_KEY);

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(storedUser);
          _token = storedToken;
        }
      } catch (error) {
        console.error("Error loading stored auth:", error);
        // Limpiar datos corruptos
        storage.remove(TOKEN_KEY);
        storage.remove(USER_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredAuth();
  }, []);

  const login = (newToken: string, newUser: { email: string }) => {
    // Actualizar estado
    setToken(newToken);
    setUser(newUser);
    _token = newToken;

    // Guardar en localStorage
    storage.set(TOKEN_KEY, newToken);
    storage.set(USER_KEY, newUser);
  };

  const logout = () => {
    // Limpiar estado
    setToken(null);
    setUser(null);
    _token = null;

    // Limpiar localStorage
    storage.remove(TOKEN_KEY);
    storage.remove(USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
