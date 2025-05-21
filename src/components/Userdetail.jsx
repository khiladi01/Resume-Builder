import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import '../style/resume.css'
import Swal from "sweetalert2";

const Detail = ({image , setImage , firstname , setFirstname , surname , setSurname , city , setCity , country , setCountry , pincode , setPincode , phone , setPhone , email , setEmail , linkedin , setLinkedin , github , setGithub  }) => {

    const [error , setError] = useState('');
    
    useEffect(() => {
        const savedImage = localStorage.getItem('userImage');
        if (savedImage) {
            setImage(savedImage);
        }
    }, [setImage]);

    const handler = (e) => {
          e.preventDefault();

          if(firstname === '' || surname === '' || city === '' || country === '' || pincode === '' || phone === '' || email === '' || linkedin === '' || github === ''){
            setError('Please fill all the fields');
            return;
          }
          else if (isNaN(pincode)) {
                 setError('Pincode must be a number');
                 return;
          }
           else if (isNaN(phone)) {
                 setError('PhoneNumber must be a number');
                 return;
          }
          else if (phone.length < 10) {
                 setError('PhoneNumber must be a 10 digit');
                 return;
          }
          else{
            console.log("Detail : " , firstname , surname , city , country , pincode , phone , email , linkedin , github);
            alert('Success')
          }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                localStorage.setItem('userImage', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

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
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-5 select-none">

  {/* Detail Section */}
  <div id="detailsection" className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-gray-200 shadow-md">
    <div className="h-[80px] flex justify-center items-center">
      <h2 className="text-4xl text-slate-700 font-medium">Let’s start with your header</h2>
    </div>

    <div className="h-[820px] w-full flex justify-center">
      <form onSubmit={handler}>
        <div className="text-lg text-slate-600 pl-5 font-medium">
          <label htmlFor="name">Add Image</label>
        </div>
        <div>
          <input 
            type="file"
            onChange={handleImageChange}
            className="w-[220px] h-[50px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
          />
        </div>

        {[
          { label: "First Name", value: firstname, onChange: setFirstname, placeholder: "Purav" },
          { label: "Surname", value: surname, onChange: setSurname, placeholder: "Rajput" },
          { label: "City", value: city, onChange: setCity },
          { label: "Country", value: country, onChange: setCountry },
          { label: "Pincode", value: pincode, onChange: setPincode, placeholder: "Pin Code" },
        ].map((field, i) => (
          <div key={i}>
            <div className="text-lg text-slate-600 pl-5 pt-2 font-medium">
              <label htmlFor="name">{field.label}</label>
            </div>
            <div>
              <input 
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                placeholder={field.placeholder || ""}
                className="w-full max-w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
              />
            </div>
          </div>
        ))}

        {/* Phone */}
        <div className="text-lg text-slate-600 font-medium pl-5 pt-2">
          <label htmlFor="name">
            Phone <select>
              <option value="0">+91</option>
              <option value="0">+7</option>
              <option value="0">+972</option>
            </select>
          </label>
        </div>
        <div>
          <input 
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full max-w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
          />
        </div>

        {/* Email */}
        {[
          { label: "Email", value: email, onChange: setEmail, placeholder: "abc@gmail.com" },
          { label: "Linkedin", value: linkedin, onChange: setLinkedin, placeholder: "URL" },
          { label: "Github", value: github, onChange: setGithub, placeholder: "URL" },
        ].map((field, i) => (
          <div key={i}>
            <div className="text-lg text-slate-600 pl-2 pt-2 font-medium">
              <label htmlFor="name">{field.label}</label>
            </div>
            <div>
              <input 
                type={field.label === "Email" ? "email" : "text"}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                placeholder={field.placeholder}
                className="w-full max-w-[380px] h-[40px] bg-white border-[2px] border-slate-400 rounded-full pl-5 outline-0"
              />
            </div>
          </div>
        ))}

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
          <h1 className="text-3xl text-black font-bold">{firstname} {surname}</h1>
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
          <div className="h-[30px] w-full flex justify-center items-center">
            <p className="text-lg text-black font-bold">Contact</p>
          </div>
          <div className="h-[125px] w-full grid place-content-center">
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{city} | {pincode} | {country}</p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{phone}</p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]">{email}</p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]"><Link to={linkedin}>{linkedin}</Link></p>
            <p className="text-sm text-gray-600 font-normal pt-[5px]"><Link to={github}>{github}</Link></p>
          </div>
          <div className="h-[30px] w-full flex justify-center items-center">___________________________</div>
        </div>

        {/* Right Side Placeholder */}
        <div className="h-[710px] w-full max-w-[330px]"></div>
      </div>
    </div>
  </div>

</div>

{/* Bottom Buttons */}
<div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4">
  <button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
  </button>
  <button onClick={handleLaunch} id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-indigo-300 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/summary' className="text-[18px] text-slate-600 font-medium hover:text-slate-600">Continue</Link>
  </button>
</div>

        </>
    )
}
export default Detail;