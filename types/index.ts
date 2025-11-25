export interface ResearchReport {
  id: number;
  ticker: string;
  company: string;
  title: string;
  date: string;
  type: "Deep Dive" | "Update" | "Model Update" | "Note";
  access: "Free" | "Pro";
  sector: string;
}

export interface TradeRecord {
  id: number;
  ticker: string;
  type: "Long" | "Short";
  entryDate: string;
  exitDate: string;
  entryPrice: number;
  currentPrice?: number;
  exitPrice?: number;
  return: number;
  status: "Open" | "Closed";
}

export type PageType =
  | "home"
  | "research"
  | "track-record"
  | "pricing"
  | "about"
  | "contact"
  | "signup"
  | "login"
  | "report"
  | "privacy"
  | "terms";
