import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthContextProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState([]);
  const [loggedInUSer, setLoggedInUSer] = useState(null);

  return (
    <Auth.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        setLoggedInUSer,
        loggedInUSer,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
