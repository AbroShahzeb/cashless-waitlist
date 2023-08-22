import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      className="container mx-auto h-60vh md: h-screen flex items-center justify-center flex-col gap-8"
      id="contact"
    >
      <h1 className="text-3xl text-gray-100 text-center">
        Connect and stay updated with us on all our social media pages
      </h1>
      <div className="flex items-center gap-4 ">
        <FaFacebook color="#fff" size={48} />
        <FaInstagram color="#fff" size={48} />
        <FaYoutube color="#fff" size={48} />
        <FaTwitter color="#fff" size={48} />
      </div>
    </div>
  );
}
