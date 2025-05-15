import Image from "next/image";
import './globals.css'
export default function Home() {
  return (

    <>
    {/* Header Section */}
    <header className="sticky top-0">
        <div className="h-[50px] w-full flex justify-center items-center bg-[#F2F0EA] shadow">
        <h1 className="text-[#FF78AC] text-[26px] font-bold move-left-to-right">Resume Builder</h1>
      </div>
      </header>
    {/* Hero Section */}
    <div className="h-screen w-full bg-[#F2F0EA] select-none">
      {/* hero section */}
      <div id="hero" className="h-full w-full">
       
      </div>
    </div>

    </>
  );
}
