import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, name, message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6">
        <h2 className="text-2xl font-bold mb-4 t-a ml-32">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex-box justify">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
            <button
              onClick={handleClose}
              className="mt-4 text-yellow-50 hover:text-gray-700 bg-orange-700 p-2 rounded  ml-52"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
