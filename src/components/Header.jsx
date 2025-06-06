import bgMobile from "../assets/images/bg-header-mobile.png";
import bgDesktop from "../assets/images/bg-header-desktop.png";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [bgImg, setBgImg] = useState(bgMobile);

  useEffect(() => {
    const updateBackground = () => {
      setBgImg(window.innerWidth < 768 ? bgMobile : bgDesktop)
    }

    updateBackground()
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground)
  },[])

  return (
    <div className=" p-6 text-center bg-[length:full_50%] bg-no-repeat
      md:bg-[length:100%_auto] lg:pt-24"
      style={{backgroundImage: `url(${bgImg})`}}>
        <div className="flex flex-col items-center mx-auto md:max-w-3/4">
          <img src={logo} alt="logo" />
          <h1 className="mt-16 mb-4 text-3xl font-bold lg:text-4xl lg:font-soft">
            A history of everything you copy
          </h1>
          <p className="text-gray-400 lg:max-w-200 lg:text-xl lg:mb-2">
            Clipboard allows you to track and organize everything you 
            copy. Instantly access your clipboard on all your devices.
          </p>
          <div className="flex flex-col md:flex-row md:gap-4 w-full lg:w-2/3">
            <button className="bg-teal-400 mt-4 p-2 rounded-full text-white w-full text-xl
              font-bold shadow-md cursor-pointer
              hover:bg-teal-300">
              Download for iOS
            </button>
            <button className="bg-indigo-400 mt-4 p-2 rounded-full text-white w-full text-xl
              font-bold shadow-md cursor-pointer
              hover:bg-indigo-300">
              Download for Mac
            </button>
          </div>
        </div>
    </div>
  )
}

export default Header;