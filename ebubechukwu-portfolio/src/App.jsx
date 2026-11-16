import { useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github,
  Linkedin, Mail, Menu, X, MoveUpRight, Code2, Layers3,
  MonitorSmartphone, Sparkles
} from 'lucide-react'
import { projects, skills } from './data'

const GITHUB_URL = 'https://github.com/Legitraph'

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="wordmark" onClick={close} aria-label="Ebubechukwu Aghachi home">
          EA<span className="wordmark-dot">.</span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <a href="/#about" onClick={close}>About</a>
          <a href="/#work" onClick={close}>Work</a>
          <a href="/#contact" onClick={close}>Contact</a>
          <a className="nav-github" href={GITHUB_URL} target="_blank" rel="noreferrer" onClick={close}>
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>
}

function ProjectVisual({ type, large = false }) {
  return (
    <div className={`project-visual visual-${type} ${large ? 'visual-large' : ''}`} aria-label="Illustrative project preview">
      {type === 'calendar' && (
        <div className="calendar-window">
          <div className="window-top"><span /><span /><span /><i>MEET / PLAN</i></div>
          <div className="calendar-body">
            <div className="calendar-side"><b>November 2024</b><span>Overview</span><span>My meetings</span><span>Availability</span></div>
            <div className="calendar-main"><div className="calendar-heading">Your week, <em>in focus.</em></div><div className="calendar-days">{['MON','TUE','WED','THU','FRI'].map((d,i)=><span key={d}>{d}<b>{18+i}</b></span>)}</div><div className="meeting-block"><b>10:30</b><span>Product sync <small>30 min · Online</small></span></div><div className="meeting-block meeting-alt"><b>14:00</b><span>Team check-in <small>45 min · Online</small></span></div></div>
          </div>
        </div>
      )}
      {type === 'browser' && (
        <div className="browser-window">
          <div className="window-top"><span /><span /><span /><i>BUSINESS / HOME</i></div>
          <div className="browser-content"><div className="browser-nav">B / CO <span>ABOUT　 SERVICES　 CONTACT</span></div><div className="browser-hero"><small>BUILT AROUND YOUR BUSINESS</small><b>Clarity for<br/><em>what's next.</em></b><span className="browser-button">DISCOVER MORE ↗</span></div><div className="browser-bottom"><span>01 / STRATEGY</span><span>02 / GROWTH</span><span>03 / RESULTS</span></div></div>
        </div>
      )}
      {type === 'portfolio' && (
        <div className="portfolio-window">
          <div className="portfolio-mini-nav">EA<span>.</span><small>ABOUT　 WORK　 CONTACT</small></div>
          <div className="portfolio-mini-hero"><small>DEVELOPER / CREATIVE THINKER</small><b>Building<br/>with <em>purpose.</em></b><span>SELECTED WORK — 2026</span></div>
          <div className="portfolio-mini-foot"><span>REACT · JAVASCRIPT</span><span>LAGOS, NG</span></div>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <ProjectVisual type={project.visual} />
      <div className="project-card-info">
        <div><span className="project-category">{project.category} · {project.year}</span><h3>{project.title}</h3><p>{project.summary}</p></div>
        <span className="round-arrow"><ArrowUpRight size={19}/></span>
      </div>
    </Link>
  )
}

function Home() {
  return (
    <>
      <main>
        <section className="hero section-shell">
          <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>LAGOS, NIGERIA <i className="status-dot" /> AVAILABLE TO CONNECT</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <Eyebrow>COMPUTER SCIENCE STUDENT · FRONTEND DEVELOPER</Eyebrow>
              <h1>Ebubechukwu<br/><span>Aghachi</span><sup>✳</sup></h1>
              <p className="hero-description">I build thoughtful digital experiences, turning ideas and interfaces into useful things on the web.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore my work <ArrowDown size={16}/></a>
                <a className="text-link" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract geometric artwork">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-core">EA<span>✳</span></div>
              <div className="art-label art-label-top">DESIGN<br/>× BUILD</div>
              <div className="art-label art-label-bottom">CURIOUS<br/>BY DEFAULT</div>
              <div className="art-index">01 — 03</div>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>INDEPENDENT THINKING. INTENTIONAL BUILDING.</span></div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-heading"><Eyebrow>01 / ABOUT</Eyebrow><span className="section-note">A LITTLE ABOUT ME</span></div>
          <div className="about-grid">
            <h2>Curiosity is<br/>where it <em>starts.</em></h2>
            <div className="about-copy">
              <p className="lead">I'm Ebubechukwu, a Computer Science student at Pan-Atlantic University with an interest in building for the web.</p>
              <p>I enjoy working at the intersection of design and technology — understanding a problem, shaping a clear interface, and bringing it to life with code. My experience so far includes frontend development, interface design and working with APIs.</p>
              <p>I'm always learning, experimenting and looking for better ways to make digital experiences feel simple and useful.</p>
              <a href="#contact" className="underlined-link">More about what I do <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="about-meta">
            <div><span>BASED IN</span><b>Lagos, Nigeria</b></div>
            <div><span>EDUCATION</span><b>Pan-Atlantic University</b></div>
            <div><span>FOCUS</span><b>Frontend · Web experiences</b></div>
            <div><span>CURRENTLY</span><b>Learning by building</b></div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading"><Eyebrow>02 / SELECTED WORK</Eyebrow><span className="section-note">A FEW THINGS I'VE WORKED ON</span></div>
          <div className="work-intro"><h2>Ideas into<br/><em>interfaces.</em></h2><p>A selection of projects, experiments and practical work. Each one has taught me something new about building for people.</p></div>
          <div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project}/>)}</div>
        </section>

        <section className="skills-section section-shell">
          <div className="section-heading"><Eyebrow>03 / TOOLKIT</Eyebrow><span className="section-note">TOOLS I WORK WITH</span></div>
          <div className="skills-layout"><h2>Learning.<br/><em>Always.</em></h2><div className="skills-list">{skills.map((skill, i)=><div className="skill-row" key={skill.name}><span className="skill-number">0{i+1}</span><b>{skill.name}</b><span>{skill.level}</span><ArrowUpRight size={15}/></div>)}</div></div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="section-heading"><Eyebrow>04 / CONTACT</Eyebrow><span className="section-note">HAVE A PROJECT OR AN IDEA?</span></div>
          <div className="contact-content"><h2>Let's make<br/><em>something useful.</em></h2><a className="contact-cta" href={GITHUB_URL} target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={20}/></a></div>
          <div className="contact-bottom"><span>OPEN TO LEARNING, COLLABORATION & GOOD CONVERSATIONS.</span><a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={16}/> GITHUB.COM/LEGITRAPH</a></div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)
  if (!project) return <main className="not-found section-shell"><h1>Project not found.</h1><Link to="/">Back home <ArrowRight size={16}/></Link></main>
  return (
    <>
      <main className="detail-page section-shell">
        <Link to="/#work" className="back-link"><ArrowLeft size={16}/> BACK TO SELECTED WORK</Link>
        <div className="detail-heading"><Eyebrow>{project.number} / {project.category}</Eyebrow><h1>{project.title}<sup>↗</sup></h1><p>{project.summary}</p><div className="detail-meta"><span>YEAR <b>{project.year}</b></span><span>ROLE <b>{project.role}</b></span><span>TYPE <b>WEB PROJECT</b></span></div></div>
        <ProjectVisual type={project.visual} large/>
        <div className="detail-content">
          <aside><span className="project-category">PROJECT OVERVIEW</span><h3>Turning a problem into a clearer experience.</h3></aside>
          <div className="detail-prose"><h2>About the project</h2><p>{project.description}</p><h2>The problem</h2><p>{project.problem}</p><h2>What it includes</h2><ul>{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul><h2>What I learned</h2><p>{project.learning}</p><h2>Technologies used</h2><div className="tag-list">{project.stack.map(item=><span key={item}>{item}</span>)}</div></div>
        </div>
        <div className="next-project"><span>KEEP EXPLORING</span><Link to={`/projects/${projects[(projects.findIndex(p=>p.id===id)+1)%projects.length].id}`}>Next project <ArrowRight size={18}/></Link></div>
      </main>
      <Footer/>
    </>
  )
}

function Footer() {
  return <footer className="site-footer section-shell"><Link to="/" className="wordmark">EA<span className="wordmark-dot">.</span></Link><span>DESIGNED & BUILT BY EBUBECHUKWU AGHACHI</span><span>© 2026</span><a href={GITHUB_URL} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13}/></a></footer>
}

export default function App() {
  return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:id" element={<ProjectDetails/>}/></Routes></>
}
