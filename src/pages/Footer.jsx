import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../style/header.css';
import Swal from "sweetalert2";

const Footer = () => {

  const handlesupport = () => {
          Swal.fire({
            title: "Sets realistic expectations without being boring!",
            text: "",
            icon: "info",
            confirmButtonColor: "#6366F1",
            confirmButtonText: "Back",
          });
        };

    return(
        <>
        <div className="w-full bg-[#1E1E2F] px-6 py-12 select-none">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Brand */}
    <div>
      <h2 className="text-[#CBD5E1] text-2xl font-medium">Profile Pixel</h2>
      <p className="text-rose-50 text-sm font-normal pt-4">Profile Pixel helps you craft stunning.</p>
      <p className="text-rose-50 text-sm font-normal pt-1">professional resumes in minutes.</p>
      <p className="text-rose-50 text-sm font-normal pt-1">Whether you're a student, job seeker, or professional, we make your profile stand out.</p>
    </div>

    {/* About Us */}
    <div>
      <h2 className="text-[#CBD5E1] text-2xl font-medium">About Us</h2>
      <p className="text-rose-50 text-sm font-normal pt-4">Our mission is to make resume building effortless and accessible. We’re just getting started — and every pixel of progress is designed with you in mind.</p>
    </div>

    {/* Contact Us */}
    <div>
      <h2 className="text-[#CBD5E1] text-2xl font-medium">Contact Us</h2>
      <p className="text-rose-50 text-sm font-normal pt-4">
        <strong><FontAwesomeIcon icon={faPhone} className="text-pink-500 mr-2" /></strong> +91 9142158588
      </p>
      <p className="text-rose-50 text-sm font-normal pt-4">
        <strong><FontAwesomeIcon icon={faEnvelope} className="text-pink-500 mr-2" /></strong> akshayraj@gmail.com
      </p>
      <p className="text-sm text-rose-50 pt-4">
        <strong><FontAwesomeIcon icon={faWhatsapp} className="text-pink-500 text-lg mr-2" /></strong> Chat with us on 
        <Link to="https://wa.me/9142158588" className="underline text-rose-300 hover:text-pink-400 ml-1">WhatsApp</Link>
      </p>
    </div>

    {/* Support */}
    <div>
      <h2 className="text-[#CBD5E1] text-2xl font-medium">Support</h2>
      <div className="pt-4">
        <Link to="" onClick={handlesupport} className="text-sm text-rose-200 font-normal hover:text-rose-300">Privacy Policy</Link>
      </div>
      <div className="pt-4">
        <Link to="" onClick={handlesupport} className="text-sm text-rose-200 font-normal hover:text-rose-300">Terms Of Services</Link>
      </div>
      <div className="pt-4">
        <Link to="" onClick={handlesupport} className="text-sm text-rose-200 font-normal hover:text-rose-300">Cookies & Tracking Policy</Link>
      </div>
    </div>

  </div>
</div>

{/* copyright */}
<div className="h-[30px] w-full bg-[#1E1E2F] flex justify-center items-center select-none">
<p className="text-sm text-rose-100">2025 © akki profilepixel all right reserved </p>
</div>
        </>
    )
}
export default Footer;
