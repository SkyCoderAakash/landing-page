// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-white flex justify-between px-6 py-3 sm:px-10 sm:py-4 border-b-[1px] border-blue-600'>
//       <div className='text-3xl font-bold'>
//         logo
//       </div>
//       <div>
//         <ul className='flex gap-3'>
//           <li className='border-[1.5px] border-blue-600 rounded text-blue-600 px-4 py-1'>Login</li>
//           <li className='border-[1.5px] border-blue-600 bg-blue-600 text-white rounded px-4 py-1'>Signup</li>
//         </ul>  
//       </div>      
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b-2">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <button className="text-black text-3xl font-bold">logo</button>
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="h-6 w-6 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <div className="flex gap-5 flex-col mt-4 md:flex-row md:mt-0 md:mx-1">
            <button onClick={()=>{setIsOpen(false)}} className='border-[1.5px] border-blue-600 rounded text-blue-600 px-4 py-1'>Login</button>
            <button onClick={()=>{setIsOpen(false)}} className='border-[1.5px] border-blue-600 bg-blue-600 text-white rounded px-4 py-1'>Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
