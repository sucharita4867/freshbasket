"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/b-g.png" // Apnar public folder-e thaka file
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Image 2 (Jodi thake) */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full">
        <Image
          src="/bg-(1).png"
          alt="Decorative Background"
          fill
          className="object-contain"
        />
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 h-full flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 py-10 lg:py-0">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
          <p className="text-secondary font-bold text-xl md:text-2xl tracking-wide">
            Best Produce in Town
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-tight">
            Fresh Harvests <br />
            <span className="text-primary">Delivered</span> to <br />
            Your Door
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 text-lg leading-relaxed">
            Discover the best local fruits and vegetables, picked at the peak of
            freshness. Your journey to healthy eating starts here at
            **FreshBasket**.
          </p>

          <div className="flex gap-4 items-center justify-center lg:justify-start pt-4">
            <Link
              href="/shop"
              className="btn bg-green-600 text-white border-none px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all text-lg shadow-md"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="btn btn-ghost text-secondary hover:bg-transparent font-semibold gap-2"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end h-full">
          <Image
            src="/bannerImg.png"
            alt="Girl with vegetables"
            width={550}
            height={650}
            className="h-[75%] lg:h-[90%] w-auto object-contain z-20"
            priority
          />
        </div>
      </div> */}

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Banner;
