import React from 'react';
import './about.css';

import img6 from '../../Assets/mountain.png';
import img7 from '../../Assets/hike.png';
import img8 from '../../Assets/customer.png';
import video from '../../Assets/video.mp4';


const About = () => {
  return (
   <section className='about'>
     <div className="secContainer">
      <div className="title">
        Why Hikings?
      </div>

      <div className="mainContent container grid">
        <div className="singleItem">
          <img data-aos="fade-up" data-aos-duration="2500" src={img6} alt="Image name" />
          <h3 data-aos="fade-up" data-aos-duration="2500">100+ Mountains</h3>
          <p data-aos="fade-up" data-aos-duration="2500">
            Research shows that a chance to break away from the normal rhythms of daily life readuces stress and improves health and well-being.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500"className="singleItem">
          <img data-aos="fade-up" data-aos-duration="2500" src={img7} alt="Image name" />
          <h3 data-aos="fade-up" data-aos-duration="2500">1000+ Hikings</h3>
          <p data-aos="fade-up" data-aos-duration="2500">
            Research shows that a chance to break away from the normal rhythms of daily life readuces stress and improves health and well-being.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
          <img data-aos="fade-up" data-aos-duration="2500" src={img8} alt="Image name" />
          <h3 data-aos="fade-up" data-aos-duration="2500">2000+ Customers</h3>
          <p data-aos="fade-up" data-aos-duration="2500">
            Research shows that a chance to break away from the normal rhythms of daily life readuces stress and improves health and well-being.
          </p>
        </div>
      </div>

      <div className="videoCard container grid">
        <div className="cardContent grid">
          <div className="cardText">
            <h2 data-aos="fade-left" data-aos-duration="2500">Wonderful House Experience in there</h2>
            <p data-aos="fade-left" data-aos-duration="2500">The Adventure subranking is based on an equally weighted average of scores from five country</p>

          </div>

          <div className="cardVideo">
            <video src={video} autoPlay loop muted type='video.mp4'></video>
          </div>
        </div>
      </div>
     </div>
   </section>
  )
}

export default About;