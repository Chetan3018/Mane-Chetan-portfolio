import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Check, ExternalLink, Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";
import privacyImage from "@/assets/project-privacy.jpg";
import trisvaImage from "@/assets/project-trisva.jpg";
import econImage from "@/assets/project-economic-freedom.jpg";
import resumeAsset from "@/assets/Mane_Chetan.pdf.asset.json";

const navigation = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Resume", "Contact"];
const skills = [
  { category: "Programming & databases", items: ["Python", "SQL", "HTML", "CSS"] },
  { category: "AI & data science", items: ["Machine Learning", "Data Analysis", "Computer Vision", "Face Recognition"] },
  { category: "Libraries & frameworks", items: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "Django", "Tkinter"] },
  { category: "Other tools", items: ["SpeechRecognition", "pyttsx3", "VS Code", "Tableau"] },
];
const projects = [
  {
    number: "01", title: "Privacy-Aware Facial Recognition", subtitle: "From obfuscated images", image: privacyImage,
    alt: "Facial recognition interface showing a privacy-blurred face",
    description: "A dual-mode web application for identity-based face blurring and finding a blurred face within group images.",
    features: ["Multi-face detection", "Facial embedding comparison", "Privacy-first image handling"],
    stack: ["Python", "Django", "OpenCV", "face_recognition", "NumPy"],
  },
  {
    number: "02", title: "TRISVA", subtitle: "An assistive system", image: trisvaImage,
    alt: "Assistive technology interface with voice and object recognition",
    description: "A multi-mode application designed to support blind, deaf, and mute users through accessible computer vision and voice interactions.",
    features: ["Obstacle detection", "Speech-to-text & text-to-speech", "Real-time voice commands"],
    stack: ["Python", "OpenCV", "Tkinter", "SpeechRecognition", "pyttsx3"],
  },
  {
    number: "03", title: "Measuring The Pulse of Prosperity", subtitle: "An Index of Economic Freedom Analysis", image: econImage,
    alt: "Data analyst reviewing an interactive dashboard of world economic indicators",
    description: "An interactive Tableau dashboard that analyzes and compares the Index of Economic Freedom across countries using key economic indicators.",
    features: ["Trade freedom & judicial effectiveness", "Tax burden & financial freedom", "GDP growth, inflation & unemployment"],
    stack: ["Tableau", "Data Visualization", "Dashboard Development"],
  },
];
const linkedin = "https://www.linkedin.com/in/mane-chetan";
const github = "https://github.com/Chetan3018";
const email = "manechetan2005@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mane Chetan | AI & Data Science Portfolio" },
    { name: "description", content: "Explore Mane Chetan's AI and Data Science portfolio: Python, SQL, machine learning, computer vision projects, education and internships." },
    { property: "og:title", content: "Mane Chetan | AI & Data Science Portfolio" },
    { property: "og:description", content: "AI & Data Science graduate with hands-on experience in Python, data analysis, machine learning and computer vision." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="mb-10 md:mb-14"><p className="eyebrow label-line mb-4">{label}</p><h2 className="section-title text-foreground">{title}</h2>{description && <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p>}</div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="overflow-x-hidden bg-background">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="page-container flex h-[70px] items-center justify-between gap-5">
        <a href="#home" className="flex shrink-0 items-center gap-3 text-foreground" onClick={() => setMenuOpen(false)} aria-label="Mane Chetan home">
          <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-sm font-extrabold text-primary-foreground">MC</span>
          <span className="text-sm font-extrabold tracking-normal sm:text-base">Mane Chetan<span className="text-teal">.</span></span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] font-semibold text-ink-soft transition-colors hover:text-teal">{item}</a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-soft transition-colors hover:text-teal"><Linkedin size={17}/></a><Button asChild size="sm" className="h-9 px-4"><a href="#contact">Let's talk <ArrowUpRight /></a></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-3 lg:hidden"><div className="grid grid-cols-2 gap-1">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-sm px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted">{item}</a>)}</div></nav>}
    </header>

    <main>
      <section id="home" className="relative flex min-h-[600px] items-center overflow-hidden border-b border-border md:min-h-[700px] lg:min-h-[720px]">
        <img src={heroImage} alt="AI and data analysis workspace with computer vision research on a laptop" width={1600} height={1008} className="hero-photo" fetchPriority="high" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="page-container relative z-10 py-12 md:py-24">
          <div className="max-w-[700px]">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal/25 bg-teal-light/80 px-3.5 py-2 text-[11px] font-bold text-teal sm:text-xs"><span className="size-1.5 rounded-full bg-teal"/> Open to entry-level opportunities</div>
            <p className="eyebrow mb-5">AI & DATA SCIENCE GRADUATE</p>
            <h1 className="max-w-[740px] text-[3.1rem] font-bold leading-[1.12] text-foreground sm:text-6xl md:text-[4.7rem] lg:text-[5.2rem]">Hi, I'm<br/><span className="text-teal">Mane Chetan.</span></h1>
            <p className="mt-7 max-w-[590px] text-lg font-semibold leading-8 text-foreground md:text-xl">Turning data and ideas into practical, human-centered technology.</p>
            <p className="mt-4 max-w-[555px] text-sm leading-7 text-ink-soft md:text-base md:leading-8">B.Tech in Artificial Intelligence & Data Science with hands-on experience in Python, SQL, machine learning, data analysis, and AI-based projects.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 px-6"><a href="#projects">View my projects <ArrowUpRight/></a></Button><Button asChild variant="outline" size="lg" className="h-12 border-primary/25 bg-background/75 px-6"><a href={resumeAsset.url} download="Mane_Chetan_Resume.pdf">Download resume <ArrowDownToLine/></a></Button></div>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal hover:underline">Let's connect <ArrowRight size={16}/></a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold text-foreground/65 md:flex">Scroll to explore <ArrowDown size={14}/></a>
      </section>

      <section id="about" className="section-pad bg-background max-md:pt-14"><div className="page-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div><SectionHeading label="01 / ABOUT" title="A curious mind, focused on real-world impact."/><p className="max-w-xl text-base leading-8 text-ink-soft">I'm a B.Tech Artificial Intelligence & Data Science graduate from Annamacharya Institute of Technology and Sciences, Tirupati. I enjoy using Python, data analysis, and machine learning to build useful solutions—from privacy-aware computer vision to assistive technology.</p><p className="mt-5 max-w-xl text-base leading-8 text-ink-soft">I'm looking for an opportunity to keep learning, contribute to meaningful work, and grow as an AI and data professional.</p></div>
        <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-md border border-border bg-border shadow-sm"><div className="bg-card p-6 sm:p-8"><p className="text-3xl font-bold text-primary">8.9</p><p className="mt-2 text-sm leading-6 text-muted-foreground">B.Tech CGPA</p></div><div className="bg-card p-6 sm:p-8"><p className="text-3xl font-bold text-primary">03</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Projects</p></div><div className="bg-card p-6 sm:p-8"><p className="text-3xl font-bold text-primary">02</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Internships</p></div><div className="bg-card p-6 sm:p-8"><p className="text-3xl font-bold text-primary">2026</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Graduation year</p></div></div>
      </div></section>

      <section id="skills" className="section-pad section-rule bg-warm"><div className="page-container"><SectionHeading label="02 / EXPERTISE" title="Skills & tools" description="A practical foundation in programming, data, and applied AI, built through coursework, projects, and internships."/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{skills.map(group => <div key={group.category} className="rounded-md border border-border bg-card p-6 shadow-sm"><div className="mb-5 flex items-center gap-3"><span className="size-2 rounded-full bg-teal"/><h3 className="text-sm font-bold text-foreground">{group.category}</h3></div><div className="flex flex-wrap gap-2">{group.items.map(skill => <span key={skill} className="rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink-soft">{skill}</span>)}</div></div>)}</div></div></section>

      <section id="experience" className="section-pad section-rule bg-background"><div className="page-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><SectionHeading label="03 / EXPERIENCE" title="Learning by doing."/><div className="space-y-1"><div className="timeline-item pb-12"><div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="text-xl font-bold text-foreground">Artificial Intelligence & Data Science</h3><p className="mt-2 text-sm font-bold text-teal">SmartBridge Educational Services Pvt. Ltd.</p></div><span className="text-xs font-bold text-muted-foreground">OCT 2025 — MAR 2026</span></div><p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">Completed a six-month internship in AI and machine learning, gaining hands-on experience in Python, data analysis, and machine learning model development. Strengthened problem-solving and algorithm implementation through real-time project development.</p></div><div className="timeline-item pb-3"><div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="text-xl font-bold text-foreground">Data Analytics with Tableau</h3><p className="mt-2 text-sm font-bold text-teal">SmartBridge Educational Services Pvt. Ltd.</p></div><span className="text-xs font-bold text-muted-foreground">FEB 2025 — MAR 2025</span></div><p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">Worked on data visualization and dashboard creation using Tableau. Analyzed datasets to identify patterns and insights, and developed visual dashboards to support data-driven decision making.</p></div></div></div></section>

      <section id="projects" className="section-pad section-rule bg-warm"><div className="page-container"><div className="flex flex-wrap items-end justify-between gap-4"><SectionHeading label="04 / SELECTED WORK" title="Projects with purpose." description="A closer look at applied projects from my academic work."/><a href={github} target="_blank" rel="noreferrer" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-teal hover:underline">Explore my GitHub <ArrowUpRight size={17}/></a></div><div className="grid gap-7 lg:grid-cols-2">{projects.map(project => <article key={project.number} className="project-card overflow-hidden rounded-md border border-border bg-card shadow-sm"><div className="overflow-hidden"><img src={project.image} alt={project.alt} width={1200} height={768} loading="lazy" className="project-image"/></div><div className="p-6 sm:p-8"><div className="flex items-center justify-between"><span className="eyebrow">PROJECT {project.number}</span><span className="text-xs font-semibold text-muted-foreground">{project.subtitle}</span></div><h3 className="mt-4 text-xl font-bold leading-snug text-foreground sm:text-2xl">{project.title}</h3><p className="mt-3 text-sm leading-7 text-ink-soft">{project.description}</p><ul className="mt-5 space-y-2">{project.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-ink-soft"><Check size={15} className="shrink-0 text-teal"/>{feature}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">{project.stack.map(item => <span key={item} className="rounded-sm bg-muted px-2.5 py-1 text-[11px] font-bold text-ink-soft">{item}</span>)}</div></div></article>)}</div></div></section>

      <section id="education" className="section-pad section-rule bg-background"><div className="page-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><SectionHeading label="05 / BACKGROUND" title="Education & learning."/><div><div className="space-y-8"><div className="border-b border-border pb-7"><div className="flex flex-wrap justify-between gap-3"><div><h3 className="text-lg font-bold text-foreground">B.Tech · Artificial Intelligence & Data Sciences</h3><p className="mt-2 text-sm text-ink-soft">Annamacharya Institute of Technology and Sciences, Tirupati</p></div><span className="text-xs font-bold text-teal">2022 — 2026</span></div><p className="mt-3 text-sm font-semibold text-muted-foreground">CGPA 8.9</p></div><div className="border-b border-border pb-7"><div className="flex flex-wrap justify-between gap-3"><div><h3 className="text-lg font-bold text-foreground">Intermediate · MPC</h3><p className="mt-2 text-sm text-ink-soft">Sree Siddartha Junior College, Madanapalle</p></div><span className="text-xs font-bold text-teal">2020 — 2022</span></div><p className="mt-3 text-sm font-semibold text-muted-foreground">84.6%</p></div><div className="pb-2"><div className="flex flex-wrap justify-between gap-3"><div><h3 className="text-lg font-bold text-foreground">Secondary School Certificate</h3><p className="mt-2 text-sm text-ink-soft">Sri Chaitanya Childrens Academy School, Madanapalle</p></div><span className="text-xs font-bold text-teal">2019 — 2020</span></div><p className="mt-3 text-sm font-semibold text-muted-foreground">99.5%</p></div></div><div className="mt-10 border-t border-border pt-8"><h3 className="eyebrow mb-5">CERTIFICATIONS</h3><div className="space-y-3 text-sm text-ink-soft"><p>Python Basics for Data Science <span className="text-muted-foreground">— IBM · Apr 2024</span></p><p>SQL and Relational Databases <span className="text-muted-foreground">— Cognitive Class · Jul 2024</span></p><p>Java (Basic) <span className="text-muted-foreground">— HackerRank · Feb 2025</span></p></div></div></div></div></section>

      <section id="resume" className="section-pad section-rule bg-primary text-primary-foreground"><div className="page-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-primary-foreground/70">06 / RESUME</p><h2 className="section-title max-w-xl">The full story, in one page.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">Interested in learning more about my education, skills, projects, and experience? Take a look at my resume.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="secondary" className="h-12 px-6"><a href={resumeAsset.url} download="Mane_Chetan_Resume.pdf">Download resume <ArrowDownToLine/></a></Button><Button asChild size="lg" variant="outline" className="h-12 border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={resumeAsset.url} target="_blank" rel="noreferrer">View resume <ExternalLink/></a></Button></div></div></section>

      <section id="contact" className="section-pad bg-background"><div className="page-container"><SectionHeading label="07 / CONTACT" title="Let's connect." description="I'm open to entry-level opportunities and internships in AI, data science, Python, data analytics, and IT. Reach out directly — I'd love to hear from you."/><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><a href={`mailto:${email}`} className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:text-teal"><span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-teal-light text-teal"><Mail size={18}/></span><span className="break-all">Email<span className="mt-1 block text-xs font-medium text-muted-foreground">{email}</span></span></a><a href={`tel:+916301863048`} className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:text-teal"><span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-teal-light text-teal"><Phone size={18}/></span><span>Phone<span className="mt-1 block text-xs font-medium text-muted-foreground">+91 63018 63048</span></span></a><a href={linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:text-teal"><span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-teal-light text-teal"><Linkedin size={18}/></span><span>LinkedIn<span className="mt-1 block text-xs font-medium text-muted-foreground">Connect with me</span></span></a><a href={github} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:text-teal"><span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-teal-light text-teal"><Github size={18}/></span><span>GitHub<span className="mt-1 block text-xs font-medium text-muted-foreground">See my code</span></span></a></div></div></section>
    </main>
    <footer className="border-t border-border bg-warm py-9"><div className="page-container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><a href="#home" className="text-base font-extrabold text-foreground">Mane Chetan<span className="text-teal">.</span></a><p className="mt-1 text-xs text-muted-foreground">Artificial Intelligence & Data Science</p></div><div className="flex gap-5 text-sm text-ink-soft"><a href={github} target="_blank" rel="noreferrer" className="hover:text-teal">GitHub</a><a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-teal">LinkedIn</a><a href={`mailto:${email}`} className="hover:text-teal">Email</a></div><p className="text-xs text-muted-foreground">© 2026 Mane Chetan. All rights reserved.</p></div></footer>
  </div>;
}
