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
            <p className="leading-relaxed mb-4">
              We understand that Greek Life can be a controversial and somewhat clandestine community.
            </p>
            <p className="leading-relaxed mb-4">
             Coupled with common misconceptions and the academic vigor of higher education, we can expect parents to be concerned, and we welcome communication with parents to address those concern.
            </p>
            <p className="leading-relaxed ,b-4">
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
            <p className="leading-relaxed mb-4">
             Hazing is a charged and stigmatized word within our community. We are strongly against hazing. It describes a practice that puts our new members in unnecessary mental and physical harm.
             Regardless of the many definitions and standards of what is considered “hazing”, the National Board takes any hazing allegations very seriously, and will respond appropriately.
            </p>
            <p className="leading-relaxed font-bold mb-4">
              We are strongly against hazing. It describes a practice that puts our new members in unnecessary mental and physical harm.
            </p>
            <p className="leading-relaxed mb-4">
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
            <h2 className="text-2xl font-bold mb-2 text-center">Alcohol</h2>
            <p className="leading-relaxed">
              Pi Delta Psi prohibits all members from consuming alcohol while wearing fraternity attire, while participating in official fraternity events,
              and while attending any in-take education program. Any New Member found consuming alcohol during his process will be automatically ejected from the education process. 
              Pi Delta Psi seeks to uphold the highest standards of professionalism and recognizes that alcohol has no place within our organization’s curriculum. Violation of this 
              policy has resulted in chapter suspension, the withdrawal of a chapter’s charter, or the termination of an individual’s membership.
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center">Academics</h2>
            <p className="leading-relaxed mb-4">
              Academic Achievement is our organization’s first pillar. We do maintain a minimum GPA requirement for students seeking membership 
              and for brothers wishing to remain active. Members who fail to maintain our academic standards are restricted from all fraternity activity.
            </p>
            <p className="leading-relaxed">
            Additionally, our National Board has partnered with Princeton Review to offer graduate school workshops and product discounts for members seeking 
              higher education. We utilize our expanding network of alumni that can aid undergraduate members in their academic and professional goals.
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
