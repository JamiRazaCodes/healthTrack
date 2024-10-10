import React from 'react';
import { aboutUsData } from '../Webdata/aboutus';
aboutUsData
const AboutUs = ({aboutUsData}) => {
    const {title} = aboutUsData;
    return (

        <div className="bg-white text-gray-800 p-12">
            <h2 className="text-4xl font-bold text-center text-gray-900">{aboutUsData.title}</h2>
            <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
                {aboutUsData.missionStatement}
            </p>
            <div className="mt-12 max-w-6xl mx-auto">
                <h3 className="text-3xl font-semibold text-gray-800">Our Story</h3>
                <p className="mt-4 text-gray-600">
                    {aboutUsData.story}
                </p>
                <h3 className="mt-8 text-3xl font-semibold text-gray-800">Our Values</h3>
                <ul className="mt-4 space-y-4 text-gray-600">
                    {aboutUsData.values.map((data) => 
                    <li><strong>{data.title}</strong>{data.description} </li>
                )}
                    
                </ul>
            </div>
            <div className="mt-12">
                <h3 className="text-3xl font-semibold text-gray-800 text-center">Meet Our Team</h3>
                <div className="flex justify-around mt-8">
                    
                        {aboutUsData.team.map((data) => 
                        <div className="text-center">
                            <img src={data.image} alt="Emma Johnson" className="w-32 h-32 rounded-full mx-auto" />
                            <h4 className="mt-4 text-xl font-semibold text-gray-800">{data.name}</h4>
                            <p className="text-gray-600">{data.role}</p>
                            <p className="text-gray-600 w-44 m-2">{data.bio}</p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
