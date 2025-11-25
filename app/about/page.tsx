import Link from 'next/link';
import { Target, Eye, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight font-headline">
          We are bridging the gap between{' '}
          <span className="text-muted-foreground">institutional mandates</span> and{' '}
          <span className="text-muted-foreground">retail reality</span>.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Variant exists to provide the individual investor with the same
          caliber of depth, rigor, and access that was previously reserved for
          billion-dollar hedge funds.
        </p>
      </section>

      <section className="bg-secondary py-24 border-y px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">
              The Information Asymmetry
            </h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wall Street runs on information asymmetry. Large institutions pay
              millions of dollars annually for &quot;expert networks,&quot;
              alternative data, and direct management access.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meanwhile, retail investors are fed a diet of sensationalist
              headlines, crammer-style shouting matches, and 500-word summary
              articles that lack depth.
            </p>
            <p className="text-lg font-medium text-foreground leading-relaxed">
              We built Variant to fix this. We do the deep work—reading the
              10-Ks, building the models from scratch, and talking to
              customers—so you can invest with conviction.
            </p>
          </div>
          <div className="relative h-[400px] bg-background border p-8 rounded-xl shadow-lg flex flex-col justify-center">
            <div className="space-y-4 opacity-50 blur-[1px]">
              <div className="h-4 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-full"></div>
              <div className="h-4 bg-secondary rounded w-5/6"></div>
              <div className="h-32 bg-muted rounded w-full mt-6"></div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="h-20 bg-muted rounded"></div>
                <div className="h-20 bg-muted rounded"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-primary-foreground px-6 py-3 font-bold tracking-widest uppercase text-sm">
                Institutional Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-headline">
            Our Operating Principles
          </h2>
          <p className="text-muted-foreground">
            The rules that govern every piece of research we publish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Conviction over Consensus</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just aggregate news. We form independent views. We
              look for the variant view—the angle the market is missing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Radical Transparency</h3>
            <p className="text-muted-foreground leading-relaxed">
              In an industry built on &quot;black box&quot; models, we open
              ours up. Every Pro subscriber gets access to Excel Valuation
              Models. Verify our assumptions, stress test our logic, and make
              the model your own.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Aligned Incentives</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zero ads. Zero sponsorship. Zero &quot;access&quot; journalism.
              Our revenue comes 100% from subscriptions. Our only boss is the
              individual reading the report.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold font-headline">
            Invest with the clarity of a professional.
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Join 2,400+ investors who have switched from passive reading to
            active understanding.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/pricing">View Membership Plans</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
