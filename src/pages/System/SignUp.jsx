import React from "react";
import { Footer, Header } from "../../components/system";
import { Link } from "react-router-dom";

const SignUp = () => {

  const signup = () => {
    
  }

  return (
    <div>
      <div className="flex w-full h-screen bg-signup-back bg-cover justify-center items-center">
        <Header />
        <div className="flex flex-col bg-black xl:w-1/4 lg:w-1/2 sl:w-3/4 w-full mx-4 sl:mx-0 h-fit gap-12 py-12 rounded-xl shadow-xl shadow-black">
          <div className="flex font-nunito text-2xl text-white justify-center">
            Sign Up
          </div>
          <div>
            <form onSubmit={signup} className="flex flex-col gap-8 lg:px-16 px-8">
              <div className="flex flex-col">
                <label className="flex font-nunito text-base text-[#7D7D7D]">
                  First Name
                </label>
                <div class="p-[1px] rounded-lg w-full bg-gradient-to-r from-[#2AAEC0] to-[#12E45A]">
                  <label for="name" class="sr-only">
                    First Name
                  </label>
                  <input
                    class="p-1 w-full bg-[#101010] rounded-lg focus:outline-none text-white font-nunito"
                    type="text"
                    id="fname"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex font-nunito text-base text-[#7D7D7D]">
                  Last Name
                </label>
                <div class="p-[1px] rounded-lg w-full bg-gradient-to-r from-[#2AAEC0] to-[#12E45A]">
                  <label for="name" class="sr-only">
                    Last Name
                  </label>
                  <input
                    class="p-1 w-full bg-[#101010] rounded-lg focus:outline-none text-white font-nunito"
                    type="text"
                    id="lname"
                  />
                </div>
              </div>
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
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex font-nunito text-base text-[#7D7D7D]">
                  Re-Type Password
                </label>
                <div class="p-[1px] rounded-lg w-full bg-gradient-to-r from-[#2AAEC0] to-[#12E45A]">
                  <label for="name" class="sr-only">
                    Re-Type Password
                  </label>
                  <input
                    class="p-1 w-full bg-[#101010] rounded-lg focus:outline-none text-white font-nunito"
                    type="password"
                    id="repassword"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
              <Link to="/New_Musician_Dashboard" className="flex rounded-lg bg-gradient-to-r from-[#12E45A] to-[#00A7DC] hover:bg-gradient-to-r hover:from-[#00A7DC] hover:to-[#12E45A] text-white font-nunito text-[20px] font-bold justify-center md:w-1/2 w-full">
                <button type="submit" >
                  Sign Up
                </button>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Link to="/signin">
                  <label className="flex font-nunito text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#12E45A] to-[#00A7DC] cursor-pointer">
                    Have an Account? Log in
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

export default SignUp;
