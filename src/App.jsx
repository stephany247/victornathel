import { useState } from "react";
import "./App.css";
import { Icon } from "@iconify/react";
import WhatsAppButton from "./components/WhatsappButton";
import SocialIcons from "./components/SocialIcons";
import Carousel from "./components/Carousel";
import VideoCarousel from "./components/VideoCarousel";

function App() {
  const cardData = [
    { icon: "streamline:bag-dollar-solid", text: "Earn ₦120,000+ Weekly" },
    {
      icon: "stash:smartphone",
      text: "Work from Anywhere Using Just Your Phone",
    },
    {
      icon: "material-symbols:globe",
      text: "Join a Global Community of Millionaires",
    },
    {
      icon: "fa6-solid:graduation-cap",
      text: "Learn from Proven Experts with Real Results",
    },
    {
      icon: "meteor-icons:alarm-clock",
      text: "Start Earning in Just a Few Days!",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="flex flex-col items-center justify-center mx-auto gap-4 sm:gap-8 px-8 mt-20 max-w-6xl">
        <h1 className="text-3xl font-medium sm:text-5xl sm:font-semibold">
          Discover How You Can Earn Over ₦120,000 weekly using your phone and
          data
        </h1>
        <h3 className="text-lg font-light">
          Join the Digital Marketing Revolution and Start Earning Like a Pro!
        </h3>
      </header>
      <div class="hidden md:block absolute top-36 right-4">
        <svg
          class="md:w-40 w-28 h-16 md:h-32"
          viewBox="0 0 200 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105.33 235.226L116.388 238.138L113.022 226.82L105.33 235.226ZM84.0745 3.27244C139.407 31.8763 153.622 83.2523 150.498 130.508C148.936 154.145 143.032 176.711 135.779 194.79C128.508 212.913 119.941 226.378 113.146 231.948L114.39 233.559C121.573 227.671 130.291 213.822 137.595 195.616C144.917 177.365 150.878 154.587 152.457 130.704C155.615 82.9219 141.213 30.5608 84.9106 1.45559L84.0745 3.27244Z"
            fill="url(#paint0_linear_1_26)"
          ></path>
          <mask id="path-2-inside-1_1_26" fill="white">
            <ellipse
              cx="2.18591"
              cy="1.49778"
              rx="2.18591"
              ry="1.49778"
              transform="matrix(0.8883 0.459265 -0.417986 0.908453 83.1769 0)"
            ></ellipse>
          </mask>
          <ellipse
            cx="2.18591"
            cy="1.49778"
            rx="2.18591"
            ry="1.49778"
            transform="matrix(0.8883 0.459265 -0.417986 0.908453 83.1769 0)"
            fill="white"
          ></ellipse>
          <path
            d="M84.6577 2.44996C84.7419 2.26709 84.8654 2.14791 84.9654 2.08325C85.0578 2.02349 85.1163 2.01746 85.1083 2.01858C85.0826 2.02215 84.9269 2.02435 84.7025 1.90833L83.0305 5.54215C83.8785 5.98057 84.8338 6.18014 85.7375 6.05459C86.6302 5.93056 87.6822 5.43611 88.2109 4.28702L84.6577 2.44996ZM84.7025 1.90833C84.4781 1.79231 84.3838 1.66085 84.3707 1.63721C84.3666 1.62983 84.3981 1.68244 84.4106 1.79643C84.4241 1.91976 84.4116 2.09632 84.3274 2.27919L80.7742 0.442134C80.2455 1.59123 80.5257 2.77443 80.983 3.59646C81.4461 4.42863 82.1826 5.10372 83.0305 5.54215L84.7025 1.90833ZM84.3274 2.27919C84.2433 2.46207 84.1198 2.58124 84.0198 2.6459C83.9274 2.70567 83.8688 2.71169 83.8768 2.71057C83.9025 2.70701 84.0582 2.7048 84.2826 2.82082L85.9546 -0.812995C85.1066 -1.25142 84.1513 -1.45099 83.2477 -1.32544C82.355 -1.20141 81.3029 -0.706962 80.7742 0.442134L84.3274 2.27919ZM84.2826 2.82082C84.5071 2.93684 84.6013 3.0683 84.6145 3.09194C84.6186 3.09933 84.587 3.04671 84.5745 2.93272C84.561 2.80939 84.5736 2.63283 84.6577 2.44996L88.2109 4.28702C88.7396 3.13792 88.4595 1.95472 88.0021 1.13269C87.5391 0.30052 86.8026 -0.37457 85.9546 -0.812995L84.2826 2.82082Z"
            fill="url(#paint1_linear_1_26)"
            mask="url(#path-2-inside-1_1_26)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1_26"
              x1="141.522"
              y1="31.8447"
              x2="50.9241"
              y2="207.102"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.12" stop-color="#7E76E5"></stop>
              <stop offset="0.24" stop-color="#677BEE"></stop>
              <stop offset="0.365" stop-color="#3A86FF"></stop>
              <stop offset="0.41" stop-color="#7E76E5"></stop>
              <stop offset="0.66" stop-color="#677BEE"></stop>
              <stop offset="0.8" stop-color="#9470DC"></stop>
              <stop offset="0.965" stop-color="#7278E9"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_26"
              x1="85.1186"
              y1="1.00391"
              x2="83.7443"
              y2="3.66206"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.12" stop-color="#7E76E5"></stop>
              <stop offset="0.24" stop-color="#677BEE"></stop>
              <stop offset="0.365" stop-color="#3A86FF"></stop>
              <stop offset="0.41" stop-color="#7E76E5"></stop>
              <stop offset="0.66" stop-color="#677BEE"></stop>
              <stop offset="0.8" stop-color="#9470DC"></stop>
              <stop offset="0.965" stop-color="#7278E9"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main className="w-full flex flex-col items-center justify-center mx-auto gap-28 px-8  max-w-6xl">
        <section className="flex flex-col items-center justify-center gap-12 mt-8">
          <iframe
            // width="560"
            // height="315"
            className="rounded-lg aspect-video w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] border-2 border-blue"
            src="https://www.youtube.com/embed/6cFz79blyhA?controls=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <WhatsAppButton
            phone="+2349131102145"
            message="Hello Coach Nathel, I would love to learn how to make money online using my phone."
          />
        </section>
        <section className="max-w-5xl">
          <h2 className="text-2xl font-bold">Why choose digital marketing?</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 py-8 px-4 bg-light-blue hover:bg-hover-blue rounded-lg shadow"
              >
                <Icon icon={item.icon} className="text-blue-500 size-10" />
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-32 my-20">
          {/* <h2 className="text-2xl font-bold">See what my students are saying!</h2> */}
          <Carousel />
          <VideoCarousel />
        </section>
        <section className="bg-hover-blue rounded-2xl p-12 md:p-20 md:gap-8 flex flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl font-bold max-w-lg">
            Ready to Start Earning ₦120,000 Weekly?
          </h1>
          <p className="max-w-lg">
            Join Our Digital Marketing Class Today and Transform Your Life!
          </p>
          <WhatsAppButton
            phone="+2349131102145"
            message="Hello Coach Nathel, I would love to learn how to make money online using my phone."
          />
        </section>
      </main>
      <footer className="bg-dark-blue p-8 text-white w-full gap-8 mt-16">
        <div className=" flex flex-col md:flex-row md:justify-between items-center mx-auto max-w-6xl">
          <SocialIcons />
          <div className="text-xs flex flex-col gap-2 ">
            <p>{currentYear} © All Rights Reserved</p>
            <p className="text-gray-400">
              Built with ❤️ by{" "}
              <a className="font-semibold underline hover:text-hover-blue transition ease-in-out duration-300">
                Onyinye Oguocha.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
