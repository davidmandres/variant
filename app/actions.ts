'use server';

import { summarizeReport } from '@/ai/flows/summarize-report';

export async function generateSummary(reportContent: string) {
  try {
    // Strip HTML tags from the content before sending to the AI
    const plainTextContent = reportContent.replace(/<[^>]*>/g, ' ');
    const result = await summarizeReport({ reportContent: plainTextContent });
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating summary:', error);
    return { error: 'Failed to generate summary. Please try again.' };
  }
}
