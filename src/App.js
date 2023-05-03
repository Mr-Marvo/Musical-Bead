import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, NotFound, SignIn, SignUp,  } from "./pages";
import New_Musician_Dashboard from "./pages/New_Musican_Dashboard/New_Musician_Dashboard";
import Musician_Dashboard from "./pages/Musician_Dashboard/Musician_Dashboard";
import My_Profile from "./pages/My_Profile/My_Profile";
import Earnings from "./pages/Earnings/Earnings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/New_Musician_Dashboard" element={<New_Musician_Dashboard />} />
        <Route exact path="/Musician_Dashboard" element={<Musician_Dashboard />} />
        <Route exact path="/My_Profile" element={<My_Profile />} />
        <Route path="/Earnings" element={<Earnings/>} />
        <Route path="*" element={<NotFound />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
