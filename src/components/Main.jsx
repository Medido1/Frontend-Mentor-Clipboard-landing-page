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
      <p className="text-3xl font-bold mb-4">
        Keep track of your snippets
      </p>
      <p className="text-gray-400 pb-16">
        Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your 
        devices. Our Mac and iOS apps will help you organize everything.
      </p>
      <div className="mb-40">
        <img src={computerImg} alt="computer" className="mb-10"/>
        <div>
          <div className="mb-12">
            <p className="text-3xl font-bold text-gray-600 mb-2">
              Quick Search
            </p>
            <p className="text-gray-400">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div div className="mb-12">
            <p className="text-3xl font-bold text-gray-600 mb-2">
              iCloud Sync
            </p>
            <p className="text-gray-400">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-600 mb-2">
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
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 items-center">
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
      <div className="flex flex-col items-center gap-16 my-20">
        <img src={googleLogo} alt="google logo" className="max-w-30"/>
        <img src={ibmLogo} alt="IBM logo" className="max-w-30"/>
        <img src={microsoftLogo} alt="Microsoft logo" className="max-w-30" />
        <img src={hpLogo} alt="Hewlett packard logo" className="max-w-30"/>
        <img src={vgLogo} alt="Vector graphics logo" className="max-w-30"/>
      </div>
      <p className="text-3xl font-bold text-gray-600 mb-2">
        Clipboard for iOS and Mac OS
      </p>
      <p className="text-gray-400 mb-4">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.
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

export default Main;