import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Code2,
  Terminal,
  Database,
  Smartphone,
  Cpu,
  Sun,
  Calendar
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-['Plus_Jakarta_Sans'] font-bold text-white flex items-center">
            toriq<span className="text-emerald-500">.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
              <Sun size={18} />
            </button>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-slate-300 relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#111] border-b border-white/5 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 font-medium py-2">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 font-medium py-2">Skills</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 font-medium py-2">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 font-medium py-2">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-emerald-400 font-medium py-2">Contact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-emerald-500 text-white text-center py-3 rounded-lg font-medium mt-2">Hire Me</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-6">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Plus_Jakarta_Sans'] font-extrabold text-white leading-[1.1] mb-6 mt-2 tracking-tight">
            Hi, I'm <br /><span className="text-emerald-500">Mohammad Toriq</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6 font-['JetBrains_Mono']">
            &gt; AI Agent Orchestrator & Fullstack Engineer_
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
            Over 7 years of engineering experience, now pioneering AI-driven development. I orchestrate complex workflows using leading LLMs and build scalable mobile & web ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2">
              Let's Talk <ChevronRight size={18} />
            </a>
            <a href="#projects" className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              View Projects
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border border-emerald-500/30 p-2 relative z-10 bg-[#111] overflow-hidden group">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-900 to-black border border-white/5 relative overflow-hidden flex items-center justify-center">
              <img
                src="/profile.png"
                alt="Mohammad Toriq"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {/* <div className="border-y border-white/5 bg-[#111]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-12 md:gap-24">
          <Stat label="Years Experience" value="7+" />
          <Stat label="Projects Completed" value="30+" />
          <Stat label="Happy Clients" value="15+" />
        </div>
      </div> */}

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-4">
            <div className="rounded-3xl bg-[#111] border border-white/5 p-8 relative flex flex-col items-center text-center shadow-xl">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <Terminal size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">Quick Info</h3>
              <p className="text-slate-400 mb-6 text-sm">A brief overview of who I am.</p>

              <div className="w-full space-y-4">
                <InfoItem icon={<MapPin size={18} />} label="Location" value="Gresik, Indonesia" />
                <InfoItem icon={<Mail size={18} />} label="Email" value="Hit me up!" />
                <InfoItem icon={<GraduationCap size={18} />} label="Degree" value="B.S. Informatics" />
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <SectionHeader title="About Me" subtitle="Who I am & what I do" />
            <div className="prose prose-invert prose-lg text-slate-400 max-w-none">
              <p>
                I am a seasoned <strong className="text-emerald-400 font-semibold">Software Developer</strong> with over 7 years of deep technical experience. Originally specializing in high-performance Android ecosystems (Kotlin/Flutter) and Clean Architecture, I've successfully deployed multi-module platforms for startups with millions of users.
              </p>
              <p>
                Today, I am heavily focused on the intersection of <strong className="text-emerald-400 font-semibold">Fullstack development and Artificial Intelligence</strong>. I leverage advanced models like Claude 3.5 alongside AntiGravity IDE and MCP (Model Context Protocol) to pioneer AI-driven coding workflows, accelerating deployment times without sacrificing structural integrity.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://github.com/ryuuken03" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohammadtoriq/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#111]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader title="My Skills & Expertise" subtitle="Technologies I work with" centered />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<Code2 />}
              title="Frontend Web"
              skills={['React', 'Next.js', 'Tailwind CSS', 'TypeScript']}
            />
            <SkillCard
              icon={<Smartphone />}
              title="Mobile Development"
              skills={['Kotlin (Android)', 'Flutter', 'Jetpack Compose', 'Clean Arch']}
            />
            <SkillCard
              icon={<Database />}
              title="Backend & Cloud"
              skills={['Node.js', 'Express.js', 'Laravel', 'MySQL', 'PostgreSQL', 'Firebase']}
            />
            <SkillCard
              icon={<Cpu />}
              title="AI & Orchestration"
              skills={['Claude 3.5 Sonnet', 'AntiGravity IDE', 'MCP', 'LLMs']}
            />
            {/* <SkillCard
              icon={<Terminal />}
              title="Tools & Architecture"
              skills={['Git', 'REST APIs', 'GraphQL', 'Vite']}
            /> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <SectionHeader title="Experience" subtitle="My professional journey" />

        <div className="mt-16 relative">
          {/* Main Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-white/5 -translate-x-1/2"></div>

          <div className="space-y-12">
            <ExperienceItem
              dates="2026 - Present"
              role="AI Software Architect & SaaS Developer"
              company="Freelance"
              description="Architecting Resik, a multi-tenant SaaS catalog platform for MSMEs. Automating complex coding workflows and database schema generation using AI AntiGravity."
              align="right"
              latest
            />
            <ExperienceItem
              dates="2024 - 2025"
              role="Fullstack Developer"
              company="Telkomsat"
              description="Engineered an enterprise-level Inventory Management System. Integrated real-time asset tracking visualizations using Leaflet Maps and developed robust data export/import functionalities."
              align="left"
            />
            <ExperienceItem
              dates="2019 - 2023"
              role="Senior Android Developer"
              company="Ekosis"
              description="Built high-performance marketplace features. Engineered secure JWT authentication flows and managed local data persistence with Realm. Mentored junior developers and scaled the app architecturally."
              align="right"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto bg-[#111]/30 rounded-3xl border border-white/5 my-12">
        <div className="text-center mb-16 px-4">
          <SectionHeader title="Featured Projects" subtitle="Selected recent work" centered />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          <ProjectCard
            title="Resik (Ongoing)"
            category="SaaS Platform"
            description="A multi-tenant SaaS catalog platform built entirely with the help of AI AntiGravity, automating complex coding workflows and intelligent database management."
            tech={['React', 'Node.js', 'AntiGravity AI']}
          />
          <ProjectCard
            title="Enterprise IMS"
            category="Inventory Management"
            description="Full-scale inventory system for Telkomsat with real-time asset tracking, executive dashboards, and interactive maps."
            tech={['Next.js', 'Laravel', 'Leaflet']}
          />
          <ProjectCard
            title="Maca Comic Reader"
            category="Cross-Platform App"
            description="High-performance comic reader built with Flutter. Implements Clean Architecture with specialized Providers, SQLite for offline history, and REST API integration."
            tech={['Flutter', 'Dart', 'Provider', 'SQLite']}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-bold text-white mb-6">Got a Project? <br /> Let's Talk!</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. If you have a project that needs some creative integration or AI orchestration, I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:mohammad.toriq03@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20">
              mohammad.toriq03@gmail.com
            </a>
            <a href="https://wa.me/6285797416210" className="bg-[#222] hover:bg-[#333] border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3">
              <FaWhatsapp size={20} className="text-[#25D366]" />
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-white">
            Mohammad Toriq<span className="text-emerald-500">.</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mohammad Toriq. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/ryuuken03" icon={<Github size={18} />} />
            <SocialLink href="https://www.linkedin.com/in/mohammadtoriq/" icon={<Linkedin size={18} />} />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function SectionHeader({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) {
  return (
    <div className={`mb-10 ${centered ? 'flex flex-col items-center text-center' : ''}`}>
      <h3 className="text-emerald-500 font-semibold tracking-wider uppercase text-xs mb-3 flex items-center gap-2">
        <span className="w-4 h-[2px] bg-emerald-500"></span> {subtitle} {centered && <span className="w-4 h-[2px] bg-emerald-500"></span>}
      </h3>
      <h2 className="text-3xl md:text-5xl font-['Plus_Jakarta_Sans'] font-bold text-white">{title}</h2>
    </div>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">{value}</div>
      <div className="text-slate-500 text-sm md:text-base font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[#1a1a1a] border border-white/5 w-full">
      <div className="flex items-center gap-3">
        <div className="text-emerald-500">
          {icon}
        </div>
        <div className="text-sm font-medium text-slate-300">{label}</div>
      </div>
      <div className="text-sm text-slate-400">{value}</div>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 group shadow-lg">
      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">{title}</h3>
      <ul className="space-y-4 text-sm font-medium">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center justify-between text-slate-400">
            <span>{skill}</span>
            <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-emerald-500/50 transition-colors"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ dates, role, company, description, align, latest }: any) {
  const isLeft = align === 'left';

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Mobile left-aligned layout adjustments */}
      <div className="md:hidden absolute left-0 top-6 bottom-[-32px] w-px bg-white/5"></div>

      {/* Content */}
      <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'} relative`}>
        {/* Dot for mobile */}
        <div className={`md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full ${latest ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-slate-600'}`}></div>

        <div className={`bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors relative group`}>
          <div className={`text-emerald-500 font-semibold text-sm mb-2 font-['JetBrains_Mono'] ${isLeft ? 'md:justify-end' : ''} flex items-center gap-2`}>
            <Calendar size={14} />
            {dates}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-['Plus_Jakarta_Sans']">{role}</h3>
          <div className="text-slate-300 font-medium mb-4">{company}</div>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Center Dot for Desktop */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10 items-center justify-center z-10">
        <div className={`w-3 h-3 rounded-full ${latest ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-slate-600'}`}></div>
      </div>

      {/* Empty space for the other side */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
}

function ProjectCard({ title, category, description, tech }: any) {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col h-full cursor-pointer shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>

      <div className="text-xs font-semibold tracking-wider text-emerald-500 mb-3 uppercase">{category}</div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors font-['Plus_Jakarta_Sans']">{title}</h3>
      <p className="text-slate-400 mb-8 flex-1 leading-relaxed text-sm">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t: string, i: number) => (
          <span key={i} className="text-xs font-['JetBrains_Mono'] text-slate-500 bg-[#111] px-2 py-1 rounded-md border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
    >
      {icon}
    </a>
  );
}

export default App;
