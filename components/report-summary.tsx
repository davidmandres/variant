"use client";

import { useState } from "react";
import { generateSummary } from "../app/actions";
import { Button } from "./ui/button";
import { Loader2, Sparkles, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function ReportSummary({
  reportContent,
}: {
  reportContent: string;
}) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError("");
    setSummary("");

    const result = await generateSummary(reportContent);

    if (result.error) {
      setError(result.error);
    } else if (result.summary) {
      setSummary(result.summary);
    }
    setIsLoading(false);
  };

  return (
    <div className="mb-10">
      {!summary && !isLoading && !error && (
        <div className="p-6 bg-secondary rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-foreground">Need the highlights?</h3>
            <p className="text-sm text-muted-foreground">
              Use AI to generate a concise summary of this report.
            </p>
          </div>
          <Button onClick={handleGenerateSummary}>
            <Sparkles className="w-4 h-4 mr-2" />
            Generate AI Summary
          </Button>
        </div>
      )}

      {isLoading && (
        <div className="p-6 bg-secondary rounded-lg flex items-center gap-4">
          <Loader2 className="w-5 h-5 animate-spin text-primary" />
          <div>
            <h3 className="font-bold text-foreground">Generating Summary...</h3>
            <p className="text-sm text-muted-foreground">
              AI is reading the report. This may take a moment.
            </p>
          </div>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <div className="p-6 bg-secondary rounded-lg border-l-4 border-accent">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-bold text-foreground">
              AI Generated Summary
            </h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>
      )}
    </div>
  );
}
