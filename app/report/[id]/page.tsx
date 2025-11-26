import { researchData, ResearchReport } from "../../../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Printer,
  Lock,
  BarChart3,
  FileBarChart,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import ReportSummary from "../../../components/report-summary";

function getReport(id: string): ResearchReport | undefined {
  const reportId = parseInt(id, 10);
  return researchData.find((r) => r.id === reportId);
}

export default function ReportDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const report = getReport(params.id);

  if (!report) {
    notFound();
  }

  const isPro = report.access === "Pro";

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link href="/research" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
              Back to Archive
            </Link>
          </Button>
          <div className="flex gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <Printer className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm">
            <Badge variant="default">{report.ticker}</Badge>
            <span className="text-muted-foreground font-medium">
              {report.date}
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground font-medium">
              {report.type}
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground font-medium">
              {report.sector}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-headline">
            {report.title}
          </h1>

          <div className="flex items-center gap-4 pt-4 border-t">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-muted-foreground">
              {report.author.initials}
            </div>
            <div>
              <div className="font-bold text-foreground">
                {report.author.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {report.author.title}
              </div>
            </div>
          </div>
        </header>

        <article className="space-y-6 text-lg text-foreground/90">
          <ReportSummary reportContent={report.content} />

          <div className="p-6 bg-secondary border-l-4 border-primary rounded-r-lg">
            <h3 className="text-lg font-bold mt-0 mb-2 text-foreground">
              Executive Summary
            </h3>
            <p className="m-0 text-base text-muted-foreground leading-relaxed">
              {report.summary}
            </p>
          </div>

          <div className="relative">
            <div className={isPro ? "filter blur-sm select-none" : ""}>
              <div
                dangerouslySetInnerHTML={{ __html: report.content }}
                className="space-y-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-10 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:pl-2"
              />
            </div>

            {isPro && (
              <div className="absolute inset-0 -top-20 bg-gradient-to-b from-transparent via-background/80 to-background flex flex-col items-center justify-end pb-0">
                <div className="bg-background p-8 rounded-2xl shadow-2xl border text-center max-w-md w-full">
                  <Lock className="w-10 h-10 mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2 font-headline text-foreground">
                    Subscribe to read more
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Unlock this deep dive, the full valuation model, and our
                    complete archive of 127+ reports.
                  </p>
                  <Button asChild size="lg" className="w-full mb-3">
                    <Link href="/pricing">View Membership Plans</Link>
                  </Button>
                  <Button asChild variant="link">
                    <Link href="/login">Already a member? Log in</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="my-12 border rounded-lg p-8 text-center bg-background shadow-sm">
            <BarChart3 className="w-16 h-16 mx-auto text-border mb-4" />
            <div className="text-muted-foreground font-medium">
              Interactive Valuation Model
            </div>
            <div className="text-xs text-muted-foreground/50 mt-2">
              (Visible in full report)
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
