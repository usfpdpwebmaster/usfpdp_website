import React, { useState, useRef } from 'react';
import { Menu, Facebook, Instagram } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const hideTimeout = useRef(null);
  const location = useLocation();

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleMouseEnter = (tab) => {
    clearTimeout(hideTimeout.current);
    setActiveTab(tab);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setActiveTab(null);
    }, 250); // Increased delay to make it more seamless
  };

  const menuItems = [
    {
      title: 'Brothers',
      subItems: [
        { title: 'Active House', path: '/brothers/active-house' },
        { title: 'Full Roster', path: '/brothers/full-roster' }
      ]
    },
    {
      title: 'About Us',
      subItems: [
        { title: 'National History', path: '/about/national-history' },
        { title: 'Chapter History', path: '/about/chapter-history' },
        { title: 'Mission Statement', path: '/about/mission-statement' }
      ]
    },
    {
      title: 'Recruitment',
      subItems: [
        { title: 'For Students', path: '/recruitment/for-students' },
        { title: 'For Parents', path: '/recruitment/for-parents' }
      ]
    },
    {
      title: 'Contact Us',
      path: '/contact'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/PDPsi_small.png" 
                alt="Pi Delta Psi Logo" 
                className="h-14 w-14"
              />
              <span className="layout-text">USF Pi Delta Psi</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.title} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleTabClick(item.title)}
                >
                  {item.path ? (
                    <Link to={item.path} className="hover:text-red-500 py-2 cursor-pointer text-bemirs">
                      {item.title}
                    </Link>
                  ) : (
                    <span className="hover:text-red-500 py-2 cursor-pointer text-bemirs">
                      {item.title}
                    </span>
                  )}
                  {activeTab === item.title && item.subItems && (
                    <div 
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                      onMouseEnter={() => clearTimeout(hideTimeout.current)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-black hover:bg-red-50 hover:text-red-500"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          {menuItems.map((item) => (
            <div key={item.title}>
              <Link to={item.path || '#'} className="block px-4 py-2 hover:bg-red-900 cursor-pointer">
                {item.title}
              </Link>
              {item.subItems && (
                <div className="bg-zinc-900">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="block px-8 py-2 text-sm hover:bg-red-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/usfpdpsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/USFPiDeltaPsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://linktr.ee/usfpdpsi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <img src="/linktree-white-icon.webp" alt="Linktree" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
