import React from 'react';
import './blog.css';
import {BsArrowRightShort} from 'react-icons/bs';


import img6 from '../../Assets/morroco.jpg';
import img7 from '../../Assets/paris.jpg';
import img8 from '../../Assets/kenya.jpg';
import img9 from '../../Assets/tunisia.jpg';

const Posts=[
  {
    id:1,
    postImage:img6,
    title:'Beautiful Morocco,let us travel',
    desc:'The kingdom of Morocco is a Muslim Country in western North Africa, with Coastlines on the Atlantic Ocean and Mediterranea Sea.'
  },
  
  {
    id:2,
    postImage:img7,
    title:'Romantic moments under Effiel Tower',
    desc: 'with vast swaths of desert in its east and west and the rich Nile River Valley at its heart ',
  },
  {
    id:3,
    postImage:img8,
    title:'Best Country in East Africa',
    desc:'When Kenya claimed its independance from the U.K in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
  },
  {
    id:4,
    postImage:img9,
    title:'Let us have an adventure outside Tunisia.',
    desc:'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorists that roll the region',
  },
];




const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our BestBlog! </h2>
            <p>An insight to the incredible experience in the world.</p>
        </div>
      </div>
    <div className="mainContainer grid">
      {
        Posts.map(( {id,  postImage, title, desc})=>{
          return(
            <div className="singlePost grid">
        <div className="imgDiv">
          <img src={postImage} alt={title}></img>
        </div>
        <div className="postDetails">
          <h3>
            {title}
          </h3>
          <p>{desc}</p>
        </div>

        <a href="#" className="flex">
        <BsArrowRightShort className='icon'/>
          Read More
        </a>
      </div>
   
          )
        })
      }
    </div>
    </section>
  )
}

export default Blog;