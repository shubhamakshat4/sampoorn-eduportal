import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import TrackSelection from "./components/TrackSelection";
import Roadmap from "./components/Roadmap";
import LevelContent from "./components/LevelContent";
import SchoolLogin from "./components/SchoolLogin";
import SchoolTrackSelection from "./components/SchoolTrackSelection";
import SchoolRoadmap from "./components/SchoolRoadmap";
import SchoolLevelContent from "./components/SchoolLevelContent";
import Leaderboard from "./components/Leaderboard";



function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800 font-sans">
            {/* 🌐 Navbar */}
            <nav className="bg-white shadow-md fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <h1
                        className="text-2xl font-bold text-orange-700 cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        Sampoorn EduPortal
                    </h1>
                    <ul className="flex space-x-6 text-gray-600 font-medium">
                        <li className="hover:text-orange-700 cursor-pointer" onClick={() => navigate("/")}>Home</li>
                        <li
                            className="hover:text-orange-700 cursor-pointer"
                            onClick={() => navigate("/placement-login")}
                        >
                            Placement Track
                        </li>
                        <li
                            className="hover:text-orange-700 cursor-pointer"
                            onClick={() => navigate("/school-login")}
                        >
                            School Programs
                        </li>

                        <li className="hover:text-orange-700 cursor-pointer" onClick={() => navigate("/leaderboard")}>Leaderboard</li>

                        <li
                            className="hover:text-orange-700 cursor-pointer"
                            onClick={() => window.open("https://gurudev.artofliving.org", "_blank")}
                        >
                            Inspiration
                        </li>

                    </ul>
                </div>
            </nav>

            {/* 🏠 Hero Section */}
            <header className="flex flex-col items-center justify-center text-center pt-28 pb-1 px-2">
                <h2 className="text-4xl font-extrabold text-orange-800 mb-4">
                    Empowering Students. Enhancing Skills. Enabling Futures.
                </h2>
                <p className="max-w-2xl text-lg text-gray-600">
                    Developed & Powered by <span className="font-semibold text-orange-700">SSU Faculty of Engineering & Technology</span>
                </p>
                <p className="mt-4 text-gray-700 max-w-3xl">
                    A comprehensive platform dedicated to building placement-ready students through hands-on learning,
                    while fostering skill awareness and career growth among school learners.
                </p>
                <button
                    onClick={() => navigate("/placement-login")}
                    className="mt-8 px-6 py-3 bg-orange-700 text-white rounded-lg font-semibold shadow hover:bg-orange-800 transition"
                >
                    Explore Programs
                </button>

            </header>

            {/* 🧭 Objectives Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h3 className="text-3xl font-bold text-center text-orange-800 mb-12">Our Core Objectives</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2 text-orange-700">🎯 Placement Readiness</h4>
                        <p className="text-gray-600">
                            Self-paced, level-based learning in coding, data structures, algorithms, OOPs, SQL & system design —
                            complete with mini projects, capstones, and achievement badges from LeetCode & HackerRank.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2 text-orange-700">🏫 School Skill Development</h4>
                        <p className="text-gray-600">
                            Certification-based, project-driven learning in coding, AI/ML, app development, data analytics & soft skills —
                            reaching schools through SSU-powered awareness programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🏢 Company Carousel */}
            <section className="bg-white py-8">
                <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">
                    Our Students Aim for Excellence at
                </h3>
                <div className="flex overflow-hidden space-x-12 animate-scroll">
                    {[
                        "tcs.png", "infosys.png", "accenture.png", "meta.png",
                        "microsoft.png", "amazon.png", "google.png", "netflix.png", "cognizant.png", "deloitte.png"
                    ].map((logo, index) => (
                        <img
                            key={index}
                            src={`/logos/${logo}`}
                            alt={logo}
                            className="h-12 w-auto opacity-80 hover:opacity-100 transition"
                        />
                    ))}
                </div>
            </section>

            {/* ⚙️ Footer */}
            <footer className="bg-orange-700 text-white text-center py-4 mt-10">
                <p>© {new Date().getFullYear()} Sampoorn EduPortal | Powered by SSU FET</p>
            </footer>
        </div>
    );
}

function LayoutWrapper({ children }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div
            className={`min-h-screen font-sans text-gray-800 ${isHome ? "bg-gradient-to-b from-orange-50 to-white" : "bg-cover bg-center"
                }`}
            style={
                !isHome
                    ? { backgroundImage: "url('/bg.png')" }
                    : {}
            }
        >
            {children}
        </div>
    );
}

// 🔹 Main App component with routes
export default function App() {
    return (
        <LayoutWrapper>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/placement-login" element={<Login />} />
                <Route path="/tracks" element={<TrackSelection />} />
                <Route path="/roadmap/:trackName" element={<Roadmap />} />
                <Route path="/level/:trackName/:levelId" element={<LevelContent />} />
                <Route path="/school-login" element={<SchoolLogin />} />
                <Route path="/school-tracks" element={<SchoolTrackSelection />} />
                <Route path="/school-roadmap/:trackName" element={<SchoolRoadmap />} />
                <Route path="/school-level/:trackName/:levelId" element={<SchoolLevelContent />} />
                <Route path="/leaderboard" element={<Leaderboard />} />


            </Routes>
        </LayoutWrapper>
    );
}
