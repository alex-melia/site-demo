import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 p-8">
      <div className="container">
        <div className="flex flex-col gap-4 md:grid grid-cols-3 place-items-center">
          <p className="text-fuchsia-700 font-bold text-4xl">Applify</p>
          <div className="flex justify-between gap-4">
            <p>About</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>FAQs</p>
          </div>
          <div className="flex justify-between gap-4">
            <FaTwitter
              size={24}
              className="hover:text-fuchsia-700 transition ease-in-out"
            />
            <FaInstagram
              size={24}
              className="hover:text-fuchsia-700 transition ease-in-out"
            />
            <FaFacebook
              size={24}
              className="hover:text-fuchsia-700 transition ease-in-out"
            />
            <FaReddit
              size={24}
              className="hover:text-fuchsia-700 transition ease-in-out"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
