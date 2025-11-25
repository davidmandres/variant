'use client';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, Lock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function LandingHero() {
  return (
    <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-wider uppercase mb-8 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          New Report: Palantir Valuation
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground font-headline">
          THE VARIANT VIEW.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Institutional-grade equity research for the retail investor. Solving
          the information gap with absolute transparency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="text-lg">
            <Link href="/report/1" className="group">
              Read Latest Report
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg">
            <Link href="/research">View Sample Model</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function ValueProps() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-foreground" />,
      title: '100% Independent',
      description:
        'No investment banking conflicts. No sponsored coverage. Just honest research.',
    },
    {
      icon: <Check className="w-8 h-8 text-foreground" />,
      title: 'Transparent',
      description:
        'Every model is downloadable. Every assumption is auditable. Complete transparency.',
    },
    {
      icon: <Users className="w-8 h-8 text-foreground" />,
      title: 'Actionable',
      description:
        'Focused on valuation work that matters. No market commentary. No noise.',
    },
  ];

  return (
    <section className="py-20 bg-secondary border-y">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-background border shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProPlan() {
    const proFeatures = [
        "Unlimited Research products",
        "Full Archive Access (127+ reports)",
        "Discord Community Access",
        "1 Stock Coverage Request per month",
        "24h Email Support"
      ];
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
              Professional research, <br />
              democratized pricing.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most institutional research costs $20,000+ per year. We believe
              individual investors deserve the same quality of data and
              modeling without the institutional price tag.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-1 text-foreground">127</div>
                  <div className="text-sm text-muted-foreground">Reports Archived</div>
                </CardContent>
              </Card>
               <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-1 text-foreground">24h</div>
                  <div className="text-sm text-muted-foreground">Support Response</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-secondary to-border rounded-2xl blur-sm opacity-50"></div>
            <Card className="relative rounded-xl p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2 block">
                  Membership
                </span>
                <h3 className="text-3xl font-bold mb-2 text-foreground">PRO PLAN</h3>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-foreground">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                  {proFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="min-w-[20px] pt-1">
                        <Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-card-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

              <div className="flex flex-col gap-3">
                 <Button asChild size="lg" className="text-lg font-bold shadow-lg shadow-primary/20">
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
                <Button asChild variant="link" className="text-muted-foreground">
                  <Link href="/research">
                    View Sample Report <ChevronRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
              
              <p className="text-center text-xs text-muted-foreground/80 mt-4">No hidden fees. Cancel anytime.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
    return (
        <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Lock className="w-12 h-12 mx-auto text-muted-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline">The Variant Guarantee</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We do not trade against our readers. We do not accept payment from the companies we cover. Our only loyalty is to the subscriber reading the report.
          </p>
          <div className="pt-8 border-t border-primary-foreground/20 mt-8 flex flex-wrap justify-center gap-x-12 gap-y-6 text-muted-foreground font-medium">
            <span>AUDITABLE MODELS</span>
            <span>UNBIASED ANALYSIS</span>
            <span>NO ADS</span>
          </div>
        </div>
      </section>
    )
}
