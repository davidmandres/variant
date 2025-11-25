import React, { useState, useEffect } from 'react';
import { Shield, Check, Users, Menu, X, ArrowRight, ChevronRight, BarChart3, Lock, Search, Filter, Download, FileText, ChevronLeft, TrendingUp, TrendingDown, Percent, Calendar, Target, Eye, BookOpen, Star, Zap, FileBarChart, Mail, ArrowLeft, Share2, Printer, Bookmark, MessageSquare, Send } from 'lucide-react';


const App = () => {
  const [activePage, setActivePage] = useState('home'); 
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openReport = (id) => {
    setSelectedReportId(id);
    setActivePage('report');
    window.scrollTo(0, 0);
  };

  const isAuthPage = activePage === 'signup' || activePage === 'login';

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      {!isAuthPage && (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-neutral-200 py-4' : 'bg-white border-transparent py-6'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <div onClick={() => navigateTo('home')} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xl font-medium group-hover:scale-105 transition-transform">
                V
              </div>
              <span className="text-xl font-bold tracking-wide">VARIANT</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigateTo('research')} className={`text-sm font-medium hover:text-black transition-colors ${activePage === 'research' ? 'text-black underline underline-offset-4' : 'text-neutral-600'}`}>Research</button>
              <button onClick={() => navigateTo('track-record')} className={`text-sm font-medium hover:text-black transition-colors ${activePage === 'track-record' ? 'text-black underline underline-offset-4' : 'text-neutral-600'}`}>Track Record</button>
              <button onClick={() => navigateTo('pricing')} className={`text-sm font-medium hover:text-black transition-colors ${activePage === 'pricing' ? 'text-black underline underline-offset-4' : 'text-neutral-600'}`}>Pricing</button>
              <button onClick={() => navigateTo('about')} className={`text-sm font-medium hover:text-black transition-colors ${activePage === 'about' ? 'text-black underline underline-offset-4' : 'text-neutral-600'}`}>About</button>
              <button onClick={() => navigateTo('login')} className="px-5 py-2 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
                Member Login
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-lg">
              <button onClick={() => navigateTo('research')} className="text-lg font-medium text-left">Research</button>
              <button onClick={() => navigateTo('track-record')} className="text-lg font-medium text-left">Track Record</button>
              <button onClick={() => navigateTo('pricing')} className="text-lg font-medium text-left">Pricing</button>
              <button onClick={() => navigateTo('about')} className="text-lg font-medium text-left">About</button>
              <button onClick={() => navigateTo('contact')} className="text-lg font-medium text-left">Contact</button>
              <button onClick={() => navigateTo('login')} className="w-full py-3 bg-black text-white font-medium">Member Login</button>
            </div>
          )}
        </nav>
      )}

      {/* Main Content */}
      <main>
        {activePage === 'home' && <LandingPage navigateTo={navigateTo} openReport={openReport} />}
        {activePage === 'research' && <ResearchPage openReport={openReport} />}
        {activePage === 'track-record' && <TrackRecordPage />}
        {activePage === 'about' && <AboutPage navigateTo={navigateTo} />}
        {activePage === 'pricing' && <PricingPage navigateTo={navigateTo} />}
        {activePage === 'contact' && <ContactPage navigateTo={navigateTo} />}
        {activePage === 'signup' && <SignupPage navigateTo={navigateTo} />}
        {activePage === 'login' && <LoginPage navigateTo={navigateTo} />}
        {activePage === 'report' && <ReportDetail reportId={selectedReportId} navigateTo={navigateTo} />}
        {(activePage === 'privacy' || activePage === 'terms') && <LegalPage type={activePage} navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      {!isAuthPage && (
        <footer className="bg-white pt-20 pb-10 px-6 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-medium">V</div>
                <span className="text-lg font-bold">VARIANT</span>
              </div>
              <p className="text-neutral-500 max-w-xs">
                Empowering retail investors with the depth of institutional research and the clarity of independent thought.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-neutral-600">
                <li><button onClick={() => navigateTo('research')} className="hover:text-black">Research Archive</button></li>
                <li><button onClick={() => navigateTo('track-record')} className="hover:text-black">Performance</button></li>
                <li><button onClick={() => navigateTo('pricing')} className="hover:text-black">Pricing</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-neutral-600">
                <li><button onClick={() => navigateTo('about')} className="hover:text-black">About Us</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-black">Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto pt-8 border-t border-neutral-100 text-center md:text-left text-sm text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Variant Research. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => navigateTo('privacy')} className="hover:text-black">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-black">Terms of Service</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

// --- Landing Page Component ---

const LandingPage = ({ navigateTo, openReport }) => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Independent",
      description: "No investment banking conflicts. No sponsored coverage. Just honest research."
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Transparent",
      description: "Every model is downloadable. Every assumption is auditable. Complete transparency."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Actionable",
      description: "Focused on valuation work that matters. No market commentary. No noise."
    }
  ];

  const proFeatures = [
    "Unlimited Research products",
    "Full Archive Access (127+ reports)",
    "Discord Community Access",
    "1 Stock Coverage Request per month",
    "24h Email Support"
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold tracking-wider uppercase mb-8 text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            New Report: Palantir Valuation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            THE VARIANT VIEW.
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Institutional-grade equity research for the retail investor. Solving the information gap with absolute transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openReport(1)} className="w-full sm:w-auto px-8 py-4 bg-black text-white font-semibold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
              Read Latest Report
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigateTo('research')} className="w-full sm:w-auto px-8 py-4 bg-white text-black border-2 border-neutral-200 font-semibold text-lg hover:border-black transition-all">
              View Sample Model
            </button>
          </div>
        </div>
      </header>

      {/* Value Props */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:translate-y-[-4px] transition-transform duration-300">
                <div className="mb-6 p-4 rounded-full bg-white border border-neutral-200 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Plan Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Context */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Professional research, <br/>democratized pricing.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Most institutional research costs $20,000+ per year. We believe individual investors deserve the same quality of data and modeling without the institutional price tag.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
                  <div className="text-3xl font-bold mb-1">127</div>
                  <div className="text-sm text-neutral-500">Reports Archived</div>
                </div>
                <div className="p-4 bg-neutral-50 rounded border border-neutral-100">
                  <div className="text-3xl font-bold mb-1">24h</div>
                  <div className="text-sm text-neutral-500">Support Response</div>
                </div>
              </div>
            </div>

            {/* Right Side: The Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-neutral-200 to-neutral-100 rounded-2xl blur-sm opacity-50"></div>
              <div className="relative bg-white border border-neutral-200 rounded-xl p-8 md:p-10 shadow-xl">
                <div className="text-center mb-8">
                  <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-2 block">Membership</span>
                  <h3 className="text-3xl font-bold mb-2">PRO PLAN</h3>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-neutral-500">/month</span>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  {proFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="min-w-[20px] pt-1">
                        <Check className="w-5 h-5 text-black" strokeWidth={2.5} />
                      </div>
                      <span className="text-neutral-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Updated Buttons: Get Started Primary, View Sample Secondary */}
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => navigateTo('signup')}
                    className="w-full py-4 bg-black text-white font-bold text-lg rounded hover:bg-neutral-800 transition-colors shadow-lg shadow-black/20"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={() => navigateTo('research')}
                    className="w-full py-2 text-neutral-500 font-medium text-sm hover:text-black transition-colors flex items-center justify-center gap-1"
                  >
                    View Sample Report <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                
                <p className="text-center text-xs text-neutral-400 mt-4">No hidden fees. Cancel anytime.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "Terminal" Section - Trust indicator */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Lock className="w-12 h-12 mx-auto text-neutral-400" />
          <h2 className="text-3xl md:text-4xl font-bold">The Variant Guarantee</h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We do not trade against our readers. We do not accept payment from the companies we cover. Our only loyalty is to the subscriber reading the report.
          </p>
          <div className="pt-8 border-t border-neutral-800 mt-8 flex flex-wrap justify-center gap-x-12 gap-y-6 text-neutral-500 font-medium">
            <span>AUDITABLE MODELS</span>
            <span>UNBIASED ANALYSIS</span>
            <span>NO ADS</span>
          </div>
        </div>
      </section>
    </>
  );
};

