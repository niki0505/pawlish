import React from "react";
import Footer from "../components/Footer";
import bg from '../assets/background-img.png';
import rp from '../assets/right-paw.png';
import lp from '../assets/left-paw.png';
import v from '../assets/vision.png';
import m from '../assets/mission.png';
import c from '../assets/check-mark.png'; 
import '../index.css'; 
import { RxFontStyle } from "react-icons/rx";

const About = () => {
  const styles = {
    container: {
      fontFamily: '"BobbyJones", sans-serif',
      backgroundColor: 'transparent',
      padding: '0',
      margin: '0',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    bannerSection: {
      width: '100%',
      height: '350px', 
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      marginBottom: '40px',
      backgroundImage: `url(${bg})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    },
    bannerContent: {
      zIndex: 10,
      padding: '0 20px',
    },
    bannerTitle: {
      fontSize: '3rem',
      fontWeight: '900',
      letterSpacing: '10px', 
      marginBottom: '10px',
      borderBottom: '3px solid white',
      display: 'inline-block',
      paddingBottom: '5px',
      textTransform: 'uppercase',
    },
    bannerSubtitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      maxWidth: '600px',
      lineHeight: '1.4',
    },
    storySection: {
      width: '80%',
      maxWidth: '900px',
      textAlign: 'center',
      marginBottom: '60px',
    },
    storyTitleBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '20px 0 30px',
    },
    storyLetter: {
      fontSize: '1.5rem',
      fontWeight: '700',
      backgroundColor: '#E57373', 
      color: 'white',
      borderRadius: '8px',
      width: '75px',
      height: '75px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #D32F2F', 
    },
    storyLine: {
      height: '2px',
      backgroundColor: '#D32F2F',
      width: '40px',
    },
    storyText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      backgroundColor: 'white',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      textAlign: 'justify',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      marginTop: '50px',
      flexWrap: 'wrap',
    },
    card: {
      flex: 1,
      minWidth: '300px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '15px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      position: 'relative',
      textAlign: 'center',
    },
    cardImagePlaceholder: {
      width: '100%',
      height: '200px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px 10px 0 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.8rem',
      color: '#888',
      marginBottom: '15px',
      overflow: 'hidden',
    },
    cardTitle: {
      fontFamily: '"BobbyJones", sans-serif',
      color: '#D32F2F', 
      fontSize: '2rem',
      fontWeight: '800',
      letterSpacing: '5px',
      textTransform: 'uppercase',
      marginBottom: '10px',
      borderBottom: '2px solid #E57373',
      display: 'inline-block',
      paddingBottom: '5px',
    },
    cardPawIconLeft: {
      position: 'absolute',
      top: '-20px',
      right: '280px',
      width: '100px',    
      height: '100px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))', 
    },
    cardPawIconRight: {
      position: 'absolute',
      top: '-20px',
      right: '-40px',
      width: '100px', 
      height: '100px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))', 
    },

    cardText: {
      fontSize: '1rem',
      lineHeight: '1.5',
      textAlign: 'justify',
    },
    
    whyChooseUsSection: {
      width: '80%',
      maxWidth: '900px',
      margin: '50px 0 80px',
      padding: '30px',
      border: '3px dashed #E57373',
      borderRadius: '15px',
      backgroundColor: 'white',
      boxShadow: '0 4px 15px rgba(229, 115, 115, 0.2)',
    },
    whyTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#333',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    advantagesList: {
      listStyleType: 'none',
      padding: '0',
      textAlign: 'left',
    },
    advantageItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.1rem',
      marginBottom: '15px',
      lineHeight: '1.4',
    },
  checkIcon: {
  width: '24px',
  height: '24px',
  marginRight: '15px',
  objectFit: 'contain',
  verticalAlign: 'middle',
},





  };
  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col justify-around items-center pt-40">
          <div style={styles.container}>

            <section style={styles.bannerSection}>
              <div style={styles.bannerContent}>
                <h1 style={{...styles.bannerSubtitle, fontSize: '85px', WebkitTextStroke: '4px #000000',}}>BEHIND THE PAWS</h1>
                <p style={{...styles.bannerSubtitle,  fontFamily: 'OpenSans-SemiBold', marginTop: '10px' }}>
                  Meet the compassionate team whose love for animals inspires every gentle touch, careful trim, and happy wag.
                </p>
              </div>
            </section>

            <section style={styles.storySection}>
              <div style={styles.storyTitleBox}>
                <div style={{ ...styles.storyLine, width: '60px' }}></div>
                {['O', 'U', 'R'].map((letter) => (
                  <span key={letter} style={{...styles.storyLetter, fontSize: '70px', WebkitTextStroke: '3px #000000'}}>{letter}</span>
                ))}
                <div style={styles.storyLine}></div>
                {['S', 'T', 'O', 'R', 'Y'].map((letter) => (
                  <span key={letter} style={{...styles.storyLetter, fontSize: '70px', WebkitTextStroke: '3px #000000'}}>{letter}</span>
                ))}
                <div style={{ ...styles.storyLine, width: '60px' }}></div>
              </div>

              <div style={{...styles.storyText, fontFamily: 'OpenSans-SemiBold'}}>
                <p>
                  Our mobile grooming story began with a simple dream—to make pets feel loved, safe, and cared for right at their doorstep. We saw how stressful trips to the grooming shop could be, so we brought the shop to them. With every wag, purr, and happy face, we're reminded that grooming isn't just about looking good—it's about creating comfort, trust, and joy for pets and their families.
                </p>
              </div>

              <div style={styles.cardsContainer}>

                <div style={styles.card}>
                  <img src={lp} alt="Paw Icon" style={styles.cardPawIconLeft} />
                  <div style={{ ...styles.cardImagePlaceholder, backgroundColor: '#FFDCE0' }}>
                    <img src={m} alt="Mission Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{...styles.cardTitle, fontSize: '50px', WebkitTextStroke: '2px #000000'}}>MISSION</h3>
                  <p style={{...styles.cardText, fontFamily: 'OpenSans-SemiBold'}}>
                    To deliver gentle, high-quality, and stress-free grooming that makes every pet feel loved and every owner confident.
                  </p>
                </div>

                <div style={styles.card}>
                  <img src={rp} alt="Paw Icon" style={styles.cardPawIconRight} />
                  <div style={{ ...styles.cardImagePlaceholder, backgroundColor: '#FFDCE0' }}>
                    <img src={v} alt="Vision Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{...styles.cardTitle, fontSize: '50px', WebkitTextStroke: '2px #000000'}}>VISION</h3>
                  <p style={{...styles.cardText, fontFamily: 'OpenSans-SemiBold'}}>
                    To be the community's trusted grooming home, where every pet feels happy and pampered.
                  </p>
                </div>
              </div>
            </section>

            <section style={styles.whyChooseUsSection}>
              <h2 style={{...styles.whyTitle, color: "#F57474", fontSize: '40px', marginLeft: '20px', WebkitTextStroke: '1.5px #000000',}}>WHY CHOOSE US?</h2>
              <ul style={{...styles.advantagesList, marginLeft: '50px'}}>
                <li style={{...styles.advantageItem, fontFamily: 'OpenSans-SemiBold'}} >
                  <img src={c} alt="Check Icon" style={styles.checkIcon} />
                  Certified and experienced pet groomers on the go
                </li>
                <li style={{...styles.advantageItem, fontFamily: 'OpenSans-SemiBold'}} >
                 <img src={c} alt="Check Icon" style={styles.checkIcon} /> Professional grooming right at your doorstep
                </li>
                <li style={{...styles.advantageItem, fontFamily: 'OpenSans-SemiBold'}} >
                  <img src={c} alt="Check Icon" style={styles.checkIcon} /> Clean, safe, and fully equipped mobile setup
                </li>
                <li style={{...styles.advantageItem, fontFamily: 'OpenSans-SemiBold'}} >
                 <img src={c} alt="Check Icon" style={styles.checkIcon} /> Gentle, stress-free care in your pet's comfort zone
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
