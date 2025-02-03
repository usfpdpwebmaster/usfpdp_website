import React from 'react';

const Parents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 text-gray-800">
          Recruitment
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-8 bg-white p-8 rounded-lg shadow-lg font-roboto">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">Dear Parents</h2>
            <p className="leading-relaxed">
              We understand that Greek Life can be a controversial and somewhat clandestine community.
            </p>
            <p className="leading-relaxed">
             Coupled with common misconceptions and the academic vigor of higher education, we can expect parents to be concerned, and we welcome communication with parents to address those concern.
            </p>
            <p className="leading-relaxed">
             At Pi Delta Psi, we strive to establish a transparent organization that will allow students and their parents to make the right choice.
            </p>
            <p className="leading-relaxed">
              You are welcome to contact us via usfpdpsi.president@gmail.com or on <a href="https://www.instagram.com/usfpdpsi/" className="text-red-500 hover:underline">Instagram</a>. 
              Additionally, the information located below will provide our position on common issues.
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">The Intake Process</h2>
            <p className="leading-relaxed">
             Hazing is a charged and stigmatized word within our community. We are strongly against hazing. It describes a practice that puts our new members in unnecessary mental and physical harm.
             Regardless of the many definitions and standards of what is considered “hazing”, the National Board takes any hazing allegations very seriously, and will respond appropriately.
            </p>
            <p className="leading-relaxed font-bold">
              We are strongly against hazing. It describes a practice that puts our new members in unnecessary mental and physical harm.
            </p>
            <p className="leading-relaxed">
             Pi Delta Psi‘s intake process is rooted in a curriculum that familiarizes our members with Asian American history, contemporary social issues, and role models. 
              It aims to help our members establish a coherent identity and develop relevant leadership skills. Our process encourages a mentor-mentee relationship between 
              new members and the brothers in developing an understanding of the personal Asian American identity.
            </p>
            <p className="leading-relaxed">
            While we do keep our ritual practices a secret, our general in-take process is outlined and available upon request. We also maintain a risk management document 
              that outlines restricted practices and subsequent consequences. Both documents may be obtained through our National Board.
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

export default Parents;
