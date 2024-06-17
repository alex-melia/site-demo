export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="min-h-screen h-full w-full p-24 bg-gray-50"
    >
      <div className="container">
        <p className="font-extrabold text-2xl">Simple process.</p>
        <p className="font-bold text-fuchsia-700 text-5xl">Simple prices.</p>
        <div className="grid grid-cols-2 place-items-center mt-24">
          <div className="flex flex-col bg-white border rounded-xl shadow-lg w-full max-w-lg p-12">
            <p className="uppercase text-center text-2xl text-fuchsia-700 font-bold">
              Standard
            </p>
            <p className="font-light text-center">
              For hobbyists, students and indie makers
            </p>
            <p className="font-bold text-3xl text-center my-6">$5/mo</p>
            <a className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-center text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800 mx-6 mb-6">
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
          <div className="flex flex-col bg-white border rounded-xl shadow-lg w-full max-w-lg p-12">
            <p className="uppercase text-center text-2xl text-fuchsia-700 font-bold">
              Pro
            </p>
            <p className="font-light text-center">
              For agencies, companies and professionals
            </p>
            <p className="font-bold text-3xl text-center my-6">$12/mo</p>
            <a className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-center text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800 mx-6 mb-6">
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
        </div>
      </div>
    </section>
  )
}
