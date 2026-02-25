import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, ExternalLink, ChevronRight, 
  Briefcase, GraduationCap, Award, BookOpen, Cpu, Code, Activity, ShieldCheck,
  FolderKanban, Download, CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- MINI-GAME STATE ---
  const [foundCores, setFoundCores] = useState([]);
  const [showWinMessage, setShowWinMessage] = useState(false);

  // Check for win condition
  useEffect(() => {
    if (foundCores.length === 5) {
      setShowWinMessage(true);
      const timer = setTimeout(() => setShowWinMessage(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [foundCores]);

  const handleFindCore = (id) => {
    if (!foundCores.includes(id)) {
      setFoundCores(prev => [...prev, id]);
    }
  };

  // Helper component for the hidden game items
  const HiddenCore = ({ id, className }) => {
    const isFound = foundCores.includes(id);
    return (
      <button
        onClick={() => handleFindCore(id)}
        disabled={isFound}
        className={`absolute z-30 flex items-center justify-center transition-all duration-500 cursor-crosshair
          ${isFound 
            ? 'opacity-0 scale-150 pointer-events-none text-green-400' 
            : `opacity-20 hover:opacity-100 hover:scale-125 animate-pulse text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] ${className}`
          }`}
        title="Hidden Data Core..."
      >
        <Cpu className="w-6 h-6" />
      </button>
    );
  };

  // Smooth scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden relative">
      
      {/* Custom playful animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes slideUpFade {
          0% { transform: translate(-50%, 20px); opacity: 0; }
          10%, 90% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, -20px); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .hover-wiggle:hover { animation: wiggle 0.4s ease-in-out infinite; }
        .animate-win-message { animation: slideUpFade 6s ease-in-out forwards; }
      `}</style>

      {/* Playful Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/20 blur-3xl animate-float -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-200/20 blur-3xl animate-float-delayed -z-10 pointer-events-none"></div>
      <div className="fixed top-[40%] left-[60%] w-[25vw] h-[25vw] rounded-full bg-cyan-200/20 blur-3xl animate-float -z-10 pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Game Progress Widget (Slides in after finding the first one) */}
      <div className={`fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-sm text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 transition-all duration-700 ease-out ${foundCores.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Cpu className={`w-6 h-6 ${foundCores.length === 5 ? 'text-green-400' : 'text-cyan-400 animate-pulse'}`} />
            {foundCores.length === 5 && <CheckCircle2 className="w-4 h-4 text-green-400 absolute -bottom-1 -right-1 bg-slate-900 rounded-full" />}
          </div>
          <div className="font-bold text-sm tracking-wide">
            Data Cores: <span className={foundCores.length === 5 ? 'text-green-400' : 'text-cyan-400'}>{foundCores.length}/5</span>
          </div>
        </div>
      </div>

      {/* Win Modal Overlay */}
      {showWinMessage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm animate-win-message"></div>
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white px-6 py-8 md:px-10 rounded-[2rem] shadow-[0_0_50px_rgba(6,182,212,0.5)] border border-white/20 flex flex-col items-center animate-win-message z-10 mx-4 text-center">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-yellow-300 mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              Achievement Unlocked!<br className="md:hidden" /> Master Debugger
            </h2>
            <p className="font-medium text-blue-100 text-base md:text-lg">You fully debugged the site and found all 5 Data Cores.</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 hover:scale-110 hover:-rotate-2 transition-transform cursor-pointer">
              A. Artemiou
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Publications'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-bold text-slate-500 hover:text-blue-600 hover:-translate-y-1 hover:scale-110 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 hover:scale-110 transition-transform hover-wiggle p-2"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 space-y-2 origin-top transition-all duration-200">
            {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Publications'].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollTo(item.toLowerCase());
                }}
                className="block w-full text-left px-4 py-3 text-base font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm font-bold mb-6 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default shadow-sm border border-white">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Available for Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4 hover:scale-[1.02] transition-transform origin-left">
              Angelos Artemiou
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-6">
              Biomedical Engineer & PhD Researcher
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-medium relative">
              MEng Electrical Engineer and UCL PhD Researcher/Biomedical Engineer specializing in medical instrumentation and embedded systems. Blending advanced technical rigor with proven operational leadership to deliver critical healthcare technologies.
              {/* Game Item 1: Tucked near the paragraph */}
              <HiddenCore id="core-1" className="-left-8 top-2" />
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:angelos.artemiou.23@alumni.ucl.ac.uk" className="group inline-flex items-center px-7 py-3.5 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 transition-all">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Contact Me
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }} className="group inline-flex items-center px-7 py-3.5 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-300 hover:text-blue-600 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all">
                View Experience
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-sm text-slate-500 font-medium bg-white/50 p-6 rounded-3xl border border-white shadow-sm inline-block backdrop-blur-sm hover:shadow-md transition-shadow">
              <div className="flex items-center hover:text-blue-600 hover:translate-x-1 transition-transform cursor-default"><MapPin className="w-4 h-4 mr-2 text-blue-400" /> London, N14 6JS</div>
              <div className="flex items-center hover:text-blue-600 hover:translate-x-1 transition-transform cursor-default"><Phone className="w-4 h-4 mr-2 text-indigo-400" /> +44 7719 447643</div>
              <div className="flex items-center hover:text-blue-600 hover:translate-x-1 transition-transform cursor-default"><Mail className="w-4 h-4 mr-2 text-cyan-400" /> angelos.artemiou.23@alumni.ucl.ac.uk</div>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-float">
            {/* Abstract Tech/Bio Graphic Placeholder */}
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-100 via-indigo-50 to-cyan-100 relative p-8 shadow-2xl shadow-blue-900/10 border-4 border-white group hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/40 rounded-full backdrop-blur-3xl border border-white/80"></div>
              <div className="relative h-full w-full border-4 border-dashed border-blue-300 rounded-full flex flex-col items-center justify-center text-blue-400 transition-all duration-700">
                 <Activity className="w-24 h-24 mb-4 text-blue-500 opacity-80 group-hover:animate-pulse" />
                 <Cpu className="w-16 h-16 absolute top-1/4 left-1/4 text-cyan-400 opacity-60 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                 <Code className="w-16 h-16 absolute bottom-1/4 right-1/4 text-indigo-400 opacity-60 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white/80 backdrop-blur-sm border-t border-slate-100 relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 group relative">
            <div className="bg-blue-100 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-transform">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Professional Experience</h2>
          </div>

          <div className="space-y-12">
            {/* UCL PhD */}
            <div className="relative pl-8 md:pl-0 group/card">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-bold pt-2 md:text-right md:pr-8 tracking-wide">
                  2023 — Present
                </div>
                <div className="md:col-span-3 bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm group-hover/card:shadow-2xl group-hover/card:border-blue-200 group-hover/card:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover/card:text-blue-700 transition-colors">PhD Researcher & Biomedical Engineer</h3>
                  <div className="text-blue-600 font-bold mb-6 inline-block bg-blue-50 px-3 py-1 rounded-lg mt-2">University College London (UCL), London</div>
                  <ul className="space-y-4 text-slate-600 list-none font-medium">
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-blue-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-blue-600 transition-transform" />
                      <span><strong className="text-slate-800">Advanced Software Development:</strong> Architected data processing pipelines using Python (NumPy, SciPy, Pandas, PMCX) to analyze light-tissue interactions and simulate hyperspectral imaging.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-blue-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-blue-600 transition-transform" />
                      <span><strong className="text-slate-800">Embedded Control Systems:</strong> Engineered control firmware in C/C++ for custom optical instrumentation, optimizing hardware-software integration for clinical data acquisition.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-blue-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-blue-600 transition-transform" />
                      <span><strong className="text-slate-800">Mechanical Prototyping:</strong> Led mechanical design of transportable hyperspectral imaging phantoms using SolidWorks.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-blue-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-blue-600 transition-transform" />
                      <span><strong className="text-slate-800">Simulation & Modeling:</strong> Validated diffuse optics principles using MATLAB and Simulink to design liquid phantoms for surgical deployment verification.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UCL PGTA */}
            <div className="relative pl-8 md:pl-0 group/card">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-bold pt-2 md:text-right md:pr-8 tracking-wide">
                  2023 — Present
                </div>
                <div className="md:col-span-3 bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm group-hover/card:shadow-2xl group-hover/card:border-indigo-200 group-hover/card:-translate-y-2 transition-all duration-300 relative">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover/card:text-indigo-700 transition-colors">Post Graduate Teaching Assistant (Medical Instrumentation)</h3>
                  <div className="text-indigo-600 font-bold mb-6 inline-block bg-indigo-50 px-3 py-1 rounded-lg mt-2">University College London (UCL), London</div>
                  <ul className="space-y-4 text-slate-600 list-none font-medium">
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-indigo-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-indigo-600 transition-transform" />
                      <span><strong className="text-slate-800">Technical Instruction:</strong> Delivered high-quality lectures to students on Biomedical Instrumentation, Software Engineering.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-indigo-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-indigo-600 transition-transform" />
                      <span><strong className="text-slate-800">Technical Evaluation & Feedback:</strong> Assessed rigorous engineering coursework and projects. Provided detailed, constructive feedback on embedded design, code quality, and hardware-software troubleshooting.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         
            {/* DNA Nudge */}
            <div className="relative pl-8 md:pl-0 group/card">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-bold pt-2 md:text-right md:pr-8 tracking-wide relative">
                  2021 — 2022
                  {/* Game Item 2: Hiding next to the DNA Nudge date */}
                  <HiddenCore id="core-2" className="right-4 top-10 md:-right-6 md:top-2 text-cyan-500" />
                </div>
                <div className="md:col-span-3 bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm group-hover/card:shadow-2xl group-hover/card:border-cyan-200 group-hover/card:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover/card:text-cyan-700 transition-colors">Embedded Systems Engineer</h3>
                  <div className="text-cyan-600 font-bold mb-6 inline-block bg-cyan-50 px-3 py-1 rounded-lg mt-2">DNA Nudge, London</div>
                  <ul className="space-y-4 text-slate-600 list-none font-medium">
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-cyan-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-cyan-600 transition-transform" />
                      <span>Co-developed and optimized firmware for the <strong className="text-slate-800">Nudgebox™</strong> (a portable RT-PCR COVID-19 testing device) using C/C++ during a critical pandemic timeline.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-cyan-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-cyan-600 transition-transform" />
                      <span>Executed hardware design iterations focusing on PCB layout and battery management to enhance portability and efficiency.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-cyan-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-cyan-600 transition-transform" />
                      <span>Performed root-cause troubleshooting for complex firmware/hardware integration issues prior to consumer release.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Military */}
            <div className="relative pl-8 md:pl-0 group/card">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-bold pt-2 md:text-right md:pr-8 tracking-wide">
                  2017 — 2018
                </div>
                <div className="md:col-span-3 bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm group-hover/card:shadow-2xl group-hover/card:border-emerald-200 group-hover/card:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover/card:text-emerald-700 transition-colors">Artillery Technical Officer (2nd Lieutenant)</h3>
                  <div className="text-emerald-600 font-bold mb-6 inline-block bg-emerald-50 px-3 py-1 rounded-lg mt-2">Cypriot National Guard, Cyprus</div>
                  <ul className="space-y-4 text-slate-600 list-none font-medium">
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-emerald-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-emerald-600 transition-transform" />
                      <span><strong className="text-slate-800">Technical Systems Integration:</strong> Managed real-time data links between field sensors and fire-control computers as the primary data-acquisition node.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-emerald-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-emerald-600 transition-transform" />
                      <span><strong className="text-slate-800">Leadership & C4I:</strong> Led teams of up to 28 personnel. Optimized Command and Control (C4I) meshes in high-interference environments.</span>
                    </li>
                    <li className="flex items-start group/item">
                      <ChevronRight className="w-6 h-6 text-emerald-400 mr-2 shrink-0 group-hover/item:translate-x-2 group-hover/item:text-emerald-600 transition-transform" />
                      <span><strong className="text-slate-800">High-Pressure Troubleshooting:</strong> Performed root-cause analysis on communication equipment failures in field-deployed operational conditions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50/50 backdrop-blur-sm relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 group relative">
            <div className="bg-indigo-100 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-transform">
              <FolderKanban className="w-8 h-8 text-indigo-600 group-hover:animate-bounce" />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Projects & Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-blue-200 transition-all duration-300">
              <div className="aspect-video bg-blue-50 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/hyperprobe.jpg" 
                  alt="Hyperspectral Imaging" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-md"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">Hyperspectral Glioma-Simulating Phantoms</h3>
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-blue-500">
                 <li><strong className="text-slate-800">Systems Architecture & Integration:</strong> Led the end-to-end development of novel, transportable hyperspectral imaging phantoms, bridging physical hardware with complex optical simulations.</li>
                  <li><strong className="text-slate-800">Full-Stack Implementation:</strong>
                      <ul className="pl-4 mt-2 space-y-1 text-slate-500">
                          <li><em className="font-semibold">Simulation & Digital Twinning:</em> Authored a custom instrument simulator to model complex photon-tissue interactions. Utilized <strong>Python</strong>, <strong>MATLAB</strong>, and <strong>pMCX</strong> (Monte Carlo eXtreme) to validate sensor geometries prior to physical fabrication.</li>
                          <li><em className="font-semibold">Embedded Control Systems:</em> Engineered real-time fluidic and valve control firmware utilizing <strong>Embedded C</strong> on microcontrollers (Arduino) to manage precise dynamic flow within the liquid phantoms.</li>
                          <li><em className="font-semibold">Computer Vision:</em> Developed automated data pipelines utilizing <strong>OpenCV</strong> for image segmentation and accurate spectral data extraction.</li>
                          <li><em className="font-semibold">Opto-Mechanical Design:</em> Architected the physical testing chassis and precision optical sensor mounts using <strong>SolidWorks</strong>.</li>
                      </ul>
                  </li>
                </ul>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                   <div className="pt-4 mt-auto">
                  <a 
                    href="#publications" 
                    onClick={(e) => { e.preventDefault(); scrollTo('publications'); }}
                    className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-xl text-sm font-bold text-blue-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Related Publications
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-cyan-200 transition-all duration-300">
              <div className="aspect-video bg-cyan-50 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/human_subj.JPG" 
                  alt="PCB Electronics" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-md rounded-xl"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">Custom Vector Network Analyzer for Respiratory Plethysmography Applications</h3>
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-cyan-500">
                  <li><strong className="text-slate-800">Embedded Systems Architecture:</strong> Architected and developed a complete low-power readout system for a novel 3D-knitted respiratory inductance plethysmography (RIP) sensor, achieving accuracy comparable to clinical-grade component analyzers.</li>
                  <li><strong className="text-slate-800">Full-Stack Implementation:</strong>
                      <ul className="pl-4 mt-2 space-y-1 text-slate-500">
                          <li><em className="font-semibold">DSP & Firmware:</em> Engineered bare-metal C firmware for an <strong>STM32</strong> microcontroller. Implemented custom DSP pipelines utilizing <strong>Goertzel's Algorithm</strong> and intentional undersampling techniques to extract high-frequency impedance data with minimal power draw. Optimized ADC data pipelines using <strong>Direct Memory Access (DMA)</strong>.</li>
                          <li><em className="font-semibold">Mixed-Signal Hardware:</em> Designed and prototyped the complete analogue front-end. Translated digital PWM into high-frequency (1MHz) test waveforms using custom passive filtering and BJT-based voltage buffers.</li>
                                  <li><em className="font-semibold">Telemetry & Visualization:</em> Built a continuous, real-time data acquisition pipeline to transmit sensor telemetry via <strong>UART</strong>, utilizing <strong>Python</strong> (PySerial) and <strong>MATLAB</strong> for signal decoding and breathing pattern visualization.</li>
                      </ul>
                  </li>
                     </ul>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <a href="/ULP IP Readout.pdf" download className="inline-flex items-center px-4 py-2 bg-cyan-50 rounded-xl text-sm font-bold text-cyan-700 hover:text-white hover:bg-cyan-600 hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit">
                    <Download className="w-4 h-4 mr-2" />
                    Download Project PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card with Bullet Points */}
            <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-pink-200 transition-all duration-300">
              <div className="aspect-video bg-black relative overflow-hidden flex items-center justify-center">
                <video 
                  src="/5678-Robotic-Dance-Partner.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  alt="Project Title" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">5678 Robotic Dance Partner</h3>
                
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-pink-500">
                  <li><strong className="text-slate-800">Systems Integration:</strong> Led the end-to-end architecture of the robotic platform. Successfully merged asynchronous subsystems (computer vision, behavioral logic, and locomotion) into a unified, latency-optimized control loop.</li>
                  <li><strong className="text-slate-800">Tech Stack & Implementation:</strong> Engineered real-time motion control firmware in <strong>Embedded C</strong> for microcontrollers. Developed the computer vision and behavioral pipelines using <strong>Python</strong> and <strong>OpenCV</strong>, and built a responsive <strong>React</strong> web interface for user interaction and media playback.</li>
                </ul>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                </div>
              </div>
            </div>
                
            <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-indigo-200 transition-all duration-300">
              <div className="aspect-video bg-indigo-50 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/Rover.png" 
                  alt="PCB Electronics" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-lg"
                />
                {/* Game Item 3: Hiding on the Rover image wrapper */}
                <HiddenCore id="core-3" className="top-4 right-4 text-indigo-900" />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">Multi-Sensor Wi-Fi Rover (Personal Project)</h3>
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-indigo-500">
                 <li><strong className="text-slate-800">Implementation & Tech Stack:</strong>
                    <ul className="pl-4 mt-2 space-y-1 text-slate-500">
                        <li><em className="font-semibold">Mechanical Design:</em> Architected the custom chassis, wheel assemblies, and sensor mounts using <strong>SolidWorks</strong>, and fabricated the physical prototype via FDM <strong>3D printing</strong>.</li>
                        <li><em className="font-semibold">Embedded Firmware:</em> Engineered the control firmware in <strong>C</strong> (Arduino + Adafruit WiFi shield), integrating a multi-sensor array (433MHz RF, Infrared, and Ultrasonic) for spatial and signal detection.</li>
                        <li><em className="font-semibold">Mobile Interface & Comms:</em> Developed a custom <strong>Python script (TKinter)</strong> to serve as the primary GUI and interface with the Arduino. Established a low-latency <strong>Wi-Fi</strong> telemetry link (TCP/UDP) for real-time remote control and sensor data visualization.</li>
                    </ul>
                </li>
                     </ul>
                <div className="pt-6 border-t border-slate-100 mt-auto">

                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-amber-200 transition-all duration-300">
              <div className="aspect-video bg-amber-50 relative overflow-hidden flex items-center justify-center p-4">
                <img 
                  src="/waveform.jpg" 
                  alt="PCB Electronics" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl drop-shadow-sm"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">Mini Music Synthesizer (Personal Project)</h3>
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-amber-500">
                 <li><strong className="text-slate-800">Implementation & Tech Stack:</strong>
                  <ul className="pl-4 mt-2 space-y-1 text-slate-500">
                    <li><em className="font-semibold">Synthesis Engine:</em> Engineered a <strong>Numerically Controlled Oscillator (NCO)</strong> using <strong>Phase Accumulation</strong> to read from waveform Look-Up Tables (LUTs). Implemented real-time frequency scaling for multi-octave performance.</li>
                    <li><em className="font-semibold">Multitasking:</em> Utilized <strong>FreeRTOS</strong> to manage asynchronous tasks, ensuring the high-priority audio interrupt service routine (ISR) remained jitter-free while simultaneously processing user input from the keyboard module.</li>
                    <li><em className="font-semibold">Signal Modulation:</em> Developed a software-based <strong>Low-Frequency Oscillator (LFO)</strong> to modulate the phase increment, creating a realistic <strong>Vibrato</strong> effect.</li>
                    <li><em className="font-semibold">Networking:</em> Implemented a <strong>UART-based communication protocol</strong> to allow synchronization and note-sharing between multiple synthesizer units.</li>
                </ul>
              </li>
                     </ul>
                <div className="pt-6 border-t border-slate-100 mt-auto">

                </div>
              </div>
            </div>

             <div className="bg-white rounded-[2rem] shadow-sm border-2 border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 hover:border-emerald-200 transition-all duration-300">
              <div className="aspect-video bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/nas.jpg" 
                  alt="NAS" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">Custom Network Attached Storage (NAS) & Private Cloud (Personal Project)</h3>
                <ul className="list-disc pl-5 text-slate-600 font-medium text-sm mb-6 flex-grow space-y-2 marker:text-emerald-500">
                 <li><strong className="text-slate-800">Implementation & Tech Stack:</strong>
                  <ul className="pl-4 mt-2 space-y-1 text-slate-500">
                      <li><em className="font-semibold">Secure Remote Infrastructure:</em> Set up an encrypted remote-access pipeline using <strong>Tailscale</strong>, allowing for secure, low-latency file synchronization from external networks without exposing local ports to the public internet.</li>
                      
                      <li><em className="font-semibold">Network Protocol Optimization:</em> Configured and tuned <strong>SMB/CIFS and NFS</strong> shares for cross-platform compatibility. Optimized I/O throughput by managing USB 3.0 bus contention and implementing filesystem-level performance tweaks.</li>
                      <li><em className="font-semibold">System Administration:</em> Automated system maintenance via <strong>Cron jobs</strong> for rsync backups and monitored hardware health using <strong>S.M.A.R.T.</strong> diagnostic tools to ensure 99.9% data uptime.</li>
                  </ul>
              </li>
                     </ul>
                <div className="pt-6 border-t border-slate-100 mt-auto">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white/80 backdrop-blur-sm border-t border-slate-100 relative overflow-hidden">
        {/* Playful background blob for skills */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16 group relative">
            <div className="bg-cyan-100 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-transform">
              <Cpu className="w-8 h-8 text-cyan-600 group-hover:animate-pulse" />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Technical Expertise</h2>
            {/* Game Item 4: Tucked in the Skills title area */}
            <HiddenCore id="core-4" className="ml-6 top-1 text-cyan-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Programming */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6 text-slate-900 group">
                <div className="p-2 bg-cyan-50 rounded-xl mr-3 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-extrabold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Python', 'C / C++', 'MATLAB', 'Simulink', 'VHDL', 'NumPy', 'SciPy', 'Pandas'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all cursor-crosshair duration-200">{skill}</span>
                ))}
              </div>
            </div>

            {/* Electronics Design */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6 text-slate-900 group">
                <div className="p-2 bg-blue-50 rounded-xl mr-3 group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-extrabold">Electronics & Hardware</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Altium Designer', 'KiCAD', 'LTspice', 'IC Design (Cadence)', 'ARM', 'Arduino', 'PCB Layout', 'Oscilloscope'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all cursor-crosshair duration-200">{skill}</span>
                ))}
              </div>
            </div>

            {/* Biomedical */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-rose-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6 text-slate-900 group">
                <div className="p-2 bg-rose-50 rounded-xl mr-3 group-hover:scale-110 transition-transform">
                  <Activity className="w-7 h-7 text-rose-400" />
                </div>
                <h3 className="text-xl font-extrabold">Biomedical</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Diffuse Optics', 'ECG/EEG Signal Processing', 'Medical Imaging', 'Biosensor Integration', 'Hyperspectral Imaging'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all cursor-crosshair duration-200">{skill}</span>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-slate-100 md:col-span-2 lg:col-span-3 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
              <div className="flex items-center mb-6 text-slate-900 group">
                <div className="p-2 bg-indigo-50 rounded-xl mr-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-indigo-500 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 font-medium">
                <div className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-900 transition-colors"><strong className="text-indigo-700 block mb-1">Leadership & Mentorship:</strong> Proven ability to lead teams (up to 28 personnel) and mentor university students.</div>
                <div className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-900 transition-colors"><strong className="text-indigo-700 block mb-1">Collaborative Problem-Solving:</strong> Multidisciplinary team operations, troubleshooting critical medical device firmware.</div>
                <div className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-900 transition-colors"><strong className="text-indigo-700 block mb-1">Strategic Planning:</strong> Skilled in resource management and executing complex operational plans under pressure.</div>
                <div className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-900 transition-colors"><strong className="text-indigo-700 block mb-1">Technical Communication:</strong> Delivering high-quality lectures and translating complex engineering data to stakeholders.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section id="education" className="py-24 bg-slate-50/50 backdrop-blur-sm border-t border-slate-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-12 group">
              <div className="bg-blue-100 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-all">
                <GraduationCap className="w-8 h-8 text-blue-600 group-hover:animate-bounce" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Education</h2>
            </div>
            
            <div className="space-y-10">
              <div className="border-l-4 border-blue-200 pl-8 relative group hover:border-blue-400 transition-colors">
                {/* Pulsing playfully dot */}
                <div className="absolute w-5 h-5 bg-blue-400 rounded-full -left-[12px] top-1 opacity-40 animate-ping"></div>
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1.5 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-extrabold rounded-lg mb-3">2024 — Present</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">PhD Medical Imaging</h3>
                  <div className="text-slate-500 font-bold">University College London (UCL)</div>
                </div>
              </div>

              <div className="border-l-4 border-slate-200 pl-8 relative group hover:border-slate-300 transition-colors">
                <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[10px] top-1.5 group-hover:bg-slate-400 transition-colors"></div>
                
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-extrabold rounded-lg mb-3">2023 — 2024</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">MRes Medical Imaging</h3>
                  <div className="text-slate-500 font-bold mb-2">University College London (UCL)</div>
                  <div className="text-sm font-medium text-slate-500 bg-slate-50 inline-block px-3 py-1 rounded-md">Upper Second Class Honours</div>
                </div>
              </div>

              <div className="border-l-4 border-slate-200 pl-8 relative group hover:border-slate-300 transition-colors">
                <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[10px] top-1.5 group-hover:bg-slate-400 transition-colors"></div>
                
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-extrabold rounded-lg mb-3">2018 — 2022</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">MEng Electrical and Electronic Engineering</h3>
                  <div className="text-slate-500 font-bold mb-2">Imperial College London</div>
                  <div className="text-sm font-medium text-slate-500 bg-slate-50 inline-block px-3 py-1 rounded-md mb-4">Upper Second Class Honours</div>
                  <div className="text-sm text-slate-700 font-medium bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors">
                    <strong className="text-slate-900">Project:</strong> Achieved 74% on Development of Low Power Read-Out Electronics for 3D Knitted Inductive Plethysmography.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center mb-12 group">
              <div className="bg-amber-100 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-all">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Awards</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-200 rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform"></div>
                
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h3 className="text-xl font-extrabold text-amber-900">Duane F. Bruley Travel Award</h3>
                  <span className="text-sm font-extrabold text-amber-700 bg-amber-200/50 px-3 py-1 rounded-xl shadow-sm">2025</span>
                </div>
                <div className="text-sm font-bold text-amber-700 mb-4 relative z-10">ISOTT, Thessaloniki</div>
                <p className="text-base font-medium text-slate-600 relative z-10">Awarded competitive travel grant to present research on Hyperspectral Imaging at the International Society on Oxygen Transport to Tissue annual meeting.</p>
              </div>

              <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 hover:border-slate-200 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-extrabold text-slate-900">Poster Excellence Award</h3>
                  <span className="text-sm font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl shadow-sm">2024</span>
                </div>
                <div className="text-sm font-bold text-slate-500 mb-4">FNIRS, Birmingham</div>
                <p className="text-base font-medium text-slate-600">Received recognition for outstanding visual presentation and research quality among presenters at the Society for functional Near-Infrared Spectroscopy conference.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Playful dark mode blobs */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-900/30 rounded-full mix-blend-screen blur-3xl -z-10 animate-float pointer-events-none"></div>
        <div className="absolute right-10 bottom-10 w-64 h-64 bg-indigo-900/30 rounded-full mix-blend-screen blur-3xl -z-10 animate-float-delayed pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-16 group">
            <div className="bg-cyan-900/50 p-3 rounded-2xl mr-4 group-hover:-translate-y-1 transition-transform">
              <BookOpen className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Selected Publications</h2>
          </div>

          <div className="space-y-6">
            
            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-gradient-to-br from-cyan-900 to-blue-900 text-cyan-300 font-extrabold px-4 py-2 rounded-xl text-sm shrink-0 shadow-inner group-hover:scale-110 transition-transform">2025</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-300 transition-colors leading-snug">A Liquid Phantom for Validating Hyperspectral Imaging in Brain Tumour Resection</h3>
                  <p className="text-slate-400 text-base font-medium leading-relaxed mb-0">
                    <strong className="text-slate-200">Artemiou, A.</strong>, Lange, F., Caredda, C., Giannoni, L., Montcel, B., and Tachtsidis, I. <br/>
                    <em className="text-slate-500 mt-2 block">European Conferences on Biomedical Optics 2025, Technical Digest Series (Optica Publishing Group, 2025)</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-gradient-to-br from-cyan-900 to-blue-900 text-cyan-300 font-extrabold px-4 py-2 rounded-xl text-sm shrink-0 shadow-inner group-hover:scale-110 transition-transform">2025</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-300 transition-colors leading-snug">Versatile and comprehensive hyperspectral imaging tool for molecular neuronavigation: a case study on cerebral gliomas</h3>
                  <p className="text-slate-400 text-base font-medium leading-relaxed mb-5">
                    Nardini, D., Toaha, A., Bonaudo, C., Ezhov, I., <strong className="text-slate-200">Artemiou, A.</strong>, et al. <br/>
                    <em className="text-slate-500 mt-2 block">Journal of Biomedical Optics, 30(12), 126007.</em>
                  </p>
                  <a href="https://doi.org/10.1117/1.jbo.30.12.126007" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 rounded-xl text-sm font-bold text-cyan-400 hover:bg-cyan-900/50 hover:text-cyan-300 hover:shadow-lg transition-all w-fit">
                    View DOI <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-slate-800 hover:border-slate-600 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-slate-800 text-slate-300 font-extrabold px-4 py-2 rounded-xl text-sm shrink-0 shadow-inner group-hover:scale-110 transition-transform">2024</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors leading-snug">Transportable hyperspectral imaging setup based on fast, high-density spectral scanning for in situ quantitative biochemical mapping of fresh tissue biopsies</h3>
                  <p className="text-slate-400 text-base font-medium leading-relaxed mb-5">
                    Giannoni, L., Marradi, M., Scibilia, K., Ezhov, I., Bonaudo, C., <strong className="text-slate-200">Artemiou, A.</strong>, et al. <br/>
                    <em className="text-slate-500 mt-2 block">Journal of Biomedical Optics, 29(09).</em>
                  </p>
                   <a href="https://doi.org/10.1117/1.jbo.29.9.093508" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all w-fit">
                    View DOI <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-16 text-center border-t border-slate-900 relative">
        <div className="max-w-[1500px] mx-auto px-4 relative">
          
          <div className="flex justify-center space-x-6 mb-8 relative">
             {/* Game Item 5: Hiding in the footer */}
            <HiddenCore id="core-5" className="-left-12 top-0" />
            
            <a href="mailto:angelos.artemiou.23@alumni.ucl.ac.uk" className="group bg-slate-800 p-4 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span className="sr-only">Email</span>
            </a>
            {/* Add LinkedIn / GitHub links here when available */}
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Angelos Artemiou. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}