import Link from "next/link"

export default function Footer (){

    return(
        <>
         <footer>
  <div className="w-full bg-black select-none">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
      {/* Site Section */}
      <div className="m-4 flex-1">
        <h3 className="text-2xl text-white move-left-to-right-bulge">PixelProfile</h3>
        <p className="text-white mt-2">Craft stunning resumes.</p>
        <p className="text-white mt-2">Stand out.</p>
        <p className="text-white mt-2">Get hired.</p>
      </div>

      {/* About Us Section */}
      <div className="m-4 flex-1">
        <h3 className="text-2xl text-white move-left-to-right-bulge">About Us</h3>
        <div className="mt-2">
          <Link href="" className="text-red-300 hover:text-red-400">Contact</Link>
        </div>
        <div className="mt-2">
          <Link href="" className="text-red-300 hover:text-red-400">Privacy Policy</Link>
        </div>
        <div className="mt-2">
          <Link href="" className="text-red-300 hover:text-red-400 hover:decoration-red-400">Terms & Conditions</Link>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="m-4 flex-1">
        <h3 className="text-2xl text-white move-left-to-right-bulge">Contact Us</h3>
        <p className="text-white mt-1"><strong>Call :</strong> +91 9142158588</p>
        <p className="text-white mt-1"><strong>Location :</strong> Madhubani, Bihar</p>
        <p className="text-white mt-1"><strong>Address :</strong> Vidya Nagar Jaynagar, Madhubani, Bihar</p>
      </div>
    </div>
  </div>

  {/* Owner & Licence Section */}
  <div className="h-[40px] w-full bg-black flex justify-center items-center">
    <p className="text-sm text-rose-200">© 2025 ROSU. All rights reserved.
</p>
  </div>
</footer>

        </>
    )
}