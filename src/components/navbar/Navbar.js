import { AiFillHome,AiOutlineUser, AiOutlineTool,  } from 'react-icons/ai';
import {FaBrain, FaDatabase} from 'react-icons/fa';
import {RiContactsBookUploadLine} from 'react-icons/ri';
import { useState } from 'react';
import './navbar.css'

const Navbar = () => {
  const [activePage, setActivePage] = useState('#')

  return (
   <nav>
     <a href='#'  onClick={() =>setActivePage('#')}  className={activePage === '#' ? 'active' :''}> <AiFillHome></AiFillHome></a>
     <a href='#about' onClick={() =>setActivePage('#about')} className={activePage === '#about' ? 'active' :''}> <AiOutlineUser/></a>
     <a href='#experience' onClick={() =>setActivePage('#experience')} className={activePage === '#experience' ? 'active' :''}> <AiOutlineTool/></a>
     <a href='#expertise' onClick={() =>setActivePage('#expertise')} className={activePage === '#expertise' ? 'active' :''}> <FaBrain/> </a>
     <a href='#projects' onClick={() =>setActivePage('#projects')} className={activePage === '#project' ? 'active' :''}> <FaDatabase/></a>
     <a href='#contact' onClick={() =>setActivePage('#contact')} className={activePage === '#contact' ? 'active' :''}> <RiContactsBookUploadLine/></a>
   </nav>
  )
}

export default Navbar
