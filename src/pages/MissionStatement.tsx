import React from 'react';

const MissionStatement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
          Mission Statement
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-8 bg-white p-8 rounded-lg shadow-lg font-roboto">
          <div className="flex justify-center">
            <img src="/crest.png" className="w-full md:w-1/2 rounded-lg shadow-md mb-8 md:mb-0" />
          </div>
          <p className="leading-relaxed">
            The mission of <span className="text-red-500">Pi Delta Psi</span> Fraternity, Inc. is to maintain its Fraternal existence
            by instilling values that nurture and perpetuate the continual growth and development
            of the individual through <span className="text-red-500">Academic Achievement, Cultural Awareness, Righteousness,
            Friendship and Loyalty</span> while fostering ethical behavior, leadership, and philanthropy.
          </p>
          <p className="leading-relaxed">
            <span className="text-red-500">Pi Delta Psi</span> was founded on these principles to help promote <span className="text-red-500">Asian Awareness</span> amongst
            ourselves and throughout the community. We envisioned this to be possible by going out
            of the boundaries of an organization and creating a Fraternity on the basis of common
            goals and ideals in the form of a <span className="text-red-500">brotherhood</span>. We believe that through education,
            we can become more knowledgeable about the different Asian cultures, <span className="text-red-500">overcome</span> obstacles
            of racism and discrimination, therefore <span className="text-red-500">unifying</span> us as a whole.
          </p>
          <p className="leading-relaxed">
            This <span className="text-red-500">mission statement</span> embodies the <span className="text-red-500">purpose</span> of our Fraternity and is set forth as a guide
            that empowers each member to better <span className="text-red-500">himself</span>, the <span className="text-red-500">Brotherhood</span>, <span className="text-red-500">community</span>, and <span className="text-red-500">society</span> as
            a whole.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;