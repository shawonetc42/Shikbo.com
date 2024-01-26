import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Shikbo() {
  const navigationItems = [
    { label: 'Home', link: '/' },
    { label: 'Program', link: '/program' },
    { label: 'Study', link: '/study' },
    { label: 'Model Test', link: '/model-test' },
    { label: 'New', link: '/new' },
    { label: 'About', link: '/about' },
    { label: 'Learn', link: '/learn' },
    { label: 'Study', link: '/study' },
    { label: 'Login', link: '/login' }
  ];

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href;

    const defaultClasses =
      'font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300';

    const activeClasses = ' text-red-500';
    const hoverClasses = 'hover:bg-red-800 hover:text-white';

    const classes = `${defaultClasses} ${isActive ? activeClasses : hoverClasses}`;

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  };

  return (
    <header className="bg-white text-black">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72feb01f85a253fc1e2c8452d353f27245ec46192c7339bbb3b7dc83ec353f56?apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              alt="Logo"
              className="w-24 h-auto"
            />
          </a>
          {/* Mobile Navigation (Toggle button) */}
          <div className="md:hidden">
            <button className="text-black" onClick={toggleMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation (Dropdown) */}
          {isMobileNavOpen && (
            <div className="md:hidden ">
              <select
                className="w-full p-2 bg-black text-white rounded-md"
                onChange={(e) => window.location.assign(e.target.value)}
                onBlur={() => setMobileNavOpen(false)}
              >
                {navigationItems.map((item, index) => (
                  <option key={index} value={item.link}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigationItems.map((item, index) => (
              <NavLink key={index} href={item.link}>
                {item.label}
              </NavLink>
            ))}
            <a
              href="/login"
              className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Shikbo;
