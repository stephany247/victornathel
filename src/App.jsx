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
      <header className="flex flex-col items-center justify-center mx-auto gap-4 sm:gap-8 lg:gap-12 px-8 mt-20 max-w-6xl">
        <h1 className="text-3xl font-medium sm:text-5xl sm:font-semibold">
          Discover How You Can Earn Over ₦120,000 weekly using your phone and
          data
        </h1>
        <h3 className="text-lg font-light">
          Join the Digital Marketing Revolution and Start Earning Like a Pro!
        </h3>
      </header>
      <main className="w-full flex flex-col items-center justify-center mx-auto gap-28 px-8  max-w-6xl">
        <section className="flex flex-col items-center justify-center gap-12 mt-8">
          <iframe
            className="rounded-lg aspect-video w-[21rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] border-2 border-blue"
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mt-10">
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
        <section className="grid gap-52 md:gap-32 my-20">
          <Carousel />
          <VideoCarousel />
        </section>
        <section className="bg-hover-blue rounded-2xl p-12 md:p-20 md:gap-8 flex flex-col gap-6 items-center justify-center w-full max-w-2xl">
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
      <footer className="bg-dark-blue p-8 text-white w-full mt-16">
        <div className="flex flex-col gap-8  md:justify-between md:flex-row-reverse items-center mx-auto max-w-6xl">
          <SocialIcons />
          <div className="text-xs flex flex-col gap-2 md:text-start">
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
