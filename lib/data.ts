export type ResearchReport = {
  id: number;
  ticker: string;
  company: string;
  title: string;
  date: string;
  type: 'Deep Dive' | 'Update' | 'Model Update' | 'Note';
  access: 'Free' | 'Pro';
  sector: string;
  author: {
    name: string;
    title: string;
    initials: string;
  };
  summary: string;
  content: string;
};

export type PerformanceRecord = {
  id: number;
  ticker: string;
  type: 'Long' | 'Short';
  entryDate: string;
  exitDate?: string;
  entryPrice: number;
  exitPrice?: number;
  currentPrice?: number;
  return: number;
  status: 'Open' | 'Closed';
};

export const researchData: ResearchReport[] = [
  {
    id: 1,
    ticker: 'PLTR',
    company: 'Palantir Technologies',
    title: 'Commercial AI Expansion: The AIP Thesis',
    date: 'Oct 24, 2024',
    type: 'Deep Dive',
    access: 'Free',
    sector: 'Tech',
    author: {
      name: 'Jane Doe, CFA',
      title: 'Senior Analyst',
      initials: 'JD',
    },
    summary:
      'Palantir is reaching a critical inflection point. Our analysis suggests that consensus estimates for the next fiscal year are underestimating operating leverage by approximately 15%. We initiate coverage with a distinct variant view on the durability of their new product cycle.',
    content: `
      <h3>1. The Core Thesis</h3>
      <p>The market is currently pricing PLTR as a steady-state incumbent, but our channel checks indicate a re-acceleration in organic growth. Specifically, three key drivers are being overlooked: the velocity of product releases has doubled in the last 12 months, creating a significant competitive advantage. Enterprise adoption is accelerating as deal cycles compress, dropping from an average of 6 months down to just 3 months for new clients. Finally, the company is demonstrating significant pricing power, with new customer cohorts entering at 20% higher Annual Service Prices (ASPs) than vintage cohorts from previous years.</p>
      <ul>
        <li><strong>Product Velocity:</strong> The release cadence has doubled in the last 12 months.</li>
        <li><strong>Enterprise Adoption:</strong> Deal cycles are compressing, dropping from 6 months to 3 months.</li>
        <li><strong>Pricing Power:</strong> New cohorts are entering at 20% higher ASPs than vintage cohorts.</li>
      </ul>
      <h3>2. Valuation Framework</h3>
      <p>Our discounted cash flow (DCF) analysis implies a fair value significantly above current trading levels. We assume a conservative terminal growth rate of 3% and a Weighted Average Cost of Capital (WACC) of 9.5%. These assumptions are more conservative than the street consensus, yet still yield a considerable upside, highlighting the current market undervaluation. The primary driver of our valuation is the expected margin expansion from the new AI Platform (AIP), which we project will improve gross margins by 500 basis points over the next three years as the company scales its commercial offerings and reduces reliance on bespoke, high-cost government contracts.</p>
      <h3>3. Key Risks & Mitigants</h3>
      <p>Every investment carries risk. For Palantir, the primary concern remains regulatory headwinds in the EU market which could impact data localization and sovereignty requirements. However, we believe this is already priced in, given the stock's recent underperformance relative to US-based software peers. The more immediate risk is execution on the new sales strategy, which relies on a less technical, more business-focused salesforce. If the sales efficiency metrics (as measured by the Magic Number) dip below 0.7x in the next quarter, our thesis would need to be revisited. Currently, they are tracking at an impressive 1.1x, which is best-in-class for the enterprise software sector.</p>
      `,
  },
  {
    id: 2,
    ticker: 'TSLA',
    company: 'Tesla Inc',
    title: 'Robotaxi Economics & FSD V12 Analysis',
    date: 'Oct 15, 2024',
    type: 'Update',
    access: 'Pro',
    sector: 'Auto',
    author: {
      name: 'John Smith',
      title: 'Automotive Analyst',
      initials: 'JS',
    },
    summary:
      'Tesla\'s FSD V12 represents a paradigm shift from deterministic to neural-net-based autonomous driving. We analyze the potential impact on Robotaxi profitability and update our valuation model.',
    content: `
      <h3>1. FSD V12 Architecture</h3>
      <p>Version 12 of Tesla's Full Self-Driving (FSD) software marks a fundamental departure from prior versions. It replaces over 300,000 lines of explicit C++ code with a unified neural network model. This end-to-end AI approach, trained on billions of miles of video data, allows the system to handle novel "long tail" scenarios with greater fluidity than a rules-based system. Our analysis suggests this architectural shift is the key enabler for achieving Level 4/5 autonomy, a prerequisite for a Robotaxi network.</p>
      <h3>2. Robotaxi Network Economics</h3>
      <p>We model the potential economics of a Tesla-owned-and-operated Robotaxi network. Assuming a utilization rate of 50% (vs. ~5% for a personally-owned vehicle), a per-mile charge of $1.00, and operating costs of $0.25/mile, we project a payback period of less than two years per vehicle. This could generate a new high-margin revenue stream in excess of $100 billion annually by 2030, a figure we believe is not fully captured in the current stock price. The key variable is regulatory approval, which we model on a state-by-state basis.</p>
      <p>The financial implications are staggering. If Tesla can achieve even a fraction of this projected network size, the company would transform from a hardware manufacturer with software-like margins to a pure-play technology and services company with a valuation to match. Our model accounts for vehicle depreciation, insurance costs, and network maintenance fees.</p>
      <h3>3. Competitive Landscape and Risks</h3>
      <p>While Tesla's data advantage is significant, competitors like Waymo (Google) and Cruise (GM) have more experience with geofenced autonomous deployments. The primary risk for Tesla is a potential delay in regulatory approval, which could erode its first-mover advantage. Additionally, a major safety incident involving FSD could set back public and regulatory acceptance by several years. We have factored a 24-month regulatory delay into our bear case scenario, which still results in a price target above current levels.</p>
      `,
  },
  { id: 3, ticker: "NVDA", company: "NVIDIA Corp", title: "Supply Chain Check: H100 vs Blackwell", date: "Oct 02, 2024", type: "Deep Dive", access: "Pro", sector: "Semi", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "Our latest checks in the supply chain indicate that demand for Blackwell architecture is outstripping supply by a factor of 3:1, suggesting upside to consensus estimates for the next two quarters.", content: "<p>Content for NVIDIA report...</p>" },
  { id: 4, ticker: "SOFI", company: "SoFi Technologies", title: "Galileo & Technisys Integration Progress", date: "Sep 28, 2024", type: "Model Update", access: "Pro", sector: "Fintech", author: { name: 'John Smith', title: 'Automotive Analyst', initials: 'JS' }, summary: "The merger of Galileo and Technisys is showing early signs of synergy, with revenue per customer increasing. We are updating our model to reflect this.", content: "<p>Content for SoFi report...</p>" },
  { id: 5, ticker: "AMZN", company: "Amazon", title: "AWS Margins: The GenAI Capex Cycle", date: "Sep 15, 2024", type: "Deep Dive", access: "Pro", sector: "Tech", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "Generative AI is forcing a new capex cycle for cloud providers. We analyze the impact on AWS operating margins and long-term profitability.", content: "<p>Content for Amazon report...</p>" },
  { id: 6, ticker: "CRWD", company: "Crowdstrike", title: "Post-Outage Churn Analysis", date: "Sep 10, 2024", type: "Note", access: "Free", sector: "Cyber", author: { name: 'John Smith', title: 'Automotive Analyst', initials: 'JS' }, summary: "Following the widespread July outage, we analyze customer churn data. Our findings suggest minimal long-term impact on Crowdstrike's market position.", content: "<p>Content for Crowdstrike report...</p>" },
  { id: 7, ticker: "AMD", company: "AMD", title: "Data Center Market Share: MI300 Ramp", date: "Aug 28, 2024", type: "Update", access: "Pro", sector: "Semi", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "AMD's MI300 accelerator is ramping faster than expected. We update our data center market share model, projecting a 5% gain from NVIDIA by EOY 2025.", content: "<p>Content for AMD report...</p>" },
  { id: 8, ticker: "NET", company: "Cloudflare", title: "Zero Trust Adoption Curve & SASE", date: "Aug 15, 2024", type: "Deep Dive", access: "Pro", sector: "Cyber", author: { name: 'John Smith', title: 'Automotive Analyst', initials: 'JS' }, summary: "The convergence of networking and security (SASE) is a major tailwind for Cloudflare. We project their Zero Trust solution will be a $1B business by 2026.", content: "<p>Content for Cloudflare report...</p>" },
  { id: 9, ticker: "DKNG", company: "DraftKings", title: "State Legalization Catalyst Path", date: "Aug 02, 2024", type: "Note", access: "Free", sector: "Consumer", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "With several large states poised to legalize online sports betting, we map out the potential impact on DraftKings' Total Addressable Market (TAM).", content: "<p>Content for DraftKings report...</p>" },
  { id: 10, ticker: "ABNB", company: "Airbnb", title: "Take Rate Expansion Opportunities", date: "Jul 25, 2024", type: "Deep Dive", access: "Pro", sector: "Consumer", author: { name: 'John Smith', title: 'Automotive Analyst', initials: 'JS' }, summary: "We identify three key levers for Airbnb to expand its take rate without alienating hosts or guests, providing a path to margin expansion.", content: "<p>Content for Airbnb report...</p>" },
  { id: 11, ticker: "U", company: "Unity Software", title: "Runtime Fee Fallout & Recovery", date: "Jul 12, 2024", type: "Update", access: "Pro", sector: "Tech", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "Six months after the controversial runtime fee announcement, we analyze developer sentiment and adoption data to gauge the long-term damage and recovery path.", content: "<p>Content for Unity report...</p>" },
  { id: 12, ticker: "RBLX", company: "Roblox", title: "Advertising Revenue Trajectory", date: "Jun 30, 2024", type: "Deep Dive", access: "Pro", sector: "Tech", author: { name: 'John Smith', title: 'Automotive Analyst', initials: 'JS' }, summary: "Roblox's nascent advertising business is poised to become a major growth driver. We model the potential revenue trajectory and impact on valuation.", content: "<p>Content for Roblox report...</p>" },
  { id: 13, ticker: "SHOP", company: "Shopify", title: "Enterprise Adoption Curve", date: "Jun 15, 2024", type: "Note", access: "Free", sector: "Tech", author: { name: 'Jane Doe, CFA', title: 'Senior Analyst', initials: 'JD' }, summary: "Shopify is successfully moving upmarket to serve larger enterprise customers. We analyze the trend and its impact on average revenue per merchant.", content: "<p>Content for Shopify report...</p>" },
];

