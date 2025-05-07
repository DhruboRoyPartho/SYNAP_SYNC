import React from 'react';
import img from '../../assets/bann.jpg'

const HomeBanner = () => {
    return (
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                            <span className="text-blue-500">Skill  <br/>
                                is a ley to your <br/>
                                future success</span>
                        </h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                        A strong foundation in learning empowers you to shape your goals, unlock opportunities, and lead a fulfilling career. Invest in your growth today to secure a brighter tomorrow.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src={img} alt="Catalogue" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;