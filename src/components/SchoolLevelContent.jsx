import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SchoolLevelContent() {
    const { trackName, levelId } = useParams();
    const navigate = useNavigate();

    const videos = [
        "https://www.youtube.com/embed/-AkuKKJ8dN0",
        "https://www.youtube.com/embed/-AkuKKJ8dN0"
    ];

    const sampleQuestions = [
        { q: "What is a strong password and why is it important?", link: "https://www.kaggle.com/" },
        { q: "How can you stay safe while using social media?", link: "https://cyberaware.gov/" },
        { q: "Try building a simple app using Glide or Thunkable.", link: "https://www.thunkable.com/" },
        { q: "Explore a dataset and visualize it using Datawrapper.", link: "https://www.datawrapper.de/" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
                {trackName} – Level {levelId}
            </h2>

            <div className="w-full max-w-3xl bg-white/80 rounded-xl shadow-lg p-6">
                <iframe
                    src={videos[levelId % 2]}
                    title="Learning Video"
                    className="w-full h-64 rounded-lg mb-6"
                    allowFullScreen
                ></iframe>

                <h3 className="text-xl font-semibold mb-4 text-orange-700">Practice Activities</h3>
                <ul className="space-y-3">
                    {sampleQuestions.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {item.q}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-8 bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800 transition"
                >
                    Back to Roadmap
                </button>
            </div>
        </div>
    );
}