export const performanceData: PerformanceRecord[] = [
  { id: 1, ticker: "NVDA", type: "Long", entryDate: "Jan 12, 2023", currentPrice: 1180.00, entryPrice: 165.20, return: 614.2, status: "Open" },
  { id: 2, ticker: "PLTR", type: "Long", entryDate: "May 04, 2023", currentPrice: 24.40, entryPrice: 8.50, return: 187.1, status: "Open" },
  { id: 3, ticker: "META", type: "Long", entryDate: "Nov 08, 2022", exitDate: "Feb 15, 2024", entryPrice: 96.40, exitPrice: 485.20, return: 403.3, status: "Closed" },
  { id: 4, ticker: "SNOW", type: "Long", entryDate: "Sep 14, 2023", exitDate: "Feb 29, 2024", entryPrice: 155.00, exitPrice: 185.00, return: 19.4, status: "Closed" },
  { id: 5, ticker: "PYPL", type: "Long", entryDate: "Aug 20, 2023", exitDate: "Jan 10, 2024", entryPrice: 62.50, exitPrice: 58.20, return: -6.9, status: "Closed" },
  { id: 6, ticker: "TSLA", type: "Long", entryDate: "Apr 25, 2023", exitDate: "Jul 18, 2023", entryPrice: 160.00, exitPrice: 290.00, return: 81.2, status: "Closed" },
];
