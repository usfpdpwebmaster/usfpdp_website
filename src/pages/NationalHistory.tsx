import React from 'react';

const NationalHistory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
          National History
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg font-roboto text-gray-700 space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <img src="/founders1.png" alt="First" className="w-full md:w-1/2 rounded-lg shadow-md mb-8 md:mb-0" />
            <img src="/founders2.png" alt="Second" className="w-full md:w-full rounded-lg shadow-md" />
          </div>
          <p className="leading-relaxed">
            <span className="text-red-500">Pi Delta Psi Fraternity</span> was <span className="text-red-500">founded</span> by eleven men from various backgrounds
            (Chinese, Japanese, Korean, Filipino and Vietnamese). Already established leaders within 
            their own university sponsored cultural organizations, these men assembled to devise a 
            structure that would create an <span className="text-red-500">understanding</span> between the various Asian cultures, build
            <span className="text-red-500"> relationships</span> extending beyond the academic years and most importantly, finding and 
            building an individual's <span className="text-red-500">skill sets</span>. These eleven men envisioned an infrastructure that 
            would continuously motivate and challenge individuals. This infrastructure of a fraternal
            society, which has been around since 1776 would become the building blocks of their 
            endeavor.
          </p>
          <p className="leading-relaxed">
            <span className="text-red-500">Pi Delta Psi</span> was <span className="text-red-500">founded</span> on February 20, 1994 in Binghamton University. 
            The eleven men were responsible for architecting the guiding principles, which 
            have now developed into one of the nation's largest <span className="text-red-500">Asian Cultural Interest Fraternities</span>.
          </p>
          <p className="leading-relaxed">
            Over the next three years (1994-1996), <span className="text-red-500">Pi Delta Psi</span> had expanded into the University at 
            Buffalo and Hofstra University. Every expansion resulted in <span className="text-red-500">positively impacting</span> the school
            and surrounding community. By 2000, <span className="text-red-500">Pi Delta Psi</span> had expanded to 11 prestigious campuses
            spanning four states, setting a record for the <span className="text-red-500">fastest growing organization</span> of its kind 
            since inception.
          </p>
          <p className="leading-relaxed">
            With a fierce growth in the <span className="text-red-500">brotherhood</span> and a strengthened alumni base, the fraternity 
            rebuilt its National Council in 1999, standardizing <span className="text-red-500">Pi Delta Psi</span> throughout all its 
            chapters. Today, the Fraternity continues to grow in size and prestige. What began as a 
            dream for the eleven founders, has become the <span className="text-red-500">work and dedication</span> of hundreds across the
            country and across seas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NationalHistory;
