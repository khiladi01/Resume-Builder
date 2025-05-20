import { useState } from "react";
import { Link } from "react-router-dom"
import '../style/resume.css'
import Swal from "sweetalert2";

const Detail = ({firstname , setFirstname , surname , setSurname , city , setCity , country , setCountry , pincode , setPincode , phone , setPhone , email , setEmail , linkedin , setLinkedin , github , setGithub  }) => {

    const [error , setError] = useState('');
    
    const handler = (e) => {
          e.preventDefault();
    }

    const handleLaunch = () => {
        Swal.fire({
          title: "🚀 Launching Pixel Profile Summary!",
          text: "Hang tight, we're getting everything ready for you.",
          icon: "info",
          confirmButtonColor: "#6366F1",
          confirmButtonText: "Launch!",
        });
      };
    
    return(
        <>
        <div className="h-[1000px] w-full bg-white flex justify-center items-center gap-5">
            <div id="detailsection" className="w-[600px] h-[900px] bg-gray-200 shadow-md">

                <div className="h-[80px] flex justify-center items-center"><h2 className="text-4xl text-slate-700 font-medium">Let’s start with your header</h2></div>
                
                {/* Contact Deatil */}
                <div className="h-[820px] w-full flex justify-center">  
                    <form onSubmit={handler}>

                        <div className="text-lg text-slate-600 pl-5 pt-5 font-medium"><label htmlFor="name">First Name</label></div>
                    <div>
                    <input 
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                     placeholder="Purav"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>

                        <div className="text-lg text-slate-600 pl-5 pt-2 font-medium"><label htmlFor="name">Surname</label></div>
                    <div>
                    <input 
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                     placeholder="Rajput"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>
                    
                        <div className="text-lg text-slate-600 font-medium pl-5 pt-2"><label htmlFor="name">City</label></div>
                    <div>
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
                    />
                    </div> 
                    <div className="text-lg text-slate-600 pl-5 font-medium pt-2"><label htmlFor="name">Country</label></div>
                    <div>
                    <input 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
                    />
                    </div>

                        <div className="text-lg text-slate-600 pl-5 font-medium pt-2"><label htmlFor="name">Pincode</label></div>
                    <div>
                    <input 
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                     placeholder="Pin Code"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>
                    <div className="text-lg text-slate-600 font-medium pl-5 pt-2"><label htmlFor="name">Phone <select>
                        <option value="0">+91</option>
                        <option value="0">+7</option>
                        <option value="0">+972</option>
                        </select></label></div>
                    <div>
                    <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                     placeholder="Phone Number"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>

                        <div className="text-lg text-slate-600 pl-2 pt-2 font-medium"><label htmlFor="name">Email</label></div>
                    <div>
                    <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     placeholder="abc@gmail.com"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>

                        <div className="text-lg text-slate-600 pl-2 pt-2 font-medium"><label htmlFor="name">Linkedin</label></div>
                    <div>
                    <input 
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                     placeholder="URL"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>

                        <div className="text-lg text-slate-600 pl-2 pt-2 font-medium"><label htmlFor="name">Github</label></div>
                    <div>
                    <input 
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                     placeholder="URL"
                     className="w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0" />
                    </div>

                    <div className="h-[100px] w-full pt-5 flex justify-center items-center">
                        <div id='detailsubmitbutton' className="rounded-full bg-rose-100 text-slate-700 font-medium hover:text-slate-800 cursor-pointer">
                        <input 
                        type="submit"
                        value="Submit"
                        className="text-[17px]"
                         />
                    </div>
                    </div>
                </form>
                </div>
            </div>

            {/* Preview */}
            <div id="previewsection" className="w-[600px] h-[900px] bg-gray-200 shadow-md">
            <div className="h-[80px] flex justify-center items-center"><h2 className="text-4xl text-slate-700 font-medium">Preview</h2></div>
            <div className="h-[820px] w-full pl-5">
            <div className="h-[20px] w-full flex justify-center">
                <div className="h-[20px] w-[500px] bg-indigo-500"></div>
            </div>
            <div className="pt-3">
                <h1 className="text-2xl text-black font-bold">{firstname} {surname}</h1>
                <h1 className="text-2xl text-black font-bold">{city} {country}</h1>
            </div>
            </div>
            </div>
        </div>
        {/* button */}
            <div className="h-[70px] w-full flex justify-center items-center gap-[830px]">
            <div><button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer"><Link to='/' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link></button></div>
            <div><button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer"><Link to='/summary' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Continue</Link></button></div>
            </div>
        </>
    )
}
export default Detail;