import React from 'react'
import './popular.css';
import {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {BsDot} from "react-icons/bs";

import img from '../../Assets/london3.jpg'
import img1 from '../../Assets/peru.jpg';
import img2 from '../../Assets/mexico.webp';
import img3 from '../../Assets/cambodia.jpg';
import img4 from '../../Assets/tagmahal.jpg';

export const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Guanajuanto',
    location:'Mexico',
    grade:'CULTURAL RELAX',

  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',

  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',

  }
];


const Popular = () => {
  return (
  <section className='popular section container'>
    <div className='secContainer'>
      <div className='secHeader flex'>
        <div className='textDiv'>
          <h2 data-aos="fade-right"  data-aos-duration="2500" className='secTitle'>
            POPULAR DESTINATIONS
          </h2>
          <p data-aos="fade-right" data-aos-duration="2500">
            From Historical cities to natural specteculars,come see the best of the world!
          </p>

        </div>
        <div className="iconsDiv flex">
     <BsArrowLeftShort data-aos="fade-left" data-aos-duration="2500" className="icon"/>
     <BsArrowRightShort data-aos="fade-left" data-aos-duration="2500" className="icon"/>
        </div>

      </div>

      <div className="mainContent grid">
        {
          Data.map(( {id, imgSrc,destTitle,location,grade})=>{
           return(            
            <div className="singleDestination">
               <div className="destImage">
                 <img src={imgSrc} alt='Image title'/>
  
                <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>
                 {location}
                </p>
  
                <BsArrowRightShort className='icon'/>
               </div>
            </div>
              
               <div className="destFooter">
              <div className="number">
                0{id}
              </div>
              <div className="dextText flex">
                <h6>
                  {location}
                </h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className="icon"/>
                  </span>
                {grade}
                </span>
              </div>
            </div>
           </div>
           )
          })
        }
      </div>

    </div>
    
  </section>
  )
}

export default Popular;