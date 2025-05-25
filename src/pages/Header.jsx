import { Link } from 'react-router-dom';
import '../style/header.css';
import { useEffect, useRef, useState } from 'react';
import Swal from "sweetalert2";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const h1Ref = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAccount = () => {
    Swal.fire({
      title: "Create Account is coming soon. Hang tight, we're building it for you!",
      text: "In Progress",
      icon: "info",
      confirmButtonColor: "#6366F1",
      confirmButtonText: "Back",
    });
  };

  useEffect(() => {
    const h1Element = h1Ref.current;
    if (h1Element) {
      h1Element.classList.add('animate-left-to-right-bulge');

      const handleAnimationEnd = () => {
        h1Element.classList.remove('animate-left-to-right-bulge');
      };
      h1Element.addEventListener('animationend', handleAnimationEnd);

      return () => {
        h1Element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  return (
    <>
      {/* Main Header */}
      <div className="w-full bg-[#1E1E2F] shadow-sm shadow-gray-100 select-none sticky top-0 z-50">
        <div className="h-[100px] w-full flex justify-between items-center px-6 sm:px-12">
          <h1 ref={h1Ref} className="text-3xl text-[#CBD5E1] font-bold">Pixel Profile</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <button
              onClick={handleAccount}
              className="h-[40px] w-[180px] rounded-full border-0 outline-0 bg-rose-100 hover:scale-105 hover:shadow-md transition duration-300 ease-in-out cursor-pointer"
            >
              <Link to="/" className="text-md text-slate-600 font-medium">My Account</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-[#2a2a3f] px-6 pb-4">
            <button
              onClick={() => {
                handleAccount();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-4 bg-rose-100 text-slate-600 font-medium rounded-md mt-2 hover:bg-rose-200 transition-all"
            >
              My Account
            </button>
          </div>
        )}
      </div>

      {/* Sub Header */}
      <div className="h-[30px] w-full flex justify-center items-center bg-rose-50 shadow-sm select-none px-4 text-center">
        <p className="text-sm text-slate-600 italic tracking-wide">
          Your next move begins here. Pixel Profile is ready
        </p>
      </div>
    </>
  );
};

export default Header;
