import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Thumbnail from "../assets/home/thumbnail.png";
import PetCare from "../assets/home/petcare.png";
import PetGroom from "../assets/home/petgroom.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto mb-10 mt-30">
        <div className="flex flex-row gap-15 justify-center items-center">
          <div className="relative">
            <img src={Thumbnail} alt="Thumbnail" className="thumbnail-img" />

            <div className="absolute bottom-10 -left-10 flex items-center">
              <div className="pet-care-label">
                <span className="home-text-stroke pet-care-text">PET CARE</span>
              </div>
              <div className="pet-care-icon-container">
                <img
                  src={PetCare}
                  alt="Pet Care Icon"
                  className="pet-care-icon"
                />
              </div>
            </div>

            <div className="absolute top-10 -right-10">
              <div className="relative">
                <div className="pet-grooming-label">
                  <span className="home-text-stroke text-xl self-center ml-5">
                    PET
                  </span>
                  <span className="home-text-stroke text-xl self-end">
                    GROOMING
                  </span>
                </div>

                <div className="pet-grooming-icon-container">
                  <img
                    src={PetGroom}
                    alt="Pet Groom Icon"
                    className="pet-grooming-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-content">
            <p className="home-snip-text">SNIP SNIP</p>
            <p className="home-hooray-text">HOORAY</p>
            <p className="home-groomingcomes-text">GROOMING COMES</p>
            <p className="home-yourway-text">YOUR WAY</p>

            <Link to="/about">
              <button className="about-us-button home-text-stroke">
                ABOUT US
              </button>
            </Link>
          </div>
        </div>

        <p className="welcome-message">
          Welcome to <span className="brand-name">Pawlish</span> – your trusted
          at-home pet grooming service. We bring safe, gentle, and professional
          grooming right to your doorstep, giving your pets the comfort they
          deserve and the convenience you need.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
