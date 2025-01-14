import React, { useEffect } from 'react';
import { GraduationCap, Globe, Scale, HeartHandshake, Award, Heart, Instagram } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: <GraduationCap className="w-16 h-16 text-red-500" />,
      title: "Academic Achievement",
      description: "Striving for excellence in education and personal growth"
    },
    {
      icon: (
        <div className="relative">
          <Globe className="w-16 h-16 text-red-500" />
          <Heart className="w-8 h-8 text-red-400 absolute -right-1 -bottom-1 animate-pulse" />
        </div>
      ),
      title: "Cultural Awareness",
      description: "Embracing and promoting Asian American culture and heritage"
    },
    {
      icon: <Scale className="w-16 h-16 text-red-500" />,
      title: "Righteousness",
      description: "Upholding moral integrity and ethical principles in all actions"
    },
    {
      icon: (
        <div className="relative">
          <HeartHandshake className="w-16 h-16 text-red-500" />
          <Award className="w-8 h-8 text-red-400 absolute -right-1 -bottom-1" />
        </div>
      ),
      title: "Friendship/Loyalty",
      description: "Fostering lifelong bonds and unwavering brotherhood"
    }
  ];

  const instagramPosts = [
    {
      url: 'https://www.instagram.com/p/DESwh02R3eK/',
      image: '/jeff_bots.jpg',
    },
    {
      url: 'https://www.instagram.com/p/DEkouhLxq8W/',
      embed: true,
    },
    {
      url: 'https://www.instagram.com/p/DEpxUd6Rx4p/?img_index=2',
      embed: true,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: 'url("/Asset_3.png")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-globe text-6xl text-white font-bold mb-6 animate-slideInLeft">
              Pi Delta Psi
            </h1>
            <p className="font-globe text-xl md:text-4xl text-red-500 font-bold mb-8 animate-slideInRight">
              University of South Florida - Chi Chapter
            </p>
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-reveal">Our Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center p-6 rounded-lg scroll-reveal hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex justify-center">{pillar.icon}</div>
                <h3 className="text-l font-bold mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-reveal">Latest Updates</h2>
          <div className="flex flex-wrap justify-center gap-16">
            {instagramPosts.map((post, index) => (
              <div key={index} className="scroll-reveal w-[350px] bg-white rounded-lg shadow-lg">
                <div className="instagram-embed-container">
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '350px',
                      margin: '0 auto'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `
                        <blockquote 
                          class="instagram-media" 
                          data-instgrm-captioned
                          data-instgrm-permalink="${post.url}"
                          data-instgrm-version="14" 
                          style="
                            background:#FFF; 
                            border:0; 
                            border-radius:3px; 
                            margin: 0;
                            padding:0;
                            width: 100%;
                          "
                        >
                          <div style="padding:16px;">
                            <a 
                              href="${post.url}" 
                              style="
                                background:#FFFFFF; 
                                line-height:0; 
                                padding:0 0; 
                                text-align:center; 
                                text-decoration:none; 
                                width:100%;
                              " 
                              target="_blank"
                            >
                            </a>
                          </div>
                        </blockquote>
                      `,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 scroll-reveal">Join The Brotherhood</h2>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="scroll-reveal">
              <a 
                href="https://www.instagram.com/usfpdpsi/" 
                className="inline-flex items-center space-x-2 text-xl hover:text-red-500 transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
            <div className="scroll-reveal">
              <p className="text-xl mb-6">Ready to become part of something greater?</p>
              <a 
                href="https://docs.google.com/forms/d/18e9e_0IIo0OqEQf23wjr3Z6inZrCETbslvEUdiH6854/viewform?edit_requested=true&pli=1" 
                className="inline-block bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Rush ΠΔΨ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
