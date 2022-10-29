import Link from 'next/link'
import React from 'react'
import nav from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={nav.contain}>
        <Link href='/' className={nav.text}>Presenter Election</Link>
         <Link href="/AllowVoter" className={nav.text}>Manager</Link>
         <Link href="/CRegister" className={nav.text}>Voter</Link>
      </div>
    </div>
  )
}

export default Navbar