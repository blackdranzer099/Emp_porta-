import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Workflow, Database, Cloud, Layers3, ShieldCheck,
  Terminal, Sparkles, Menu, X, Braces
} from "lucide-react";

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const capabilities = [
  { n: "01", icon: Workflow, title: "Integration engineering", text: "Designing resilient, observable integrations across enterprise applications, APIs and data platforms.", tags: ["SnapLogic", "API orchestration", "Event-driven flows"] },
  { n: "02", icon: Braces, title: "SnapCode & pipeline engineering", text: "Turning integration requirements into structured pipelines with reusable patterns, validation and maintainable delivery.", tags: ["SnapCode", "Pipeline design", "SLPy"] },
  { n: "03", icon: Layers3, title: "Custom Snap Pack development", text: "Extending integration platforms with purpose-built Snaps, Java-based development and thoughtful developer experience.", tags: ["Custom Snaps", "Snap Pack SDK", "Java"] },
  { n: "04", icon: Database, title: "Data engineering", text: "Building dependable data movement and transformation workflows across databases, cloud storage and analytics systems.", tags: ["Azure", "SQL", "Data pipelines"] },
  { n: "05", icon: ShieldCheck, title: "Automation & quality", text: "Making delivery safer with repeatable UI, API and integration testing practices.", tags: ["Python", "Pytest", "Robot Framework"] },
  { n: "06", icon: Cloud, title: "Cloud & platform thinking", text: "Connecting systems with security, scale, runtime operations and long-term maintainability in mind.", tags: ["Azure", "Vercel", "CI/CD"] }
];

const projects = [
  {
    id: "A",
    type: "DATA PROTECTION · ENTERPRISE INTEGRATION",
    title: "High-volume data protection workflow",
    desc: "Designed batch-oriented orchestration for sensitive-data encryption and de-identification, with a focus on throughput, restartability, operational visibility and database efficiency.",
    stack: ["SnapLogic", "Oracle", "SQL", "Pipeline orchestration"],
    number: "01"
  },
  {
    id: "B",
    type: "HYBRID CLOUD · CONTENT MIGRATION",
    title: "Enterprise content-to-cloud migration",
    desc: "Explored API-led discovery and migration patterns to move enterprise content into cloud data services, including metadata handling and binary-content transfer considerations.",
    stack: ["SnapLogic", "Microsoft Graph", "SharePoint", "Azure"],
    number: "02"
  },
  {
    id: "C",
    type: "DEVELOPER TOOLING · AI-ASSISTED ENGINEERING",
    title: "AI-assisted integration engineering",
    desc: "Prototyped a workflow for translating integration intent into pipeline structures, validating Snap names and connections, and accelerating repeatable development tasks.",
    stack: ["SnapCode", "Python", "React", "Pipeline validation"],
    number: "03"
  }
];

