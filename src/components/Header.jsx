import bgMobile from "../assets/images/bg-header-mobile.png";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-[length:full_50%] bg-no-repeat"
      style={{backgroundImage: `url(${bgMobile})`}}>
        <img src={logo} alt="logo" />
        <h1 className="mt-16 mb-4 text-3xl font-bold">
          A history of everything you copy
        </h1>
        <p className="text-gray-400">
          Clipboard allows you to track and organize everything you 
          copy. Instantly access your clipboard on all your devices.
        </p>
        <button className="bg-teal-400 mt-4 p-2 rounded-full text-white w-full text-xl
          font-bold shadow-md cursor-pointer">
          Download for iOS
        </button>
        <button className="bg-indigo-400 mt-4 p-2 rounded-full text-white w-full text-xl
          font-bold shadow-md cursor-pointer">
          Download for Mac
        </button>
    </div>
  )
}

export default Header;