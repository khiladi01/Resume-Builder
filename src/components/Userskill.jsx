import { Link } from "react-router-dom";
import '../style/resume.css';
import Swal from "sweetalert2";

const Skill = ({ image, firstname, surname, city, country, pincode, phone, email, linkedin, github, summary , skill , setSkill }) => {

  const handler = (e) => {
    e.preventDefault();

    if (skill === "") {
      Swal.fire({
        title: "⚠️ Please fill the skill field",
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
  };

  const handleLaunch = () => {
    Swal.fire({
      title: "🚀 Launching Pixel Profile Experience!",
      text: "Hang tight, we're getting everything ready for you.",
      icon: "info",
      confirmButtonColor: "#6366F1",
      confirmButtonText: "Launch!",
    });
  };

  return (
    <>
      <div className="min-h-[1000px] w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-5 select-none">
        <div id="detailsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px]  bg-gray-200 shadow-md">
          <div className="h-[200px] flex justify-center items-center">
            <h2 className="text-4xl text-slate-700 font-medium">Flex Your Expertise</h2>
          </div>

          <div className="h-[820px] w-full flex justify-center">
            <form onSubmit={handler}>
              <div className="pl-5">
                <label htmlFor="summary">Skills <i>(add everything you know)</i></label>
              </div>
              <div>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Add skills"
                  className="w-[380px] h-[40px] rounded-md bg-white border-[2px] border-slate-400 pl-5"
                />
              </div>

              <div className="h-[20px] w-full pt-2 pl-5">
              </div>

              <div className="h-[50px] w-full pt-5 flex justify-center items-center">
                <div id='detailsubmitbutton' className="rounded-full bg-rose-100 text-slate-700 font-medium hover:text-slate-800 cursor-pointer">
                  <input type="submit" value="Submit" className="text-[17px]" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div id="previewsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-gray-200 shadow-md mt-5 lg:mt-0">
          <div className="h-[80px] flex justify-center items-center">
            <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
          </div>
          <div className="h-[820px] w-full">
            <div className="h-[70px] w-full flex justify-center">
              <div className="h-[70px] w-[90%] md:w-[500px] bg-indigo-600 flex justify-center items-center">
                <h1 className="text-3xl text-white font-bold">{firstname} {surname}</h1>
              </div>
            </div>

            <div className="h-[710px] w-full flex flex-col lg:flex-row justify-center pt-[40px] gap-[20px]">
              <div className="h-[710px] w-full max-w-[230px] mx-auto">
                <div className="h-[100px] w-full pt-[10px] flex justify-center">
                  {image && <img src={image} alt="user" className="h-[100px] w-[100px] rounded-full border-[2px] border-rose-300" />}
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>

                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Contact</p>
                </div>
                <div className="w-full grid place-content-center">
                  {pincode && city && country && (
                    <p className="text-sm text-gray-600 font-normal pt-[5px]">{city} | {pincode} | {country}</p>
                  )}
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">{phone}</p>
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">{email}</p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]"><Link to={linkedin}>{linkedin}</Link></p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]"><Link to={github}>{github}</Link></p>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>

                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Skills</p>
                </div>
                <div className="w-full flex justify-center overflow-auto pt-2">
                  <div className="w-[80px] pl-1 grid">
                    <p className="text-sm text-gray-600 font-normal">{skill}</p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>
              </div>

              <div className="h-[710px] w-full max-w-[391px]">
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Summary</p>
                </div>
                <div className="w-[391px] pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600">{summary}</p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">_____________________________________________</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4 p-5">
        <button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/summary' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
        </button>
        <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
          <Link to='/experience' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
        </button>
      </div>
    </>
  );
};

export default Skill;