const experience = [
  { date: "2023 — NOW", role: "Integration Developer / Software Engineer", place: "Enterprise technology & integration", detail: "Building and supporting integration solutions, data workflows, automation and platform capabilities." },
  { date: "ONGOING", role: "Technical mentoring & enablement", place: "Knowledge sharing", detail: "Supporting teammates through SnapLogic learning, practical examples and engineering problem-solving." }
];

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? "light" : ""}`}><span />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [["Work", "#work"], ["Expertise", "#expertise"], ["Journey", "#journey"], ["About", "#about"]];
  return (
    <div className="portfolio-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}>SK<span>®</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
              <span className="status-dot" /> INTEGRATION ENGINEER · DATA & PLATFORM SYSTEMS
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .18 }}>
              I make<br /><em>systems</em> work<br />as one<span className="period">.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65, duration: .8 }}>
              I'm Sai Kiran — an integration engineer building the connective layer between applications, data and the people who depend on them.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}>
              <a className="button button-light" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
              <a className="text-link" href="#about">A little about me <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .25 }}>
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
            <div className="core-glow" />
            <div className="core-mark"><span>SK</span><small>INTEGRATION<br />IN MOTION</small></div>
            <div className="orbit-node node-a"><Workflow size={17} /><span>ORCHESTRATE</span></div>
            <div className="orbit-node node-b"><Database size={17} /><span>TRANSFORM</span></div>
            <div className="orbit-node node-c"><Cloud size={17} /><span>DELIVER</span></div>
            <div className="art-caption"><span>FIG. 001</span> CONNECTING COMPLEXITY</div>
          </motion.div>
          <div className="hero-foot"><span>HYDERABAD, INDIA</span><span>SCROLL TO EXPLORE <ArrowDownRight size={13} /></span><span>AVAILABLE FOR THE RIGHT CHALLENGE</span></div>
        </section>

        <section className="signal-strip" aria-label="Areas of work">
          <div className="signal-track"><span>INTEGRATION</span><i>✳</i><span>DATA ENGINEERING</span><i>✳</i><span>PLATFORM EXTENSIONS</span><i>✳</i><span>AUTOMATION</span><i>✳</i><span>INTEGRATION</span><i>✳</i><span>DATA ENGINEERING</span><i>✳</i><span>PLATFORM EXTENSIONS</span><i>✳</i><span>AUTOMATION</span><i>✳</i></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="intro-left"><SectionLabel>THE THINKING</SectionLabel><div className="side-index">01 / 04</div></div>
          <div className="intro-main">
            <h2>Good engineering is invisible. <span>Everything just connects, flows and works.</span></h2>
            <div className="intro-bottom">
              <p>I work at the intersection of integration, data and automation. I enjoy taking complicated business requirements, finding the cleanest technical path through them, and building solutions that teams can trust.</p>
              <div className="mini-facts"><div><strong>3+</strong><span>YEARS BUILDING</span></div><div><strong>01</strong><span>CONNECTED MINDSET</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div><SectionLabel light>SELECTED WORK</SectionLabel><h2>Complex problems.<br /><em>Clear systems.</em></h2></div>
            <p>A few engineering themes from my work. Project details are intentionally generalized to respect client confidentiality.</p>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <motion.article className="project-card" key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} variants={rise}>
                <div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div>
                <div className="project-body"><div><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <div className={`project-visual visual-${i + 1}`}>
                    {i === 0 ? <><div className="visual-ring r1" /><div className="visual-ring r2" /><div className="visual-core"><ShieldCheck size={28} /></div><span className="visual-chip chip-top">ENCRYPT</span><span className="visual-chip chip-bottom">CONTROL</span></> :
                     i === 1 ? <><div className="migration-node n1">SOURCE</div><div className="migration-line" /><div className="migration-node n2">CLOUD</div><div className="migration-pulse" /></> :
                     <><div className="code-window"><div className="code-dots">● ● ●</div><b>pipeline.flow</b><span>validate( snaps )</span><span>connect( systems )</span><span>deploy( withCare )</span><i>✓ READY</i></div></>}
                  </div>
                </div>
                <div className="project-bottom"><span>ENGINEERING CASE STUDY</span><span>CONFIDENTIALITY-RESPECTING SUMMARY <ArrowUpRight size={13} /></span></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise">
          <div className="expertise-head"><div><SectionLabel>WHAT I BRING</SectionLabel><h2>From the first<br /><em>connection</em> to the platform.</h2></div><p>Tools matter. Knowing how and when to use them matters more.</p></div>
          <div className="capability-grid">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return <motion.article className="capability-card" key={item.n} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise} transition={{ delay: i * .05 }}>
                <div className="cap-top"><span>{item.n}</span><Icon size={21} strokeWidth={1.5} /></div>
                <h3>{item.title}</h3><p>{item.text}</p><div className="tag-row">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
              </motion.article>;
            })}
          </div>
          <div className="snapcode-callout"><div className="callout-icon"><Terminal size={22} /></div><div><span>BUILDING WITH INTENT</span><h3>SnapCode → pipelines → custom Snap Packs.</h3><p>I can work across the integration lifecycle: authoring pipelines with SnapCode, shaping reusable orchestration patterns, and extending the platform through custom Snap Pack development.</p></div><ArrowUpRight className="callout-arrow" size={22} /></div>
        </section>

        <section className="journey-section section-pad" id="journey">
          <div className="journey-head"><div><SectionLabel light>THE JOURNEY</SectionLabel><h2>Always building.<br /><em>Always becoming.</em></h2></div><p>Experience is not just time served. It's the problems you learn to solve and the people you help grow.</p></div>
          <div className="timeline">{experience.map((item, i) => <div className="timeline-item" key={item.role}><div className="timeline-date">{item.date}</div><div className="timeline-marker" /><div className="timeline-content"><span>{item.place}</span><h3>{item.role}</h3><p>{item.detail}</p></div></div>)}</div>
          <div className="learning-note"><Sparkles size={17} /><span>CURRENT FOCUS</span><strong>Cloud data engineering · solution architecture · developer tooling</strong></div>
        </section>

        <section className="closing-section section-pad" id="contact">
          <SectionLabel>HAVE A GOOD PROBLEM?</SectionLabel>
          <h2>Let's build<br /><em>what connects.</em></h2>
          <div className="closing-bottom"><p>I'm interested in thoughtful engineering, ambitious platform work and teams that care about building things well.</p><div className="closing-links"><a href="https://github.com/blackdranzer099" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/search/results/people/?keywords=Sai%20Kiran%20Pamula" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={15} /></a></div></div>
        </section>
      </main>
      <footer className="footer"><a className="wordmark" href="#top">SK<span>®</span></a><span>DESIGNED TO CONNECT · © {new Date().getFullYear()} SAI KIRAN PAMULA</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
