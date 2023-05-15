import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlbumEdit,
  AlbumView,
  Cart,
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
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/album" element={<AlbumView />} />
            <Route path="/album-edit" element={<AlbumEdit />} />
          </>
        ) : (
          <>
            <Route exact path="*" element={<NotFound />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
