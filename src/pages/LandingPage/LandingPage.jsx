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
} from "../../components";
import "./landingpage.css";
import { useContentContext } from "../../providers/ContentContext";

const LandingPage = () => {
  let { userType } = useContentContext();

  useEffect(() => {
    alert('test');
    navigator.vibrate =
      navigator.vibrate ||
      navigator.webkitVibrate ||
      navigator.mozVibrate ||
      navigator.msVibrate;

    if (navigator.vibrate) {
      navigator.vibrate(1000);
    }else{
      alert('not supported');
    }
  }, [userType]);

  return (
    <div>
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
