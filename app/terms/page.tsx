import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function TermsPage() {
  const isPrivacy = false;
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="text-muted-foreground mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8 tracking-tight font-headline">
          {isPrivacy ? "Privacy Policy" : "Terms of Service"}
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">Last updated: November 20, 2024</p>

          <div className="p-6 bg-secondary rounded-lg border">
            <p className="text-sm font-medium text-foreground">
              <strong>Summary:</strong> Our research is for informational
              purposes only and is not investment advice. Your subscription is
              for your personal use and cannot be shared. You can cancel
              anytime.
            </p>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            1. Introduction
          </h3>
          <p>
            Welcome to Variant Research. By accessing our website, you agree to
            be bound by these {isPrivacy ? "privacy practices" : "terms"}.
            Please read these terms carefully before using our services.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            2. {isPrivacy ? "Information We Collect" : "Use of Research"}
          </h3>
          <p>
            All content provided by Variant Research is for informational
            purposes only. It is not intended to be investment advice. You
            should not make any investment decision based solely on the
            information provided in our reports.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            3.{" "}
            {isPrivacy
              ? "How We Use Your Information"
              : "Subscription & Billing"}
          </h3>
          <p>
            Payments for subscriptions are billed in advance on a monthly or
            yearly basis. You may cancel your subscription at any time from your
            account dashboard. Refunds are processed on a case-by-case basis at
            our sole discretion.
          </p>

          <div
            className="space-y-4 opacity-40 select-none pt-8"
            aria-hidden="true"
          >
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-3/4 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-5/6 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
