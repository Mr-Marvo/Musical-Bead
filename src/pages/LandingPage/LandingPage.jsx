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
  let { userType } = useContentContext();

  useEffect(() => {
    if(localStorage.getItem('user') === null){
      localStorage.setItem('user', 'FAN');
    }
  }, [userType]);

  return (
    <div className="bg-black text-white m-0 font-montserrat">
      <Header />
      <Hero />
      <Info />
      <Customize />
      <div>{userType === 1 ? <></> : <Benifits />}</div>
      <div>{userType === 1 ? <></> : <SettingsUp />}</div>
      <div>{userType === 1 ? <Albums /> : <Beads />}</div>
      <div>{userType === 1 ? <FanSignUp /> : <ArtistSignUp />}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
