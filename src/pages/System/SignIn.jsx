import React, { useState } from "react";
import { Footer, Header } from "../../components/system";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";
import { useEffect } from "react";

const SignIn = () => {
  let { url, getAuthUser } = useContentContext();
  const userType = localStorage.getItem("user");

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signin = (e) => {
    e.preventDefault();

    const data = {
      email_address: email,
      password: password,
      login_type: "1",
      os_type: "4",
      device_id: "",
      push_id: "",
    };

    axios
      .post(url + "/login", data)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.output);
          getAuthUser(response.data.output);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getAuthUser(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div>
      <div className="flex w-full h-screen bg-signup-back bg-cover justify-center items-center">
        <Header />
        <div className="flex flex-col bg-black xl:w-1/4 lg:w-1/2 sl:w-3/4 w-full mx-4 sl:mx-0 h-fit gap-12 py-12 rounded-xl shadow-xl shadow-black">
          <div className="flex font-nunito text-2xl text-white justify-center">
            Sign In {userType === "FAN" ? "as Fan" : "as Artist"}
          </div>
          <div>
            <form
              onSubmit={signin}
              className="flex flex-col gap-8 lg:px-16 px-8"
            >
              <div className="flex flex-col">
                <label className="flex font-nunito text-base text-[#7D7D7D]">
                  Email
                </label>
                <div class="p-[1px] rounded-lg w-full bg-gradient-to-r from-[#2AAEC0] to-[#12E45A]">
                  <label for="name" class="sr-only">
                    Email
                  </label>
                  <input
                    class="p-1 w-full bg-[#101010] rounded-lg focus:outline-none text-white font-nunito"
                    type="email"
                    id="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex font-nunito text-base text-[#7D7D7D]">
                  Password
                </label>
                <div class="p-[1px] rounded-lg w-full bg-gradient-to-r from-[#2AAEC0] to-[#12E45A]">
                  <label for="name" class="sr-only">
                    Password
                  </label>
                  <input
                    class="p-1 w-full bg-[#101010] rounded-lg focus:outline-none text-white font-nunito"
                    type="password"
                    id="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  type="submit"
                  className="flex rounded-lg bg-gradient-to-r from-[#12E45A] to-[#00A7DC] hover:bg-gradient-to-r hover:from-[#00A7DC] hover:to-[#12E45A] text-white font-nunito text-[20px] font-bold justify-center md:w-1/2 w-full"
                >
                  Sign In
                </button>
              </div>
              <div className="flex font-nunito text-base text-[#7D7D7D] w-full justify-center underline">
                <Link to="#">Forgot Password</Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Link to="/signup">
                  <label className="flex font-nunito text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#12E45A] to-[#00A7DC] cursor-pointer">
                    New to Musical Bead? Register
                  </label>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
