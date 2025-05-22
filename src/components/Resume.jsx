import React, { useRef } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2canvas";

const Resume = ({
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
  date,
  domain,
  projectname,
  detail,
  language,
  iname,
  idate,
  idomain,
  project,
}) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.4,
      filename: `${firstname}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: false, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      {/* Download Button Container (separate from preview) */}
      <div className="w-full flex justify-center mt-6 mb-4 select-none">
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
          aria-label="Download Resume as PDF"
        >
          Download Resume PDF
        </button>
      </div>

      {/* Resume Preview Section */}
      <div className="min-h-[1000px] w-full bg-white flex flex-col lg:flex-row justify-center items-center select-none">
        <div
          ref={resumeRef}
          id="previewsection"
          className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-gray-200 shadow-md mt-5 lg:mt-0"
        >
          <div className="h-[80px] flex justify-center items-center">
            <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
          </div>
          <div className="h-[820px] w-full">
            {/* Name Header */}
            <div className="h-[70px] w-full flex justify-center">
              <div className="h-[70px] w-[90%] md:w-[500px] bg-indigo-600 flex justify-center items-center">
                <h1 className="text-3xl text-white font-bold">
                  {firstname} {surname}
                </h1>
              </div>
            </div>

            {/* Content Rows */}
            <div className="h-[710px] w-full flex flex-col lg:flex-row justify-center pt-[40px] gap-[20px]">
              {/* Left Side */}
              <div className="h-[710px] w-full max-w-[230px] mx-auto">
                <div className="h-[100px] w-full pt-[10px] flex justify-center">
                  {image && (
                    <img
                      src={image}
                      alt="user"
                      className="h-[100px] w-[100px] rounded-full border-[2px] border-rose-300"
                    />
                  )}
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Contact */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Contact</p>
                </div>
                <div className="w-full grid place-content-center">
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {city} | {pincode} | {country}
                  </p>
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {phone}
                  </p>
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {email}
                  </p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]">
                    <Link to={linkedin}>{linkedin}</Link>
                  </p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]">
                    <Link to={github}>{github}</Link>
                  </p>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Skill */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Skills</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-[80px] pl-1 grid">
                    <p className="text-sm text-gray-600 font-normal pt-[5px]">
                      {skill}
                    </p>
                  </div>
                </div>

                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Language */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Language</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-[80px] pl-1 grid">
                    <p className="text-sm text-gray-600 font-normal pt-[5px]">
                      {language}
                    </p>
                  </div>
                </div>
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
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Experience */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Experience</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{companyname}</strong> | {date}
                    </p>
                    <p className="text-sm text-gray-600 pt-3">
                      <strong>{domain}</strong>
                    </p>
                    <p className="text-sm text-gray-600 pt-3">
                      <strong>{projectname}</strong>
                    </p>
                    <p className="text-sm text-gray-600 pt-3">{detail}</p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Internship */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Internship</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{iname}</strong> | {idomain} | {idate}
                    </p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Project Work */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Project Work</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{project}</strong> | {idomain} | {idate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
