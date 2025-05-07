import React, { useContext, useState } from "react";

const jobs = [
    {
        id: 1,
        company: "OpenAI",
        jobTitle: "AI Engineer",
        skills: {
            dsa: 82, java: 0, c: 0, ml: 61, ai: 78, db: 88, cryptography: 0
        },
        salary: 150000,
        type: "remote"
    },
    {
        id: 2,
        company: "Google",
        jobTitle: "Backend Developer",
        skills: {
            dsa: 70, java: 85, c: 40, ml: 0, ai: 0, db: 90, cryptography: 30
        },
        salary: 135000,
        type: "hybrid"
    },
    {
        id: 3,
        company: "Amazon",
        jobTitle: "Data Scientist",
        skills: {
            dsa: 65, java: 0, c: 0, ml: 85, ai: 70, db: 75, cryptography: 0
        },
        salary: 145000,
        type: "onsite"
    },
    {
        id: 4,
        company: "Microsoft",
        jobTitle: "Cloud Security Engineer",
        skills: {
            dsa: 50, java: 0, c: 30, ml: 0, ai: 0, db: 60, cryptography: 80
        },
        salary: 155000,
        type: "remote"
    },
    {
        id: 5,
        company: "Netflix",
        jobTitle: "Full Stack Developer",
        skills: {
            dsa: 60, java: 70, c: 40, ml: 30, ai: 0, db: 85, cryptography: 0
        },
        salary: 130000,
        type: "hybrid"
    },
    {
        id: 6,
        company: "Tesla",
        jobTitle: "Embedded Systems Engineer",
        skills: {
            dsa: 55, java: 0, c: 90, ml: 20, ai: 60, db: 45, cryptography: 0
        },
        salary: 140000,
        type: "onsite"
    },
    {
        id: 7,
        company: "Meta",
        jobTitle: "Machine Learning Engineer",
        skills: {
            dsa: 72, java: 0, c: 0, ml: 88, ai: 91, db: 70, cryptography: 0
        },
        salary: 160000,
        type: "remote"
    },
    {
        id: 8,
        company: "IBM",
        jobTitle: "Cybersecurity Analyst",
        skills: {
            dsa: 45, java: 0, c: 30, ml: 20, ai: 0, db: 50, cryptography: 95
        },
        salary: 125000,
        type: "onsite"
    },
    {
        id: 9,
        company: "Salesforce",
        jobTitle: "DevOps Engineer",
        skills: {
            dsa: 50, java: 65, c: 0, ml: 0, ai: 0, db: 85, cryptography: 20
        },
        salary: 138000,
        type: "hybrid"
    },
    {
        id: 10,
        company: "Nvidia",
        jobTitle: "AI Research Scientist",
        skills: {
            dsa: 78, java: 0, c: 20, ml: 90, ai: 95, db: 60, cryptography: 0
        },
        salary: 170000,
        type: "remote"
    }
];

import studentData from '../../data/student.json';

import { GoogleGenAI, Type } from "@google/genai";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCD9MTb_CA2jIe4PIKYc0GSTyWAwwQ8YR0" });


