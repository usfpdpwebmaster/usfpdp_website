import React from 'react';
import './ActiveHouse.css'; // Import the CSS file

const ActiveHouse = () => {
  const eboard = [
    { position: 'President', name: 'Nickolas Chan', image: '/sp25_cab/nick_cab.jpg' },
    { position: 'Vice President External', name: 'Julian Legaspi', image: '/sp25_cab/kold_cab.jpg' },
    { position: 'Vice President Internal', name: 'Jeff Chen', image: '/sp25_cab/jeff_cab.jpg' },
    { position: 'Treasurer', name: 'Chandee De Jesus', image: '/sp_25_cab/chandee_cab.jpg' },
    { position: 'Recorder', name: 'Brandon Nguyen', image: '/sp_25_cab/brandon_cab.jpg' },
    { position: 'Warden', name: 'Gabriel Rosales', image: '/sp_25_cab/gabe_cab.jpg' }
  ];

  const cabinet = [
    { position: 'Academic Chair', members: [{ name: 'Brandon Nguyen', image: '/kutie.JPG' }] },
    { position: 'Performance Chair', members: [
      { name: 'Harrison Hong', image: '/hoosh_cabinet.JPG' },
      { name: 'Thomveebol Phorn', image: '/thom_cabinet.JPG' }
    ]},
    { position: 'Cultural Chair', members: [
      { name: 'Gabriel Rosales', image: '/gabe_cabinet.JPG' },
      { name: 'Brandon Nguyen', image: '/kutie.JPG' }
    ]},
    { position: 'Brother Unity', members: [{ name: 'Shawn Nguyen', image: '/shawn_cabinet.JPG' }] },
    { position: 'Alumni Chair', members: [{ name: 'Shawn Nguyen', image: '/shawn_cabinet.JPG' }] },
    { position: 'Fundraising Chair', members: [
      { name: 'Andrew Chau', image: '/chau_cabinet.JPG' },
      { name: 'Aaron Tran', image: '/aawon_cabinet.JPG' }
    ]},
    { position: 'Recruitment Chair', members: [
      { name: 'Andrew Chau', image: '/chau_cabinet.JPG' },
      { name: 'Harrison Hong', image: '/hoosh_cabinet.JPG' },
      { name: 'Shawn Nguyen', image: '/shawn_cabinet.JPG' }
    ]},
    { position: 'Social Chair', members: [{ name: 'Moe', image: '/Asset_3.png' }] },
    { position: 'Philanthropy Chair', members: [{ name: 'Brian Jiang', image: '/Asset_3.png' }] },
    { position: 'Fraternity Artist', members: [
      { name: 'Andrew Chau', image: '/chau_cabinet.JPG' },
      { name: 'Julian Legaspi', image: '/legas3.JPG' }
    ]},
    { position: 'Multimedia Chair', members: [{ name: 'Julian Legaspi', image: '/legas3.JPG' }] },
    { position: 'Webmaster', members: [{ name: 'Thomveebol Phorn', image: '/thom_cabinet.JPG' }] },
    { position: 'Historian', members: [
      { name: 'Thomveebol Phorn', image: '/thom_cabinet.JPG' },
      { name: 'Brandon Nguyen', image: '/kutie.JPG' }
    ]},
    { position: 'Risk Management', members: [{ name: 'Dillon Berger', image: '/dillers_cabinet.JPG' }] },
    { position: 'Alumni Advisor', members: [{ name: 'Edison Lin', image: '/Asset_3.png' }] }
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide text-gray-100">Executive Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {eboard.map((position, index) => (
              <div
                key={position.position}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">{position.position}</h3>
                <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={position.image}
                    alt={`${position.position} - ${position.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl text-center font-Rijusans">{position.name || 'TBA'}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cabinet Board Section */}
        <section>
          <h2 className="text-5xl font-bold text-center mb-16 tracking-wide text-gray-100">Cabinet Board</h2>
          <div className="space-y-16">
            {cabinet.map((position) => (
              <div key={position.position} className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 text-center">{position.position}</h3>
                <div
                  className={`grid grid-cols-1 gap-8 ${
                    position.members.length === 2
                      ? 'md:grid-cols-2'
                      : position.members.length >= 3
                      ? 'md:grid-cols-3'
                      : 'justify-items-center'
                  }`}
                >
                  {position.members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <img
                          src={member.image}
                          alt={`${position.position} - ${member.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-4 text-xl text-center font-Rijusans text-gray-100">
                        {member.name || 'TBA'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActiveHouse;
