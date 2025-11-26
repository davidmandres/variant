import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function PrivacyPage() {
  const isPrivacy = true;
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
              <strong>Summary:</strong> We treat your data the way we want ours
              treated. We do not sell your data. We do not track you across the
              web. We only use your email to send you the research you asked
              for.
            </p>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            1. Introduction
          </h3>
          <p>
            Welcome to Variant Research. By accessing our website, you agree to
            be bound by these {isPrivacy ? "privacy practices" : "terms"}. We
            are committed to protecting your personal information and your right
            to privacy. If you have any questions or concerns about our policy,
            or our practices with regards to your personal information, please
            contact us.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            2. {isPrivacy ? "Information We Collect" : "Use of Research"}
          </h3>
          <p>
            We collect personal information that you voluntarily provide to us
            when registering at the Services expressing an interest in obtaining
            information about us or our products and services, when
            participating in activities on the Services or otherwise contacting
            us.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 !mb-4">
            3.{" "}
            {isPrivacy
              ? "How We Use Your Information"
              : "Subscription & Billing"}
          </h3>
          <p>
            We use personal information collected via our Services for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
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
