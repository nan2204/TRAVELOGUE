import React,{useEffect} from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className='home'>
    <div className='secContainer container'>
      <div className='homeText'>
         <h1  data-aos="fade-down"  data-aos-duration="2500"   className='title'>
          Plan Your Trip With Cromo!
         </h1>
         <p   data-aos="fade-down" className="subTitle">
          Travel to the place you desire to go .
         </p>
         <button  data-aos="fade-down"  data-aos-duration="2500" className='btn'>
          <a href="#">Explore Now</a>
         </button>
      </div>

      <div className="homeCard grid">
        <div className="locationDiv">
          <label htmlFor='location'>Location</label>
          <input type='text' placeholder='Destination'></input>
        </div>

        <div className="distDiv">
          <label htmlFor='distance'>Location</label>
          <input type='text' placeholder='11/Meters'></input>
        </div>

        <div className="locationDiv">
          <label htmlFor='price'>Location</label>
          <input type='text' placeholder='₹6000-₹15000'></input>
        </div>

        <button className='btn'>SEARCH</button>

      </div>
    </div>
   </section>
  )
}

export default Home;