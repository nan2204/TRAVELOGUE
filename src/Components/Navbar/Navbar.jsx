import React,{useState} from 'react';
import './navbar.css';
import  {SiYourtraveldottv} from 'react-icons/si';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {
   const [active,setActive]=useState('NavBar')
   const showNav =()=>{
    setActive('navBar activeNavBar')
   }
   const removeNav=()=>{
    setActive('NavBar')
   }
  const [transparent,setTransparent] = useState('header')
  const addBg=()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll',addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1><SiYourtraveldottv className='icon'/>
            CROMO</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink ">HOME </a>            </li>
            <li className="navItem">
              <a href="#" className="navLink">PRODUCTS</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">RESOURCES</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">CONTACT</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">BLOG</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">BookNow</a>
              </button>
             
            </div>


          </ul>
          <div onClick={removeNav}  className="closeNavBar">
         < AiFillCloseCircle className="icon"/>

          </div>
        </div>


        <div onClick={showNav}   className="toggleNavar">
          <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar;