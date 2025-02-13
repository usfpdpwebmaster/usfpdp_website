import React from 'react';
import './ActiveHouse.css'; // Import the CSS file

const ActiveHouse = () => {
  const eboard = [
    { position: 'President', name: 'Nickolas Chan', image: '/sp25_cab/nick_cab.jpg' },
    { position: 'Vice President External', name: 'Julian Legaspi', image: '/sp25_cab/kold_cab.jpg' },
    { position: 'Vice President Internal', name: 'Jeff Chen', image: '/sp25_cab/jeff_cab.jpg' },
    { position: 'Treasurer', name: 'Chandee De Jesus', image: '/sp25_cab/chandee_cab.jpg' },
    { position: 'Recorder', name: 'Brandon Nguyen', image: '/sp25_cab/brandon_cab.jpg' },
    { position: 'Warden', name: 'Gabriel Rosales', image: '/sp25_cab/gabe_cab.jpg' }
  ];

  const activeHouse = [
    { name: 'Andrew Chau', image: '/active_house/andrew_chau.jpg' },
    { name: 'Brandon Nguyen', image: '/active_house/brandon_nguyen.jpg' },
    { name: 'Harrison Hong', image: '/active_house/harrison_hong.jpg' },
    { name: 'Julian Legaspi', image: '/active_house/julian_legaspi.jpg' },
    { name: 'Thomveebol Phorn', image: '/active_house/thomveebol_phorn.jpg' },
    { name: 'Gabriel Rosales', image: '/active_house/gabriel_rosales.jpg' },
    { name: 'Shawn Nguyen', image: '/active_house/shawn_nguyen.jpg' },
    { name: 'Moe', image: '/active_house/moe.jpg' },
    { name: 'Brian Jiang', image: '/active_house/brian_jiang.jpg' },
    { name: 'Dillon Berger', image: '/active_house/dillon_berger.jpg' },
    { name: 'Edison Lin', image: '/active_house/edison_lin.jpg' }
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
            {eboard.map((position, index) => (
              <div
                key={position.name}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">{position.name}</h3>
                <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={position.image}
                    alt={`${position.position} - ${position.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl text-center font-Rijusans">{position.position || 'TBA'}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Active House Members Section (Newly Styled) */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide text-gray-100">
            Active House Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {activeHouse.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl text-center font-Rijusans">{member.name || 'TBA'}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActiveHouse;
