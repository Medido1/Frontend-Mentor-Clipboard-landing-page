import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg"

function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 pt-8 flex flex-col items-center
    md:grid md:grid-cols-[1fr_2fr_1fr] md:px-16 md:pb-8">
      <img src={logo} alt="logo" className="max-w-10 md:max-w-12 mb-6" />
      <ul className="text-center flex flex-col gap-4 text-gray-500 mb-4
      md:grid md:grid-cols-2 md:mb-0 md:text-left">
        <li><a href="">FAQs</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Press Kit</a></li>
        <li><a href="">Install Guide</a></li>
      </ul>
      <div className="flex items-center gap-8 mt-4 mb-16 md:m-0">
        <a href="">
          <img src={facebookIcon} alt="facebook link" />
        </a>
        <a href="">
          <img src={twitterIcon} alt="twitter link" />
        </a>
        <a href="">
          <img src={instagramIcon} alt="instagram link" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;