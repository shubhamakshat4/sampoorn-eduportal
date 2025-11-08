import React from "react";

export default function Leaderboard() {
    const leaderboardData = [
        { rank: 1, name: "Priya Sharma", points: 980, track: "Coding & Problem Solving (C)" },
        { rank: 2, name: "Rohit Mehta", points: 950, track: "Data Structures" },
        { rank: 3, name: "Aditi Das", points: 920, track: "Algorithms" },
        { rank: 4, name: "Aman Verma", points: 890, track: "SQL Mastery" },
        { rank: 5, name: "Neha Singh", points: 870, track: "System Design" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-50 to-white pt-24 px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
                🏆 Leaderboard
            </h2>

            {/* Responsive Table Container */}
            <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="min-w-full border-collapse">
                    <thead className="bg-orange-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Rank</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Track</th>
                            <th className="py-3 px-4 text-left">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((student, index) => (
                            <tr
                                key={index}
                                className={`border-b hover:bg-orange-50 transition ${index % 2 === 0 ? "bg-white" : "bg-orange-100/50"
                                    }`}
                            >
                                <td className="py-3 px-4 font-semibold text-gray-800">
                                    {student.rank}
                                </td>
                                <td className="py-3 px-4 text-gray-700">{student.name}</td>
                                <td className="py-3 px-4 text-gray-700 whitespace-nowrap">
                                    {student.track}
                                </td>
                                <td className="py-3 px-4 font-bold text-orange-700">
                                    {student.points}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-gray-500 mt-6 text-center max-w-md text-sm">
                Updated in real-time as students complete levels, projects, and challenges.
            </p>
        </div>
    );
}
