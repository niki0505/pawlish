import React from "react";
import Footer from "../components/Footer";
import OffFurImg from "../assets/off-fur.png";
import GroomerImg from "../assets/groomer.png";

const Promotions = () => {
  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col justify-around items-center pt-35">
          <section className="relative text-center mb-12">
            <img
              src={OffFurImg}
              alt="Off Fur Promo"
              className="w-[1000px] max-w-[100%] h-auto mx-auto"
            />
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-17 border-2 text-outline-white drop-shadow-lg rounded-[7px] bg-[#E26764] border-black font-opensans-bold text-2xl shadow-[0_6px_10px_rgba(0,0,0,0.6)] hover:bg-[#D15553] transition-all duration-200 w-[80%] max-w-[220px] h-[50px]">
              ACTIVATE NOW!
            </button>
          </section>
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch shadow-lg">
              <div className="bg-[#E26764] text-white p-8 w-full lg:w-1/3 flex flex-col justify-between gap-3">
                <h3 className="font-bobbyjones-soft text-4xl md:text-5xl leading-tight uppercase text-outline-white font-black tracking-wide drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)]">
                  NEW CUSTOMER<br />SPECIAL
                </h3>
                <p className="font-opensans-semibold text-base md:text-lg mt-2">
                  As a Paw Member you have the opportunity to save money and earn
                  valuable Reward Points right away.
                </p>
                <button
                  className="border-2 text-outline-white shadow-[0_6px_10px_rgba(0,0,0,0.6)] rounded-[7px] bg-[#FDDB87] border-black font-opensans-bold text-2xl hover:bg-[#F4C85D] transition-all duration-200 w-[80%] max-w-[240px] h-[50px]">
                  Book Now!
                </button>
              </div>
              <div className="w-full lg:w-1/3 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={GroomerImg}
                  alt="Groomer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#FDDB87] text-[#2A2A2A] p-8 w-full lg:w-1/3 flex flex-col justify-between items-center text-center gap-3">
                <h3 className="font-bobbyjones-soft text-5xl md:text-6xl leading-[1.2] uppercase drop-shadow-[0_7px_4px_rgba(0,0,0,0.4)] tracking-widest">
                  <span className="text-outline-white">PAW<br />FRIENDS</span><br />
                  <span className="text-outline-red">PROMO!</span>
                </h3>
                <p className="font-opensans-bold text-sm md:text-base mt-1">
                  Enjoy 10% OFF August 30–31, 2025
                </p>
                <button
                  className="border-2 text-outline-white shadow-[0_6px_10px_rgba(0,0,0,0.6)] rounded-[7px] bg-[#E26764] border-black font-opensans-bold text-2xl hover:bg-[#D15553] transition-all duration-200 w-[80%] max-w-[240px] h-[50px]">
                  Available Now!
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-12 mb-12 px-6">
            <div className="bg-white border-3 border-black rounded-xl p-8 shadow-xl max-w-4xl">
              <p className="font-bobbyjones-soft text-2xl md:text-3xl lg:text-4xl leading-tight text-left drop-shadow-[0_7px_5px_rgba(0,0,0,0.4)] tracking-widest">
                <span className="text-outline-red">PAWLISH </span>
                <span className="text-[#FDDA87] [-webkit-text-stroke:2px_black]">
                  offers convenient grooming<br />
                  that benefits your pet’s health and<br />
                  your budget.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;
