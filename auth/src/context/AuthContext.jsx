import { createContext, useState } from "react";

export let Auth = createContext();

export let ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("reg users")) || []
  );

  return (
    <Auth.Provider
      value={{ toggle, setToggle, registeredUsers, setRegisteredUsers }}
    >
      {children}
    </Auth.Provider>
  );
};
