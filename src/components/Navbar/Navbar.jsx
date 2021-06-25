import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navOpen, setNavopen] = useState(false)
    

    const toggleNav = () => {
        navOpen === false ? setNavopen(true) : setNavopen(false)
    }

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 flex items-center w-full h-16 px-5 overflow-hidden bg-white shadow-lg lg:h-20 md:px-10'>
            <Link to='/' className="flex items-center ">
                <div className="hidden h-10 md:block">
                    <img className='w-64 -mt-8' src="https://www.freepnglogos.com/uploads/doraemon-png/doraemon-doremon-character-by-ncontreras-deviantart-9.png" alt="" />
                </div>
                <img className="h-12 md:-ml-8" src="https://i.pinimg.com/originals/eb/37/99/eb3799c794dea4aec4de65c8b141ae46.png" alt="" />
            </Link>
            <span className="ml-auto md:hidden" onClick={() => toggleNav()}><img className='w-8' src="https://pbs.twimg.com/media/B8sUx-6CAAAbPvl.png" alt="" /></span>
            <div className={`items-center ml-auto py-5 px-5 md:py-0 md:flex fixed top-16 left-0 right-0 z-50 bg-white md:px-0 md:static shadow-lg md:shadow-none border-t md:border-none ${navOpen === false ? 'hidden' : 'flex'}`}>
                <Link className='link-text-blue' to='/'>HOME</Link>
            </div>
        </nav>
    )
}

export default Navbar
