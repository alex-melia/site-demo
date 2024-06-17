import Image from "next/image"
import React from "react"

export default function AboutSection() {
  return (
    <section id="about" className="border-t min-h-screen w-full p-24 bg-white">
      <div className="flex flex-col items-center container">
        <div className="mb-6">
          <h2 className="text-fuchsia-700 text-center font-bold text-4xl">
            Fast, simple, effective.
          </h2>
        </div>
        <div className="flex flex-col gap-8 mt-12 max-w-[1200px] w-full">
          <div className=" border rounded-xl bg-white shadow-xl p-8">
            <p className=" top-6 left-12 text-fuchsia-700 font-bold text-7xl">
              1
            </p>
            <p className="font-medium text-center text-fuchsia-700 text-3xl">
              Select a framework from the dropdown
            </p>
            <div className="grid grid-cols-2 place-items-center mt-4">
              <Image
                src={"/placeholder2.jpeg"}
                alt="Placeholder"
                width={1}
                height={1}
                layout="responsive"
                className="top-0 left-0 object-cover rounded-2xl"
              />
              <p className="font-medium text-xl text-center">
                Choose a framework you love the best! Applify offers all popular
                modern web dev frameworks!
              </p>
            </div>
          </div>
          <div className=" border rounded-xl bg-white shadow-xl p-8">
            <p className=" top-6 right-12 text-fuchsia-700 font-bold text-7xl">
              2
            </p>
            <p className="font-medium text-center text-fuchsia-700 text-3xl">
              Set your configuration options
            </p>
            <div className="grid grid-cols-2 place-items-center mt-4">
              <p className="text-xl text-right">
                Select your preferred database provider and theme, or leave it
                blank!
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
          <div className=" border rounded-xl bg-white shadow-xl p-8">
            <p className=" top-6 left-12 text-fuchsia-700 font-bold text-7xl">
              3
            </p>
            <p className="font-medium text-center text-fuchsia-700 text-3xl">
              Generate!
            </p>
            <div className="grid grid-cols-2 place-items-center mt-4">
              <Image
                src={"/placeholder2.jpeg"}
                alt="Placeholder"
                width={1}
                height={1}
                layout="responsive"
                className="top-0 left-0 object-cover rounded-2xl"
              />
              <p className="text-xl text-right">
                Generate and deploy to GitHub in a single click! It&apos;s as
                easy as that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
