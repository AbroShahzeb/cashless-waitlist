export default function HeroPage({ setCurrentPage, currentPage }) {
  return (
    <div className="flex flex-col container mx-auto mt-8 gap-8 h-[80vh] md:flex-row md:justify-between md:items-center  text-gray-50 md:gap-20">
      <div className="flex flex-col items-start gap-8 md:w-1/2 text-left">
        <h1 className="text-5xl text-center w-full font-bold md:w-96 md:text-left md:text-7xl">
          A New Banking Experience.
        </h1>
        <div className="flex self-center p-4 gap-4 bg-gray-50 text-gray-800 rounded-3xl md:self-start">
          <a
            href="#about"
            className={`p-6 md:p-12 md:py-5 rounded-2xl text-md hover:bg-gray-200 hover:text-gray-500 ${
              currentPage === "about" ? "bg-gray-800 text-gray-50" : ""
            }`}
            onClick={() => setCurrentPage("about")}
          >
            About Us
          </a>
          <a
            href="#join"
            className={`p-6 md:p-12 md:py-5 rounded-2xl text-md hover:bg-emerald-200 ${
              currentPage === "join" ? "bg-emerald-800 text-gray-50" : ""
            }`}
            onClick={() => setCurrentPage("join")}
          >
            Join Waitlist
          </a>
        </div>
      </div>
      <div className="h-1/2 md:h-96 md:w-1/2  justify-self-end m-0">
        <div className="flex items-center justify-center text-3xl font-bold font-cursive bg-gray-100 w-full h-full bg-opacity-50 rounded-3xl">
          Illustration
        </div>
      </div>
    </div>
  );
}
