import React from 'react';

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800">
          Recruitment
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-8 bg-white p-8 rounded-lg shadow-lg font-roboto">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">WHAT IS RECRUITMENT?</h2>
            <p className="leading-relaxed">
              Recruitment, also known as <span className="text-red-500">Rush</span>, is the process through which potential new members learn about <span className="text-red-500">Pi Delta Psi</span> and its values, meet current members, and decide if they want to <span className="text-red-500">join</span> the fraternity. It is an opportunity to understand what the fraternity <span className="text-red-500">stands</span> for and how it can contribute to <span className="text-red-500">personal</span> and <span className="text-red-500">professional</span> growth.
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">HOW DO I JOIN?</h2>
            <p className="leading-relaxed">
              <span className="text-red-500">Rush</span> is a series of free events during the first 2 weeks of school. During <span className="text-red-500">Rush</span>, prospective members 
              are given <span className="text-red-500">opportunities</span> to <span className="text-red-500">meet</span> and <span className="text-red-500">interact</span> with Brothers of <span className="text-red-500">Pi Delta Psi</span>. These events allow
              prospective members to <span className="text-red-500">learn</span> about the Fraternity and provides deeper <span className="text-red-500">understanding</span> of membership
              in the Greek community. To be up-to-date with our chapter, follow us on <a href="https://www.instagram.com/usfpdpsi/" className="text-red-500 hover:underline">Instagram</a>. 
              We are looking for <span className="text-red-500">leaders</span> who are willing to look past themselves
              and <span className="text-red-500">serve</span> their community. We are looking for those who can follow the <span className="text-red-500">standards</span> set forth 
              within our four pillars: <span className="text-red-500">Academic Achievement</span>, <span className="text-red-500">Cultural Awareness</span>, <span className="text-red-500">Righteousness</span>, and <span className="text-red-500">Friendship/Loyalty</span>.
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">DO I HAVE TO BE ASIAN AMERICAN?</h2>
            <p className="leading-relaxed">
              <span className="text-red-500 font-bold">No</span>, <span className="text-red-500">Pi Delta Psi</span> is open to men of <span className="text-red-500 font-bold">all</span> backgrounds. While the fraternity <span className="text-red-500">promotes</span> Asian American cultural awareness, it values <span className="text-red-500">diversity</span> and <span className="text-red-500">inclusivity</span>. Members from various ethnicities and cultures are welcome to <span className="text-red-500">join</span> and contribute to the fraternity's mission.
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">WHY PI DELTA PSI?</h2>
            <p className="leading-relaxed">
              <span className="text-red-500">Pi Delta Psi</span> offers a unique <span className="text-red-500">brotherhood</span> experience that emphasizes <span className="text-red-500">academic achievement</span>, <span className="text-red-500">cultural awareness</span>, righteousness, friendship, and loyalty. Joining <span className="text-red-500">Pi Delta Psi</span> provides <span className="text-red-500">opportunities</span> for leadership development, community service, and <span className="text-red-500">lifelong</span> friendships. The fraternity's network of alumni and active members can also offer valuable <span className="text-red-500">support</span> and <span className="text-red-500">mentorship</span>.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-xl font-bold">
              Interested in becoming a brother of <span className="text-red-500">Pi Delta Psi</span>? <a href="https://docs.google.com/forms/d/18e9e_0IIo0OqEQf23wjr3Z6inZrCETbslvEUdiH6854/viewform?edit_requested=true" className="text-red-500 hover:underline">Click here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;