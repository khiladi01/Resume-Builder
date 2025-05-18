// import Icon from '../assets/header/header-icon.png'
import { Link } from 'react-router-dom';
import '../style/header.css'

const Header = () => {

    return(
        <>
         <div className="h-[100px] w-full bg-[#000] shadow-sm shadow-slate-800 select-none sticky top-0">
           <div className='h-[100px] w-full flex justify-between items-center'>
           <span className='ml-[50px]'><h1 className='text-3xl text-white font-bold'>Profile Pixel</h1></span>
           <span className='mr-[50px]'><button id='headerbutton' className='h-[40px] w-[180px] rounded-full border-o outline-0 bg-rose-200'>
            <Link to="/" className='text-indigo-500 font-medium'>My Account</Link>
            </button></span>
           </div>
           </div>     
        </>
    )
}
export default Header;