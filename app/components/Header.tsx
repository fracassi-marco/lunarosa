'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    
    if (isHome) {
      // Se siamo sulla home, fai scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se siamo su un'altra pagina, vai alla home con l'anchor
      window.location.href = `/#${section}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900 shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-rose-200 hover:text-rose-300 transition-colors group">
            <img 
              src="/favicon.svg" 
              alt="Luna Rosa Academy Logo" 
              className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110"
            />
            <span>Luna Rosa Academy</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-rose-100 focus:outline-none p-2 bg-rose-500/30 rounded-lg hover:bg-rose-500/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-rose-200">
            <li>
              <button onClick={() => handleNavigation('home')} className="hover:text-rose-300 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('servizi')} className="hover:text-rose-300 transition-colors">
                Servizi
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('fondatrici')} className="hover:text-rose-300 transition-colors">
                Fondatrici
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('contatti')} className="hover:text-rose-300 transition-colors">
                Contatti
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-purple-950/95 backdrop-blur-md pt-20">
          <div className="container mx-auto px-6 h-full">
            <ul className="flex flex-col space-y-6 pt-8">
              <li>
                <button 
                  onClick={() => handleNavigation('home')} 
                  className="w-full text-left text-2xl font-semibold text-rose-100 py-4 px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02]"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('servizi')} 
                  className="w-full text-left text-2xl font-semibold text-rose-100 py-4 px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02]"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('fondatrici')} 
                  className="w-full text-left text-2xl font-semibold text-rose-100 py-4 px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02]"
                >
                  Fondatrici
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contatti')} 
                  className="w-full text-left text-2xl font-semibold text-rose-100 py-4 px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02]"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
