import { createContext, useState, ReactNode, useContext } from "react";

// 1. Define context with a proper default value
export const contextcreate = createContext({
  user: { name: "", email: "" },
  login: () => {},
  logout: () => {},
});

const ContextProviderEx = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  const login = () => {
    setUser({ name: "fafae", email: "faaerf" });
  };
  const logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <contextcreate.Provider value={{ user, login, logout }}>
      {children}
    </contextcreate.Provider>
  );
};

export { ContextProviderEx };
