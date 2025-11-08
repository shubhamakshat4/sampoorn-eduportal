import React from "react";
import { useNavigate } from "react-router-dom";

export default function SchoolLogin() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white/70 backdrop-blur-md p-6">
            <div className="bg-white/80 rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
                <h2 className="text-3xl font-extrabold text-orange-700 mb-4">
                    School Programs Login
                </h2>

                <p className="text-gray-600 mb-6">
                    🧑‍💻 <strong>Note:</strong> This is a demo version for school learners. Simply click{" "}
                    <span className="font-semibold text-orange-700">Login</span> to explore the tracks.
                </p>

                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button
                    onClick={() => navigate("/school-tracks")}
                    className="bg-orange-700 text-white px-6 py-2 w-full rounded-lg font-semibold hover:bg-orange-800 transition"
                >
                    Login
                </button>

                <p className="text-sm text-gray-500 mt-4">
                    An initiative by <span className="text-orange-700 font-semibold">SSU</span> to foster early skill awareness
                </p>
            </div>
        </div>
    );
}
