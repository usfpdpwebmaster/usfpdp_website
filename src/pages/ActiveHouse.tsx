import React from 'react';
import './ActiveHouse.css'; // Import the CSS file

const ActiveHouse = () => {
  const eboard = [
    { position: 'Vice President External, Cultural', name: 'Andy Zheng', image: '/fa25_cab/andy cab.jpeg' },
    { position: 'President', name: 'Julian Legaspi', image: '/fa25_cab/julian cab.JPG' },
    { position: 'Vice President Internal, Historian', name: 'Brandon Nguyen', image: '/fa25_cab/brandon cab.JPG' },
    { position: 'Treasurer, Fundraising, Webmaster, Historian', name: 'Phu Tran', image: '/fa25_cab/phu cab.JPG' },
    { position: 'Recorder, Academic, Recruitment', name: 'Matthew Lim', image: '/fa25_cab/matthew cab.JPG' },
    { position: 'Warden', name: 'Jeff Chen', image: '/fa25_cab/jeff cab.JPG' }
  ];

  const cabinet = [
    { position: 'Fraternity Artist, Risk Management', name: 'Andrew Chau', image: '/fa25_cab/chau cab.JPG' },
    { position: 'Performance, Recruitment, Multimedia, Webmaster', name: 'Thomveebol Phorn', image: '/fa25_cab/thom cab.JPG' },
    { position: 'Cultural, Performance, Recruitment, Social', name: 'Chandee De Jesus', image: '/fa25_cab/chandee cab.JPG' },
    { position: 'Brother Unity, Alumni, Philanthropy', name: 'Moe Almasri', image: '/fa25_cab/moe cab.JPG' },
    { position: 'Philanthropy, Fraternity Artist, Webmaster', name: 'Michael Nguyen', image: '/fa25_cab/michael cab.JPG' }
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
