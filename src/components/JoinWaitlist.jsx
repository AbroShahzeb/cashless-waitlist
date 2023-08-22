export default function JoinWaitlist() {
  return (
    <div
      id="join"
      className="flex flex-col container mx-auto mt-8 gap-8 h-[80vh] md:flex-row md:justify-between md:items-center  text-gray-50 md:gap-20"
    >
      <div className="flex flex-col items-start gap-8 md:w-1/2 text-left">
        <h1 className="text-5xl text-center w-full font-bold md:w-96 md:text-left md:text-7xl">
          Get Notified When We Launch.
        </h1>
      </div>
      <div className=" md:w-1/2  justify-self-end m-0">
        <form className="bg-gray-800 border-2 border-gray-700 rounded-3xl p-6 flex flex-col gap-5 py-8 px-6 md:py-12 md:px-8 md:w-full">
          <div className="flex flex-col gap-3 items-stretch">
            <label htmlFor="name" className="self-start">
              Full name
            </label>
            <input
              type="text"
              className="p-4 py-2 rounded-full text-lg text-gray-100 bg-gray-700 focus:outline-none focus:border-2 focus:border-violet-500"
            />
          </div>
          <div className="flex flex-col gap-3 items-stretch">
            <label htmlFor="email" className="self-start">
              Email
            </label>
            <input
              type="email"
              className="p-4 py-2 rounded-full text-lg text-gray-100 bg-gray-700 focus:outline-none focus:border-2 focus:border-violet-500"
            />
          </div>
          <button className="px-6 py-2  md:px-12 md:py-4  bg-gray-50 self-center text-gray-800 text-lg font-medium rounded-full mt-8">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
