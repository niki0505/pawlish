import React from "react";
import Footer from "../components/Footer";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   


const Services = () => {
  const [selected, setSelected] = useState('small');

  const buttons = [
    { id: 'small', label: 'SMALL' },
    { id: 'medium', label: 'MEDIUM' },
    { id: 'large', label: 'LARGE' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto">
        
        <div className="flex flex-col justify-around items-center pt-40">

          <div className="flex flex-row gap-5 justify-center items-center ">
            <div className="servies-pet-container w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-md" > 
              <p className="servies-text-stroke text-6xl text-white"> P </p>
            </div>
            <div className="servies-pet-container w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-md" > 
              <p className="servies-text-stroke text-6xl text-white"> E </p>
            </div>
            <div className="servies-pet-container w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-md mr-7" > 
              <p className="servies-text-stroke text-6xl text-white"> T </p>
            </div>

            <p className="services-services-text">Services</p>
          </div>

         <p className="text-outline-white text-3xl mt-15" style={{WebkitTextStroke: '1.5px black',color: 'white', }}> Our services based on your dog’s size</p>


          <div className="flex gap-7 mt-10 mb-10">
            {buttons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelected(btn.id)}
                className="text-2xl font-opensans text-white text- px-14 py-1 font-extrabold  border-black border-3 rounded-lg"
                style={{
                  WebkitTextStroke: '1.5px black',
                  color: 'white',
                  backgroundColor: selected === btn.id ? '#E26764' : '#F3C6C0',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
      
          <div className='carousel-container w-3/4 mb-20 '>
            <div >
              <Slider {...settings}>
                {data.map((d) => (
                  <div key={d.name} className="h-[900px] text-black rounded-xl ">

                    {/* //box containing image */}
                    <div className='h-56  rounded-xl m-5 bg-amber-200 border-2 border-black'>
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                    </div>

                    {/* //box containing name */}
                    <div className="flex justify-center">
                      <div className=" carousel-pet-container w-3/4 h-10 rounded-lg border border-black flex justify-center items-center shadow-md mb-5 bg-gray-800">
                        <p className="text-xl text-white font-semibold">{d.name}</p>
                      </div>
                    </div>

                    {/* //box containing details */}
                    <div className="flex flex-col h-[500px] items-center justify-center gap-4 p-4 border-2 border-black rounded-xl bg-white mx-5">
                      <p className="text-xl font-semibold">Inclusions</p>
                      <p className="text-center">{d.inclusions}</p>
                     
                      <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>

                    </div>

                  </div>

                ))}
              </Slider>
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </div>
  );
};

const data = [
  {
    name: `Bath & Dry`,
    img: `walapa.jpg`,
    inclusions: 
      `Bath
      Shampoo
      Blow dry
      Nail trim and filing
      Minor trimming
      Cologne spray
      Body trimming and cut
      Creative cut
      Teeth brushing and ear care`
  },
  {
    name: `Basic Grooming`,
    img: `walapa.jpg`,
    inclusions: 
      `Bath
      Shampoo
      Blow dry
      Nail trim and filing
      Minor trimming
      Cologne spray
      Body trimming and cut
      Creative cut
      Teeth brushing and ear care`
  },
  {
    name: `Full Grooming`,
    img: `walapa.jpg`,
    inclusions: 
      `Bath
      Shampoo
      Blow dry
      Nail trim and filing
      Minor trimming
      Cologne spray
      Body trimming and cut
      Creative cut
      Teeth brushing and ear care`
  },
  {
    name: `Full Grooming`,
    img: `walapa.jpg`,
    inclusions: 
      `Bath
      Shampoo
      Blow dry
      Nail trim and filing
      Minor trimming
      Cologne spray
      Body trimming and cut
      Creative cut
      Teeth brushing and ear care`
  },
];


export default Services;
