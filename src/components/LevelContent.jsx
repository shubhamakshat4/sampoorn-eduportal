import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function LevelContent() {
    const { trackName, levelId } = useParams();
    const navigate = useNavigate();

    // 🎯 Centralized track-specific data
    const trackData = {
        "Coding & Problem Solving in C": {
            video: "https://www.youtube.com/embed/KJgsSFOSQv0", // C Programming Crash Course
            questions: [
                { title: "Sum of digits", link: "https://www.hackerrank.com/challenges/sum-of-digits-of-a-five-digit-number/problem" },
                { title: "Reverse a number", link: "https://www.hackerrank.com/contests/hack-the-code/challenges/reverse-number" },
                { title: "Find GCD", link: "https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem" },
            ],
        },
        "Data Structures": {
            video: "https://www.youtube.com/embed/bum_19loj9A", // Data Structures intro
            questions: [
                { title: "Implement Stack using Array", link: "https://leetcode.com/problems/implement-stack-using-queues/" },
                { title: "Find Middle Element of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
                { title: "Validate Balanced Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
            ],
        },
        "Designing Algorithms": {
            video: "https://www.youtube.com/embed/z6DY_YSdyww", // Algorithm Design intro
            questions: [
                { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
                { title: "Merge Sort", link: "https://www.geeksforgeeks.org/merge-sort/" },
                { title: "Dijkstra’s Shortest Path", link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm/" },
            ],
        },
        "Object oriented programming C++": {
            video: "https://www.youtube.com/embed/i_5pvt7ag7E", // OOPs in C++
            questions: [
                { title: "Class and Object Implementation", link: "https://www.hackerrank.com/challenges/classes-objects/problem" },
                { title: "Inheritance Demo", link: "https://www.hackerrank.com/challenges/inheritance-introduction/problem" },
                { title: "Polymorphism Example", link: "https://www.hackerrank.com/challenges/virtual-functions/problem" },
            ],
        },
        "System design": {
            video: "https://www.youtube.com/embed/xpDnVSmNFX0", // System Design Basics
            questions: [
                { title: "Design URL Shortener", link: "https://leetcode.com/discuss/interview-question/system-design/124756/design-a-url-shortener" },
                { title: "Design Parking Lot", link: "https://leetcode.com/discuss/interview-question/system-design/125020/design-parking-lot" },
                { title: "Design File Sharing System", link: "https://leetcode.com/problems/design-file-sharing-system/" },
            ],
        },
        "Data anlaytics with Python": {
            video: "https://www.youtube.com/embed/r-uOLxNrNk8", // Python Data Analysis
            questions: [
                { title: "Pandas Basics", link: "https://www.kaggle.com/code/learn/pandas" },
                { title: "Numpy Practice", link: "https://www.hackerrank.com/domains/python/numpy" },
                { title: "Data Cleaning Task", link: "https://www.hackerrank.com/challenges/python-quest-1/problem" },
            ],
        },
        "GenAI": {
            video: "https://www.youtube.com/embed/tlBbtT3kPqE", // Generative AI overview
            questions: [
                { title: "Prompt Engineering Basics", link: "https://www.promptingguide.ai/" },
                { title: "AI Text Generation API", link: "https://colab.research.google.com/" },
                { title: "Create a Chatbot using Python", link: "https://www.geeksforgeeks.org/python-chatbot-tutorial/" },
            ],
        },
    };

    const data = trackData[trackName] || trackData["Coding & Problem Solving in C"];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-28 px-6 text-center text-gray-800">
            <h1 className="text-3xl font-bold text-orange-700 mb-6">{trackName}</h1>

            {/* 🎥 Video section */}
            <div className="w-full md:w-3/4 lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg mb-10">
                <iframe
                    className="w-full h-full"
                    src={data.video}
                    title="Track Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            {/* 📝 Practice Questions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl">
                <h2 className="text-2xl font-semibold text-orange-700 mb-4">
                    Level {levelId}: Practice Challenges
                </h2>
                <ul className="space-y-4">
                    {data.questions.map((q, idx) => (
                        <li key={idx}>
                            <a
                                href={q.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-700 px-4 py-2 rounded text-left text-gray-700 font-medium transition"
                            >
                                🔗 {q.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ✅ Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mt-10 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
                ← Back to Roadmap
            </button>
        </div>
    );
}
