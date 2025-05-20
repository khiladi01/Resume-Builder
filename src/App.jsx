import { Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './components/Home';
import Detail from './components/Userdetail';
import Edutra from './components/UserEd&Tr';
import Experience from './components/Userexperience';
import Skill from './components/Userskill';
import Summary from './components/Usersummary';

function App() {
  
  const[ firstname , setFirstname ] = useState("");
  const[ surname , setSurname ] = useState("");
  const[ city , setCity  ] = useState("");
  const[ country , setCountry  ] = useState("");
  const[ pincode , setPincode  ] = useState("");
  const[ phone , setPhone  ] = useState("");
  const[ email , setEmail  ] = useState("");
  const[ linkedin , setLinkedin  ] = useState("");
  const[ github , setGithub  ] = useState("");

  return (
    <>

    <Header />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/detail' element={<Detail  
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

        <Route path='/summary' element={<Summary />} />

        <Route path='/skill' element={<Skill />} />

        <Route path='/experience' element={<Experience />} />

        <Route path='/educationtraining' element={<Edutra />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
