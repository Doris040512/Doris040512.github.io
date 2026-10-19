import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Github,
  Linkedin,
  Sun,
  Moon,
  Menu,
  X,
  Search,
  Plus,
  Check,
} from "lucide-react";
import {
  profile,
  projects,
  categories,
  education,
  skills,
  type Project,
} from "./data/content";
function useRoute() {
  const [route, setRoute] = useState(location.hash.slice(1) || "/");
  useEffect(() => {
    const change = () => {
      setRoute(location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  return route;
}
function Visual({ project: p }: { project: Project }) {
  if (p.visual === "flu" || p.visual === "feedback") {
    const flu = p.visual === "flu";
    return (
      <figure className="visual actual-preview">
        <img
          src={
            flu
              ? "/images/influenza-models.png"
              : "/images/feedback-workspace.png"
          }
          alt={
            flu
              ? "Project-generated plot comparing observed influenza-like illness with fitted model predictions"
              : "Actual manual feedback workspace with sample inputs, rubric criteria, and instructor feedback fields"
          }
          loading="lazy"
        />
        <figcaption>
          {flu
            ? "ACTUAL PROJECT OUTPUT · AMATH-383"
            : "ACTUAL PROJECT SCREENSHOT · MANUAL WORKSPACE"}
        </figcaption>
      </figure>
    );
  }
  return (
    <div
      className={`visual ${p.visual}`}
      aria-label={`Conceptual illustration for ${p.name}`}
    >
      <div className="visual-top">
        <span>
          {p.visual === "context"
            ? "POSITIONAL RETRIEVAL"
            : p.visual === "interval"
              ? "PREDICTION / UNCERTAINTY"
              : p.visual === "retail"
                ? "RETAIL / SEASONALITY"
                : p.visual === "feedback"
                  ? "ANALYZE → REVIEW → REVISE"
                  : p.visual === "flu"
                    ? "OBSERVE / COMPARE"
                    : "EVIDENCE / INQUIRY"}
        </span>
        <span>↗</span>
      </div>
      {p.visual === "context" ? (
        <div className="context-art">
          {["BEGINNING", "MIDDLE", "END"].map((s, i) => (
            <div key={s}>
              <span>{s}</span>
              <div className="document-lines">
                {Array.from({ length: 9 }, (_, j) => (
                  <i
                    className={j === [1, 4, 7][i] ? "highlight" : ""}
                    key={j}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : p.visual === "interval" ? (
        <div className="interval-art">
          {[35, 64, 43, 85, 53, 71, 45].map((v, i) => (
            <div key={i} style={{ width: `${v}%` }}>
              <i />
            </div>
          ))}
          <span>ESTIMATE + UNCERTAINTY</span>
        </div>
      ) : p.visual === "feedback" ? (
        <div className="feedback-art">
          <div>
            <span>01 / SOURCE</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <ArrowRight size={24} />
          <div>
            <span>02 / REVIEW</span>
            <p>
              <Check size={15} /> Strengths
            </p>
            <p>
              <Plus size={15} /> Improvements
            </p>
            <p>
              <ArrowRight size={15} /> Next steps
            </p>
          </div>
        </div>
      ) : (
        <div className="chart-art">
          {[28, 42, 38, 56, 45, 36, 51, 60, 52, 78, 94, 68].map((v, i) => (
            <i key={i} style={{ height: `${v}%` }} />
          ))}
          <span>
            {p.visual === "retail"
              ? "JAN — DEC / PATTERNS OVER TIME"
              : "MODEL COMPARISON / CONCEPT"}
          </span>
        </div>
      )}
      <span className="illustration-label">
        CONCEPTUAL ILLUSTRATION · NOT A PRODUCT SCREENSHOT
      </span>
    </div>
  );
}
function ProjectCard({
  project: p,
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  return (
    <article className={`project-card ${wide ? "wide" : ""}`}>
      <a
        className="preview-link"
        href={`#/projects/${p.id}`}
        aria-label={`Read ${p.name}`}
      >
        <Visual project={p} />
      </a>
      <div className="project-copy">
        <p className="eyebrow">{p.eyebrow}</p>
        <h3>
          <a href={`#/projects/${p.id}`}>
            {p.name}
            <ArrowUpRight size={22} />
          </a>
        </h3>
        <p>{p.description}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <a className="text-link" href={`#/projects/${p.id}`}>
          Read case study <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}
function Home() {
  return (
    <>
      <section className="academic-hero">
        <div className="wrap">
          <p className="hero-kicker">
            STATISTICS · APPLIED AI · LEARNING SCIENCES
          </p>
          <h1>Doris Wang</h1>
          <p className="hero-subtitle">
            Statistical thinking. Human-centered technology.
          </p>
          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={21} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={21} />
            </a>
            <a href="#/projects" aria-label="Explore my work">
              <ArrowUpRight size={23} />
            </a>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">FOCUS</p>
            <h2>
              Data, AI &amp;
              <br />
              human-centered systems
            </h2>
            <div className="focus-details">
              <p className="eyebrow">ACADEMIC BACKGROUND</p>
              <p>Statistics · University of Washington</p>
              <p>
                Learning Sciences and Technologies · University of Pennsylvania
              </p>
            </div>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I’m Doris, working at the intersection of statistics, AI, and the
              ways people learn and make decisions.
            </p>
            <p>
              My background connects Statistics at the University of Washington
              with graduate studies in Learning Sciences and Technologies at the
              University of Pennsylvania. I’m interested in the space between a
              technically sound solution and one that is useful to people.
            </p>
            <p>
              Across my projects, I compare models, examine uncertainty, and
              turn analysis into something others can inspect and understand.
              Learning Sciences adds a human perspective to that technical work.
            </p>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section wrap" id="background">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BACKGROUND</p>
            <h2>Education</h2>
          </div>
          <p>
            A foundation in quantitative reasoning, with a growing focus on
            human-centered applications.
          </p>
        </div>
        <div className="timeline">
          {education.map((e, i) => (
            <article key={e.school}>
              <span className="timeline-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">EDUCATION</p>
                <h3>{e.school}</h3>
                <p className="program">{e.program}</p>
                <p>{e.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESEARCH &amp; APPLICATIONS</p>
            <h2>Selected projects</h2>
          </div>
          <p>
            From evaluating language models to making uncertainty visible. A
            selection of research, analysis, and applied experiments.
          </p>
        </div>
        <div className="project-grid academic-projects">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard project={p} key={p.id} wide={i === 0} />
            ))}
        </div>
        <a href="#/projects" className="button secondary">
          Explore all {projects.length} projects <ArrowRight size={17} />
        </a>
      </section>
      <section className="skills-section">
        <div className="section wrap">
          <p className="eyebrow">TOOLS & METHODS</p>
          <h2>A practical toolkit.</h2>
          <p className="section-intro">
            Technologies and methods documented in my project work. No
            proficiency scores—just the work behind them.
          </p>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap research">
        <p className="eyebrow">RESEARCH INTERESTS</p>
        <h2>
          Reliable models.
          <br />
          Thoughtful applications.
        </h2>
        <div className="interest-list">
          {[
            [
              "01",
              "How reliably do LLMs use the information we give them?",
              "lost-in-the-middle",
            ],
            [
              "02",
              "How should a model communicate what it doesn’t know?",
              "housing-uncertainty",
            ],
            [
              "03",
              "How can AI support learning while preserving human judgment?",
              "feedback-builder",
            ],
          ].map(([n, q, id]) => (
            <a key={n} href={`#/projects/${id}`}>
              <span>{n}</span>
              <h3>{q}</h3>
              <ArrowUpRight size={24} />
            </a>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>
          Get in touch<span>.</span>
        </h2>
        <p>
          I’m interested in opportunities across data, applied AI, analytics,
          and human-centered technology.
        </p>
        <div className="contact-links">
          <a
            className="button primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={18} />
          </a>
          <a
            className="button secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> Explore GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
function Explorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All work");
  const filtered = projects.filter(
    (p) =>
      (category === "All work" || p.category === category) &&
      `${p.name} ${p.description} ${p.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <main id="main" tabIndex={-1} className="section wrap explorer">
      <p className="eyebrow">PROJECT INDEX / {projects.length} PROJECTS</p>
      <h1>
        A closer look
        <br />
        at the work<span>.</span>
      </h1>
      <p className="section-intro">
        Research questions, analytical methods, and useful prototypes. Explore
        by topic or find a particular tool.
      </p>
      <div className="explorer-controls">
        <div className="filters" aria-label="Project categories">
          {categories.map((c) => (
            <button
              aria-pressed={c === category}
              className={c === category ? "selected" : ""}
              key={c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search">
          <Search size={18} />
          <input
            aria-label="Search projects"
            placeholder="Search projects or tools"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>
      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty">
          <h2>No projects found.</h2>
          <p>Try a different topic or technology.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setCategory("All work");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}
function Detail({ project: p }: { project: Project }) {
  return (
    <main id="main" tabIndex={-1} className="section wrap detail">
      <a className="text-link" href="#/projects">
        <ArrowLeft size={16} /> All projects
      </a>
      <p className="eyebrow detail-eyebrow">{p.eyebrow}</p>
      <h1>
        {p.name}
        <span>.</span>
      </h1>
      <p className="detail-intro">{p.description}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="detail-links">
        <a
          className="button primary"
          href={`${profile.github}/${p.repo}`}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> View source materials <ArrowUpRight size={16} />
        </a>
        {p.demo && (
          <a
            className="button secondary"
            href={p.demo}
            target="_blank"
            rel="noreferrer"
          >
            Tableau dashboard <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <Visual project={p} />
      <div className="case-body">
        {[
          ["The question", p.problem],
          ["My role & attribution", p.role],
          ["Approach", p.approach],
          ["Implementation", p.implementation],
          ["Recorded results", p.results],
          ["Limitations & open questions", p.limitations],
          ["What this work demonstrates", p.lessons],
        ].map(([h, t], i) => (
          <section key={h}>
            <span className="eyebrow">0{i + 1}</span>
            <div>
              <h2>{h}</h2>
              <p>{t}</p>
            </div>
          </section>
        ))}
      </div>
      <p className="source-note">
        Source: public repository documentation and artifacts, reviewed October
        19, 2026. Results are attributed to the source project; no experiments
        were rerun for this portfolio.
      </p>
      <a href="#/projects" className="button secondary">
        <ArrowLeft size={16} /> Back to project index
      </a>
    </main>
  );
}
export default function App() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved
        ? saved === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    const m = matchMedia("(prefers-color-scheme: dark)");
    const change = () => {
      if (!localStorage.getItem("theme")) setDark(m.matches);
    };
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    setOpen(false);
    const id = route.split("/")[2];
    document.title =
      route === "/projects"
        ? "Projects — Doris Wang"
        : id
          ? `${projects.find((p) => p.id === id)?.name ?? "Project not found"} — Doris Wang`
          : "Doris Wang — Statistics, Applied AI & Analytics";
  }, [route]);
  const project = projects.find((p) => route === `/projects/${p.id}`);
  const home = route === "/";
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap nav">
          <a className="wordmark" href="#/" aria-label="Doris Wang home">
            doris<span> wang</span>
            <i />
          </a>
          <nav
            className={open ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <a href="#/" aria-current={home ? "page" : undefined}>
              Home
            </a>
            <a
              href="#/projects"
              aria-current={route.startsWith("/projects") ? "page" : undefined}
            >
              Work
            </a>
            <a
              href="#/"
              onClick={() => {
                setOpen(false);
                setTimeout(
                  () => document.getElementById("about")?.scrollIntoView(),
                  30,
                );
              }}
            >
              About
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Let’s connect <ArrowUpRight size={14} />
            </a>
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button"
              aria-label={
                dark ? "Switch to light theme" : "Switch to dark theme"
              }
              onClick={() => {
                setDark(!dark);
                try {
                  localStorage.setItem("theme", !dark ? "dark" : "light");
                } catch {
                  /* Preference remains active for this session. */
                }
              }}
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              className="icon-button mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
      {home ? (
        <main id="main" tabIndex={-1}>
          <Home />
        </main>
      ) : route === "/projects" ? (
        <Explorer />
      ) : project ? (
        <Detail project={project} />
      ) : (
        <main id="main" tabIndex={-1} className="section wrap">
          <h1>Page not found.</h1>
          <a className="button primary" href="#/projects">
            Explore projects
          </a>
        </main>
      )}
      <footer className="wrap footer">
        <a href="#/" className="wordmark">
          doris<span> wang</span>
          <i />
        </a>
        <p>Built with care. Grounded in evidence.</p>
        <div>
          <a href={profile.github} aria-label="Doris on GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} aria-label="Doris on LinkedIn">
            <Linkedin size={18} />
          </a>
          <span>© {new Date().getFullYear()} Doris Wang</span>
        </div>
      </footer>
    </>
  );
}
