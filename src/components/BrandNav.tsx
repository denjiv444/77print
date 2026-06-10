import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { companyPhoneDisplay } from '../lib/contact';

const links = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/agency' },
  { label: 'Contact', path: '/map' },
];

export function BrandNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-brand-800/20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5 md:px-12">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo-transparent.png" alt="77print" className="h-11 w-auto object-contain" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-0.5 ${
                  isActive ? 'text-brand-800' : 'text-brand-800 hover:text-brand-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-800 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/map"
            className="hidden md:flex items-center gap-2 rounded-full bg-brand-800 px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            {companyPhoneDisplay}
            <div className="rounded-full border border-white/70 p-0.5">
              <Phone size={13} strokeWidth={2.5} />
            </div>
          </NavLink>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-800 hover:text-brand-800 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-brand-800/20 py-6 px-6 space-y-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-black uppercase tracking-tight transition-colors ${isActive ? 'text-brand-800' : 'text-brand-800 hover:text-brand-800'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/map"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-bold text-white mt-4"
          >
            {companyPhoneDisplay} <ArrowUpRight size={14} />
          </NavLink>
        </div>
      )}
    </header>
  );
}
