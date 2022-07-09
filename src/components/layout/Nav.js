import React from 'react'

const Nav = () => {
  return (
    <header className='w-full bg-slate-800 py-4 px-8 shadow-lg absolute top-0'>
        <nav className='flex justify-between mx-20'>
            <div className="flex font-bold text-white">Logo</div>
            <ul className='flex text-slate-100 gap-4'>
                <li>Docs</li>
                <li>Support</li>
                <li>Contact us</li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav