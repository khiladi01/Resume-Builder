import { Link } from "react-router-dom";
import "../style/resume.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Project = ({
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
  setLanguage,
  iname,
  setIname,
  idate,
  setIdate,
  idomain,
  setIdomain,
  project,
  setProject,
}) => {
  const [animateH2, setAnimateH2] = useState(false);

  useEffect(() => {
    setAnimateH2(true);
  }, []);

  const handler = (e) => {
    e.preventDefault();
    if (!iname || !idate || !idomain || !project || !language) {
      Swal.fire({
        title: "⚠️ Please fill internship fields",
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
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 p-4">
        {/* Form Section */}
        <div className="w-full max-w-3xl bg-gray-200 shadow-md rounded-md p-6">
          <h2 className={`text-3xl sm:text-4xl text-slate-700 font-medium text-center mb-6 ${animateH2 ? 'left-to-right-bulge' : ''}`}>
            Internship Experience
          </h2>
          <form onSubmit={handler} className="space-y-4">
            {[
              { label: "Company Name", value: iname, setValue: setIname, type: "text", placeholder: "Cetpa Infotech pvt ltd" },
              { label: "Joining Date", value: idate, setValue: setIdate, type: "date", placeholder: "Internship joining date" },
              { label: "Domain", value: idomain, setValue: setIdomain, type: "text", placeholder: "Web Designer" },
              { label: "Project", value: project, setValue: setProject, type: "text", placeholder: "Internship Project" },
              { label: "Language", value: language, setValue: setLanguage, type: "text", placeholder: "Add Language" },
            ].map(({ label, value, setValue, type, placeholder }, idx) => (
              <div key={idx}>
                <label className="block text-[16px] font-normal text-black mb-1 pl-5">{label}</label>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholder}
                  className="w-full h-10 rounded-md border-2 border-slate-400 px-4 bg-white outline-none"
                />
              </div>
            ))}
            <div className="flex justify-center">
              <div id='detailsubmitbutton' className="rounded-full bg-rose-100 hover:bg-rose-200 duration-300 transition-all ease-in-out text-slate-700 font-medium hover:text-slate-800 cursor-pointer">
                  <input type="submit" value="Submit" className="text-[17px]" />
                </div>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        <div className="w-full max-w-3xl bg-gray-200 shadow-md rounded-md p-6">
          <h2 className="text-3xl sm:text-4xl text-slate-700 font-medium text-center mb-4">Resume</h2>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-indigo-600 py-4 flex justify-center items-center rounded">
                <h1 className="text-2xl sm:text-3xl text-white font-bold">
                  {firstname} {surname}
                </h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left */}
              <div className="flex-1 space-y-6">
                {image && (
                  <div className="flex justify-center">
                    <img src={image} alt="user" className="h-24 w-24 rounded-full border-2 border-rose-300" />
                  </div>
                )}
                <hr />
                <Section title="Contact">
                  <p>{city} | {pincode} | {country}</p>
                  <p>{phone}</p>
                  <p>{email}</p>
                  <p className="text-blue-600 break-words"><Link to={linkedin}>{linkedin}</Link></p>
                  <p className="text-blue-600 break-words"><Link to={github}>{github}</Link></p>
                </Section>
                <hr />
                <Section title="Skills">
                  <p>{skill}</p>
                </Section>
                <hr />
                <Section title="Language">
                  <p>{language}</p>
                </Section>
              </div>

              {/* Right */}
              <div className="flex-1 space-y-6">
                <Section title="Summary">
                  <p>{summary}</p>
                </Section>
                <hr />
                <Section title="Experience">
                  <p><strong>{companyname}</strong> | {date}</p>
                  <p><strong>{domain}</strong></p>
                  <p><strong>{projectname}</strong></p>
                  <p>{detail}</p>
                </Section>
                <hr />
                <Section title="Internship">
                  <p><strong>{iname}</strong> | {idomain} | {idate}</p>
                </Section>
                <hr />
                <Section title="Project Work">
                  <p><strong>{project}</strong> | {idomain} | {idate}</p>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4 p-5">
        <button className="w-[200px] h-[45px] border-[1px] border-blue-700 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/experience' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
        </button>
        <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/resume' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
        </button>
      </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg text-black font-bold text-center">{title}</h3>
    <div className="mt-2 text-sm text-gray-600 space-y-1 text-center">{children}</div>
  </div>
);

export default Project;
