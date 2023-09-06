import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/istekhar46",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.github.com/istekhar46",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/istekhar_khan46/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/",
    display: "Blog",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Privacy Policy",
  },
  {
    path: "/",
    display: "Terms & Conditions",
  },
  {
    path: "/",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="img" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              copyright © {year} developed by <a className="font-[800]" target="_blanck" href="https://www.linkedin.com/in/istekhar46">Istekhar khan </a> all rights
              reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor">{item.display} </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor">{item.display} </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link to={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor">{item.display} </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
