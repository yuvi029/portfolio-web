import { useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaShareAlt,
} from "react-icons/fa";

const Contact = () => {
  // form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/.netlify/functions/submit-message", {
        fullName,
        email,
        message,
      });

      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error. Try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16 font-sans">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Message Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <FaPaperPlane className="text-blue-400" />
            Send Message
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#1e293b] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email-Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1e293b] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1">
                Message{" "}
                <span className="text-sm text-gray-400">
                  ({message.length}/500)
                </span>
              </label>
              <textarea
                rows="5"
                maxLength="500"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#1e293b] text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-green-500 py-3 px-6 rounded-md font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-sm text-gray-300">{status}</p>
          )}
        </div>

        {/* Right: Contact Info and Social */}
        <div className="space-y-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              Contact Info
            </h2>
            <div className="space-y-4">
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>singhyuvi4321@gmail.com</span>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-4">
                <FaPhone className="text-green-400 text-xl" />
                <span>+91 9111368936</span>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                <span>Jamshedpur, Jharkhand</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaShareAlt className="text-pink-400" />
              Social Media
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                <FaLinkedin className="text-blue-500" />
                <span>www.linkedin.com/in/yuvraj-singh-205491253</span>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                <FaGithub className="text-gray-400" />
                <span>@yuvi029</span>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                <FaTwitter className="text-sky-400" />
                <span>@YuvrajSrocks543</span>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                <FaInstagram className="text-pink-500" />
                <span>@__yuvraj_singh2003</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
