import React from "react";
import { NavLink } from "react-router-dom"; // For footer links

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* About Us Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-6 text-[#2E3192]">About Us</h2>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg leading-7">
            Welcome to the Art Exhibition Management System (AEMS), a web-based
            platform designed to help art exhibition organizers manage every
            aspect of their exhibitions efficiently. From handling artists and
            artworks to managing attendees and sales, AEMS provides an intuitive
            and responsive dashboard to oversee it all.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1BFFFF]">
            Key Features
          </h3>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-lg">
            <li>Manage exhibitions, including venue details and dates.</li>
            <li>Oversee artist profiles and assign them to exhibitions.</li>
            <li>Review and approve artworks submitted for exhibitions.</li>
            <li>Track attendees, including registration and check-ins.</li>
            <li>Handle payments and sales through Stripe integration.</li>
            <li>
              Customize the dashboard and manage user roles and permissions.
            </li>
          </ul>
        </div>

        {/* Team Members */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1BFFFF]">
            Meet the Team
          </h3>
          <p className="text-lg leading-7 mt-4">
            AEMS is brought to you by Group 8, a dedicated team of developers
            focused on creating seamless and effective software solutions. Our
            team includes:
          </p>
          <ul className="list-none mt-4 space-y-2 text-lg">
            <li>
              <strong>Victor Escudero</strong>
            </li>
            <li>
              <strong>Mark Cirineo</strong>
            </li>
            <li>
              <strong>Zaheer Safi</strong>
            </li>
            <li>
              <strong>Diego Ramirez</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] p-8 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="mt-4">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/artist" className="hover:underline">
                  Artists
                </NavLink>
              </li>
              <li>
                <NavLink to="/exibitions" className="hover:underline">
                  Exhibitions
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Get Involved</h5>
            <ul className="mt-4">
              <li>
                <NavLink to="/register" className="hover:underline">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="hover:underline">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h5 className="text-lg font-bold">
              Art Exhibition Management System
            </h5>
            <p className="mt-4">
              Simplifying exhibition management for organizers and artists.
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} AEMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
