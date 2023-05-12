import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Earnings,
  Home,
  LandingPage,
  MusicianDashboard,
  MyProfile,
  NewMusicianDashboard,
  NotFound,
  SignIn,
  SignUp,
} from "./pages";
import AlbumEdit from "./pages/Common/AlbumEdit/AlbumEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumEdit/>} />
       {/*} <Route path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route
          exact
          path="/musician/completeprofile"
          element={<NewMusicianDashboard />}
        />
        <Route
          exact
          path="/musician/dashboard"
          element={<MusicianDashboard />}
        />
        <Route exact path="/profile" element={<MyProfile />} />
        <Route path="/earnings" element={<Earnings />} />
  <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
