import { useEffect, useState } from 'react';
import Threads from './reactbits/Threads';
import BlurText from './reactbits/BlurText';
import RotatingText from './reactbits/RotatingText';
import ShinyText from './reactbits/ShinyText';
import { profile } from '../data/content';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from './ui';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = e => setReduced(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* animated background */}
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <Threads
          color={[0.18, 0.83, 0.75]}
          accentColor={[0.51, 0.55, 0.97]}
          amplitude={1.2}
          distance={0.3}
          lineCount={60}
          speed={0.35}
          brightness={1.1}
          opacity={0.9}
          paused={reduced}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--color-ink)_70%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.04] px-3.5 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <ShinyText text={profile.availability} color="#94a0ad" shineColor="#e8edf2" speed={3} className="text-xs sm:text-sm" />
        </div>

        <h1 className="font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          <BlurText text="Vishal Reddy" delay={90} animateBy="words" direction="top" className="block" />
          <BlurText text="Bommineni" delay={90} animateBy="words" direction="top" className="text-gradient block" />
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl text-muted sm:text-2xl md:text-3xl">
          <span>Data scientist working on</span>
          <RotatingText
            texts={profile.rotating}
            mainClassName="overflow-hidden rounded-lg bg-accent/12 px-2.5 py-0.5 text-accent ring-1 ring-accent/30"
            staggerFrom="first"
            staggerDuration={0.02}
            rotationInterval={2600}
            splitBy="characters"
          />
        </div>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.headline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.06] px-5 py-3 text-sm font-medium text-fg backdrop-blur transition hover:border-accent/50 hover:bg-white/[0.1]"
          >
            View projects <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.github, label: 'GitHub', Icon: GithubIcon },
              { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
              { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon }
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-white/[0.06] hover:text-fg"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-dim uppercase sm:flex"
        aria-label="Scroll to About"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-dim to-transparent" />
      </a>
    </section>
  );
}
