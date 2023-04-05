import React from 'react'
import './offer.css';
import {MdKingBed} from 'react-icons/md';
import {MdBathtub} from 'react-icons/md';
import {HiWifi} from 'react-icons/hi';
import {MdAirportShuttle} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs';


import img6 from '../../Assets/hotel2.jpg';
import img7 from '../../Assets/hotel3.jpg';
import img8 from '../../Assets/hotel4.jpg';
import img9 from '../../Assets/hotel5.jpg';



const Offers= [{
  id:1,
  imgSrc:img6,
  stTitle:'Machu Picchu',
  location:'Peru',
  price:'₹12,000'

},
{
  id:2,
  imgSrc:img7,
  stTitle:'Guanajuanto',
  location:'Mexico',
  price:'₹10,000'

},
{
  id:3,
  imgSrc:img8,
  stTitle:'Angkor Wat',
  location:'Cambodia',
  price:'₹13,000'

},
{
  id:4,
  imgSrc:img9,
  stTitle:'Taj Mahal',
  location:'India',
  price:'₹11,000'

}
];
const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-left" data-aos-duration="2500" className='secTitle'>
             SPECIAL OFFERS
          </h2>
          <p  data-aos="fade-left" data-aos-duration="2500" >
          From Historical cities to natural specteculars,come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
          {
            Offers.map(({id,imgSrc,stTitle,location,price})=>{
              return(

                <div className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={stTitle}/>

              <span className='Discount'>30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>{price}</h4>
                <span className='status'> For Rent</span>
              </div>
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className='icon'/>
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  <MdBathtub className='icon'/>
                  <small>1 BathTub</small>
                </div>
                <div className="singleAmenity flex">
                  <HiWifi className='icon'/>
                  <small>Wifi</small>
                </div>
                <div className="singleAmenity flex">
                  <MdAirportShuttle className='icon'/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
               <MdLocationOn  className="icon"/>
               <small>450 Vine #360,{location}</small>
              </div>

              <button className='btn flex'>
                View Details
                <BsArrowRightShort data-aos="fade-right" data-aos-duration="2500" className='icon'/>
              </button>
            </div>
              
          </div>
              )
            }
            )
          }
        </div>
      </div>

    </section>
  )
}

export default Offer;