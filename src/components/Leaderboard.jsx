import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaCrown } from "react-icons/fa";

export default function Leaderboard() {
    // Example data — you can later fetch from backend or Firebase
    const leaders = [
        { name: "Aarav Sharma", score: 980, rank: 1 },
        { name: "Isha Patel", score: 940, rank: 2 },
        { name: "Rohan Das", score: 910, rank: 3 },
        { name: "Priya Verma", score: 870, rank: 4 },
        { name: "Karan Mehta", score: 850, rank: 5 },
        { name: "Sneha Nair", score: 830, rank: 6 },
        { name: "Devansh Gupta", score: 800, rank: 7 },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-24 pb-10 bg-white/70 backdrop-blur-md">
            <h1 className="text-4xl font-extrabold text-orange-700 mb-8">🏆 Leaderboard</h1>

            {/* Top 3 podium section */}
            <div className="flex justify-center items-end gap-8 mb-12">
                {leaders.slice(0, 3).map((leader, index) => (
                    <motion.div
                        key={leader.rank}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative flex flex-col items-center justify-end w-40 p-4 rounded-2xl shadow-lg 
                            ${leader.rank === 1 ? "bg-yellow-100 border-4 border-yellow-500" :
                                leader.rank === 2 ? "bg-gray-100 border-4 border-gray-400" :
                                    "bg-orange-100 border-4 border-orange-400"}`}
                        style={{ height: 200 + (3 - leader.rank) * 30 }}
                    >
                        {leader.rank === 1 && (
                            <FaCrown className="text-yellow-500 text-3xl absolute -top-6" />
                        )}
                        <p className="font-semibold text-lg">{leader.name}</p>
                        <p className="text-sm text-gray-600">Score: {leader.score}</p>
                        <FaMedal
                            className={`text-2xl mt-2 ${leader.rank === 1
                                    ? "text-yellow-500"
                                    : leader.rank === 2
                                        ? "text-gray-500"
                                        : "text-orange-600"
                                }`}
                        />
                        <p className="font-bold mt-1">#{leader.rank}</p>
                    </motion.div>
                ))}
            </div>

            {/* Rest of leaderboard */}
            <div className="bg-white/80 shadow-md rounded-2xl w-full max-w-3xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-orange-600 text-white">
                        <tr>
                            <th className="py-3 px-4">Rank</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4 text-right">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaders.slice(3).map((leader) => (
                            <tr
                                key={leader.rank}
                                className="border-b border-gray-200 hover:bg-orange-50 transition"
                            >
                                <td className="py-3 px-4 font-semibold text-gray-700">
                                    #{leader.rank}
                                </td>
                                <td className="py-3 px-4 text-gray-700">{leader.name}</td>
                                <td className="py-3 px-4 text-right text-gray-600">
                                    {leader.score}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
