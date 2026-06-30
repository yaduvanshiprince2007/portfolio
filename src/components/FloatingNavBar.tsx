import { useState, useEffect, type JSX } from 'react';
import {
  FaLinkedin, FaWhatsapp, FaDownload, FaHome, FaBriefcase, FaCode, FaProjectDiagram,
  FaAddressCard, FaBars, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaFileAlt
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import profileimg from '../assets/profileImg.jpeg';
import { RESUME, URLS, RESUME_DATA } from '../AppConstraint';

export interface NavItem {
  showText: string;
  url: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { showText: 'Home', url: '/', icon: <FaHome /> },
  { showText: 'Profession', url: '/work', icon: <FaBriefcase /> },
  { showText: 'Skills', url: '/skills', icon: <FaCode /> },
  { showText: 'Projects', url: '/projects', icon: <FaProjectDiagram /> },
  { showText: 'Resume', url: '/resume', icon: <FaFileAlt /> },
  { showText: 'About', url: '/aboutme', icon: <FaAddressCard /> },
];

const user = {
  name: RESUME_DATA.personal.name,
  title: RESUME_DATA.personal.subtitle || RESUME_DATA.personal.title,
  email: RESUME_DATA.personal.email,
  phone: RESUME_DATA.personal.phone,
  location: RESUME_DATA.personal.location,
  imageUrl: profileimg,
  resumeUrl: RESUME.DOCX,
  linkedIn: URLS.LINKEDIN,
  whatsapp: URLS.WHATSAPP,
};

export const TopNavBar = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCall = () => window.open(`tel:${user.phone.replace(/\D/g, '')}`);
  const handleWhatsApp = () => window.open(user.whatsapp, '_blank');
  const handleEmail = () => window.open(`mailto:${user.email}`);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full min-w-2xl max-w-4xl px-4 print:hidden">
      <div className="bg-white/90 backdrop-blur-xl shadow-xl border border-purple-50 rounded-2xl px-4 py-2 flex justify-between items-center transition-all duration-300">
        {/* Mobile menu button */}
        {isMobile && (
          <>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 p-2 rounded-full hover:bg-purple-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FaBars size={20} className="text-purple-700" />
            </button>

            {!showMobileMenu && navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`flex items-center text-gray-700 text-base font-medium px-3 py-2 rounded-xl transition-all duration-300
                  ${location.pathname === item.url ? 'text-purple-700 bg-purple-50 shadow-sm border border-purple-100/50' : 'hover:bg-purple-50 hover:text-purple-600'}`}
              >
                <span className="text-lg">{item.icon}</span>
              </Link>
            ))}
          </>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 flex items-center
                  ${location.pathname === item.url
                    ? 'text-purple-700 bg-purple-50 shadow-sm border border-purple-100/50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'}`}
              >
                <span className="mr-2 text-base">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Drawer */}
        {isMobile && showMobileMenu && (
          <div className="absolute top-16 left-0 w-full bg-white/95 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-2xl py-3 z-50 border border-purple-50">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`flex items-center text-base font-medium px-5 py-3 transition-colors duration-200 rounded-xl mx-2
                  ${location.pathname === item.url
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50/50'}`}
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="mr-3 text-lg text-purple-500">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Profile Section */}
        <div className="relative">
          <div className="relative">
            <button
              onClick={() => setShowUserDetails(!showUserDetails)}
              onMouseEnter={() => !isMobile && setShowUserDetails(true)}
              className={`w-10 h-10 rounded-xl border-2 overflow-hidden transition-all duration-300 shadow-sm
                ${showUserDetails ? 'border-purple-500 scale-105' : 'border-gray-200 hover:border-purple-500 hover:scale-105'}`}
              aria-label="User profile"
            >
              <img src={user.imageUrl} alt="User profile" className="w-full h-full object-cover" />
            </button>

            <div
              className={`absolute right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple-100 transition-all duration-300
                ${showUserDetails ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
              onMouseLeave={() => !isMobile && setShowUserDetails(false)}
            >
              <button
                onClick={() => setShowUserDetails(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors z-10"
                aria-label="Close profile"
              >
                <FaTimes className="text-purple-500" />
              </button>

              <div className="flex items-center space-x-4 p-5 border-b border-purple-50 bg-gradient-to-r from-purple-50/50 to-indigo-50/30">
                <img src={user.imageUrl} alt="User Detail" className="w-14 h-14 rounded-xl border-2 border-white shadow-md object-cover" />
                <div>
                  <h3 className="font-bold text-gray-950 text-base">{user.name}</h3>
                  <p className="text-purple-700 text-xs font-semibold">{user.title}</p>
                </div>
              </div>

              <div className="p-5 space-y-3.5">
                <div className="flex items-center text-gray-700 group cursor-pointer" onClick={handleEmail}>
                  <FaEnvelope className="text-purple-500 mr-3 min-w-[16px] group-hover:scale-110 transition-transform" />
                  <span className="text-sm truncate group-hover:text-purple-700 font-medium">{user.email}</span>
                </div>
                <div className="flex items-center text-gray-700 group cursor-pointer" onClick={handleCall}>
                  <FaPhone className="text-purple-500 mr-3 min-w-[16px] group-hover:scale-110 transition-transform" />
                  <span className="text-sm group-hover:text-purple-700 font-medium">{user.phone}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="text-purple-500 mr-3 min-w-[16px]" />
                  <span className="text-sm font-medium">{user.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 px-5 pb-4">
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center space-x-2 bg-purple-50 hover:bg-purple-100 text-purple-700 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  <FaPhone className="text-green-500" />
                  <span>Call</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  <FaWhatsapp className="text-green-500" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="flex justify-between items-center p-5 border-t border-purple-50 bg-gray-50/50">
                <a
                  href={user.resumeUrl}
                  download
                  className="flex items-center space-x-2 text-purple-700 hover:text-purple-800 hover:scale-105 transition-all text-sm font-bold"
                >
                  <FaDownload />
                  <span>Resume</span>
                </a>
                <div className="flex space-x-3.5">
                  <a
                    href={user.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-all"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <button
                    onClick={handleEmail}
                    className="text-gray-600 hover:text-purple-600 hover:scale-110 transition-all"
                    title="Email"
                  >
                    <FaEnvelope size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
