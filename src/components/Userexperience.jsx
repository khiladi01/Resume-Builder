import { Link } from "react-router-dom"
import '../style/resume.css'
import Swal from "sweetalert2";

const Experience = ({image , firstname , surname , city , country , pincode , phone , email , linkedin , github , summary , skill  , companyname , setCompanyname , date , setDate , domain , setDomain , projectname , setProjectname , detail , setDetail }) => {

    const handler = (e) => {
          e.preventDefault();

          if(companyname === '' || date === '' || domain === '' || detail === ''){
            Swal.fire({
              title: "⚠️ Please fill experience fields",
              icon: "warning",
              confirmButtonColor: "#6366F1",
              confirmButtonText: "Okay!",
            });
            return;
          }
          else{
            Swal.fire({
              title: "Success",
              icon: "success",
              confirmButtonColor: "#6366F1",
              confirmButtonText: "Next!",
            });
          }
    }

    const handleLaunch = () => {
        Swal.fire({
          title: "🚀 Launching Pixel Profile Project!",
          text: "Hang tight, we're getting everything ready for you.",
          icon: "info",
          confirmButtonColor: "#6366F1",
          confirmButtonText: "Launch!",
        });
      };
    
    return(
        <>
      <div className="min-h-[1000px] w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-5 select-none">

  {/* Summary Section */}
  <div id="detailsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px]  bg-gray-200 shadow-md">
    <div className="h-[200px] flex justify-center items-center">
      <h2 className="text-4xl text-slate-700 font-medium">Let Your Experience Speak</h2>
    </div>

    <div className="h-[820px] w-full flex justify-center">
      <form onSubmit={handler}>
      <div className="pl-5"><label htmlFor="summary">Company Name</label></div>
      <div>
        <input
        type="text"
        value={companyname}
        onChange={(e) => setCompanyname(e.target.value)}
        placeholder="Company Name"
        className="w-[380px] h-[40px] rounded-md bg-white border-[2px] outline-0 border-slate-400 pl-5"
        />
      </div>
      <div className="pl-5 pt-2"><label htmlFor="summary">Joining Date</label></div>
      <div>
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Company Name"
        className="w-[380px] h-[40px] rounded-md bg-white border-[2px] outline-0 border-slate-400 pl-5"
        />
      </div>
      <div className="pl-5 pt-2"><label htmlFor="summary">Domain</label></div>
      <div>
        <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Company Name"
        className="w-[380px] h-[40px] rounded-md bg-white border-[2px] outline-0 border-slate-400 pl-5"
        />
      </div>
      <div className="pl-5 pt-2"><label htmlFor="summary">Project Name</label></div>
      <div>
        <input
        type="text"
        value={projectname}
        onChange={(e) => setProjectname(e.target.value)}
        placeholder="Company Name"
        className="w-[380px] h-[40px] rounded-md bg-white border-[2px] outline-0 border-slate-400 pl-5"
        />
      </div>
      <div className="pl-5 pt-2"><label htmlFor="summary">Work</label></div>
      <div>
        <input
        type="text"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder="Company Name"
        className="w-[380px] h-[100px] rounded-md bg-white border-[2px] outline-0 border-slate-400 pl-5"
        />
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
        <div className="h-[70px] w-[90%] md:w-[500px] bg-indigo-600 flex justify-center items-center">
          <h1 className="text-3xl text-white font-bold">{firstname} {surname}</h1>
        </div>
      </div>

      {/* Content Rows */}
      <div className="h-[710px] w-full flex flex-col lg:flex-row justify-center pt-[40px] gap-[20px]">
        {/* Left Side */}
        <div className="h-[710px] w-full max-w-[230px] mx-auto">
          <div className="h-[100px] w-full pt-[10px] flex justify-center">
            {image && <img src={image} alt="user" className="h-[100px] w-[100px] rounded-full border-[2px] border-rose-300" />}
          </div>
          <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>
          {/* Contact */}
          
          <div className="h-[30px] w-full flex justify-center items-center">
            <p className="text-lg text-black font-bold">Contact</p>
          </div>
          <div className="w-full grid place-content-center">
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{city} | {pincode} | {country}</p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{phone}</p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{email}</p>
            <p className="text-sm text-blue-600 font-normal pt-[5px]"><Link to={linkedin}>{linkedin}</Link></p>
            <p className="text-sm text-blue-600 font-normal pt-[5px]"><Link to={github}>{github}</Link></p>
          </div>
          <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>
          {/* Skill */}

          <div className="w-full flex justify-center items-center">
            <p className="text-lg text-black font-bold">Skills</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[80px] pl-1 grid">
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{skill}</p>
          </div>
          </div>
          <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>
        </div>

        {/* Right Side Placeholder */}
        <div className="h-[710px] w-full max-w-[391px]">

          {/* Summary */}
          <div className="h-[30px] w-[391px] flex justify-center items-center">
            <p className="text-lg text-black font-bold">Summary</p>
          </div>
          <div className="w-[391px] pt-[10px] grid place-content-center">
            <div className="w-[300px]">
            <p className="text-sm text-gray-600">{summary}</p>
            </div>
          </div>
          <div className="h-[30px] w-full flex justify-center items-center">_____________________________________________</div>

          {/* Experience */}
          <div className="h-[30px] w-[391px] flex justify-center items-center">
            <p className="text-lg text-black font-bold">Work Experience</p>
          </div>
          <div className="pt-[10px] grid place-content-center">
            <div className="w-[300px]">
            <p className="text-sm text-gray-600 pt-2"><strong>{companyname}</strong> | {date}</p>
            <p className="text-sm text-gray-600 pt-3"><strong>{domain}</strong></p>
            <p className="text-sm text-gray-600 pt-3"><strong>{projectname}</strong></p>
            <p className="text-sm text-gray-600 pt-3">{detail}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>

{/* Buttons */}
<div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4 p-5">
  <button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/skill' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
  </button>
  <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/project' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
  </button>
</div>

        </>
    )
}
export default Experience;