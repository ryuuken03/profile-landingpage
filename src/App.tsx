import React from 'react';
import {
  Smartphone,
  Layout,
  Layers,
  Linkedin,
  Instagram,
  Mail,
  Github
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#a1a1aa] font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">

      {/* Background Atmospheric Glow */}
      <div className="glow-bg"></div>

      {/* Dynamic Island Navigation (Onyedika Inspired) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] md:w-[600px] h-14 bg-[#111111]/80 backdrop-blur-xl rounded-full px-2 shadow-2xl border border-white/10">
        <div className="w-10 h-10 bg-[#1c1c1c] border border-white/5 rounded-full flex items-center justify-center text-[#CCFF00] ml-1 cursor-pointer hover:scale-105 transition-transform font-bold tracking-tighter text-sm">
          MT
        </div>
        <div className="hidden sm:flex items-center gap-6 font-semibold text-white/90 text-sm tracking-wide">
          <a href="#about" className="hover:text-white hover:scale-105 transition-all">About</a>
          <a href="#work" className="hover:text-white hover:scale-105 transition-all">Work</a>
          <a href="#projects" className="hover:text-white hover:scale-105 transition-all">Projects</a>
          <a href="#contact" className="hover:text-white hover:scale-105 transition-all">Contact</a>
        </div>
        <button className="w-10 h-10 bg-white text-black rounded-full flex flex-col items-center justify-center gap-[3px] mr-1 hover:bg-[#ccff00] transition-colors shadow-lg">
          <span className="w-4 h-[2px] bg-current rounded-full" />
          <span className="w-4 h-[2px] bg-current rounded-full" />
          <span className="w-4 h-[2px] bg-current rounded-full" />
        </button>
      </nav>

      {/* Centered Hero Section (Matt Farley + Onyedika) */}
      <header className="pt-36 md:pt-48 px-6 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="bg-[#1c1c1c] text-white/70 border border-white/10 font-mono text-xs px-4 py-2 rounded-full mb-8 inline-flex items-center gap-2 transform -rotate-1 hover:border-white/30 transition-colors">
          Hey there, I'm Toriq! ✨
        </div>

        <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] font-['Outfit'] font-black tracking-tighter w-full max-w-[1000px] text-white">
          AI Agent<br />
          Orchestrator &<br />
          <span className="bg-[#7510F7] text-badge">Fullstack</span>{' '}
          <span className="bg-[#ccff00] text-badge">Engineer</span>
        </h1>

        <p className="mt-12 text-xl md:text-2xl text-[#a1a1aa] font-medium max-w-2xl leading-relaxed">
          Over 7 years of engineering experience, now pioneering AI-driven development. I orchestrate complex workflows using Claude 3.5 and AntiGravity IDE to build intelligent, scalable solutions.
        </p>

        {/* Floating Avatar (Matt Farley) */}
        {/* <div className="mt-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#111111] border-4 border-[#1c1c1c] flex items-center justify-center text-neutral-600 font-mono text-sm relative shadow-[0_0_50px_rgba(117,16,247,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7510F7]/20 to-[#ccff00]/10 rounded-full opacity-50"></div>
          <span className="relative z-10">[ Avatar ]</span>
        </div> */}
      </header>

      {/* Bento-grid Expertise Section (Tamal Sen + Onyedika) */}
      <section className="px-4 md:px-8 py-24 relative z-20" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-[#111111] rounded-[2.5rem] p-10 md:p-14 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between group shadow-xl h-[450px]">
            <div>
              <div className="w-16 h-16 bg-[#1c1c1c] text-[#ccff00] border border-white/5 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                <Smartphone size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mb-4 tracking-tighter">Mobile Expert</h3>
              <p className="text-lg text-[#a1a1aa] leading-relaxed">7 years architecting resilient mobile ecosystems across Kotlin and Flutter. Mastering Clean Architecture and MVVM for high-scale apps.</p>
            </div>
            <div className="mt-8 flex gap-3 text-xs font-['JetBrains_Mono'] font-bold text-[#ccff00]">
              <span className="px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20">Kotlin</span>
              <span className="px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20">Flutter</span>
            </div>
          </div>

          <div className="bg-[#111111] rounded-[2.5rem] p-10 md:p-14 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between group shadow-xl h-[450px]">
            <div>
              <div className="w-16 h-16 bg-[#1c1c1c] text-[#7510F7] border border-white/5 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                <Layout size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mb-4 tracking-tighter">Fullstack & AI</h3>
              <p className="text-lg text-[#a1a1aa] leading-relaxed">Transitioning expertise into AI-driven web development. Building intelligent agents and SaaS platforms with React, Node.js, and Claude 3.5.</p>
            </div>
            <div className="mt-8 flex gap-3 text-xs font-['JetBrains_Mono'] font-bold text-[#7510F7]">
              <span className="px-4 py-2 bg-[#7510F7]/10 rounded-full border border-[#7510F7]/20">Node.js</span>
              <span className="px-4 py-2 bg-[#7510F7]/10 rounded-full border border-[#7510F7]/20">Next.js</span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-[#1c1c1c] rounded-[2.5rem] p-10 md:p-14 border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-colors flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl min-h-[400px]">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#ff6b35] opacity-5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="flex-1 relative z-10 w-full">
              <div className="w-16 h-16 bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner hover:scale-110 transition-transform">
                <Layers size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mb-4 tracking-tighter">AI Orchestration</h3>
              <p className="text-lg md:text-xl text-[#a1a1aa] mb-8 max-w-xl leading-relaxed">Leveraging the power of LLMs (Claude 3.5 Sonnet) and MCP to automate complex coding workflows with AntiGravity IDE and Clean Architecture.</p>
              <div className="flex gap-3 text-xs font-['JetBrains_Mono'] font-bold text-[#ff6b35]">
                <span className="px-4 py-2 bg-[#ff6b35]/10 rounded-full border border-[#ff6b35]/20">Claude 3.5</span>
                <span className="px-4 py-2 bg-[#ff6b35]/10 rounded-full border border-[#ff6b35]/20">MCP</span>
                <span className="px-4 py-2 bg-[#ff6b35]/10 rounded-full border border-[#ff6b35]/20">Clean Arch</span>
              </div>
            </div>

            {/* Decorative Phone Graphic */}
            <div className="w-[280px] h-[350px] bg-[#111111] border-[12px] border-[#0a0a0a] rounded-[3rem] shrink-0 relative flex flex-col -mb-32 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden hidden md:flex">
              <div className="w-1/2 h-6 bg-[#0a0a0a] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
              <div className="w-full h-1/2 bg-[#ff6b35]/90 p-6 text-black flex flex-col justify-end">
                <div className="w-3/4 h-8 bg-black/20 rounded-lg mb-4"></div>
                <div className="w-1/2 h-4 bg-black/10 rounded-md"></div>
              </div>
              <div className="w-full h-1/2 bg-[#1c1c1c] p-6 space-y-4 pt-12">
                <div className="w-full h-12 bg-white/5 rounded-2xl"></div>
                <div className="w-full h-12 bg-white/5 rounded-2xl"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Work Experience (Bonhomme) */}
      <section className="py-24 px-6 md:px-8 max-w-4xl mx-auto" id="work">
        <h2 className="text-2xl font-['Outfit'] font-bold text-white mb-16 px-4 border-l-4 border-[#7510F7]">Work Experience</h2>
        <div className="space-y-16">
          <ExperienceItem
            dates="2026 - present"
            role="AI Software Architect & SaaS Developer"
            company="Freelance"
            desc="Architecting GresikPunyaUMKM, a multi-tenant SaaS catalog platform for MSMEs. Automating complex coding workflows and database schema generation using Claude 3.5 and AntiGravity IDE."
            stack="React • Node.js • Claude 3.5 • AntiGravity IDE"
          />
          <ExperienceItem
            dates="2024"
            role="Fullstack Developer"
            company="Telkomsat"
            desc="Engineered an enterprise-level Inventory Management System. Integrated real-time asset tracking visualizations using Leaflet Maps and developed robust data export/import functionalities."
            stack="Next.js • Laravel • Leaflet • MySQL"
          />
          <ExperienceItem
            dates="2019 - 2023"
            role="Android Developer"
            company="Ekosis"
            desc="Built high-performance marketplace features. Engineered secure JWT authentication flows and managed local data persistence with Realm. Collaborated on mobile app reliability and scalability."
            stack="Kotlin • Firebase • Retrofit • Realm"
          />
        </div>

        <div className="mt-20 pt-16 border-t border-white/5">
          <h2 className="text-2xl font-['Outfit'] font-bold text-white mb-8 px-4 border-l-4 border-[#ccff00]">Education</h2>
          <div className="px-4">
            <h4 className="text-xl text-white font-bold">University of Brawijaya</h4>
            <p className="text-lg text-[#a1a1aa]">Bachelor of Informatics Engineering • Graduate 2019</p>
          </div>
        </div>
      </section>

      {/* Selected Projects Cards (Tamal Sen / Onyedika style) */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0a0a] border-y border-white/5" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-['Outfit'] font-black text-white tracking-tighter mb-16 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            <ProjectCard
              title="GresikPunyaUMKM"
              type="SaaS Platform"
              desc="A multi-tenant SaaS catalog platform empowering MSMEs with AI-automated product listings and intelligent database management."
              tags={['React', 'Node.js', 'Claude 3.5']}
              colorHex="#ccff00"
              icon="🤖"
            />

            <ProjectCard
              title="Enterprise IMS"
              type="Inventory Management"
              desc="Full-scale inventory system for Telkomsat with real-time asset tracking, executive dashboards, and interactive Leaflet map integration."
              tags={['Next.js', 'Laravel', 'Leaflet']}
              colorHex="#7510F7"
              icon="📦"
            />

          </div>
        </div>
      </section>

      {/* Floating CTA Before Footer (Matt Farley + Onyedika mix) */}
      <section className="relative -mb-28 z-30 px-6 max-w-4xl mx-auto" id="contact">
        <div className="bg-[#1c1c1c] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-['Outfit'] font-black text-white tracking-tighter mb-4">Let's build<br />something <span className="text-[#ccff00]">great.</span></h2>
            <p className="text-[#a1a1aa] text-lg max-w-xs">Interested in working together? We should queue up a chat.</p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="https://wa.me/6285797416210" className="bg-[#ccff00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <a href="mailto:mohammad.toriq03@gmail.com" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Mail size={18} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Dark Gradient Footer */}
      <footer className="pt-48 pb-16 px-6 bg-[#030303] text-center relative overflow-hidden border-t border-white/5">

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#7510F7]/20 to-transparent blur-[80px] pointer-events-none rounded-full"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Minimal Logo */}
          <div className="w-16 h-16 border border-white/10 rounded-2xl flex items-center justify-center mb-8 bg-[#111111] font-bold text-white text-2xl tracking-tighter">
            MT
          </div>

          <p className="text-lg text-[#a1a1aa] mb-12 max-w-sm font-medium">
            Living, learning, & leveling up one application at a time.
          </p>

          <div className="flex items-center gap-6 mb-16">
            <SocialIcon icon={<Linkedin size={20} />} link="https://www.linkedin.com/in/mohammadtoriq/" />
            <SocialIcon icon={<Instagram size={20} />} link="https://www.instagram.com/mohammadtoriq/" />
            <SocialIcon icon={<SiThreads size={20} />} link="https://www.threads.net/@mohammadtoriq" />
            <SocialIcon icon={<Github size={20} />} link="https://github.com/ryuuken03" />
          </div>

          <div className="text-[#a1a1aa]/60 text-sm font-['JetBrains_Mono']">
            © {new Date().getFullYear()} Mohammad Toriq. Handcrafted.
          </div>
        </div>
      </footer>

    </div>
  );
}

