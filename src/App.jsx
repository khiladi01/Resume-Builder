import { Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './components/Home';
import Detail from './components/Userdetail';
import Edutra from './components/UserEd&Tr';
import Experience from './components/Userexperience';
import Skill from './components/Userskill';
import Summary from './components/Usersummary';

function App() {


  return (
    <>

    <Header />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/detail' element={<Detail />} />

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
