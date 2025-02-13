import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const artworksRef = useRef(null); // For scrolling artworks
  const artistsRef = useRef(null); // For scrolling artists

  // Fetch artists and artworks from the backend when the component mounts
  useEffect(() => {
    // Fetch Artists
    fetch("http://localhost:5001/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.artists);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });

    // Fetch Artworks
    fetch("http://localhost:5001/artworks")
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.artworks);
      })
      .catch((error) => {
        console.error("Error fetching artworks:", error);
      });
  }, []);

  // Scroll functionality for artworks and artists
  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Artworks Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-[#2E3192]">
          Featured Artworks
        </h2>
        <p className="mb-6 text-lg">
          Explore a curated selection of stunning artworks from various artistic
          movements and eras. From classical masterpieces to modern abstract
          interpretations, these works are sure to inspire.
        </p>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#2E3192] text-white p-2 rounded-full"
            onClick={() => scrollLeft(artworksRef)}
          >
            ◀
          </button>
          <div
            className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide"
            ref={artworksRef}
          >
            {artworks.slice(0, 8).map((artwork) => (
              <div
                key={artwork.exhibition_id}
                className="min-w-[200px] bg-white rounded-lg shadow-lg p-4"
              >
                <img
                  src={artwork.image_url || "https://via.placeholder.com/150"}
                  alt="Artwork"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <p className="mt-2 text-gray-700">${artwork.price}</p>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2E3192] text-white p-2 rounded-full"
            onClick={() => scrollRight(artworksRef)}
          >
            ▶
          </button>
        </div>
      </section>

      {/* Artists Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-[#2E3192]">
          Featured Artists
        </h2>
        <p className="mb-6 text-lg">
          Discover the talented artists behind these magnificent creations. From
          renowned painters to modern-day sculptors, these individuals have left
          a significant mark on the art world.
        </p>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#2E3192] text-white p-2 rounded-full"
            onClick={() => scrollLeft(artistsRef)}
          >
            ◀
          </button>
          <div
            className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide"
            ref={artistsRef}
          >
            {artists.slice(0, 8).map((artist) => (
              <div
                key={artist.artist_id}
                className="min-w-[200px] bg-white rounded-lg shadow-lg p-4"
              >
                <img
                  src={artist.picture_url || "https://via.placeholder.com/150"}
                  alt={artist.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="mt-2 text-xl font-bold text-[#2E3192]">
                  {artist.name}
                </h3>
                <p className="text-gray-700">{artist.genre}</p>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2E3192] text-white p-2 rounded-full"
            onClick={() => scrollRight(artistsRef)}
          >
            ▶
          </button>
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
            <h5 className="text-lg font-bold">Art Gallery</h5>
            <p className="mt-4">
              Explore the world of art, and discover amazing artists and their
              works.
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Art Gallery. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
