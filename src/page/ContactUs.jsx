import React from "react";

import ContactUsFormImg from "../assets/contactus.webp";

const ContactUs = () => {
  return (
    <>
    <section className="">
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex flex-col gap-3 justify-center items-center w-3/5">
          <div className="text-4xl font-bold">How Can We Help You?</div>
          <div className="font-semibold text-center">
            Our team is here to help. Whether your inquiry is about our courses,
            services, or support, simply fill out the contact form below.
          </div>
          <div>We look forward to hearing from you!</div>
        </div>
        <div className="flex w-4/5 gap-4 mt-16 shadow-xl p-4 rounder-md justify-between pb-8">
          <form className="flex flex-col gap-3 pt-4 px-4 text-lg flex-wrap">
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <div className="">Name</div>
                <input
                  type="text"
                  className="outline-none pl-2 py-1 border border-gray-300 rounded-md pr-12"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="">Mobile Number</div>
                <input
                  type="text"
                  className="outline-none pl-2 py-1 border border-gray-300 rounded-md pr-12"
                  placeholder="Enter your mobile"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <div className="">Email Address</div>
                <input
                  type="text"
                  className="outline-none pl-2 py-1 border border-gray-300 rounded-md pr-12"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2 grow">
                <div className="">Services</div>
                <select
                  name="services"
                  id="services"
                  className="outline-none pl-2 py-1.5 border border-gray-300 rounded-md pr-4"
                >
                  <option value="select_services">Select Services</option>
                  <option value="b2b">B2B</option>
                  <option value="b2c">B2C</option>
                  <option value="d2c">D2C</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col grow">
              <div className="mb-2">Message</div>
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                cols=""
                rows="5"
                className="pl-2 pt-1 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
            <button className="bg-red-700 text-white py-2 rounded-md px-10 text-lg font-semibold">
              Send Message
            </button>
            </div>
          </form>
          <div className="">
            <img src={ContactUsFormImg} alt="" className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
    <section>
      
    </section>
    </>
  );
};

export default ContactUs;
