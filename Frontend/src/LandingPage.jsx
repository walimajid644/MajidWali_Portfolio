import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { BsPersonCheck } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { Button } from "antd";
import image from "../src/assets/Home.png";
import image2 from "../src/assets/Home2.png";
import image3 from "../src/assets/Home3.png";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className=" border-2">
        <div className="flex justify-between items-center rounded-xl shadow-xl bg-gray-200 mx-50 my-3 px-6">
          <FaLaptopCode size={70} className="text-purple-700 " />
          <Button
            onClick={() => {
              window.location.href = `tel:${+923224554100}`;
            }}
            color="purple"
            variant="solid"
            type="primary"
          >
            Get In Touch
          </Button>
        </div>
        <div className="flex justify-center items-center min-h-150">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold ">I Build Stuff that </h1>
            <h1 className="text-6xl font-bold">actually works!</h1>
            <p className="pt-5">
              Code, bugs, and late-night coffee keep it all running.
            </p>
            <p>I turn complex problems into clean, working solutions.</p>
            <Button
              onClick={() => {
                window.location.href = `tel:${+923224554100}`;
              }}
              color="purple"
              variant="solid"
              className=" m-10 max-w-30"
              type="primary"
            >
              Contact Me
            </Button>
          </div>
        </div>
        {/* Introduction section */}
        <div className="flex justify-center items-center bg-gray-100 p-10">
          <BsPersonCheck size={150} className="text-purple-700" />
          <div className="max-w-180">
            {/* Intro */}
            <h2 className="text-5xl pl-15 font-bold">
              A Bit About Me<span className=" text-purple-700">.</span>
            </h2>
            <p className=" pl-15 font-medium text-purple-700">(& My Code)</p>{" "}
            <br />
            <p className=" pl-15">
              Hi, I’m Majid Wali — a passionate MERN Stack Developer with a
              strong enthusiasm for building dynamic, user-friendly, and
              efficient web applications. As a final-year BSIT student, I’ve
              already developed and deployed a fully functional Blood Donation
              Management System along with other MERN-based projects showcased
              in my portfolio.
            </p>{" "}
            <br />
            <p className=" pl-15">
              I enjoy turning ideas into reality through clean code, responsive
              design, and scalable architecture, while continuously learning and
              exploring new technologies to sharpen my skills. My goal is to
              create solutions that make a real impact, one line of code at a
              time.
            </p>
          </div>
        </div>
        <h2 className="text-5xl mt-15 mx-50 mb-10 font-bold">
          Education<span className=" text-purple-700">.</span>
        </h2>
        <div className="flex">
          <div className="rounded-xl shadow-xl bg-gray-200 ml-70 mb-10 w-100 px-6">
            <p className="font-medium p-3 text-purple-700">2021-2025</p>
            <h2 className="text-3xl font-bold px-3">
              BS Information technology
            </h2>
            <p className="font-medium p-3">
              Concordia College Kasur Affiliated with University of Education
            </p>
          </div>
          <div className="rounded-xl shadow-xl bg-gray-200 ml-10 mb-10 w-100 px-6">
            <p className="font-medium p-3 text-purple-700">2019-2021</p>
            <h2 className="text-3xl font-bold px-3">Fsc Pre-Engineering</h2>
            <p className="font-medium p-3">Punjab College Kasur</p>
          </div>
        </div>
        {/* Projects */}
        <div className="bg-gray-200 p-10 pb-20">
          <h2 className="text-5xl mt-15 mx-50 mb-10 font-bold">
            My Projects<span className=" text-purple-700">.</span>
          </h2>
          <p className="text-2xl mx-50 font-medium ">
            Blood Donation Management System{" "}
          </p>
          <p className=" mx-50 mb-10 font-normal">
            {" "}
            A full-stack MERN application that connects blood donors and
            recipients through a centralized platform. It features secure
            authentication, donor search by blood group and location, real-time
            blood request management, and an admin dashboard for user and
            request monitoring. The system streamlines the donation process,
            making it faster and more efficient to match donors with those in
            need.
          </p>
          <div className="flex justify-evenly px-50 ">
            <img src={image} alt="" className="w-65" />
            <img src={image2} alt="" className="w-65" />
            <img src={image3} alt="" className="w-65" />
          </div>
        </div>
        {/* Skills */}
        <h2 className="text-5xl mt-15 mx-50 mb-10 font-bold">
          My Skills<span className=" text-purple-700">.</span>
        </h2>
        <div className="flex justify-center items-center mb-20">
          <div className=" border-r-2 px-15 ">
            <h3 className="text-2xl py-2 font-medium  text-purple-700">
              Web Design
            </h3>
            <p>UI/UX Design</p>
            <p>Responsive Design</p>
            <p>WireFraming</p>
            <p>User Research</p>
          </div>
          <div className=" border-r-2 px-15">
            <h3 className="text-2xl py-2 font-medium  text-purple-700">
              Frontend
            </h3>
            <p>Javascript</p>
            <p>React JS</p>
            <p>HTML</p>
            <p>CSS3</p>
          </div>
          <div className=" border-r-2 px-15">
            <h3 className="text-2xl py-2 font-medium  text-purple-700">
              Backend
            </h3>
            <p>Node jS</p>
            <p>Mongo DB</p>
            <p>Express JS</p>
            <p>Netlify</p>
          </div>
          <div className=" border-r-2 px-15">
            <h3 className="text-2xl py-2 font-medium  text-purple-700">
              Soft Skills
            </h3>
            <p>Effective Communication</p>
            <p>Collaboration</p>
            <p>Commitment</p>
            <p>Leadership</p>
          </div>
        </div>
        {/* Experience */}
        <div className="bg-gray-200 py-15">
          <h2 className="text-5xl mx-50 mb-10 font-bold">
            Experience<span className=" text-purple-700">.</span>
          </h2>
          <div className=" ml-50 px-6">
            <h2 className="text-3xl font-bold px-3">Wali Pharmacy Kasur</h2>
            <p className="font-medium pl-3 text-purple-700">2020-2025</p>
            <p className="font-medium pl-3">
              Key Responsibilities: <br />
              Enter, update, and maintain accurate customer information and
              financial data in POS systems.
              <br /> <br />
              Extra Responsibilities: <br />
              Managing the inventory and give orders on the basis of danger
              levels also keeping everything else in order as well for the
              seamless operation. <br /> <br />
              Meet productivity and quality standards.
            </p>
          </div>
        </div>
        {/* Contact */}
        <h2 className="text-5xl mx-50 mt-10 mb-10 font-bold">
          Contact<span className=" text-purple-700">.</span>
        </h2>
        <div className="flex justify-evenly items-center">
          <div>
            <h3 className="text-3xl font-medium ">We are available 24/7 </h3>
            <p> Feel Free to reach us at any time.</p>
            <Button
              onClick={() => {
                window.location.href = `tel:${+923224554100}`;
              }}
              color="purple"
              variant="solid"
              className="m-5 max-w-30"
              type="primary"
            >
              Call Now
            </Button>
            <Button
              onClick={() => {
                window.location.href = `mailto:walimajid.644@gmail.com`;
              }}
              color="purple"
              variant="solid"
              className="m-5 max-w-30"
              type="primary"
            >
              Email Me
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/in/majid-wali-a5259b229/", "_blank");
              }}
              color="purple"
              variant="solid"
              className="m-5 max-w-30"
              type="primary"
            >
              LinkedIn 
            </Button>
          </div>
          <MdPhoneInTalk size={150} className="text-purple-700 " />
        </div>
        {/* Copyright */}
        <div className="flex justify-center items-center bg-black text-white p-3">
          <p>All rights Reserved Majid Wali Portfolio </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
