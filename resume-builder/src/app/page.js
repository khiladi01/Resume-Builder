import Image from "next/image";
import Link from "next/link";
import './globals.css'
import Header from "./components/header";
import Footer from "./components/Footer"

export default function Home() {
  return (

    <>
    {/* Header Section */}
    <Header />

    <div id="hero" className="min-h-screen w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 select-none">
  {/* hero section */} 
  <div className="w-full md:w-1/2 pt-10 md:pt-0 text-center md:text-left">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#e0f2fe] font-bold move-top-to-bottom-bulge color-cycle">
      PixelProfile
    </h1>

    {/* Button  */}
    <div className="pt-6 sm:pt-8">
      <button id="herobutton" className="w-full sm:w-[300px] h-[50px] rounded-full border-0 outline-0 shadow shadow-[#203a43] cursor-pointer">
        <Link href="https://www.google.com" className="block w-full h-full flex items-center justify-center text-[#d1fae5] hover:text-[#b0e7ca] transition-colors text-lg font-bold">
          Launch PixelProfile
        </Link>
      </button>
    </div>

    <p className="w-full sm:max-w-[380px] mx-auto md:mx-0 pt-6 sm:pt-8 text-md text-[#e0f2fe] font-light">
      PixelProfile is a sleek and responsive Resume Builder web app built with modern web technologies. It empowers users to craft professional resumes effortlessly with real-time preview, customizable templates, and export options.
    </p>
  </div>

  {/* Image or Right Side Content if you have one in mind */}
  {/* You can place it here later — this layout is ready for it */}
</div>



    {/* Footer Section */}
    <Footer />
    </>
  );
}