// --- Research Page Component ---

const ResearchPage = ({ openReport }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Reset to page 1 if search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = researchData.filter(item => 
    item.ticker.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const listTop = document.getElementById('research-list');
    if(listTop) listTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-32 min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        
        {/* Research Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Research Archive</h1>
          <p className="text-xl text-neutral-500 max-w-2xl font-light">
            Search our library of deep dives, earnings notes, and financial models.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between" id="research-list">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search ticker, company, or keyword..." 
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded focus:outline-none focus:border-black transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
             <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-sm font-medium rounded whitespace-nowrap transition-colors">
               All Sectors
             </button>
             <button className="px-4 py-2 bg-white border border-neutral-200 hover:border-black text-sm font-medium rounded whitespace-nowrap transition-colors">
               Deep Dives
             </button>
             <button className="px-4 py-2 bg-white border border-neutral-200 hover:border-black text-sm font-medium rounded whitespace-nowrap transition-colors">
               Models
             </button>
          </div>
        </div>

        {/* Results List */}
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden min-h-[400px]">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-neutral-100 bg-neutral-50 text-xs font-bold text-neutral-500 uppercase tracking-wider">
            <div className="col-span-1">Ticker</div>
            <div className="col-span-2">Company</div>
            <div className="col-span-4">Report Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-1 text-right">Access</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-neutral-100">
            {currentItems.map((item) => (
              <div onClick={() => openReport(item.id)} key={item.id} className="group md:grid md:grid-cols-12 gap-4 p-5 items-center hover:bg-neutral-50 transition-colors cursor-pointer">
                {/* Mobile Layout: Top Row */}
                <div className="flex justify-between items-center md:hidden mb-2">
                   <div className="flex items-center gap-2">
                     <span className="font-bold bg-black text-white px-2 py-0.5 text-sm rounded-sm">{item.ticker}</span>
                     <span className="text-sm text-neutral-500">{item.date}</span>
                   </div>
                   {item.access === 'Pro' ? (
                     <Lock className="w-4 h-4 text-neutral-400" />
                   ) : (
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">FREE</span>
                   )}
                </div>

                {/* Desktop Columns */}
                <div className="hidden md:block col-span-1 font-bold">{item.ticker}</div>
                <div className="hidden md:block col-span-2 text-neutral-600 text-sm">{item.company}</div>
                <div className="col-span-12 md:col-span-4 font-medium text-lg md:text-base group-hover:text-blue-600 transition-colors mb-2 md:mb-0">
                  {item.title}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-neutral-500">{item.date}</div>
                <div className="col-span-12 md:col-span-2 flex items-center gap-2">
                   <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                     item.type === 'Deep Dive' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                     item.type === 'Update' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                     'bg-neutral-100 text-neutral-600 border-neutral-200'
                   }`}>
                     {item.type}
                   </span>
                </div>
                
                <div className="hidden md:flex col-span-1 justify-end">
                  {item.access === 'Pro' ? (
                    <div className="flex items-center gap-1 text-neutral-400 text-sm">
                      <Lock className="w-4 h-4" />
                      <span>Pro</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                      <Download className="w-4 h-4" />
                      <span>Free</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredData.length === 0 && (
             <div className="p-12 text-center text-neutral-500">
               <FileText className="w-12 h-12 mx-auto mb-4 text-neutral-300" />
               <p>No reports found matching "{searchTerm}"</p>
               <button onClick={() => setSearchTerm("")} className="text-black underline mt-2 font-medium">Clear Search</button>
             </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-transparent hover:bg-neutral-100 rounded text-neutral-500 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded transition-all ${
                  currentPage === page 
                    ? 'border border-black font-medium bg-black text-white' 
                    : 'border border-transparent hover:bg-neutral-100 text-neutral-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-transparent hover:bg-neutral-100 rounded text-neutral-500 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Report Detail Page ---

const ReportDetail = ({ reportId, navigateTo }) => {
  // Find the report based on ID, or default to the first one if something goes wrong
  const report = researchData.find(r => r.id === reportId) || researchData[0];
  const isPro = report.access === 'Pro';

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigateTo('research')} 
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Archive
          </button>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"><Bookmark className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"><Share2 className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"><Printer className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="font-bold bg-black text-white px-3 py-1 rounded">{report.ticker}</span>
            <span className="text-neutral-500 font-medium">{report.date}</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500 font-medium">{report.type}</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500 font-medium">{report.sector}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {report.title}
          </h1>
          
          <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-600">
              JD
            </div>
            <div>
              <div className="font-bold">Jane Doe, CFA</div>
              <div className="text-sm text-neutral-500">Senior Analyst</div>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg prose-neutral max-w-none">
          <div className="p-6 bg-neutral-50 border-l-4 border-black mb-10 rounded-r-lg">
            <h3 className="text-lg font-bold m-0 mb-2">Executive Summary</h3>
            <p className="m-0 text-neutral-700">
              {report.company} is reaching a critical inflection point. Our analysis suggests that consensus estimates for the next fiscal year are underestimating operating leverage by approximately 15%. We initiate coverage with a distinct variant view on the durability of their new product cycle.
            </p>
          </div>

          <h3>1. The Core Thesis</h3>
          <p>
            The market is currently pricing {report.ticker} as a steady-state incumbent, but our channel checks indicate a re-acceleration in organic growth. Specifically, three key drivers are being overlooked:
          </p>
          <ul>
            <li><strong>Product Velocity:</strong> The release cadence has doubled in the last 12 months.</li>
            <li><strong>Enterprise Adoption:</strong> Deal cycles are compressing, dropping from 6 months to 3 months.</li>
            <li><strong>Pricing Power:</strong> New cohorts are entering at 20% higher ASPs than vintage cohorts.</li>
          </ul>

          <h3>2. Valuation Framework</h3>
          <p>
            Our discounted cash flow (DCF) analysis implies a fair value significantly above current trading levels. We assume a conservative terminal growth rate of 3% and a WACC of 9.5%.
          </p>
          
          {/* Placeholder Chart */}
          <div className="my-12 border border-neutral-200 rounded-lg p-8 text-center bg-white shadow-sm">
            <BarChart3 className="w-16 h-16 mx-auto text-neutral-200 mb-4" />
            <div className="text-neutral-400 font-medium">Interactive Valuation Model</div>
            <div className="text-xs text-neutral-300 mt-2">(Visible in full report)</div>
          </div>

          {isPro ? (
            /* Pro Content Lock */
            <div className="relative mt-10">
              <h3 className="filter blur-sm select-none">3. Key Risks & Mitigants</h3>
              <p className="filter blur-sm select-none">
                Every investment carries risk. For {report.company}, the primary concern remains regulatory headwinds in the EU market. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="filter blur-sm select-none mt-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              
              <div className="absolute inset-0 -top-20 bg-gradient-to-b from-transparent via-white/80 to-white flex flex-col items-center justify-end pb-0">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-neutral-200 text-center max-w-md w-full">
                  <Lock className="w-10 h-10 mx-auto text-black mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Subscribe to read more</h3>
                  <p className="text-neutral-500 mb-6">
                    Unlock this deep dive, the full valuation model, and our complete archive of 127+ reports.
                  </p>
                  <button onClick={() => navigateTo('pricing')} className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors mb-3">
                    View Membership Plans
                  </button>
                  <button onClick={() => navigateTo('login')} className="text-sm text-neutral-500 hover:text-black underline">
                    Already a member? Log in
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Free Content Continues */
            <>
              <h3>3. Key Risks & Mitigants</h3>
              <p>
                Every investment carries risk. For {report.company}, the primary concern remains regulatory headwinds in the EU market. However, we believe this is already priced in. The more immediate risk is execution on the new sales strategy.
              </p>
              <p>
                If the sales efficiency metrics (Magic Number) dip below 0.7x in the next quarter, our thesis would need to be revisited. Currently, they are tracking at 1.1x, best in class for the sector.
              </p>
              
              <div className="bg-neutral-100 p-6 mt-12 rounded-lg">
                <h4 className="font-bold mb-2">Conclusion</h4>
                <p className="text-sm mb-0">
                  We remain constructive on {report.ticker} and believe the risk/reward skew is favorable at these levels. This is a "Free" sample report demonstrating the structure of our research.
                </p>
              </div>
            </>
          )}
        </article>

      </div>
    </div>
  );
};

// --- Pricing Page Component ---

const PricingPage = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState('plans'); // 'plans' or 'preview'

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Institutional quality. <br/>Retail pricing.
          </h1>
          <p className="text-xl text-neutral-500 mb-10">
            Choose the plan that fits your investing style. No hidden fees. Cancel anytime.
          </p>

          {/* Tabs */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-lg mb-8">
            <button 
              onClick={() => setActiveTab('plans')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'plans' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              Membership Plans
            </button>
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'preview' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              <FileBarChart className="w-4 h-4" />
              Sample Research Report
            </button>
          </div>
        </div>

        {activeTab === 'plans' ? (
          <div className="animate-in fade-in duration-500">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              
              {/* Basic Plan */}
              <div className="p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all">
                <div className="mb-8">
                  <div className="text-lg font-semibold text-neutral-500 mb-2">Basic</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-neutral-500">/month</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">For the casual observer getting started with fundamental analysis.</p>
                </div>
                
                <button onClick={() => navigateTo('signup')} className="w-full py-3 border-2 border-neutral-200 rounded-lg font-bold text-neutral-700 hover:border-black hover:text-black transition-colors mb-8">
                  Get Started
                </button>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600 font-medium">10 Research products per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">Weekly Newsletter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">Limited Archive Access</span>
                  </li>
                </ul>
              </div>

              {/* Pro Plan */}
              <div className="p-8 rounded-2xl bg-black text-white shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-8">
                  <div className="text-lg font-semibold text-neutral-400 mb-2">Pro</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-neutral-400">/month</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-4">For serious investors who want the full picture.</p>
                </div>
                
                <button onClick={() => navigateTo('signup')} className="w-full py-3 bg-white text-black rounded-lg font-bold hover:bg-neutral-200 transition-colors mb-8">
                  Get Started
                </button>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-medium">Unlimited Research products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300">Full Archive Access (127+ reports)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300">Discord Community Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300">1 Stock Coverage Request per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-0.5">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300">24h Email Support</span>
                  </li>
                </ul>
              </div>

              {/* Ultra Plan */}
              <div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all">
                <div className="mb-8">
                  <div className="text-lg font-semibold text-neutral-500 mb-2">Ultra</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-neutral-500">/month</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">For the analyst who wants to verify every number.</p>
                </div>
                
                <button onClick={() => navigateTo('signup')} className="w-full py-3 border-2 border-black bg-transparent rounded-lg font-bold text-black hover:bg-black hover:text-white transition-colors mb-8">
                  Request Ultra
                </button>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600 font-medium">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-black rounded-full p-0.5 mt-0.5">
                      <Zap className="w-3 h-3 text-white" strokeWidth={2} fill="white" />
                    </div>
                    <span className="text-black font-bold">Access to Raw Excel Models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">10 Stock Coverage Requests per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">Downloadable DCF & Comps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">Priority 1-on-1 Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0" strokeWidth={2} />
                    <span className="text-neutral-600">Quarterly Strategy Call</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-32 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="p-6 bg-neutral-50 rounded-lg">
                  <h4 className="font-bold mb-2">What is a "Raw Excel Model"?</h4>
                  <p className="text-neutral-600">
                    Most research firms give you a PDF. We give Ultra members the actual working .xlsx file we used to value the company. You can see every formula, change assumptions (e.g. growth rates, margins), and see how it impacts the price target.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-lg">
                  <h4 className="font-bold mb-2">Can I upgrade or downgrade?</h4>
                  <p className="text-neutral-600">
                    Yes, you can switch plans at any time. If you upgrade, the difference is prorated. If you downgrade, the new rate starts at the next billing cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Sample Report Preview Tab */
          <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white border border-neutral-200 rounded-xl shadow-xl overflow-hidden">
              
              {/* Report Header */}
              <div className="p-8 border-b border-neutral-100 bg-neutral-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">Deep Dive • Oct 24, 2024</div>
                    <h2 className="text-3xl font-bold mb-2">Palantir (PLTR): The AIP Expansion Thesis</h2>
                    <p className="text-neutral-500">Analyst: J. Doe, CFA • Price at Publication: $41.50</p>
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded font-bold">
                     <span className="text-xs block opacity-70">RATING</span>
                     BUY
                  </div>
                </div>
                
                <div className="flex gap-8 text-sm mt-6">
                   <div>
                     <div className="text-neutral-400 text-xs font-bold uppercase">Bear Case</div>
                     <div className="font-semibold">$28.00</div>
                   </div>
                   <div>
                     <div className="text-neutral-400 text-xs font-bold uppercase">Base Case</div>
                     <div className="font-semibold">$45.00</div>
                   </div>
                   <div>
                     <div className="text-neutral-400 text-xs font-bold uppercase">Bull Case</div>
                     <div className="font-semibold">$62.00</div>
                   </div>
                </div>
              </div>

              {/* Report Content (Preview) */}
              <div className="p-8 relative">
                 <div className="prose prose-neutral max-w-none">
                   <h3 className="font-bold text-lg mb-2">Executive Summary</h3>
                   <p className="mb-4 text-neutral-600 leading-relaxed">
                     Palantir's Artificial Intelligence Platform (AIP) is driving an unprecedented acceleration in US Commercial revenue growth (+70% YoY). Unlike previous cycles where government contracts led growth, the commercial sector is now the primary engine. We believe the market is underestimating the "Bootcamp" conversion metrics...
                   </p>
                   
                   <h3 className="font-bold text-lg mb-2 mt-6">The Valuation Disconnect</h3>
                   <p className="mb-4 text-neutral-600 leading-relaxed">
                     Trading at 25x NTM Revenue, PLTR appears expensive on traditional metrics. However, when adjusted for the accelerating Rule of 40 score (currently 57), the PEG ratio implies...
                   </p>

                   <div className="my-8 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <h4 className="font-bold text-sm mb-4 text-center uppercase tracking-wider">DCF Sensitivity Analysis (Preview)</h4>
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                         <div className="p-2 border border-neutral-200 bg-white rounded">
                            <div className="text-neutral-400 text-xs">WACC 9%</div>
                            <div className="font-bold mt-1">$52.40</div>
                         </div>
                         <div className="p-2 border-2 border-black bg-neutral-900 text-white rounded shadow-lg scale-110">
                            <div className="text-neutral-400 text-xs">WACC 10%</div>
                            <div className="font-bold mt-1">$45.00</div>
                         </div>
                         <div className="p-2 border border-neutral-200 bg-white rounded">
                            <div className="text-neutral-400 text-xs">WACC 11%</div>
                            <div className="font-bold mt-1">$38.90</div>
                         </div>
                      </div>
                   </div>

                   <h3 className="font-bold text-lg mb-2">Key Risks</h3>
                   <p className="mb-4 text-neutral-600 leading-relaxed">
                     1. <strong>Government Deceleration:</strong> Lumpy contract timing remains a risk factor.<br/>
                     2. <strong>Stock Based Compensation:</strong> While improving, dilution remains...
                   </p>
                   <p className="blur-sm select-none text-neutral-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                   </p>
                 </div>

                 {/* Blur Overlay */}
                 <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-12">
                    <Lock className="w-8 h-8 mb-4 text-neutral-400" />
                    <h3 className="text-xl font-bold mb-2">Unlock the Full Report</h3>
                    <p className="text-neutral-500 mb-6">Join Pro to access the full thesis and download the Excel model.</p>
                    <button 
                      onClick={() => setActiveTab('plans')}
                      className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      View Membership Plans
                    </button>
                 </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Other Pages ---

const AboutPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      {/* Hero / Mission */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          We are bridging the gap between <span className="text-neutral-400">institutional mandates</span> and <span className="text-neutral-400">retail reality</span>.
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
          Variant exists to provide the individual investor with the same caliber of depth, rigor, and access that was previously reserved for billion-dollar hedge funds.
        </p>
      </section>

      {/* The Story - Split Layout */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Information Asymmetry</h2>
            <div className="w-12 h-1 bg-black mb-6"></div>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Wall Street runs on information asymmetry. Large institutions pay millions of dollars annually for "expert networks," alternative data, and direct management access. 
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Meanwhile, retail investors are fed a diet of sensationalist headlines, crammer-style shouting matches, and 500-word summary articles that lack depth.
            </p>
            <p className="text-lg font-medium text-black leading-relaxed">
              We built Variant to fix this. We do the deep work—reading the 10-Ks, building the models from scratch, and talking to customers—so you can invest with conviction.
            </p>
          </div>
          <div className="relative h-[400px] bg-white border border-neutral-200 p-8 rounded-xl shadow-lg flex flex-col justify-center">
             {/* Decorative 'Report' abstract visualization */}
             <div className="space-y-4 opacity-50 blur-[1px]">
                <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                <div className="h-4 bg-neutral-200 rounded w-full"></div>
                <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                <div className="h-32 bg-neutral-100 rounded w-full mt-6"></div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-20 bg-neutral-100 rounded"></div>
                  <div className="h-20 bg-neutral-100 rounded"></div>
                  <div className="h-20 bg-neutral-100 rounded"></div>
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black text-white px-6 py-3 font-bold tracking-widest uppercase text-sm">
                  Institutional Grade
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Operating Principles</h2>
          <p className="text-neutral-500">The rules that govern every piece of research we publish.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Conviction over Consensus</h3>
            <p className="text-neutral-600 leading-relaxed">
              We don't just aggregate news. We form independent views. We look for the variant view—the angle the market is missing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Radical Transparency</h3>
            <p className="text-neutral-600 leading-relaxed">
              In an industry built on "black box" models, we open ours up. Every Pro subscriber gets access to Excel Valuation Models. Verify our assumptions, stress test our logic, and make the model your own.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Aligned Incentives</h3>
            <p className="text-neutral-600 leading-relaxed">
              Zero ads. Zero sponsorship. Zero "access" journalism. Our revenue comes 100% from subscriptions. Our only boss is the individual reading the report.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Invest with the clarity of a professional.</h2>
          <p className="text-neutral-400 text-lg">
            Join 2,400+ investors who have switched from passive reading to active understanding.
          </p>
          <button onClick={() => navigateTo('pricing')} className="px-8 py-4 bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
            View Membership Plans
          </button>
        </div>
      </section>
    </div>
  );
};

const TrackRecordPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Performance Track Record</h1>
          <p className="text-xl text-neutral-500 font-light leading-relaxed">
            We believe transparency is the ultimate currency in this industry. Below is a complete, auditable list of every official call made since inception.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Avg. Return</span>
            </div>
            <div className="text-4xl font-bold text-black">+34.2%</div>
            <div className="text-xs text-neutral-400 mt-1">Per recommendation</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm font-medium">
              <Check className="w-4 h-4" />
              <span>Win Rate</span>
            </div>
            <div className="text-4xl font-bold text-black">68%</div>
            <div className="text-xs text-neutral-400 mt-1">Positive trades closed</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm font-medium">
              <BarChart3 className="w-4 h-4" />
              <span>vs S&P 500</span>
            </div>
            <div className="text-4xl font-bold text-green-600">+18.5%</div>
            <div className="text-xs text-neutral-400 mt-1">Alpha generated</div>
          </div>

           <div className="bg-black text-white p-6 rounded-xl border border-neutral-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-neutral-400 text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>Active Members</span>
            </div>
            <div className="text-4xl font-bold">2,405</div>
            <div className="text-xs text-neutral-500 mt-1">Reading our research</div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-lg">Trade Log</h3>
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open Positions
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-neutral-500 uppercase bg-neutral-50 border-b border-neutral-100">
                <tr>
                  <th className="px-6 py-4 font-medium">Ticker</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Entry Date</th>
                  <th className="px-6 py-4 font-medium">Entry Price</th>
                  <th className="px-6 py-4 font-medium">Current/Exit</th>
                  <th className="px-6 py-4 font-medium text-right">Return</th>
                  <th className="px-6 py-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {performanceData.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-black">{item.ticker}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded bg-neutral-100 text-neutral-600 text-xs font-medium">
                        {item.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{item.entryDate}</td>
                    <td className="px-6 py-4 text-neutral-600">${item.entryPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 font-medium">
                      {item.exitPrice ? `$${item.exitPrice.toFixed(2)}` : `$${item.currentPrice.toFixed(2)}`}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${item.return > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.return > 0 ? '+' : ''}{item.return}%
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'Open' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                      }`}>
                        {item.status === 'Open' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-neutral-50 border-t border-neutral-100 text-xs text-neutral-500 text-center">
            * Past performance is not indicative of future results. Returns calculated based on closing price of alert date.
          </div>
        </div>

      </div>
    </div>
  );
};

const LegalPage = ({ type, navigateTo }) => {
  const isPrivacy = type === 'privacy';
  
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigateTo('signup')} 
          className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        
        <h1 className="text-4xl font-bold mb-8 tracking-tight">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600">
          <p className="text-lg leading-relaxed">
            Last updated: November 20, 2024
          </p>
          
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-100 mb-8">
            <p className="text-sm font-medium text-black">
              <strong>Summary:</strong> We treat your data the way we want ours treated. We do not sell your data. We do not track you across the web. We only use your email to send you the research you asked for.
            </p>
          </div>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">1. Introduction</h3>
          <p>
            Welcome to Variant Research. By accessing our website, you agree to be bound by these {isPrivacy ? 'privacy practices' : 'terms'}. 
            {isPrivacy 
              ? " We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us." 
              : " Please read these terms carefully before using our services."}
          </p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">2. {isPrivacy ? 'Information We Collect' : 'Use of Research'}</h3>
          <p>
            {isPrivacy 
              ? "We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us." 
              : "All content provided by Variant Research is for informational purposes only. It is not intended to be investment advice. You should not make any investment decision based solely on the information provided in our reports."}
          </p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">3. {isPrivacy ? 'How We Use Your Information' : 'Subscription & Billing'}</h3>
          <p>
            {isPrivacy 
              ? "We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations." 
              : "Payments for subscriptions are billed in advance on a monthly or yearly basis. You may cancel your subscription at any time. Refunds are processed on a case-by-case basis."}
          </p>

          {/* Visual placeholder for more text */}
          <div className="space-y-4 opacity-40 select-none" aria-hidden="true">
             <p>[Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Variant Research</h1>
            <p className="text-neutral-500">
              Start your 100% independent research journey today. No ads, no noise, just data.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <button className="w-full py-3 border border-neutral-200 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-neutral-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
              
              <div className="relative flex items-center justify-center text-center my-8">
                <div className="absolute w-full border-t border-neutral-200"></div>
                <span className="relative bg-white px-4 text-xs text-neutral-500 uppercase font-medium tracking-wider">Or sign up with email</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-1">First Name</label>
                   <input type="text" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Last Name</label>
                   <input type="text" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Doe" />
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="••••••••" />
              </div>
            </div>

            <button className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg">
              Create Account
            </button>
            
            <div className="text-center space-y-4 mt-4">
              <p className="text-xs text-neutral-400">
                By clicking "Create Account" you agree to our <button onClick={() => navigateTo('terms')} className="underline hover:text-black">Terms of Service</button> and <button onClick={() => navigateTo('privacy')} className="underline hover:text-black">Privacy Policy</button>.
              </p>
              <p className="text-sm text-neutral-500">
                Already have an account? <button onClick={() => navigateTo('login')} className="text-black font-bold underline">Log in</button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Value/Testimonial */}
      <div className="hidden md:flex w-1/2 bg-neutral-50 border-l border-neutral-200 p-20 flex-col justify-center items-center text-center">
         <div className="max-w-md space-y-16">
            <div className="space-y-8">
               <div className="flex justify-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-black fill-black" />)}
               </div>
               <h3 className="text-2xl font-medium leading-relaxed">
                 "The depth of analysis in Variant's reports rivals what I used to see on the sell-side, but without the conflict of interest. It's the only subscription I expensed this year."
               </h3>
               <div>
                 <div className="font-bold text-sm tracking-wide uppercase">Sarah Jenkins</div>
                 <div className="text-neutral-500 text-xs mt-1">Former Analyst, Goldman Sachs</div>
               </div>
            </div>

            <div className="pt-10 border-t border-neutral-200 flex justify-between items-center gap-8">
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">127+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Reports</div>
               </div>
               <div className="w-px h-12 bg-neutral-200"></div>
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">2,400+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Members</div>
               </div>
               <div className="w-px h-12 bg-neutral-200"></div>
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">$2B+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Assets</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const LoginPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-neutral-500">
              Log in to access your research dashboard and latest reports.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <button className="w-full py-3 border border-neutral-200 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-neutral-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
              
              <div className="relative flex items-center justify-center text-center my-8">
                <div className="absolute w-full border-t border-neutral-200"></div>
                <span className="relative bg-white px-4 text-xs text-neutral-500 uppercase font-medium tracking-wider">Or log in with email</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium">Password</label>
                  <button className="text-xs text-neutral-500 hover:text-black">Forgot password?</button>
                </div>
                <input type="password" className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="••••••••" />
              </div>
            </div>

            <button className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg">
              Sign In
            </button>
            
            <p className="text-sm text-neutral-500 text-center mt-4">
              Don't have an account? <button onClick={() => navigateTo('signup')} className="text-black font-bold underline">Join now</button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side: Value/Testimonial (Reused for consistency) */}
      <div className="hidden md:flex w-1/2 bg-neutral-50 border-l border-neutral-200 p-20 flex-col justify-center items-center text-center">
         <div className="max-w-md space-y-16">
            <div className="space-y-8">
               <div className="flex justify-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-black fill-black" />)}
               </div>
               <h3 className="text-2xl font-medium leading-relaxed">
                 "Variant allows me to cut through the noise. The models are robust, the assumptions are clear, and the insights are genuinely differentiated."
               </h3>
               <div>
                 <div className="font-bold text-sm tracking-wide uppercase">Michael Chen</div>
                 <div className="text-neutral-500 text-xs mt-1">Portfolio Manager</div>
               </div>
            </div>

            <div className="pt-10 border-t border-neutral-200 flex justify-between items-center gap-8">
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">127+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Reports</div>
               </div>
               <div className="w-px h-12 bg-neutral-200"></div>
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">2,400+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Members</div>
               </div>
               <div className="w-px h-12 bg-neutral-200"></div>
               <div className="text-center">
                 <div className="text-3xl font-bold tracking-tight">$2B+</div>
                 <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-2">Assets</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const ContactPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Get in touch.</h1>
          <p className="text-xl text-neutral-500 max-w-xl mx-auto">
            We read every email. Whether you have a question about a model, a billing inquiry, or just want to say hello.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors" placeholder="jane@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <div className="relative">
                <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Support / Billing</option>
                  <option>Research Question</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea className="w-full p-3 h-32 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors" placeholder="How can we help?"></textarea>
            </div>

            <button className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-100">
            <Mail className="w-6 h-6 mb-4" />
            <h3 className="font-bold mb-2">Direct Email</h3>
            <p className="text-sm text-neutral-600 mb-4">Prefer to use your own client?</p>
            <a href="mailto:hello@variant.com" className="text-black font-medium underline">hello@variant.com</a>
          </div>
          
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-100">
            <MessageSquare className="w-6 h-6 mb-4" />
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-sm text-neutral-600 mb-4">Join the conversation on Discord.</p>
            <button className="text-black font-medium underline">Join Server</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;

