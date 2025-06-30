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
            In 2008, ten men who were already <span className="text-red-500">leaders</span> in their own rights came together with a shared vision:
            to amplify the <span className="text-red-500">Asian voice</span> at the University of South 
            Florida and the Tampa Bay Area. Recognizing a lack of culture representation and support, they envisioned a brotherhood that would not only foster 
            unity and pride but also challenging prevailing stereotypes and provide a lasting platform for leadership and growth.  
          </p>
          <p className="leading-relaxed">
            On <span className="text-red-500">November 9th</span>, <span className="text-red-500">2008</span>, these ten men <span className="text-red-500">emerged</span> as <span className="text-red-500">Pi Delta Psi Fraternity, Inc.</span> at the 
            University of South Florida. Guided by the four pillars of <span className="text-red-500">Academic Achievement</span>, <span className="text-red-500">Cultural
            Awareness</span>, <span className="text-red-500">Righteousness</span>, and <span className="text-red-500">Friendship/Loyalty</span>. From its earliest days, This <span className="text-red-500">brotherhood</span> continues to <span className="text-red-500">empower </span>
            its members to rise above expectations, break stereotypes, fight discrimination, celebrate their heritage, and set
            higher for standards themselves and their communities.
            
          </p>
          <p className="leading-relaxed">
            From its founding to the present day, <span className="text-red-500">Pi Delta Psi</span> at the University of South Florida remains committed
            to its core values and dedicated to empowering its members and the student body to help <span className="text-red-500">maximize </span>
             the potential of a South Florida Bull and leave their mark on the world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterHistory;
