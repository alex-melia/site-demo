export default function LandingSection() {
  return (
    <section className="p-24">
      <div className="flex flex-col items-center gap-8 container">
        <h1 className="text-6xl font-semibold text-center space-x-20 max-w-[600px]">
          Create a serverless web app in{" "}
          <span className="text-fuchsia-700 font-semibold text-6xl relative inline-block stroke-current">
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
        <h2 className="text-xl text-center max-w-[800px]">
          Choose a framework, choose a database, create. Applify generates
          templates so you can build faster.
        </h2>
        <div className="flex flex-col items-center gap-2">
          <a className="bg-fuchsia-700 py-2 px-8 rounded-full font-semibold text-white text-lg border border-black hover:cursor-pointer hover:bg-fuchsia-800">
            Get started for free
          </a>
          <p className="text-sm font-medium">No credit card required.</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            <div className="bg-blue-500 border-2 border-white rounded-full px-4 py-2 -ml-4">
              <p>1</p>
            </div>
            <div className="bg-blue-500 border-2 border-white rounded-full px-4 py-2 -ml-4">
              <p>2</p>
            </div>
            <div className="bg-blue-500 border-2 border-white rounded-full px-4 py-2 -ml-4">
              <p>3</p>
            </div>
            <div className="bg-blue-500 border-2 border-white rounded-full px-4 py-2 -ml-4">
              <p>4</p>
            </div>
            <div className="bg-blue-500 border-2 border-white rounded-full px-4 py-2 -ml-4">
              <p>5</p>
            </div>
          </div>
          <p className="text-sm max-w-44 text-center">
            Loved by over 1000+ customers
          </p>
        </div>
        <p className="uppercase text-fuchsia-700 font-bold mt-24">
          We work with
        </p>
        <div className="grid grid-cols-5 place-items-center gap-8 w-full">
          <img
            className="w-30 h-10 opacity-50 brightness-0"
            src="./logos/node.png"
          />
          <img
            className="w-40 h-20 opacity-50 brightness-0"
            src="./logos/next.png"
          />
          <img
            className="w-40 h-20 opacity-50 brightness-0"
            src="./logos/django.png"
          />
          <img
            className="w-40 h-20 opacity-50 brightness-0"
            src="./logos/ruby.png"
          />
          <img
            className="w-40 h-20 opacity-50 brightness-0"
            src="./logos/angular.png"
          />
        </div>
      </div>
    </section>
  )
}
