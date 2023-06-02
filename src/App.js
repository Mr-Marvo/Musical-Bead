import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlbumEdit,
  AlbumView,
  AllAlbums,
  Cart,
  Earnings,
  Home,
  LandingPage,
  MusicianDashboard,
  MyProfile,
  NewMusicianDashboard,
  NotFound,
  PendingAlbums,
  ProfileView,
  SignIn,
  SignUp,
} from "./pages";
import ProfileStore from "./pages/System/ProfileStore";
import Popup2 from "./components/Common/Popup2";

function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<LandingPage />} />
        {token !== null ? (
          <>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/all" element={<AllAlbums />} />
            <Route exact path="/pending" element={<PendingAlbums />} />
            <Route
              exact
              path="/completeprofile"
              element={<NewMusicianDashboard />}
            />
            <Route
              exact
              path="/dashboard"
              element={<MusicianDashboard />}
            />
            <Route exact path="/profile" element={<MyProfile />} />
            <Route exact path="/profile-view" element={<ProfileView />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/album/:album_id" element={<AlbumView />} />
            <Route path="/album-edit" element={<AlbumEdit />} />
          </>
        ) : (
          <>
            <Route exact path="*" element={<NotFound />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
        <Route exact path="/popup2" element={<Popup2 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
