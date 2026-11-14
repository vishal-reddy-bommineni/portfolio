import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { DownloadIcon } from './ui';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export function ResumeMenu({ align = 'right', className = '' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  if (profile.resumes.length === 1) {
    return (
      <a
        href={profile.resumes[0].file}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition hover:bg-[#5eead4] ${className}`}
      >
        <DownloadIcon /> Resume
      </a>
    );
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition hover:bg-[#5eead4]"
      >
        <DownloadIcon /> Resume
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute top-full z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-line bg-panel-2/95 p-1.5 shadow-2xl backdrop-blur-xl ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {profile.resumes.map(r => (
            <a
              key={r.file}
              role="menuitem"
              href={r.file}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-fg transition hover:bg-white/[0.06]"
            >
              {r.label}
              <span className="font-mono text-[10px] text-dim">PDF</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || menu ? 'border-line bg-ink/75 shadow-lg backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
        aria-label="Main"
      >
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setMenu(false)} aria-label={`${profile.name}, back to top`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent">
            VR
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm transition ${
                  active === l.href.slice(1) ? 'bg-white/[0.07] text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ResumeMenu />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg md:hidden"
            onClick={() => setMenu(m => !m)}
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition ${menu ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-4 bg-current transition ${menu ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition ${menu ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {menu && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-ink/90 p-2 backdrop-blur-xl md:hidden">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenu(false)}
              className="block rounded-2xl px-4 py-3 text-base text-fg hover:bg-white/[0.06]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
