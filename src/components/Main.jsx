import computerImg from "../assets/images/image-computer.png";
import deviceImg from "../assets/images/image-devices.png";
import blackListIcon from "../assets/images/icon-blacklist.svg";
import textIcon from "../assets/images/icon-text.svg";
import previewIcon from "../assets/images/icon-preview.svg";
import googleLogo from "../assets/images/logo-google.png";
import ibmLogo from "../assets/images/logo-ibm.png";
import microsoftLogo from "../assets/images/logo-microsoft.png";
import hpLogo from "../assets/images/logo-hp.png";
import vgLogo from "../assets/images/logo-vector-graphics.png";

function Main() {
  return (
    <div className="flex flex-col items-center px-6 text-center mt-20">
      <div className="md:max-w-3/2 lg:max-w-2/3">
        <p className="text-3xl font-bold mb-4 lg:text-4xl">
          Keep track of your snippets
        </p>
        <p className="text-gray-400 pb-16 lg:text-xl">
          Clipboard instantly stores any item you copy in the cloud, 
          meaning you can access your snippets immediately on all your 
          devices. Our Mac and iOS apps will help you organize everything.
        </p>
      </div>
      <div className="mb-40 md:flex md:gap-20 lg:gap-20">
        <img src={computerImg} alt="computer" 
          className="mb-10 md:max-w-3/5 md:ml-[-10vw] lg:ml-[-20vw] lg:max-w-full lg:mr-10"/>
        <div className="md:text-left md:mt-2 lg:mt-4 lg:text-xl ">
          <div className="mb-12 md:max-w-3/4 md:mb-16 lg:max-w-100">
            <p className="text-2xl font-bold text-gray-600 mb-2">
              Quick Search
            </p>
            <p className="text-gray-400">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div div className="mb-12 md:max-w-3/4 md:mb-16">
            <p className="text-2xl font-bold text-gray-600 mb-2">
              iCloud Sync
            </p>
            <p className="text-gray-400">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="md:max-w-3/4">
            <p className="text-2xl font-bold text-gray-600 mb-2">
              Complete History
            </p>
            <p className="text-gray-400">
              Retrieve any snippets from the first moment you started using the app.
            </p>
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-600 mb-4">
        Access Clipboard anywhere
      </p>
      <p className="text-gray-400">
        Whether you’re on the go, or at your computer, you can access all your Clipboard 
        snippets in a few simple clicks.
      </p>
      <img src={deviceImg} alt="device" className="my-10" />
      <p className="text-3xl font-bold text-gray-600 mb-4">
        Supercharge your workflow
      </p>
      <p className="text-gray-400 mb-20">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="flex flex-col gap-10 md:flex-row lg:px-16">
        <div className="flex flex-col gap-4 items-center
          lg:max-w-100">
          <img src={blackListIcon} alt="black list icon" />
          <p className="text-2xl font-bold text-gray-600 mb-2">
            Create blacklists
          </p>
          <p className="text-gray-400">
            Ensure sensitive information never makes its way to your
            clipboard by excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={textIcon} alt="text icon" />
          <p className="text-2xl font-bold text-gray-600 mb-2">
            Plain text snippets
          </p>
          <p className="text-gray-400">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={previewIcon} alt="preview icon" />
          <p className="text-2xl font-bold text-gray-600 mb-2">
            Sneak preview
          </p>
          <p className="text-gray-400">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-16 my-20 md:grid md:grid-cols-4 
      lg:grid-cols-5 lg:my-40">
        <img src={googleLogo} alt="google logo" className="max-w-30"/>
        <img src={ibmLogo} alt="IBM logo" className="max-w-30"/>
        <img src={microsoftLogo} alt="Microsoft logo" className="max-w-30" />
        <img src={hpLogo} alt="Hewlett packard logo" className="max-w-30"/>
        <img src={vgLogo} alt="Vector graphics logo" className="max-w-30"/>
      </div>
      <p className="text-3xl font-bold text-gray-600 mb-2">
        Clipboard for iOS and Mac OS
      </p>
      <p className="text-gray-400 mb-4  lg:max-w-150">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.
      </p>
      <div className="md:flex md:gap-4 w-1/2 lg:w-1/3">
        <button className="bg-teal-400 mt-4 p-2 rounded-full text-white w-full text-xl
          font-bold shadow-md cursor-pointer hover:bg-teal-300">
          Download for iOS
        </button>
        <button className="bg-indigo-400 mt-4 p-2 rounded-full text-white w-full text-xl
          font-bold shadow-md cursor-pointer hover:bg-indigo-300">
          Download for Mac
        </button>
      </div>
    </div>
  )
}

export default Main;