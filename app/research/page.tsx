import { researchData } from '@/lib/data';
import ResearchClient from './_components/research-client';

export default function ResearchPage() {
  return <ResearchClient reports={researchData} />;
}