// Components

function ExperienceItem({ dates, role, desc, stack }: any) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
      <div className="w-32 flex-shrink-0 text-sm md:text-[15px] pt-1 text-neutral-500 font-['JetBrains_Mono'] mt-1">
        {dates}
      </div>
      <div className="flex-1">
        <h4 className="text-lg text-white/80 mb-4">{role}</h4>
        <p className="text-[15px] md:text-lg leading-relaxed mb-6 text-[#a1a1aa] max-w-2xl">{desc}</p>
        <p className="text-sm font-['JetBrains_Mono'] font-medium text-neutral-500 uppercase tracking-wider">{stack}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, type, desc, tags, colorHex, icon }: any) {
  return (
    <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors flex flex-col group relative overflow-hidden h-[450px]">
      {/* Background ambient color */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-[${colorHex}] opacity-5 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-10 pointer-events-none`}></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className={`px-4 py-2 bg-[${colorHex}]/10 text-[${colorHex}] border border-[${colorHex}]/20 rounded-full font-bold uppercase tracking-widest text-xs`}>
            {type}
          </span>
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl text-white/50 border border-white/10 group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold text-white mb-4 tracking-tighter">{title}</h3>
        <p className="text-lg text-[#a1a1aa] mb-auto leading-relaxed max-w-sm">{desc}</p>

        <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
          <div className="flex gap-2">
            {tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs font-['JetBrains_Mono'] text-neutral-400">
                {tag}{i < tags.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode, link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#1c1c1c] text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" aria-label={link}>
      {icon}
    </a>
  );
}

export default App;
