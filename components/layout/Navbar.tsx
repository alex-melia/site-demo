"use client"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaXmark } from "react-icons/fa6"

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <header className="sticky top-0 py-2 sm:p-4 bg-white border-b z-40">
      <nav className="sticky flex justify-between items-center container">
        <h3 className="font-bold text-3xl text-fuchsia-700">Applify</h3>
        <ul className="hidden md:flex gap-4 sm:p-2">
          <li>
            <a
              className="hover:text-fuchsia-700 font-medium text-xl"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-fuchsia-700 font-medium text-xl"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="hover:text-fuchsia-700 font-medium text-xl"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="hover:text-fuchsia-700 font-medium text-xl"
              href="#faqs"
            >
              FAQs
            </a>
          </li>
        </ul>
        <a className="hidden md:block bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800">
          Sign Up
        </a>
        <GiHamburgerMenu
          size={32}
          className="md:hidden"
          onClick={() => setShowDropdown(!showDropdown)}
        />
      </nav>
      {showDropdown && (
        <div className="md:hidden fixed inset-0 bg-white">
          <div className="relative h-full p-2">
            <h3 className="font-bold text-3xl text-fuchsia-700 px-10 py-2">
              <a href="/" onClick={() => setShowDropdown(!showDropdown)}>
                Applify
              </a>
            </h3>
            <FaXmark
              size={48}
              className="absolute top-2 right-4"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <nav className="flex flex-col h-full gap-16 p-24">
              <ul className="flex flex-col gap-8">
                <li>
                  <a
                    href="#about"
                    className="hover:text-fuchsia-700 text-3xl"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-fuchsia-700 text-3xl"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-fuchsia-700 text-3xl"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="hover:text-fuchsia-700 text-3xl"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
              <a
                className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-lg text-center border border-black hover:cursor-pointer hover:bg-fuchsia-800"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Sign Up
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
