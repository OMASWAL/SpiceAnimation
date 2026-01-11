import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";
import resumei from "./resumei.jpg";



function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">spicy.om</div>
            <div className="links flex gap-10">
              {[
                // "What we do",
                // "Who we are",
                // "How we give back",
                // "Talk to us",
              ]}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[10%]">
            <div className="text w-[50%]">
              <h3 className="text-[2rem] leading-[1.1]">
                Hi my name is Om Aswal and I'm  a Frontend Developer.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-medium">
              My name is Om, and I am a developer with a deep passion for making websites. I love the process of turning a blank screen into an interactive digital experience, combining clean code with creative design. Whether it's crafting smooth animations with GSAP or building dynamic interfaces in React, I’m always looking for ways to push my boundaries of what’s possible on the web.
              </p>
              <p className="bg-white font-bold decoration-red-50 border-b-2 border-white inline-block px-2 py-1">
                <b>click on the text below</b>
              </p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[17rem] font-normal tracking-tight leading-none pl-5 whitespace-nowrap"
            >
              OM! THIS SIDE
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-8xl tracking-tighter">About me</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
A Computer Science Engineer and Full-Stack Developer currently honing his skills through a comprehensive internship at Qspiders. With a Bachelor of Technology from Raj Kumar Goel Institute of Technology, having specializes in building robust, interactive web applications using React.js, JavaScript (ES6), and Python along with SQL. 
        </p>
       

        <img
          className="w-full mt-10 object-cover"
          src="https://images.unsplash.com/photo-1605121157939-137cf807ae0d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="icon"
          style={{ display: "block" }}
        />
      </div>
    </>
  );
}

export default App;