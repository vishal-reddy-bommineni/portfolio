import { useMemo, useState } from 'react';
import CountUp from './reactbits/CountUp';
import SpotlightCard from './reactbits/SpotlightCard';
import { about, education, experience, profile, projectFilters, projects, skills, stats } from '../data/content';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, Reveal, SectionHeading, Tag } from './ui';

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
);

/* ---------------------------------------------------------------- stats */
export function Stats() {
  return (
    <section aria-label="Highlights" className="relative border-y border-line bg-panel/60">
      <Container className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="py-9 pr-4 sm:py-11">
              <div className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                <CountUp to={s.value} separator={s.separator || ''} suffix={s.suffix || ''} duration={1.8} />
              </div>
              <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted sm:text-sm">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- about */
export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading index="01" eyebrow="About" title="Careful analysis on data that matters." />
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map(p => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 space-y-4">
              {education.map(e => (
                <div key={e.school} className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-display font-semibold text-fg">{e.school}</p>
                    <p className="text-sm text-muted">{e.degree}</p>
                  </div>
                  <p className="font-mono text-xs text-dim">{e.period}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {about.focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <SpotlightCard className="p-6" spotlightColor="rgba(45, 212, 191, 0.22)" style={{ '--spotlight-card-surface': '#0c1016' }}>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-fg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- experience */
export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        <SectionHeading index="02" eyebrow="Experience" title="Where I have done the work." />
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <li key={job.org} className="relative">
              <span className="absolute top-8 -left-[29px] h-3 w-3 rounded-full border-2 border-accent bg-ink sm:-left-[45px]" aria-hidden="true" />
              <Reveal delay={i * 0.08}>
                <SpotlightCard className="p-6 sm:p-8" spotlightColor="rgba(129, 140, 248, 0.2)" style={{ '--spotlight-card-surface': '#0c1016' }}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{job.role}</h3>
                      <p className="mt-1 text-sm text-muted">
                        <span className="text-accent">{job.org}</span> · {job.place}
                      </p>
                    </div>
                    <p className="font-mono text-xs whitespace-nowrap text-dim sm:pt-2">{job.period}</p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {job.points.map(p => (
                      <li key={p.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map(t => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- projects */
function ProjectCard({ p, large }) {
  return (
    <SpotlightCard
      className="group flex h-full flex-col"
      spotlightColor="rgba(45, 212, 191, 0.2)"
      style={{ '--spotlight-card-surface': '#0c1016' }}
    >
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        className={`relative block overflow-hidden border-b border-line bg-panel-2 ${large ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}
        aria-label={`${p.title} on GitHub`}
      >
        <img
          src={p.image}
          alt={`Screenshot of ${p.title}`}
          loading="lazy"
          className={`h-full w-full ${p.imageFit === 'contain' ? 'bg-white object-contain p-4' : 'object-cover object-top'} opacity-85 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1016] via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {p.categories.map(c => (
            <span key={c} className="rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] text-fg backdrop-blur">
              {c}
            </span>
          ))}
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{p.title}</h3>
        <p className="mt-1 text-sm text-accent">{p.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{p.summary}</p>

        <dl className={`mt-6 grid gap-3 ${large ? 'sm:grid-cols-3' : ''}`}>
          {p.highlights.map(h => (
            <div key={h.label} className="rounded-2xl border border-line bg-white/[0.02] p-3.5">
              <dt className="font-display text-xl font-semibold text-fg">{h.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted">{h.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.tech.map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-fg transition hover:border-accent/50 hover:bg-white/[0.05]"
          >
            <GithubIcon /> Code &amp; write-up
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm text-accent ring-1 ring-accent/30 transition hover:bg-accent/25"
            >
              Live demo <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter))),
    [filter]
  );
  const [first, ...rest] = shown;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Real data, honest evaluation."
          intro="Each project uses real public data, beats a simple baseline and documents what broke. Full code, results and write-ups are on GitHub."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map(f => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === f ? 'bg-fg text-ink' : 'border border-line text-muted hover:border-white/20 hover:text-fg'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {first && (
          <Reveal key={`${filter}-first`}>
            <ProjectCard p={first} large />
          </Reveal>
        )}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={`${filter}-${p.slug}`} delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- skills */
export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        <SectionHeading index="04" eyebrow="Skills" title="What I work with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-panel/70 p-6">
                <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map(s => (
                    <span key={s} className="rounded-xl border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-fg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- contact + footer */
export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <p className="relative font-mono text-xs tracking-[0.2em] text-accent uppercase">
              <span className="text-dim">05 /</span> Contact
            </p>
            <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              Think I&rsquo;d be a great fit for your team?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              I am looking for full-time roles starting after December 2026. The fastest way to reach me is email.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink transition hover:bg-white"
              >
                <MailIcon /> Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-fg transition hover:border-accent/50"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-fg transition hover:border-accent/50"
              >
                <GithubIcon /> GitHub
              </a>
            </div>
            <p className="relative mt-6 font-mono text-xs break-all text-dim">{profile.email}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-xs text-dim sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>
          Built with React, Vite and Tailwind · animations from{' '}
          <a href="https://reactbits.dev" target="_blank" rel="noreferrer" className="underline decoration-dim underline-offset-4 hover:text-muted">
            React Bits
          </a>
        </p>
      </Container>
    </footer>
  );
}
