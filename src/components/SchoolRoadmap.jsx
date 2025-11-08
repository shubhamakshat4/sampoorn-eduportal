import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock, FaRocket, FaFlagCheckered, FaPlayCircle } from "react-icons/fa";

export default function SchoolRoadmap() {
    const { trackName } = useParams();
    const navigate = useNavigate();
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const levels = [
        { id: 1, title: "Introduction & Awareness" },
        { id: 2, title: "Core Concepts" },
        { id: 3, title: "Interactive Project" },
        { id: 4, title: "Mastery & Quiz" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="text-3xl font-extrabold text-orange-700 mb-6">{trackName}</h2>
            <div className="relative w-full max-w-4xl flex flex-col items-center">
                <FaRocket className="text-orange-600 text-4xl mb-4" />
                <div className="flex justify-between w-full items-center relative border-t-4 border-dashed border-orange-300 py-8">
                    {levels.map((level) => (
                        <div key={level.id} className="flex flex-col items-center">
                            {level.id <= unlockedLevel ? (
                                <button
                                    onClick={() =>
                                        navigate(`/school-level/${encodeURIComponent(trackName)}/${level.id}`)
                                    }
                                    className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-700 transition"
                                >
                                    <FaPlayCircle className="inline mr-2" />
                                    Level {level.id}
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full shadow-md cursor-not-allowed"
                                >
                                    <FaLock className="inline mr-2" />
                                    Locked
                                </button>
                            )}
                            <p className="text-sm mt-2 text-gray-700">{level.title}</p>
                        </div>
                    ))}
                </div>
                <FaFlagCheckered className="text-green-600 text-4xl mt-4" />
            </div>
        </div>
    );
}
