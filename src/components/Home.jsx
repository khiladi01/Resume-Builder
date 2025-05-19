import { Link } from 'react-router-dom'
import '../style/home.css'

const Home = () => {

    return(
        <>
        <div id="herohome" className="h-screen w-full flex justify-between items-center select-none">
        <div>
        <div className='pl-[50px]'><h1 className='text-6xl text-[#CBD5E1] font-bold'>Pixel Profile</h1></div>
        <div className='pl-[50px] pt-[30px]'><button id="homebutton" className='w-[300px] h-[50px]  border-0 outline-0 bg-transparent rounded-full hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer'><Link to='/detail' className="text-lg text-rose-200 hover:text-rose-300 font-medium"
        >Launch PixelProfile</Link></button></div>
        <div className='w-[350px] pl-[50px] pt-[30px]'><p className='text-rose-50 text-md font-serif'>Pixel Profile is a simple, streamlined resume builder designed to help students and freshers create professional resumes instantly. No templates, no clutter — just a fast, focused tool to present your skills and experience with clarity. Build, preview, and download your resume in minutes.</p></div>
        </div>
        </div>
        </>
    )
}
export default Home;