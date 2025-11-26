"use client";

import React, { useState } from "react";
import { Check, FileBarChart, Lock, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";

const PlanCard = ({
  plan,
  isPopular = false,
}: {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant: "default" | "outline" | "secondary";
  };
  isPopular?: boolean;
}) => (
  <Card
    className={cn(
      "p-8 rounded-2xl transition-all hover:border-primary/50",
      isPopular
        ? "bg-primary text-primary-foreground shadow-2xl relative transform md:-translate-y-4"
        : "bg-background"
    )}
  >
    {isPopular && (
      <Badge
        variant="secondary"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase"
      >
        Most Popular
      </Badge>
    )}
    <div className="mb-8">
      <div
        className={cn(
          "text-lg font-semibold mb-2",
          isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        {plan.name}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span
          className={
            isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
          }
        >
          /month
        </span>
      </div>
      <p
        className={cn(
          "text-sm mt-4",
          isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        {plan.description}
      </p>
    </div>

    <Button
      asChild
      size="lg"
      variant={isPopular ? "secondary" : "outline"}
      className="w-full font-bold mb-8"
    >
      <Link href="/signup">{plan.buttonText}</Link>
    </Button>

    <ul className="space-y-4">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          {feature.startsWith("<strong>") ? (
            <div className="mt-1 flex-shrink-0">
              <div
                className={cn(
                  "bg-primary-foreground rounded-full p-0.5",
                  isPopular ? "bg-primary-foreground" : "bg-primary"
                )}
              >
                <Zap
                  className={cn(
                    "w-3 h-3 text-primary",
                    isPopular ? "text-primary" : "text-primary-foreground"
                  )}
                  strokeWidth={3}
                />
              </div>
            </div>
          ) : (
            <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
          )}
          <span
            dangerouslySetInnerHTML={{ __html: feature }}
            className={cn(
              isPopular ? "text-primary-foreground/90" : "text-foreground"
            )}
          />
        </li>
      ))}
    </ul>
  </Card>
);

const plans = [
  {
    name: "Basic",
    price: "49",
    description:
      "For the casual observer getting started with fundamental analysis.",
    features: [
      "10 Research products per month",
      "Weekly Newsletter",
      "Limited Archive Access",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    price: "99",
    description: "For serious investors who want the full picture.",
    features: [
      "Unlimited Research products",
      "Full Archive Access (127+ reports)",
      "Discord Community Access",
      "1 Stock Coverage Request per month",
      "24h Email Support",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
  },
  {
    name: "Ultra",
    price: "199",
    description: "For the analyst who wants to verify every number.",
    features: [
      "Everything in Pro",
      "<strong>Access to Raw Excel Models</strong>",
      "10 Stock Coverage Requests per month",
      "Downloadable DCF & Comps",
      "Priority 1-on-1 Support",
    ],
    buttonText: "Request Ultra",
    buttonVariant: "secondary",
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-headline">
            Institutional quality. <br />
            Retail pricing.
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Choose the plan that fits your investing style. No hidden fees.
            Cancel anytime.
          </p>

          <div className="inline-flex p-1 bg-secondary rounded-lg mb-8">
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "plans"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Membership Plans
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "preview"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileBarChart className="w-4 h-4" />
              Sample Research Report
            </button>
          </div>
        </div>

        {activeTab === "plans" ? (
          <div className="animate-in fade-in duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              <PlanCard plan={plans[0]} />
              <PlanCard plan={plans[1]} isPopular />
              <PlanCard plan={plans[2]} />
            </div>
          </div>
        ) : (
          <SampleReportPreview setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
}

const SampleReportPreview = ({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Card className="shadow-xl overflow-hidden">
        <div className="p-8 border-b bg-secondary/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">
                Deep Dive • Oct 24, 2024
              </div>
              <h2 className="text-3xl font-bold mb-2 font-headline">
                Palantir (PLTR): The AIP Expansion Thesis
              </h2>
              <p className="text-muted-foreground">
                Analyst: J. Doe, CFA • Price at Publication: $41.50
              </p>
            </div>
            <Badge className="bg-primary text-primary-foreground h-fit py-2 px-4 flex flex-col">
              <span className="text-xs block opacity-70">RATING</span>
              <span className="font-bold text-base">BUY</span>
            </Badge>
          </div>

          <div className="flex gap-8 text-sm mt-6">
            {[
              { l: "Bear Case", v: "$28.00" },
              { l: "Base Case", v: "$45.00" },
              { l: "Bull Case", v: "$62.00" },
            ].map((c) => (
              <div key={c.l}>
                <div className="text-muted-foreground text-xs font-bold uppercase">
                  {c.l}
                </div>
                <div className="font-semibold text-foreground">{c.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 relative">
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-2 text-foreground">
              Executive Summary
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Palantir&apos;s Artificial Intelligence Platform (AIP) is driving
              an unprecedented acceleration in US Commercial revenue growth
              (+70% YoY). Unlike previous cycles where government contracts led
              growth, the commercial sector is now the primary engine. We
              believe the market is underestimating the &quot;Bootcamp&quot;
              conversion metrics...
            </p>

            <h3 className="font-bold text-lg mb-2 mt-6 text-foreground">
              The Valuation Disconnect
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Trading at 25x NTM Revenue, PLTR appears expensive on traditional
              metrics. However, when adjusted for the accelerating Rule of 40
              score (currently 57), the PEG ratio implies...
            </p>

            <div className="my-8 p-6 bg-secondary border rounded-lg">
              <h4 className="font-bold text-sm mb-4 text-center uppercase tracking-wider text-muted-foreground">
                DCF Sensitivity Analysis (Preview)
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="p-2 border bg-background rounded">
                  <div className="text-muted-foreground text-xs">WACC 9%</div>
                  <div className="font-bold mt-1 text-foreground">$52.40</div>
                </div>
                <div className="p-2 border-2 border-primary bg-primary text-primary-foreground rounded shadow-lg scale-110">
                  <div className="text-primary-foreground/70 text-xs">
                    WACC 10%
                  </div>
                  <div className="font-bold mt-1">$45.00</div>
                </div>
                <div className="p-2 border bg-background rounded">
                  <div className="text-muted-foreground text-xs">WACC 11%</div>
                  <div className="font-bold mt-1 text-foreground">$38.90</div>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-2 text-foreground">
              Key Risks
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              1. <strong>Government Deceleration:</strong> Lumpy contract timing
              remains a risk factor.
              <br />
              2. <strong>Stock Based Compensation:</strong> While improving,
              dilution remains...
            </p>
            <p className="blur-sm select-none text-muted-foreground/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/90 to-transparent flex flex-col items-center justify-end pb-12">
            <Lock className="w-8 h-8 mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Unlock the Full Report
            </h3>
            <p className="text-muted-foreground mb-6">
              Join Pro to access the full thesis and download the Excel model.
            </p>
            <Button onClick={() => setActiveTab("plans")} size="lg">
              View Membership Plans
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
