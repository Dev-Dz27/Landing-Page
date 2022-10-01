import Image from "next/image";
import React, {useState, FormEvent} from "react";
import Data from "../seeds/data.json";
import Email from "../public/email.png";
import mobile from "../public/mobile.png";

import moment from "moment";


const Contact = () => {
  const images = Data.portfolio.images;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

const DateNow = moment().format("MMMM Do YYYY, h:mm:ss a");
  
  const [loading, setLoading] = useState(false);
//   const { username, email, message } = formData;

  const handleChangeInput = () => {
    
  }
//   const handleSubmit = () => {

//   }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
      DateNow,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    //when done
    const content = await response.json();
    alert(content.data.tableRange);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsFormSubmitted(true);
  };


  return (
    <div className="flex flex-col mx-auto text-center bg-black/10">

    <div className="flex  items-center justify-center flex-wrap mt-24   w-full ">
      {/* <h2 className="text-4xl">Take a coffee & chat with me</h2> */}
      {/* <div className="absolute  top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]" /> */}
      <div className="text-white lg:flex  lg:gap-16  md:flex md:gap-10  z-[2] ">
        <div className="min-w-[290px]  flex flex-row  justify-start items-center my-4 p-3 md:my-5 md:p-5 lg:my-5 lg:p-6 rounded-[10px] cursor-pointer ease-in-out duration-300 bg-red-100 hover:bg-red-400/80 ">
          <Image
            src={Email}
            width="35"
            height="35"
            className="mx-3"
            alt="email"
          />
          <a
            href="mailto:hello@micael.com"
            className="text-sm text-gray-800 ml-4"
          >
            th.dev.design@gmail.com
          </a>
          <div className=""></div>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-3 md:my-5 md:p-5  lg:my-5 lg:p-6 rounded-[10px] cursor-pointer ease-in-out duration-300 bg-stone-500/40 hover:bg-slate-400/80 ">
          <Image
            src={mobile}
            width="35"
            height="35"
            className="mx-3"
            alt="email"
          />
          <a
            href="mailto:hello@micael.com"
            className="text-sm text-gray-800 ml-4"
          >
            +213 656-141-294
          </a>
        </div>
      </div>
     
      </div>

       {/* Form */}
       {!isFormSubmitted ? (
                  <form  onSubmit={handleSubmit}>

        <div className=" flex flex-col justify-center items-center p-6 lg:mx-24 md:mx-28 mx-12">
          <div className="w-full my-3 rounded-[10px] cursor-pointer ease-in-out  duration-300 ">
            <input className="w-full p-[.95rem] rounded-md text-black  outline-none text-sm " type="text" placeholder="Your Name" name="username" 
            
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full my-3 rounded-[10px] cursor-pointer ease-in-out  duration-300">
            <input className="w-full p-[.95rem] rounded-md text-black  outline-none text-sm" type="email" placeholder="Your Email" name="email" 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="w-full my-3 rounded-[10px] cursor-pointer ease-in-out  duration-300">
            <input className="w-full p-[.95rem] rounded-md text-black  outline-none text-sm" type="tel" placeholder="Your Phone" name="email" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}

            />
          </div>
          <div className="w-full my-3 rounded-[10px] cursor-pointer ease-in-out  duration-300">
            <textarea
              className="w-full p-[.95rem] rounded-md  outline-none text-sm text-black"
              placeholder="Your Message"
              name="message"
              id="message"
              required
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="py-4 px-8 rounded-xl bg-blue-700 hover:bg-blue-800 duration-300 font-medium text-white"
           >{!loading ? 'Send Message' : 'Sending...'}</button>
        </div></form>
      ) : (
        <div>
          <h3 className="mb-12 text-2xl duration-300  ">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      

    
    </div>
  );
};

export default Contact;
