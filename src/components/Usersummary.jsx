import { Link } from "react-router-dom"
import { useState } from 'react'
import '../style/resume.css'
import Swal from "sweetalert2";

const Summary = ({firstname , surname , summary , setSummary}) => {

    const [error , setError] = useState('');

    const handler = (e) => {
          e.preventDefault();

          if(summary === ''){
            setError('This field is required');
            return;
          }
          else{
            alert("Success");
            console.log("Summary :" , summary)
          }
    }

    const handleLaunch = () => {
        Swal.fire({
          title: "🚀 Launching Pixel Profile Experience!",
          text: "Hang tight, we're getting everything ready for you.",
          icon: "info",
          confirmButtonColor: "#6366F1",
          confirmButtonText: "Launch!",
        });
      };
    
    return(
        <>
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-5 select-none">

  {/* Detail Section */}
  <div id="detailsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-gray-200 shadow-md">
    <div className="h-[80px] flex justify-center items-center">
      <h2 className="text-4xl text-slate-700 font-medium">Let’s start with your header</h2>
    </div>

    <div className="h-[820px] w-full flex justify-center">
      <form onSubmit={handler}>
      <div><label htmlFor="summary">Summary</label></div>
      <div>
        <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
         className="w-[380px] h-[100px] rounded-2xl bg-white border-[2px] border-slate-400 pl-5"></textarea>
      </div>
      
       {/* Error */}
        <div className="h-[20px] w-full pt-2 pl-5">
          {error && <p className="text-rose-400 text-md font-medium">{error}</p>}
        </div>

      {/* Submit Button */}
        <div className="h-[50px] w-full pt-5 flex justify-center items-center">
          <div id='detailsubmitbutton' className="rounded-full bg-rose-100 text-slate-700 font-medium hover:text-slate-800 cursor-pointer">
            <input type="submit" value="Submit" className="text-[17px]" />
          </div>
        </div>
      </form>
    </div>
  </div>

  {/* Preview Section */}
  <div id="previewsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-gray-200 shadow-md mt-5 lg:mt-0">
    <div className="h-[80px] flex justify-center items-center">
      <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
    </div>
    <div className="h-[820px] w-full">
      {/* Name Header */}
      <div className="h-[70px] w-full flex justify-center">
        <div className="h-[70px] w-[90%] md:w-[500px] bg-indigo-500 flex justify-center items-center">
          <h1 className="text-3xl text-black font-bold">{} {}</h1>
        </div>
      </div>

      {/* Content Rows */}
      <div className="h-[710px] w-full flex flex-col lg:flex-row justify-center pt-[40px] gap-[20px]">
        {/* Right Side Placeholder */}
        <div className="h-[710px] w-full max-w-[330px]">
            <p className="text-lg text-black"> {firstname} </p>
            <p className="text-lg text-black"> {surname} </p>
            <p className="text-lg text-black"> {summary} </p>
        </div>
      </div>
    </div>
  </div>

</div>

{/* Bottom Buttons */}
<div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4">
  <button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/detail' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
  </button>
  <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/skill' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
  </button>
</div>

        </>
    )
}
export default Summary;