export default function Navigation({ currentPage }) {
  return (
    <nav className="container flex mx-auto justify-between mt-8">
      <p
        className={`text-2xl font-bold  ${
          currentPage === "join" ? "text-emerald-600" : "text-gray-50"
        }`}
      >
        Logo
      </p>
      <a
        href="#contact"
        className="p-4 py-2 text-md text-gray-50 font-medium rounded-full border-[1px] border-gray-500"
      >
        Contact us
      </a>
    </nav>
  );
}
