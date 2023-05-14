import axios from "axios";
import { createContext, useContext, useState } from "react";

const ContentContext = createContext(undefined);

export const ContentProvider = ({ children }) => {
  const url = 'https://api.musicalbead.com/api'

  const [visitor, setVisitor] = useState();

  const userName = localStorage.getItem('username').split(" ")[1];
  const userId = localStorage.getItem('userid');
  const userType = localStorage.getItem('usertype');

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
        console.log(response.data.output[0].full_name);
        if (response?.status === 200) {
          localStorage.setItem('username', response.data.output[0].full_name);
          localStorage.setItem('userid', response.data.output[0].user_id);
          localStorage.setItem('usertype', response.data.output[0].user_type_id);

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
    <ContentContext.Provider value={{ url, visitor, setVisitor, getAuthUser, userName, userId, userType }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => useContext(ContentContext);
