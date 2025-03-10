import React from 'react';
import './ActiveHouse.css'; // Import the CSS file

const ActiveHouse = () => {
  const eboard = [
    { position: 'Vice President External, Fraternity Artist, Multimedia', name: 'Julian Legaspi', image: '/sp25_cab/kold_cab.jpg' },
    { position: 'President', name: 'Nickolas Chan', image: '/sp25_cab/nick_cab.jpg' },
    { position: 'Vice President Internal', name: 'Jeff Chen', image: '/sp25_cab/jeff_cab.jpg' },
    { position: 'Treasurer', name: 'Chandee De Jesus', image: '/sp25_cab/chandee_cab.jpg' },
    { position: 'Recorder, Academic, Cultural, Historian, Fraternity Artist', name: 'Brandon Nguyen', image: '/sp25_cab/brandon_cab.jpg' },
    { position: 'Warden, Cultural', name: 'Gabriel Rosales', image: '/sp25_cab/gabe_cab.jpg' }
  ];

  const cabinet = [
    { position: 'Performance, Webmaster, Historian, Fraternity Artist', name: 'Thomveebol Phorn', image: '/sp25_cab/thom_cab.jpg' },
    { position: 'Brother Unity, Recruitment, Alumni', name: 'Shawn Nguyen', image: '/sp25_cab/shawn_cab.jpg' },
    { position: 'Fundraising, Recruitment, Fraternity Artist', name: 'Andrew Chau', image: '/sp25_cab/chau_cab.jpg' },
    { position: 'Fundraising', name: 'Aaron Tran', image: '/sp25_cab/aaron_cab.jpg' },
    { position: 'Social', name: 'Muhamad Almasri', image: '/sp25_cab/moe_cab.jpg' },
    { position: 'Philanthropy', name: 'Brian Jiang', image: '/sp25_cab/brian_cab.jpg' },
    { position: 'Risk Management', name: 'Dillon Berger', image: '/sp25_cab/dill_cab.jpg' },
    { position: 'Alumni Advisor', name: 'Edison Lin', image: '/sp25_cab/edison_cab.jpg' },
    { position: 'Quartermaster', name: 'Andy Zheng', image: '/sp25_cab/andy_cab.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white animate-fade-in">
      <div className="container mx-auto px-8 py-12">
        {/* Active House Title */}
        <h1 className="text-6xl font-extrabold text-center mb-16 tracking-wide text-red-500">
          Spring 2025 Active House
        </h1>

        {/* Executive Board Section */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide text-gray-100">
            Executive Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {eboard.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">{member.name}</h3>
                <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl text-center font-Rijusans">{member.position || 'TBA'}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cabinet Board Section */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide text-gray-100">
            Cabinet Board
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center">
            {cabinet.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">{member.name}</h3>
                <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl text-center font-Rijusans">{member.position || 'TBA'}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActiveHouse;
