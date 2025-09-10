import Image from "next/image";

import HeroImage from "@/assets/images/hero.svg";
import ArrowImage from "@/assets/images/arrow.svg";
import FlowerImage from "@/assets/images/flower.svg";
import BottomImage from "@/assets/images/bottom.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Controller, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import DisplayLayout from "@/components/layout";

export default function Home() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  };
  return (
    <div>
      <DisplayLayout>
        <>
          <div className="hero-div bg-primary pt-40">
            <div>
              <div className="text-center px-2 md:px-0">
                <h2 className="text-3xl md:text-6xl font-bold mb-5 md:w-[50%] mx-auto leading-tight md:leading-tight">Navigating the Venture Capital Process</h2>
                <p className="md:w-[45%] mx-auto mb-5 leading-relaxed md:leading-relaxed text-sm md:text-base font-medium">
                  Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that
                  challenge the status quo and drive positive change in various industries.</p>
              </div>
              <div className="mt-10 w-max mx-auto flex gap-5">
                <button className="bg-white px-10 py-3 font-medium text-black text-sm md:text-base">Apply Now</button>
                <button className="border-2 border-accent border-solid py-3 font-medium text-accent px-8 text-sm md:text-base">Discover Vision</button>
              </div>
              <div>
                <Image src={HeroImage} alt="hero image" className="w-full mt-20 md:-mt-40" />
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 pt-32 relative">
            <div className="flex flex-col md:grid grid-cols-1/2/1 md:gap-5">
              <div>
                <h4 className="text-lg font-bold uppercase mb-10">About us</h4>
                <Image src={ArrowImage} alt="hero image" className="absolute md:relative top-0 w-full -ml-20 opacity-30" />
              </div>
              <div>
                <h4 className="font-black text-3xl md:text-5xl mb-5 md:mb-12 leading-tight tracking-tighter">the Venture Capital for Tomorrow&apos;s Startups.</h4>
                <p className="text-accent leading-loose mb-5 text-sm md:text-base font-mediu">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                  journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that.
                </p>
                <p className="text-accent leading-loose text-sm md:text-base font-mediu">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                  journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that
                  challenge the status quo and drive positive change in various industries.
                </p>
                <div className="flex gap-10 mt-14">
                  <div>
                    <h2 className="text-4xl mb-4 font-bold">22</h2>
                    <p>Funded startups</p>
                  </div>
                  <div>
                    <h2 className="text-4xl mb-4 font-bold">$12,000,000</h2>
                    <p>Combined valuation</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image src={FlowerImage} alt="hero image" className="h-[15rem] md:h-[30rem] w-auto md:w-max absolute -right-5 md:-right-20 -bottom-20" />
              </div>
            </div>
          </div>
          <div className="bg-primary py-20 mt-20">
            <div className="px-5 md:px-0">
              <h5 className="uppercase text-center text-base mb-5 font-bold">Companies</h5>
              <h3 className="text-3xl md:text-5xl text-center font-black md:w-[50%] mx-auto leading-tight mb-5">
                We are decisive, hard-working and thesis-driven investors
              </h3>
              <p className="text-accent leading-loose font-medium md:w-[60%] mx-auto text-center text-sm md:text-base">
                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that
                challenge the status quo and drive positive change in various industries.
              </p>
            </div>
            <div className="mt-10 flex flex-col md:grid grid-cols-3 gap-10 md:gap-14 px-5 md:px-20">
              <div>
                <div className="h-[15rem]"></div>
                <h5 className="text-center text-xl mb-2 font-bold">Our Portfolio</h5>
                <p className="text-accent leading-loose font-medium mx-auto text-center text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                  journey began with a passionate group of visionary investors.
                </p>
              </div>
              <div>
                <div className="h-[15rem]"></div>
                <h5 className="text-center text-xl mb-2 font-bold">Our Portfolio</h5>
                <p className="text-accent leading-loose font-medium mx-auto text-center text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                  journey began with a passionate group of visionary investors.
                </p>
              </div>
              <div>
                <div className="h-[15rem]"></div>
                <h5 className="text-center text-xl mb-2 font-bold">Our Portfolio</h5>
                <p className="text-accent leading-loose font-medium mx-auto text-center text-sm">
                  Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                  journey began with a passionate group of visionary investors.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 px-5 md:px-20 mb-60">
            <div className="md:w-[40%]">
              <h5 className="uppercase text-base font-bold mb-4">Portfolio</h5>
              <h3 className="text-3xl md:text-5xl font-black leading-tight mb-3">
                Stories of vision backed startups
              </h3>
              <p className="text-accent leading-normal font-medium text-sm md:text-base">
                Sura Vision - is a trailblazing investment firm that envisions a future of innovation and transformative impact. Our
                journey began with a passionate group of visionary investors who saw the immense.
              </p>
            </div>
            <div className="w-[60%] float-left">
              <div>
                {/* <Swiper spaceBetween={50} slidesPerView={1}>
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                </Swiper> */}
                {/* <Swiper
                  spaceBetween={5}
                  slidesPerView={4.2}
                  centeredSlides={true}
                  effect={"fade"}
                  loop={true}
                  breakpoints={breakpoints}
                >
                  <SwiperSlide key={1}>
                    <p>hello one</p>
                  </SwiperSlide>
                  <SwiperSlide key={2}>
                    <p>hello two</p>
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
          <div className="mt-20 px-5 md:px-20 pt-20 pb-40 bg-primary relative overflow-hidden">
            <div className="flex md:grid grid-cols-2">
              <div>
                <h3 className="text-2xl md:text-4xl font-black w-[80%] leading-tight mb-3">
                  We are decisive, hard-working and thesis-driven investors
                </h3>
                <p className="text-accent leading-loose font-medium m:w-[90%] mb-5 text-sm md:text-base">
                  Our journey began with a passionate group of visionary investors who saw the immense potential in supporting startups that
                  challenge the status quo and drive positive change in various industries.
                </p>
                <div className="mt-10 w-max flex gap-5">
                  <button className="bg-white px-10 py-3 font-medium text-black">Apply Now</button>
                  <button className="border-2 border-accent border-solid py-3 font-medium text-accent px-8">Discover Vision</button>
                </div>
              </div>
              <div>
              </div>
              <Image src={BottomImage} alt="hero image" className="w-max absolute -right-5 md:h-full -bottom-3" />
            </div>
          </div>
        </>
      </DisplayLayout>
    </div>
  );
}
