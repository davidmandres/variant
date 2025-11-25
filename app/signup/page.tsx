import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoogleIcon } from '@/components/icons';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
            <Button variant="ghost" asChild className="mb-12 text-muted-foreground">
                <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </Button>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Join Variant Research</h1>
            <p className="text-muted-foreground">
              Start your 100% independent research journey today. No ads, no noise, just data.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <GoogleIcon /> Continue with Google
              </Button>

              <div className="relative flex items-center justify-center text-center my-8">
                <div className="absolute w-full border-t"></div>
                <span className="relative bg-background px-4 text-xs text-muted-foreground uppercase font-medium tracking-wider">
                  Or sign up with email
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-1">First Name</label>
                   <Input type="text" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Last Name</label>
                   <Input type="text" placeholder="Doe" />
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Create Account
            </Button>
            
            <div className="text-center space-y-4 mt-4">
              <p className="text-xs text-muted-foreground">
                By clicking &quot;Create Account&quot; you agree to our{' '}
                <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/login" className="font-bold text-primary">Log in</Link>
                </Button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-secondary border-l p-20 flex-col justify-center items-center text-center">
      <div className="max-w-md space-y-16">
          <div className="space-y-8">
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <h3 className="text-2xl font-medium leading-relaxed text-foreground">
              &quot;The depth of analysis in Variant&apos;s reports rivals what I used to see on the sell-side, but without the conflict of interest. It&apos;s the only subscription I expensed this year.&quot;
            </h3>
            <div>
              <div className="font-bold text-sm tracking-wide uppercase text-foreground">
                Sarah Jenkins
              </div>
              <div className="text-muted-foreground text-xs mt-1">
                Former Analyst, Goldman Sachs
              </div>
            </div>
          </div>

          <div className="pt-10 border-t flex justify-between items-center gap-8">
            <div className="text-center">
                <div className="text-3xl font-bold tracking-tight text-foreground">127+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">Reports</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
                <div className="text-3xl font-bold tracking-tight text-foreground">2,400+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">Members</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
                <div className="text-3xl font-bold tracking-tight text-foreground">$2B+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2">Assets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
