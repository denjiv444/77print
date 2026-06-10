import { NavLink } from 'react-router-dom';
import { companyEmail, companyMailUrl, companyPhoneDisplay, companyPhoneHref, companyWhatsAppDisplay, companyWhatsAppUrl } from '../lib/contact';

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/agency' },
  { label: 'Contact', path: '/map' },
];

export function SiteFooter() {
  return (
    <footer className="w-full relative z-40 bg-brand-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About / Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo-transparent.png" 
                alt="77print logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-brand-50 max-w-md leading-relaxed">
              77print — Studio d'infographie à Casablanca. Nous concevons des identités visuelles et des supports de communication efficaces et mémorables.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-900/80 hover:bg-brand-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-900/80 hover:bg-brand-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-900/80 hover:bg-brand-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200">
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-brand-50/80 mb-4">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} end={link.path === '/'} className="text-sm text-brand-50 hover:text-white">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-brand-50/80 mb-4">Contact</p>
            <address className="not-italic text-sm text-brand-50/80 space-y-2">
              <div>77 print</div>
              <div>Casablanca, Maroc</div>
              <a href={companyPhoneHref} className="block font-medium text-brand-50 hover:text-white">{companyPhoneDisplay}</a>
              <a href={companyWhatsAppUrl} target="_blank" rel="noreferrer" className="block font-medium text-brand-50 hover:text-white">WhatsApp: {companyWhatsAppDisplay}</a>
              <a href={companyMailUrl} className="block text-brand-50/80 hover:text-brand-50">{companyEmail}</a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-700/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-50/70">© 2026 77print. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-brand-50/70 hover:text-brand-50">Mentions légales</a>
            <a href="#" className="text-brand-50/70 hover:text-brand-50">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
