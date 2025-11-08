import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function SchoolTrackSelection() {
    const navigate = useNavigate();

    const tracks = [
        { name: "Being Cyber Aware", locked: false },
        { name: "Securing Our Network", locked: false },
        { name: "Developing Apps & Websites (No-Code/Low-Code)", locked: true },
        { name: "Introduction to AI", locked: true },
        { name: "AI Applications Around Us", locked: true },
        { name: "Mathematics for Data", locked: true },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white/60 backdrop-blur-md p-8">
            <h2 className="text-4xl font-extrabold text-orange-700 mb-8">
                Choose Your Learning Track
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {tracks.map((track, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            !track.locked &&
                            navigate(`/school-roadmap/${encodeURIComponent(track.name)}`)
                        }
                        className={`bg-white/90 rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center justify-center text-center transition 
                            ${track.locked
                                ? "opacity-60 cursor-not-allowed"
                                : "cursor-pointer hover:shadow-xl hover:scale-105"}`}
                    >
                        <h3
                            className={`text-xl font-semibold mb-2 ${track.locked ? "text-gray-500" : "text-orange-700"
                                }`}
                        >
                            {track.name}
                        </h3>
                        {track.locked ? (
                            <FaLock className="text-gray-400 text-2xl mt-2" />
                        ) : (
                            <p className="text-gray-600">
                                Explore interactive lessons and fun activities!
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
