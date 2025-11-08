import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaPlayCircle } from "react-icons/fa";

export default function TrackSelection() {
    const navigate = useNavigate();

    // 🎯 Define all available tracks with their lock status
    const tracks = [
        { name: "Coding & Problem Solving in C", unlocked: true },
        { name: "Data Structures", unlocked: true },
        { name: "Designing Algorithms", unlocked: true },
        { name: "Object oriented programming C++", unlocked: false },
        { name: "System design", unlocked: false },
        { name: "Data anlaytics with Python", unlocked: false },
        { name: "GenAI", unlocked: false },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24 px-6">
            <h1 className="text-4xl font-bold text-orange-700 mb-12">
                Choose Your Placement Track
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                {tracks.map((track, index) => (
                    <div
                        key={index}
                        className={`relative bg-white p-6 rounded-2xl shadow-md border transition transform hover:scale-105 ${track.unlocked
                                ? "cursor-pointer hover:shadow-xl"
                                : "cursor-not-allowed opacity-60"
                            }`}
                        onClick={() =>
                            track.unlocked ? navigate(`/roadmap/${encodeURIComponent(track.name)}`) : null
                        }
                    >
                        <div className="flex items-center justify-center text-5xl mb-4 text-orange-700">
                            {track.unlocked ? <FaPlayCircle /> : <FaLock />}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">{track.name}</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            {track.unlocked
                                ? "Start learning this track"
                                : "Locked — complete previous levels to unlock"}
                        </p>
                        {!track.unlocked && (
                            <div className="absolute top-4 right-4 bg-orange-700 text-white text-xs px-2 py-1 rounded">
                                Locked
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate(-1)}
                className="mt-12 bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-800 transition"
            >
                ← Back
            </button>
        </div>
    );
}
