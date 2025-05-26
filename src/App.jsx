import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './components/Home';
import Detail from './components/Userdetail';
import Project from './components/Userproject';
import Experience from './components/Userexperience';
import Skill from './components/Userskill';
import Summary from './components/Usersummary';
import Resume from './components/Resume';

function App() {
  
  const[ image , setImage ] = useState("");
  const[ firstname , setFirstname ] = useState("");
  const[ surname , setSurname ] = useState("");
  const[ city , setCity  ] = useState("");
  const[ country , setCountry  ] = useState("");
  const[ pincode , setPincode  ] = useState("");
  const[ phone , setPhone  ] = useState("");
  const[ email , setEmail  ] = useState("");
  const[ linkedin , setLinkedin  ] = useState("");
  const[ github , setGithub  ] = useState("");

  const[ summary , setSummary ] = useState("");

  const[ skill , setSkill ] = useState("");

  const[ companyname , setCompanyname ] = useState("");
  const[ date , setDate ] = useState("");
  const[ domain , setDomain ] = useState("");
  const[ projectname , setProjectname ] = useState("");
  const[ detail , setDetail ] = useState("");

  const[ iname , setIname ] = useState("");
  const[ idate , setIdate] = useState("");
  const[ idomain , setIdomain] = useState("");
  const[ project , setProject] = useState("");
  const[ language , setLanguage ] = useState("");

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/detail' element={<Detail  
        image={image} setImage={setImage}
        firstname={firstname} setFirstname={setFirstname}
        surname={surname} setSurname={setSurname}
        city={city} setCity={setCity}
        country={country} setCountry={setCountry}
        pincode={pincode} setPincode={setPincode}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        linkedin={linkedin} setLinkedin={setLinkedin}
        github={github} setGithub={setGithub}
        />} />

        <Route path='/summary' element={<Summary 
        image={image}
        firstname={firstname} 
        surname={surname} 
        city={city}
        country={country}
        pincode={pincode}
        phone={phone}
        email={email}
        linkedin={linkedin}
        github={github}
        summary={summary} setSummary={setSummary}
        />} />

        <Route path='/skill' element={<Skill 
        image={image}
        firstname={firstname} 
        surname={surname} 
        city={city}
        country={country}
        pincode={pincode}
        phone={phone}
        email={email}
        linkedin={linkedin}
        github={github}
        summary={summary} setSummary={setSummary}
        skill={skill} setSkill={setSkill}
        />} />

        <Route path='/experience' element={<Experience
        image={image}
        firstname={firstname} 
        surname={surname} 
        city={city}
        country={country}
        pincode={pincode}
        phone={phone}
        email={email}
        linkedin={linkedin}
        github={github}
        summary={summary} 
        skill={skill} 
        companyname={companyname} setCompanyname={setCompanyname} 
        date={date} setDate={setDate}
        domain={domain} setDomain={setDomain}
        projectname={projectname} setProjectname={setProjectname}
        detail={detail} setDetail={setDetail}
        />} />

        <Route path='/project' element={<Project

        image={image}
        firstname={firstname} 
        surname={surname} 
        city={city}
        country={country}
        pincode={pincode}
        phone={phone}
        email={email}
        linkedin={linkedin}
        github={github}
        summary={summary} 
        skill={skill} 
        companyname={companyname} 
        date={date} 
        domain={domain} 
        projectname={projectname}
        detail={detail} 
        iname={iname} setIname={setIname}
        idate={idate} setIdate={setIdate}
        idomain={idomain} setIdomain={setIdomain}
        project={project} setProject={setProject}
        language={language} setLanguage={setLanguage}

         />} />

        <Route path='/resume' element={ <Resume 
       
        image={image}
        firstname={firstname} 
        surname={surname} 
        city={city}
        country={country}
        pincode={pincode}
        phone={phone}
        email={email}
        linkedin={linkedin}
        github={github}
        summary={summary} 
        skill={skill} 
        companyname={companyname} 
        date={date} 
        domain={domain} 
        projectname={projectname}
        detail={detail} 
        iname={iname}
        idate={idate}
        idomain={idomain}
        project={project}
        language={language}

        /> }
         />

    </Routes>
      <Footer />
    </>
  )
}

export default App
