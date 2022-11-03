import Image from 'next/image';

function Hero() {
  return (
    <div className="min-w-full md:p-5">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 items-center">
        <div className="space-y-5 flex flex-col md:items-center lg:items-start">
          <div className="text-center md:text-left md:leading-snug">
            <h1 className="xs:text-[2rem] text-4xl lg:text-4xl xl:text-5xl tracking-tight">
              Vehicle Maintenance
            </h1>
            <h1 className="xs:text-[2rem] text-4xl lg:text-4xl tracking-tight">
              From The Comfort of
            </h1>
            <h1 className="xs:text-[2rem] text-4xl tracking-tight lg:text-4xl">
              Your Home
            </h1>
          </div>
          <p className="lg:text-left md:w-1/2 lg:w-2/3 font-light text-center opacity-70">
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          <form className="flex flex-col gap-5 my-5 md:w-1/2 xl:w-2/3">
            <input
              className="bg-transparent placeholder:opacity-50 placeholder:font-thin rounded-full border-2 border-gray-800 py-3 px-6"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="bg-transparent rounded-full border-2 placeholder:font-thin placeholder:opacity-50 border-gray-800 py-3 px-6"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="rounded-full border-2 border-gray-800 py-3 px-6 hover:bg-[#7E0EE0]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="my-6 ml-5 xl:col-span-2">
          <Image
            src="/assets/images/Pickup_Illustration.png"
            width={900}
            height={900}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