const JobList = () => {

    const navigate = useNavigate();
    const [isReco, setIsReco] = useState(false);
    const [reco, setReco] = useState({});


    const skills = studentData[localStorage.id];
    console.log(skills);

    // const handleCompare = async (id) => {
    //     const job = jobs.find(job => job.id === id);
    //     console.log(job);

    //     const prompt = `
    //     You are a career assistant. Compare the student's skills and the job requirements below. Return a JSON with:
    //     1. "matchPercentage": A number (0-100) representing how well the student's skills match the job.
    //     2. "recommendation": A short text suggesting whether the student should apply.
    //     3. "skillsToImprove": A list of job-required skills where the student is below requirement.
    //     4. "learningPath": A brief learning plan for those skills.

    //     Student Skills: ${JSON.stringify(skills)}
    //     Job Skills Required: ${JSON.stringify(job.skills)}
    //     `;

    //     const response = await ai.models.generateContent({
    //         model: 'gemini-2.0-flash',
    //         contents: prompt,

    //         config: {
    //             responseMimeType: 'application/json',
    //             responseSchema: {
    //                 type: Type.OBJECT,
    //                 properties: {
    //                     matchPercentage: {
    //                         type: Type.NUMBER,
    //                         description: 'Overall match percentage between student and job skills',
    //                         nullable: false,
    //                     },
    //                     recommendation: {
    //                         type: Type.STRING,
    //                         description: 'Whether or not the student should apply and why',
    //                         nullable: false,
    //                     },
    //                     skillsToImprove: {
    //                         type: Type.ARRAY,
    //                         items: { type: Type.STRING },
    //                         description: 'List of skills to improve to match the job',
    //                     },
    //                     learningPath: {
    //                         type: Type.STRING,
    //                         description: 'Brief learning plan for the required improvements',
    //                     },
    //                 },
    //                 required: ['matchPercentage', 'recommendation', 'skillsToImprove', 'learningPath'],
    //             },
    //         },
    //     });
    //     console.log("lol");

    //     console.log(response.text);

    //     if (response.text) {
    //         setReco(response.text);
    //         setIsReco(true);
    //     }

    // }

    const handleCompare = async (id) => {
        try {
            const job = jobs.find(job => job.id === id);
            console.log(job);

            const prompt = `
            You are a career assistant. Compare the student's skills and the job requirements below. Return a JSON with:
            1. "matchPercentage": A number (0-100) representing how well the student's skills match the job.
            2. "recommendation": A short text suggesting whether the student should apply.
            3. "skillsToImprove": A list of job-required skills where the student is below requirement.
            4. "learningPath": A brief learning plan for those skills.
            
            Student Skills: ${JSON.stringify(skills)}
            Job Skills Required: ${JSON.stringify(job.skills)}
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: prompt,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            matchPercentage: {
                                type: Type.NUMBER,
                                description: 'Overall match percentage between student and job skills',
                                nullable: false,
                            },
                            recommendation: {
                                type: Type.STRING,
                                description: 'Whether or not the student should apply and why',
                                nullable: false,
                            },
                            skillsToImprove: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                                description: 'List of skills to improve to match the job',
                            },
                            learningPath: {
                                type: Type.STRING,
                                description: 'Brief learning plan for the required improvements',
                            },
                        },
                        required: ['matchPercentage', 'recommendation', 'skillsToImprove', 'learningPath'],
                    },
                },
            });

            console.log("Raw response:", response.text);

            // Parse the response if it's a string
            const responseData = typeof response.text === 'string'
                ? JSON.parse(response.text)
                : response.text;

            // Ensure required fields exist
            if (responseData &&
                typeof responseData.matchPercentage !== 'undefined' &&
                responseData.recommendation &&
                Array.isArray(responseData.skillsToImprove) &&
                responseData.learningPath
            ) {
                setReco({
                    matchPercentage: Number(responseData.matchPercentage),
                    recommendation: responseData.recommendation,
                    skillsToImprove: responseData.skillsToImprove,
                    learningPath: responseData.learningPath
                });
                setIsReco(true);
            } else {
                console.error("Invalid response format:", responseData);
                // Set default error values or show error to user
                setReco({
                    matchPercentage: 0,
                    recommendation: "Unable to analyze job match",
                    skillsToImprove: [],
                    learningPath: "Please try again later"
                });
                setIsReco(true);
            }
        } catch (error) {
            console.error("Error in handleCompare:", error);
            // Set error state
            setReco({
                matchPercentage: 0,
                recommendation: "Error analyzing job match",
                skillsToImprove: [],
                learningPath: "Please try again later"
            });
            setIsReco(true);
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map(job => (
                        <div key={job.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-blue-600">{job.jobTitle}</h2>
                            <p className="text-gray-800 font-medium">{job.company}</p>
                            <p className="text-sm text-gray-500 capitalize mb-2">Type: {job.type}</p>
                            <p className="text-gray-700 font-semibold">Salary: ${job.salary.toLocaleString()}</p>
                            <div className="mt-4">
                                <p className="font-semibold text-gray-700 mb-1">Skills:</p>
                                <ul className="flex flex-wrap gap-2 text-sm">
                                    {Object.entries(job.skills).map(([skill, value]) =>
                                        value > 0 ? (
                                            <li key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg">
                                                {skill.toUpperCase()}: {value}
                                            </li>
                                        ) : null
                                    )}
                                </ul>
                            </div>

                            <div>
                                <button
                                    onClick={() => handleCompare(job.id)}
                                    className="p-2 bg-blue-300/50 rounded-md my-5">Compare</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isReco && (
                <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Skill Match Report</h2>

                    {/* Match Percentage */}
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-600 mb-1">Match Percentage</p>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full"
                                style={{ width: `${reco.matchPercentage || 0}%` }}
                            ></div>
                        </div>
                        <p className="text-right text-sm text-gray-700 mt-1">{reco.matchPercentage || 0}% match</p>
                    </div>

                    {/* Recommendation */}
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-600 mb-1">Recommendation</p>
                        <p className="text-gray-800 bg-blue-50 border border-blue-200 p-3 rounded-md">
                            {reco.recommendation || "No recommendation available"}
                        </p>
                    </div>

                    {/* Skills to Improve */}
                    {reco.skillsToImprove?.length > 0 ? (
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-600 mb-1">Skills to Improve</p>
                            <ul className="list-disc list-inside text-gray-800">
                                {reco.skillsToImprove.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {/* Learning Path */}
                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Learning Path</p>
                        <p className="text-gray-800 bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                            {reco.learningPath || "No learning path available"}
                        </p>
                    </div>
                </div>
            )}
        </>

    );
};

export default JobList;
