import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Recommendation = () => {
    const [recommendation] = useContext(AuthContext);
    // const { matchPercentage, recommendation, skillsToImprove, learningPath } = result;

    console.log(recommendation);
    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skill Match Report</h2>

            {/* Match Percentage */}
            {/* <div className="mb-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Match Percentage</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{ width: `${matchPercentage}%` }}
                    ></div>
                </div>
                <p className="text-right text-sm text-gray-700 mt-1">{matchPercentage}% match</p>
            </div> */}

            {/* Recommendation */}
            {/* <div className="mb-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Recommendation</p>
                <p className="text-gray-800 bg-blue-50 border border-blue-200 p-3 rounded-md">
                    {recommendation}
                </p>
            </div> */}

            {/* Skills to Improve */}
            {/* {skillsToImprove.length > 0 && (
                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-600 mb-1">Skills to Improve</p>
                    <ul className="list-disc list-inside text-gray-800">
                        {skillsToImprove.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )} */}

            {/* Learning Path */}
            {/* <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Learning Path</p>
                <p className="text-gray-800 bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                    {learningPath}
                </p>
            </div> */}
        </div>
    );
};

export default Recommendation;
