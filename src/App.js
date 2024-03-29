import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlbumEdit,
  AlbumView,
  AllAlbums,
  BeadView,
  Beads,
  Cart,
  Earnings,
  Home,
  LandingPage,
  MusicianDashboard,
  MyOrders,
  MyProfile,
  MyPurchases,
  NewMusicianDashboard,
  NotFound,
  Payment,
  PendingAlbums,
  ProfileView,
  Settings,
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
            <Route path="/beads" element={<Beads />} />
            <Route path="/beadview" element={<BeadView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/my-purchases" element={<MyPurchases />} />
            <Route path="/album/:album_id" element={<AlbumView />} />
            <Route path="/album-edit" element={<AlbumEdit />}  />
            <Route path="/settings" element={<Settings />} />
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
