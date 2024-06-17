import Image from "next/image"
import React from "react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t w-full sm:p-8 py-24 lg:p-24 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center container">
        <h2 className="text-fuchsia-700 text-center font-bold text-3xl sm:text-4xl sm:mb-12 md:text-6xl lg:mt-0 xl:mb-32">
          Fast, simple, effective.
        </h2>

        <div className="flex flex-col gap-8 mt-12 max-w-[1200px] w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-fuchsia-700 font-bold text-7xl sm:text-[100px] md:text-[200px] pb-4 sm:pb-12 md:pb-96">
              1
            </p>
            <div className="flex flex-col items-center gap-3 max-w-[900px]">
              <p className="font-semibold text-center text-fuchsia-700 text-2xl sm:text-4xl md:text-4xl lg:text-5xl lg:mr-12">
                Select a framework from the dropdown
              </p>
              <p className="font-light text-md sm:text-xl text-center mx-12">
                Choose a framework you love the best! Applify offers all popular
                modern web dev frameworks!
              </p>

              <Image
                src={"/placeholder2.jpeg"}
                alt="Placeholder"
                width={1}
                height={1}
                layout="responsive"
                className="top-0 left-0 object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3 max-w-[900px]">
              <p className="md:hidden text-fuchsia-700 font-bold text-7xl sm:text-[100px] md:text-[200px] pb-4 sm:pb-12 md:pb-96">
                2
              </p>
              <p className="font-semibold text-center text-fuchsia-700 text-2xl sm:text-4xl md:text-4xl lg:text-5xl lg:mr-12">
                Choose a database provider
              </p>
              <p className="font-light text-md sm:text-xl text-center mx-12">
                From NoSQL solutions such as MongoDB or a traditional SQL da
                tabase like MySQL, the choice is yours!
              </p>

              <Image
                src={"/placeholder2.jpeg"}
                alt="Placeholder"
                width={1}
                height={1}
                layout="responsive"
                className="top-0 left-0 object-cover rounded-2xl"
              />
            </div>
            <p className="hidden md:block text-fuchsia-700 font-bold text-5xl sm:text-[100px] md:text-[200px] sm:pb-12 md:pb-96">
              2
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-fuchsia-700 font-bold text-7xl sm:text-[100px] md:text-[200px] pb-4 sm:pb-12 md:pb-96">
              3
            </p>
            <div className="flex flex-col items-center gap-3 max-w-[900px]">
              <p className="font-semibold text-center text-fuchsia-700 text-2xl sm:text-4xl md:text-4xl lg:text-5xl lg:mr-12">
                Generate and enjoy!
              </p>
              <p className="font-light text-md sm:text-xl text-center mx-12">
                Click generate and watch the magic happen! The boilerplate is
                generated in your GitHub repo.
              </p>

              <Image
                src={"/placeholder2.jpeg"}
                alt="Placeholder"
                width={1}
                height={1}
                layout="responsive"
                className="top-0 left-0 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
