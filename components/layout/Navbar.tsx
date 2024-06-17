export default function Navbar() {
  return (
    <header className="sticky top-0 p-4 bg-white border-b z-40">
      <nav className="sticky grid grid-cols-3 place-items-center">
        <h3 className="font-bold text-3xl text-fuchsia-700">Applify</h3>
        <ul className="flex gap-4 border-2 border-black rounded-full p-2 bg-white/10 backdrop-blur-md">
          <li>
            <a className="hover:text-fuchsia-700" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-fuchsia-700" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-fuchsia-700" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="hover:text-fuchsia-700" href="#faqs">
              FAQs
            </a>
          </li>
        </ul>
        <a className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800">
          Sign Up
        </a>
      </nav>
    </header>
  )
}
