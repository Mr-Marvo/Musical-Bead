import { createContext, useContext, useState } from "react";

const ContentContext = createContext(undefined);

export const ContentProvider = ({ children }) => {
  const url = 'https://api.musicalbead.com/api'

  return (
    <ContentContext.Provider value={{ url }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => useContext(ContentContext);
