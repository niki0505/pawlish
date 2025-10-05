import React from "react";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto">
        <div className="flex gap-15 justify-around pt-40 min-h-[calc(100vh-11.25rem)]">
          {/* Code here */}
          <div className="flex flex-col  w-full h-full items-end">
            <div className="flex flex-col w-[450px] gap-2">
              <h1 className="text-outline-red font-bobbyjones-soft text-6xl">
                Need Help?
              </h1>
              <p className="font-opensans-semibold text-[rgba(0,0,0,0.30)] text-[17px]">
                We’re always happy to hear from you! Whether you have questions,
                suggestions, or need support, simply send us a message using the
                contact form. We’ll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full items-start">
            <div className="flex flex-col w-[450px] gap-2">
              <input className="input-field h-[30px]" placeholder="Name..." />
              <input className="input-field h-[30px]" placeholder="Email..." />
              <input
                className="input-field h-[30px]"
                placeholder="Phone number..."
              />
              <textarea
                className="input-field h-[150px] resize-none"
                placeholder="Message..."
              />
              <button className="border-2 text-outline-white button-red drop-shadow-lg rounded-[7px] ml-auto">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
