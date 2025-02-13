// import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Artist from "./pages/Artists";
import Exibitions from "./pages/Exibitions";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] p-4 shadow-lg">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-white border-b-4 border-teal-700">
            Art Gallery
          </h1>
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/artist"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              Artist
            </NavLink>
            <NavLink
              to="/exibitions"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              Exhibitions
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-teal-700 px-4 py-2 rounded-lg"
                  : "text-white hover:bg-teal-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              }
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/exibitions" element={<Exibitions />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
    // Old Code:
    // ****************************************************
    //   {/* <div className="bg-white text-black min-h-screen"> */}
    //   <header className="bg-gray-200 p-4 shadow-lg">
    //   <nav className="flex item-center justify-between max-w-6xl mx-auto">
    //     <h1 className="text-2xl font-bold text-violet-500 border-b-4 border-violet-500">
    //       Art Gallery
    //     </h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/artist">Artist</NavLink>
    //     <NavLink to="/exibitions">Exibitions</NavLink>
    //     <NavLink to="/about">About Us</NavLink>
    //     <NavLink to="/login">Login</NavLink>
    //   </nav>
    // </header>
    // <main>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="/artist" element={<Artist />} />
    //     <Route path="/exibitions" element={<Exibitions />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/register" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </main>
    // {/* </div> */}

    // ****************************************************

    // <div className="bg-white text-black min-h-screen"></div>
    // <div>Hello React</div>
    // <div>
    //   <div>
    //     <header className="App-header">
    //       <h1 className="text-6xl ">Welcome to the CS 440 Project!</h1>
    //     </header>
    //   </div>
    //   <main className="main bg-neutral text-neutral-content">
    //     <Routes>
    //       <Route path="/register" element={<Signup />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </main>
    //   <div>
    //     <body className="body bg-neutral text-neutral-content">
    //       <h2 className="text-4xl">Welcome to the CS 440 Project!</h2>
    //     </body>
    //   </div>
    //   <div>
    //     <footer className="footer bg-neutral text-neutral-content p-10">
    //       <nav>
    //         <h6 className="footer-title">Services</h6>
    //         <a className="link link-hover">Branding</a>
    //         <a className="link link-hover">Design</a>
    //         <a className="link link-hover">Marketing</a>
    //         <a className="link link-hover">Advertisement</a>
    //       </nav>
    //       <nav>
    //         <h6 className="footer-title">Company</h6>
    //         <a className="link link-hover">About us</a>
    //         <a className="link link-hover">Contact</a>
    //         <a className="link link-hover">Jobs</a>
    //         <a className="link link-hover">Press kit</a>
    //       </nav>
    //       <nav>
    //         <h6 className="footer-title">Legal</h6>
    //         <a className="link link-hover">Terms of use</a>
    //         <a className="link link-hover">Privacy policy</a>
    //         <a className="link link-hover">Cookie policy</a>
    //       </nav>
    //     </footer>
    //   </div>
    // </div>
  );
}

export default App;


