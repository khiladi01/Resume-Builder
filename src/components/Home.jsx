import { Link } from 'react-router-dom'
import '../style/home.css'
import Swal from "sweetalert2"; 

const Home = () => {
 
     const handleLaunch = () => {
    Swal.fire({
      title: "🚀 Launching Pixel Profile Contact!",
      text: "Hang tight, we're getting everything ready for you.",
      icon: "info",
      confirmButtonColor: "#6366F1",
      confirmButtonText: "Launch!",
    });
  };

    return(
        <>
        <div id="herohome" className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-12 xl:px-[50px] py-8 select-none">
  <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
    
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#CBD5E1] font-bold animate-moveBulgeUp">
        Pixel Profile
      </h1>
    </div>

    <div>
      <button
        id="homebutton"
        onClick={handleLaunch}
        className="w-[250px] h-[50px] border-0 outline-0 bg-transparent rounded-full hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer"
      >
        <Link
          to="/detail"
          className="text-lg text-rose-200 hover:text-rose-300 font-medium"
        >
          Launch PixelProfile
        </Link>
      </button>
    </div>

    <div className="max-w-md">
      <p className="text-rose-50 text-md font-serif">
        Pixel Profile is a simple, streamlined resume builder designed to help students and freshers create professional resumes instantly. No templates, no clutter — just a fast, focused tool to present your skills and experience with clarity. Build, preview, and download your resume in minutes.
      </p>
    </div>
  </div>
</div>

        </>
    )
}
export default Home;