export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="min-h-screen h-full w-full py-24 lg:py-24 bg-gray-50 flex flex-col items-center justify-center"
    >
      <div className="container">
        <p className="font-extrabold text-xl sm:text-2xl">Simple process.</p>
        <p className="font-bold text-fuchsia-700 text-3xl sm:text-5xl">
          Simple prices.
        </p>
        <div className="flex flex-col gap-8 sm:grid grid-cols-2 place-items-center mt-12 sm:mt-24">
          <div className="flex flex-col bg-white border rounded-xl shadow-lg w-full max-w-lg p-8 md:p-12">
            <p className="uppercase text-center text-2xl text-fuchsia-700 font-bold">
              Standard
            </p>
            <p className="font-light text-center">
              For hobbyists, students and indie makers
            </p>
            <p className="font-bold text-3xl text-center my-6">$5/mo</p>
            <a className="bg-fuchsia-700 py-2 sm:px-8 rounded-full font-semibold text-white text-center text-sm border border-black hover:cursor-pointer hover:bg-fuchsia-800 mx-6 mb-6">
              Get started with Standard
            </a>

            <p className="font-bold text-lg mb-2">What&apos;s included:</p>
            <div className="flex flex-col font-bold gap-2">
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white border rounded-xl shadow-lg w-full max-w-lg p-8 md:p-12">
            <p className="uppercase text-center text-2xl text-fuchsia-700 font-bold">
              Pro
            </p>
            <p className="font-light text-center">
              For agencies and professionals
            </p>
            <p className="font-bold text-3xl text-center my-6">$12/mo</p>
            <a className="bg-fuchsia-700 py-2 sm:px-8 rounded-full font-semibold text-white text-center text-sm border border-black hover:cursor-pointer hover:bg-fuchsia-800 mx-6 mb-6">
              Get started with Pro
            </a>

            <p className="font-bold text-lg mb-2">What&apos;s included:</p>
            <div className="flex flex-col font-bold gap-2">
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
              <div className="flex items-center text-lg font-medium gap-2">
                <span>✅</span>
                <p>Generate up to 5 projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
