import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, ExternalLink, ChevronRight, 
  Briefcase, GraduationCap, Award, BookOpen, Cpu, Code, Activity, ShieldCheck,
  FolderKanban, Download
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl tracking-tight text-blue-900">
              A. Artemiou
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Publications'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button - simplified for artifact */}
            <div className="md:hidden flex items-center">
              <button className="text-slate-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Available for New Opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              Angelos Artemiou
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
              Biomedical Engineer & PhD Researcher
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              MEng Electrical Engineer and UCL PhD Researcher/Biomedical Engineer specializing in medical instrumentation and embedded systems. Blending advanced technical rigor with proven operational leadership to deliver critical healthcare technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:angelos.artemiou.23@alumni.ucl.ac.uk" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }} className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm hover:shadow">
                View Experience
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-sm text-slate-500">
              <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> London, N14 6JS</div>
              <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +44 7719 447643</div>
              <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /> angelos.artemiou.23@alumni.ucl.ac.uk</div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract Tech/Bio Graphic Placeholder */}
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 relative p-8 shadow-2xl shadow-blue-900/5 border border-white">
              <div className="absolute inset-0 bg-white/40 rounded-full backdrop-blur-3xl border border-white/60"></div>
              <div className="relative h-full w-full border-2 border-dashed border-blue-200 rounded-full flex flex-col items-center justify-center text-blue-400">
                 <Activity className="w-24 h-24 mb-4 text-blue-500 opacity-80" />
                 <Cpu className="w-16 h-16 absolute top-1/4 left-1/4 text-cyan-400 opacity-60" />
                 <Code className="w-16 h-16 absolute bottom-1/4 right-1/4 text-indigo-400 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
          </div>

          <div className="space-y-12">
            {/* UCL PhD */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-medium pt-1">
                  2023 — Present
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">PhD Researcher & Biomedical Engineer</h3>
                  <div className="text-blue-600 font-medium mb-4">University College London (UCL), London</div>
                  <ul className="space-y-3 text-slate-600 list-none">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Advanced Software Development:</strong> Architected data processing pipelines using Python (NumPy, SciPy, Pandas, PMCX) to analyze light-tissue interactions and simulate hyperspectral imaging.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Embedded Control Systems:</strong> Engineered control firmware in C/C++ for custom optical instrumentation, optimizing hardware-software integration for clinical data acquisition.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Mechanical Prototyping:</strong> Led mechanical design of transportable hyperspectral imaging phantoms using SolidWorks.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Simulation & Modeling:</strong> Validated diffuse optics principles using MATLAB and Simulink to design liquid phantoms for surgical deployment verification.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-12">
            {/* UCL PGTA */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-medium pt-1">
                  2023 — Present
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">Post Graduate Teaching Assistant (Medical Instrumentation)</h3>
                  <div className="text-blue-600 font-medium mb-4">University College London (UCL), London</div>
                  <ul className="space-y-3 text-slate-600 list-none">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Technical Instruction:</strong> Delivered high-quality lectures to students on Biomedical Instrumentation, Software Engineering.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Technical Evaluation & Feedback:</strong> Assessed rigorous engineering coursework and projects. Provided detailed, constructive feedback on embedded design, code quality, and hardware-software troubleshooting.</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
         
         
          </div>
            {/* DNA Nudge */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-medium pt-1">
                  2021 — 2022
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">Embedded Systems Engineer</h3>
                  <div className="text-blue-600 font-medium mb-4">DNA Nudge, London</div>
                  <ul className="space-y-3 text-slate-600 list-none">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Co-developed and optimized firmware for the <strong>Nudgebox™</strong> (a portable RT-PCR COVID-19 testing device) using C/C++ during a critical pandemic timeline.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Executed hardware design iterations focusing on PCB layout and battery management to enhance portability and efficiency.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>Performed root-cause troubleshooting for complex firmware/hardware integration issues prior to consumer release.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Military */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 text-slate-500 font-medium pt-1">
                  2017 — 2018
                </div>
                <div className="md:col-span-3 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900">Artillery Technical Officer (2nd Lieutenant)</h3>
                  <div className="text-blue-600 font-medium mb-4">Cypriot National Guard, Cyprus</div>
                  <ul className="space-y-3 text-slate-600 list-none">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Technical Systems Integration:</strong> Managed real-time data links between field sensors and fire-control computers as the primary data-acquisition node.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>Leadership & C4I:</strong> Led teams of up to 28 personnel. Optimized Command and Control (C4I) meshes in high-interference environments.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span><strong>High-Pressure Troubleshooting:</strong> Performed root-cause analysis on communication equipment failures in field-deployed operational conditions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <FolderKanban className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Projects & Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            

            {/* Project Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/hyperprobe.jpg" 
                  alt="Hyperspectral Imaging" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hyperspectral Glioma-Simulating Phantoms</h3>
                <ul className="list-disc pl-4 text-slate-600 text-sm mb-4 flex-grow space-y-1.5 marker:text-blue-500">
                 <li><strong>Systems Architecture & Integration:</strong> Led the end-to-end development of novel, transportable hyperspectral imaging phantoms, bridging physical hardware with complex optical simulations.</li>
                  <li><strong>Full-Stack Implementation:</strong>
                      <ul>
                          <li><em>Simulation & Digital Twinning:</em> Authored a custom instrument simulator to model complex photon-tissue interactions. Utilized <strong>Python</strong>, <strong>MATLAB</strong>, and <strong>pMCX</strong> (Monte Carlo eXtreme) to validate sensor geometries prior to physical fabrication.</li>
                          
                          <li><em>Embedded Control Systems:</em> Engineered real-time fluidic and valve control firmware utilizing <strong>Embedded C</strong> on microcontrollers (Arduino) to manage precise dynamic flow within the liquid phantoms.</li>
                          <li><em>Computer Vision:</em> Developed automated data pipelines utilizing <strong>OpenCV</strong> for image segmentation and accurate spectral data extraction.</li>
                          <li><em>Opto-Mechanical Design:</em> Architected the physical testing chassis and precision optical sensor mounts using <strong>SolidWorks</strong>.</li>
                      </ul>
                  </li>
                </ul>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                   <div className="pt-4 border-t border-slate-100 mt-auto">
                  <a 
                    href="#publications" 
                    onClick={(e) => { e.preventDefault(); scrollTo('publications'); }}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Related Publications
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/human_subj.JPG" 
                  alt="PCB Electronics" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Vector Network Analyzer for Respiratory Plethysmography Applications</h3>
                <ul className="list-disc pl-4 text-slate-600 text-sm mb-4 flex-grow space-y-1.5 marker:text-blue-500">
                  <li><strong>Embedded Systems Architecture:</strong> Architected and developed a complete low-power readout system for a novel 3D-knitted respiratory inductance plethysmography (RIP) sensor, achieving accuracy comparable to clinical-grade component analyzers.</li>
                  <li><strong>Full-Stack Implementation:</strong>
                      <ul>
                          <li><em>DSP & Firmware:</em> Engineered bare-metal C firmware for an <strong>STM32</strong> microcontroller. Implemented custom DSP pipelines utilizing <strong>Goertzel's Algorithm</strong> and intentional undersampling techniques to extract high-frequency impedance data with minimal power draw. Optimized ADC data pipelines using <strong>Direct Memory Access (DMA)</strong>.</li>
                          <li><em>Mixed-Signal Hardware:</em> Designed and prototyped the complete analogue front-end. Translated digital PWM into high-frequency (1MHz) test waveforms using custom passive filtering and BJT-based voltage buffers.</li>
                                  <li><em>Telemetry & Visualization:</em> Built a continuous, real-time data acquisition pipeline to transmit sensor telemetry via <strong>UART</strong>, utilizing <strong>Python</strong> (PySerial) and <strong>MATLAB</strong> for signal decoding and breathing pattern visualization.</li>
                      </ul>
                  </li>
                     </ul>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <a href="/ULP IP Readout.pdf" download className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Project PDF
                  </a>
                </div>
              </div>
            </div>
              {/* Project Card with Bullet Points */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-black relative overflow-hidden flex items-center justify-center">
                <video 
                  src="/5678-Robotic-Dance-Partner.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  alt="Project Title" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">5678 Robotic Dance Partner</h3>
                
                {/* This is the new bulleted list section! 
                  - list-disc: adds the bullet dots
                  - pl-4: indents the bullets slightly
                  - space-y-1.5: adds comfortable spacing between each bullet
                  - marker:text-blue-500: makes the bullet dots blue
                */}
                <ul className="list-disc pl-4 text-slate-600 text-sm mb-4 flex-grow space-y-1.5 marker:text-blue-500">
                  <li><strong>Systems Integration:</strong> Led the end-to-end architecture of the robotic platform. Successfully merged asynchronous subsystems (computer vision, behavioral logic, and locomotion) into a unified, latency-optimized control loop.</li>
                  <li><strong>Tech Stack & Implementation:</strong> Engineered real-time motion control firmware in <strong>Embedded C</strong> for microcontrollers. Developed the computer vision and behavioral pipelines using <strong>Python</strong> and <strong>OpenCV</strong>, and built a responsive <strong>React</strong> web interface for user interaction and media playback.</li>
                </ul>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Cpu className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Programming */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4 text-slate-900">
                <Code className="w-6 h-6 mr-3 text-cyan-500" />
                <h3 className="text-lg font-bold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C / C++', 'MATLAB', 'Simulink', 'VHDL', 'NumPy', 'SciPy', 'Pandas'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Electronics Design */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4 text-slate-900">
                <Cpu className="w-6 h-6 mr-3 text-blue-500" />
                <h3 className="text-lg font-bold">Electronics & Hardware</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Altium Designer', 'KiCAD', 'LTspice', 'IC Design (Cadence)', 'ARM', 'Arduino', 'PCB Layout', 'Oscilloscope'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Biomedical */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-4 text-slate-900">
                <Activity className="w-6 h-6 mr-3 text-red-400" />
                <h3 className="text-lg font-bold">Biomedical</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Diffuse Optics', 'ECG/EEG Signal Processing', 'Medical Imaging', 'Biosensor Integration', 'Hyperspectral Imaging'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-4 text-slate-900">
                <ShieldCheck className="w-6 h-6 mr-3 text-indigo-500" />
                <h3 className="text-lg font-bold">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 text-sm">
                <div><strong>Leadership & Mentorship:</strong> Proven ability to lead teams (up to 28 personnel) and mentor university students.</div>
                <div><strong>Collaborative Problem-Solving:</strong> Multidisciplinary team operations, troubleshooting critical medical device firmware.</div>
                <div><strong>Strategic Planning:</strong> Skilled in resource management and executing complex operational plans under pressure.</div>
                <div><strong>Technical Communication:</strong> Delivering high-quality lectures and translating complex engineering data to stakeholders.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section id="education" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-10">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-2 border-blue-200 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5"></div>
                <div className="text-sm font-bold text-blue-600 mb-1">2024 — Present</div>
                <h3 className="text-xl font-bold text-slate-900">PhD Medical Imaging</h3>
                <div className="text-slate-600">University College London (UCL)</div>
              </div>

              <div className="border-l-2 border-slate-200 pl-6 relative">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                <div className="text-sm font-bold text-slate-500 mb-1">2023 — 2024</div>
                <h3 className="text-xl font-bold text-slate-900">MRes Medical Imaging</h3>
                <div className="text-slate-600">University College London (UCL)</div>
                <div className="text-sm text-slate-500 mt-1">Upper Second Class Honours</div>
              </div>

              <div className="border-l-2 border-slate-200 pl-6 relative">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                <div className="text-sm font-bold text-slate-500 mb-1">2018 — 2022</div>
                <h3 className="text-xl font-bold text-slate-900">MEng Electrical and Electronic Engineering</h3>
                <div className="text-slate-600">Imperial College London</div>
                <div className="text-sm text-slate-500 mt-1">Upper Second Class Honours</div>
                <div className="text-sm text-slate-600 mt-2 bg-slate-50 p-3 rounded border border-slate-100">
                  <strong>Project:</strong> Achieved 74% on Development of Low Power Read-Out Electronics for 3D Knitted Inductive Plethysmography.
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center mb-10">
              <Award className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-900">Awards</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-blue-900">Duane F. Bruley Travel Award</h3>
                  <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">2025</span>
                </div>
                <div className="text-sm text-blue-800 mb-2">ISOTT, Thessaloniki</div>
                <p className="text-sm text-slate-600">Awarded competitive travel grant to present research on Hyperspectral Imaging at the International Society on Oxygen Transport to Tissue annual meeting.</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Poster Excellence Award</h3>
                  <span className="text-sm font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded">2024</span>
                </div>
                <div className="text-sm text-slate-600 mb-2">FNIRS, Birmingham</div>
                <p className="text-sm text-slate-600">Received recognition for outstanding visual presentation and research quality among presenters at the Society for functional Near-Infrared Spectroscopy conference.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 text-cyan-400 mr-4" />
            <h2 className="text-3xl font-bold">Selected Publications</h2>
          </div>

          <div className="space-y-6">
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-cyan-900/50 text-cyan-300 font-bold px-3 py-1 rounded text-sm shrink-0">2025</div>
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">A Liquid Phantom for Validating Hyperspectral Imaging in Brain Tumour Resection</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    <strong>Artemiou, A.</strong>, Lange, F., Caredda, C., Giannoni, L., Montcel, B., and Tachtsidis, I. <br/>
                    <em>European Conferences on Biomedical Optics 2025, Technical Digest Series (Optica Publishing Group, 2025)</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-cyan-900/50 text-cyan-300 font-bold px-3 py-1 rounded text-sm shrink-0">2025</div>
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">Versatile and comprehensive hyperspectral imaging tool for molecular neuronavigation: a case study on cerebral gliomas</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    Nardini, D., Toaha, A., Bonaudo, C., Ezhov, I., <strong>Artemiou, A.</strong>, et al. <br/>
                    <em>Journal of Biomedical Optics, 30(12), 126007.</em>
                  </p>
                  <a href="https://doi.org/10.1117/1.jbo.30.12.126007" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300">
                    View DOI <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded text-sm shrink-0">2024</div>
                <div>
                  <h3 className="text-lg font-medium text-slate-100 mb-2">Transportable hyperspectral imaging setup based on fast, high-density spectral scanning for in situ quantitative biochemical mapping of fresh tissue biopsies</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    Giannoni, L., Marradi, M., Scibilia, K., Ezhov, I., Bonaudo, C., <strong>Artemiou, A.</strong>, et al. <br/>
                    <em>Journal of Biomedical Optics, 29(09).</em>
                  </p>
                   <a href="https://doi.org/10.1117/1.jbo.29.9.093508" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300">
                    View DOI <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center border-t border-slate-800">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:angelos.artemiou.23@alumni.ucl.ac.uk" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            {/* Add LinkedIn / GitHub links here when available */}
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Angelos Artemiou. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}