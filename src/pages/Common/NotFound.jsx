import React, { useEffect, useState } from "react";

const NotFound = () => {
  const pathname = window.location.pathname;
  const [text, setText] = useState("PAGE NOT FOUND");
  const [code, setCode] = useState("404");

  useEffect(() => {
    if (
      pathname === "/dashboard" ||
      pathname === "/home" ||
      pathname === "/completeprofile" ||
      pathname === "/profile" ||
      pathname === "/earnings"
    ) {
      setText("ACCESS NOT GRANTED");
      setCode("403");
    } else {
      setText("PAGE NOT FOUND");
      setCode("404");
    }
  });

  return (
    <div className="flex flex-col bg-black w-full h-screen justify-center items-center">
      <div className="flex bg-black text-8xl notfound">{code}</div>
      <div className="flex bg-black text-4xl notfound">{text}</div>
    </div>
  );
};

export default NotFound;
