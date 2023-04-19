import { createContext, useContext, useState } from "react";

const ContentContext = createContext(undefined);

export const ContentProvider = ({ children }) => {
  const [userType, setUser] = useState(1);

  const setUserType = (id) => {
    setUser(id);
  };

  return (
    <ContentContext.Provider value={{ userType, setUserType }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => useContext(ContentContext);
