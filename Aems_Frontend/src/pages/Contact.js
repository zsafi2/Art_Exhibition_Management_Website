import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend API to send the email
    fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setStatus("Your message has been sent successfully!");
        } else {
          setStatus(
            "There was an error sending your message. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-6 text-[#2E3192]">Contact Us</h2>

        <p className="text-lg mb-8">
          Have any questions or feedback? Feel free to send us a message using
          the form below!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-semibold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] text-white p-3 rounded-lg font-semibold w-full"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-lg font-semibold text-green-500">
              {status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;
