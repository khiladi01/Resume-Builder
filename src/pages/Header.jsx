import { Link } from 'react-router-dom';
import '../style/header.css';
import { useEffect, useRef } from 'react';

const Header = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        const h1Element = h1Ref.current;
        if (h1Element) {
            h1Element.classList.add('animate-left-to-right-bulge');

            // Optional: Remove the animation class after animation ends to allow re-triggering
            const handleAnimationEnd = () => {
                h1Element.classList.remove('animate-left-to-right-bulge');
            };
            h1Element.addEventListener('animationend', handleAnimationEnd);

            // Cleanup event listener on unmount
            return () => {
                h1Element.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, []);

    return(
        <>
         {/* Main Header */}
<div className="w-full bg-[#1E1E2F] shadow-sm shadow-gray-100 select-none sticky top-0 z-50">
  <div className="h-[100px] w-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12">
    <h1 ref={h1Ref} className="text-3xl text-[#CBD5E1] font-bold mb-2 sm:mb-0">Profile Pixel</h1>
    
    <button
      id="headerbutton"
      className="h-[40px] w-[180px] rounded-full border-0 outline-0 bg-rose-100 hover:scale-105 hover:shadow-md transition duration-300 ease-in-out cursor-pointer"
    >
      <Link to="/" className="text-md text-slate-600 font-medium">My Account</Link>
    </button>
  </div>
</div>

{/* Sub Header Bar */}
<div className="h-[30px] w-full flex justify-center items-center bg-rose-50 shadow-sm select-none px-4 text-center">
  <p className="text-sm text-slate-600 italic tracking-wide">
    Your next move begins here. Profile Pixel is ready
  </p>
</div>

        </>
    )
}
export default Header;
