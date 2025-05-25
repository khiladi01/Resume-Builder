import { Link } from "react-router-dom";
import "../style/resume.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Experience = ({
  image,
  firstname,
  surname,
  city,
  country,
  pincode,
  phone,
  email,
  linkedin,
  github,
  summary,
  skill,
  companyname,
  setCompanyname,
  date,
  setDate,
  domain,
  setDomain,
  projectname,
  setProjectname,
  detail,
  setDetail,
}) => {
  const [animateH2, setAnimateH2] = useState(false);

  useEffect(() => {
    setAnimateH2(true);
  }, []);

  const handler = (e) => {
    e.preventDefault();

    if (
      companyname === "" ||
      date === "" ||
      domain === "" ||
      detail === ""
    ) {
      Swal.fire({
        title: "⚠️ Please fill experience fields",
        icon: "warning",
        confirmButtonColor: "#6366F1",
        confirmButtonText: "Okay!",
      });
      return;
    } else {
      Swal.fire({
        title: "Success",
        icon: "success",
        confirmButtonColor: "#6366F1",
        confirmButtonText: "Next!",
      });
    }
  };

  const handleLaunch = () => {
    Swal.fire({
      title: "🚀 Launching Pixel Profile Project!",
      text: "Hang tight, we're getting everything ready for you.",
      icon: "info",
      confirmButtonColor: "#6366F1",
      confirmButtonText: "Launch!",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 select-none px-4 py-6">
        {/* Summary Section */}
        <div className="w-full max-w-[700px] bg-gray-200 shadow-md flex-grow">
          <div className="py-6 flex justify-center items-center">
            <h2
              className={`text-4xl text-slate-700 font-medium ${
                animateH2 ? "left-to-right-bulge" : ""
              }`}
            >
              Let Your Experience Speak
            </h2>
          </div>

          <div className="w-full flex justify-center">
            <form onSubmit={handler} className="w-full px-4 sm:px-8">
              <label className="block mb-1 pl-5">Company Name</label>
              <input
                type="text"
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
                placeholder="HCL Technologies"
                className="w-full h-[40px] rounded-md bg-white border-2 outline-0 border-slate-400 pl-5 mb-4 input-bulge"
              />

              <label className="block mb-1 pl-5">Joining Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-[40px] rounded-md bg-white border-2 outline-0 border-slate-400 pl-5 mb-4"
              />

              <label className="block mb-1 pl-5">Domain</label>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Web Designer"
                className="w-full h-[40px] rounded-md bg-white border-2 outline-0 border-slate-400 pl-5 mb-4"
              />

              <label className="block mb-1 pl-5">Project Name</label>
              <input
                type="text"
                value={projectname}
                onChange={(e) => setProjectname(e.target.value)}
                placeholder="Resume Builder"
                className="w-full h-[40px] rounded-md bg-white border-2 outline-0 border-slate-400 pl-5 mb-4"
              />

              <label className="block mb-1 pl-5">Work</label>
              <input
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="Worked on building a resume builder application using React and Tailwind CSS."
                className="w-full h-[100px] rounded-md bg-white border-2 outline-0 border-slate-400 pl-5 mb-4"
              />

              <div className="w-full flex justify-center">
                <div id='detailsubmitbutton' className="rounded-full bg-rose-100 hover:bg-rose-200 duration-300 transition-all ease-in-out text-slate-700 font-medium hover:text-slate-800 cursor-pointer">
                  <input type="submit" value="Submit" className="text-[17px]" />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full max-w-[700px] bg-gray-200 shadow-md flex-grow mt-5 lg:mt-0">
          <div className="py-4 flex justify-center items-center">
            <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
          </div>

          <div className="px-4 sm:px-8 pb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-600 w-full max-w-md py-3 flex justify-center items-center">
                <h1 className="text-3xl text-white font-bold">
                  {firstname} {surname}
                </h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Side */}
              <div className="flex flex-col items-center w-full lg:w-1/2">
                {image && (
                  <img
                    src={image}
                    alt="user"
                    className="h-[100px] w-[100px] rounded-full border-[2px] border-rose-300 mb-2"
                  />
                )}
                <div className="text-center">___________________________</div>
                <p className="text-lg font-bold mt-2">Contact</p>
                <div className="text-center">
                  <p className="text-sm text-gray-600">{city} | {pincode} | {country}</p>
                  <p className="text-sm text-gray-600">{phone}</p>
                  <p className="text-sm text-gray-600">{email}</p>
                  <p className="text-sm text-blue-600 break-all">
                    <Link to={linkedin}>{linkedin}</Link>
                  </p>
                  <p className="text-sm text-blue-600 break-all">
                    <Link to={github}>{github}</Link>
                  </p>
                </div>
                <div className="text-center mt-2">___________________________</div>
                <p className="text-lg font-bold mt-2">Skills</p>
                <p className="text-sm text-gray-600 text-center">{skill}</p>
                <div className="text-center mt-2">___________________________</div>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-1/2">
                <p className="text-lg font-bold text-center">Summary</p>
                <p className="text-sm text-gray-600 mt-2">{summary}</p>
                <div className="text-center mt-4">_____________________________________________</div>
                <p className="text-lg font-bold text-center mt-4">Work Experience</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600 pt-2">
                    <strong>{companyname}</strong> | {date}
                  </p>
                  <p className="text-sm text-gray-600 pt-2">
                    <strong>{domain}</strong>
                  </p>
                  <p className="text-sm text-gray-600 pt-2">
                    <strong>{projectname}</strong>
                  </p>
                  <p className="text-sm text-gray-600 pt-2">{detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4 p-5">
        <button className="w-[200px] h-[45px] border-[1px] border-blue-700 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/skill' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
        </button>
        <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/project' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
        </button>
      </div>
    </>
  );
};

export default Experience;
