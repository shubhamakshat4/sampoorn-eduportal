import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock, FaPlayCircle, FaFlagCheckered, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Roadmap() {
    const { trackName } = useParams();
    const navigate = useNavigate();
    const [unlockedLevel, setUnlockedLevel] = useState(1);

    const levels = [
        { id: 1, title: "Level 1: Basics" },
        { id: 2, title: "Level 2: Intermediate" },
        { id: 3, title: "Level 3: Advanced" },
        { id: 4, title: "Level 4: Expert" },
        { id: 5, title: "Mastery" },
    ];

    const handleLevelClick = (id) => {
        if (id <= unlockedLevel) {
            navigate(`/level/${trackName}/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center pt-20 px-4">
            <h2 className="text-3xl font-bold text-orange-800 mb-8 capitalize">
                {trackName} Roadmap
            </h2>

            {/* 🚀 Start Icon */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 mb-8"
            >
                <FaRocket className="text-4xl text-orange-700" />
                <span className="font-semibold text-xl text-gray-700">Start Your Journey</span>
            </motion.div>

            {/* 🛣️ Roadmap Path */}
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                {/* Road Line */}
                <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 h-full w-1 bg-orange-300 md:bg-gradient-to-r from-orange-400 to-orange-200 z-0" />

                {/* Level nodes */}
                {levels.map((level, index) => {
                    const isUnlocked = index + 1 <= unlockedLevel;
                    const isMastery = level.id === levels.length;

                    return (
                        <motion.div
                            key={level.id}
                            whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <button
                                onClick={() => handleLevelClick(level.id)}
                                disabled={!isUnlocked}
                                className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition ${isMastery
                                        ? "bg-green-600 hover:bg-green-700"
                                        : isUnlocked
                                            ? "bg-orange-600 hover:bg-orange-700"
                                            : "bg-gray-400 cursor-not-allowed opacity-70"
                                    }`}
                            >
                                {isMastery ? (
                                    <FaFlagCheckered className="text-3xl" />
                                ) : isUnlocked ? (
                                    <FaPlayCircle className="text-3xl" />
                                ) : (
                                    <FaLock className="text-2xl" />
                                )}
                            </button>
                            <p className="mt-2 text-center font-medium text-gray-700">{level.title}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* 🎉 Congrats Section when all levels cleared */}
            {unlockedLevel === levels.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-10 bg-green-100 border border-green-300 rounded-xl p-4 text-green-700 font-semibold text-center"
                >
                    🎉 Congratulations! You’ve mastered {trackName}!
                </motion.div>
            )}
        </div>
    );
}
