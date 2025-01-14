import React from 'react';

const ChapterHistory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
          Chapter History
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg font-roboto text-gray-700 space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img src="/alphas_backshots.jpg" className="w-full md:w-full rounded-lg shadow-md mb-8 md:mb-0" />
          </div>
          <p className="leading-relaxed">
            In 2008, 10 men who were already <span className="text-red-500">leaders</span> in their own rights sought to bring a greater
            presence to the <span className="text-red-500">Asian voice</span> and to create a lasting imapct at the University of South 
            Florida at the Tampa Bay Area. 
          </p>
          <p className="leading-relaxed">
            On <span className="text-red-500">November 9th</span>, <span className="text-red-500">2008</span>, these 10 men <span className="text-red-500">emerged</span> as <span className="text-red-500">Pi Delta Psi Fraternity, Inc.</span> at the 
            University of South Florida. Guided by the 4 pillars of <span className="text-red-500">Academic Achievement</span>, <span className="text-red-500">Cultural
            Awareness</span>, <span className="text-red-500">Righteousness</span>, and <span className="text-red-500">Friendship/Loyalty</span>, this eternal <span className="text-red-500">brotherhood</span> continues to <span className="text-red-500">empower </span>
            its members to break stereotypes, fight discrimination, celebrate diversity, and set
            new standards for academic excellence. They sought to create a space where individuals could not only foster leadership but also support one 
            another in a collective mission to promote unity, diversity, and academic excellence within the university community.
          </p>
          <p className="leading-relaxed">
            Since its inception, <span className="text-red-500">Pi Delta Psi</span> at the University of South Florida aims to be steadfast
            in adhering to its morals and educating its members and the student body to help <span className="text-red-500">maximize </span>
             the potential of a South Florida Bull. Through a legacy of integrity and achievement, <span className="text-red-500">Pi Delta Psi </span>
            aims to leave a lasting mark on the university and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterHistory;
