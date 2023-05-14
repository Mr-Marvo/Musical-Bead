import React, { useEffect } from "react";
import {
  Albums,
  ArtistSignUp,
  Beads,
  Benifits,
  Customize,
  FanSignUp,
  Footer,
  Header,
  Hero,
  Info,
  SettingsUp,
} from "../../components/landingpage";
import "./landingpage.css";
import { useContentContext } from "../../providers/ContentContext";

const LandingPage = () => {
  let { getAuthUser, visitor, setVisitor } = useContentContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      setVisitor(1);
      localStorage.setItem("user", "FAN");
    }
  }, [visitor]);

  useEffect(() => {
    if (token !== null) {
      getAuthUser(token);
    }
  }, []);

  return (
    <div className="bg-black text-white m-0 font-montserrat">
      <Header />
      <Hero />
      <Info />
      <Customize />
      <div>{visitor === 1 ? <></> : <Benifits />}</div>
      <div>{visitor === 1 ? <></> : <SettingsUp />}</div>
      <div>{visitor === 1 ? <Albums /> : <Beads />}</div>
      <div>{visitor === 1 ? <FanSignUp /> : <ArtistSignUp />}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
