import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useSessionStorage<User | null>("user", null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
