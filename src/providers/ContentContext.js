import axios from "axios";
import { createContext, useContext, useState } from "react";

const ContentContext = createContext(undefined);

export const ContentProvider = ({ children }) => {
  const url = 'https://api.musicalbead.com/api'

  const [visitor, setVisitor] = useState();

  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [userType, setUserType] = useState();

  const getAuthUser = (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      key: "value",
    };

    axios
      .post(url + "/auth/user", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setUserName(response.data.output[0].full_name);
          setUserId(response.data.output[0].user_id);
          setUserType(response.data.output[0].user_type_id);

          if (response.data.output[0].user_type_id === 1) {
            window.location.replace("/dashboard");
          } else if (response.data.output[0].user_type_id === 2) {
            window.location.replace("/dashboard");
          } else {
            window.location.replace("/home");
          }
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContentContext.Provider value={{ url, visitor, setVisitor, getAuthUser, userName, setUserName, userId, setUserId, userType, setUserType }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => useContext(ContentContext);
