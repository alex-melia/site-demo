"use client"

import { useState } from "react"
import { FaCircle } from "react-icons/fa6"

export default function LandingSection() {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <section className="relative p-6 lg:p-24 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8 sm:gap-8 sm:container mt-12 sm:mt-0">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl font-semibold text-center space-x-20 max-w-[600px]">
            Create a serverless web app in{" "}
            <span className="text-fuchsia-700 font-semibold text-5xl sm:text-6xl relative inline-block stroke-current">
              seconds
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </h1>
          <div
            className="hidden xl:block absolute top-1/4 left-1/4 hover:cursor-pointer"
            onClick={() => setShowDialog(!showDialog)}
          >
            <FaCircle
              className="relative"
              onClick={() => setShowDialog(!showDialog)}
            />

            {showDialog && (
              <div
                onMouseLeave={() => setShowDialog(!showDialog)}
                className="absolute left-1/2 top-full transform -translate-x-1/2 translate-y-2 bg-black z-10 p-2 rounded-xl min-w-96"
              >
                <span className="text-white">
                  Visual hierarchy is achieved through multiple heading spaces.
                  Visual hierarchy is achieved through multiple heading spaces.
                </span>
              </div>
            )}
          </div>
          <h2 className="text-md sm:text-xl text-center max-w-[800px] py-8">
            Choose a framework, choose a database, create. Applify generates
            templates so you can build faster.
          </h2>
          <div className="flex flex-col items-center gap-2 mb-8">
            <a className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800">
              Get started for free
            </a>
            <p className="text-sm font-medium">No credit card required.</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              <img
                className="border-2 border-gray=200 bg-white rounded-full w-12 h-12"
                src="/headshots/headshot1.png"
              />
              <img
                className="border-2 border-gray=200 bg-white rounded-full w-12 h-12 -ml-6"
                src="/headshots/headshot2.png"
              />
              <img
                className="border-2 border-gray=200 bg-white rounded-full w-12 h-12 -ml-6"
                src="/headshots/headshot3.png"
              />
              <img
                className="border-2 border-gray=200 bg-white rounded-full w-12 h-12 -ml-6"
                src="/headshots/headshot4.png"
              />
              <img
                className="border-2 border-gray=200 bg-white rounded-full w-12 h-12 -ml-6"
                src="/headshots/headshot1.png"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm max-w-44 text-center">
                Loved by over 1000+ customers
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        <p className="uppercase text-fuchsia-700 font-bold mt-8 sm:mt-24">
          Works with
        </p>
        <div className="grid grid-cols-5 place-items-center gap-4 md:gap-8 w-full">
          <img
            className="md:w-30 md:h-10 opacity-50 brightness-0"
            src="./logos/node.png"
          />
          <img
            className="md:w-40 md:h-20 opacity-50 brightness-0"
            src="./logos/next.png"
          />
          <img
            className="md:w-40 md:h-20 opacity-50 brightness-0"
            src="./logos/django.png"
          />
          <img
            className="md:w-40 md:h-20 opacity-50 brightness-0"
            src="./logos/ruby.png"
          />
          <img
            className="md:w-40 md:h-20 opacity-50 brightness-0"
            src="./logos/angular.png"
          />
        </div>
      </div>
    </section>
  )
}
