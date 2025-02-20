"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { slideIn } from "@/utils/animations";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      console.log("form data: ", formData);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("response: ", response);

      if (response.ok) {
        setStatus("Email sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <motion.div
      className="w-[40rem] mx-auto bg-white p-8 rounded-lg shadow-md overflow-hidden"
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-500 flex items-center">
        <FaEnvelope className="mr-2 text-primaryColor" /> Contact Me
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
      {
        <p className="mt-4 text-center">
          {status === "Email sent successfully." ? (
            <span className="flex items-center justify-center text-green-500">
              <FaCheckCircle className="mr-2" /> {status}
            </span>
          ) : status === "Failed to send email." ? (
            <span className="flex items-center justify-center text-red-500">
              <FaTimesCircle className="mr-2" /> {status}
            </span>
          ) : (
            status
          )}
        </p>
      }
    </motion.div>
  );
}
