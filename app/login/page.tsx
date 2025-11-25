import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoogleIcon } from '@/components/icons';

export default function LoginPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Welcome Back</h1>
            <p className="text-muted-foreground">
              Log in to access your research dashboard and latest reports.
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
                  Or log in with email
                </span>
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
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium">Password</label>
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs">Forgot password?</Button>
                </div>
                <Input
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Sign In
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Don&apos;t have an account?{' '}
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/signup" className="font-bold text-primary">
                  Join now
                </Link>
              </Button>
            </p>
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
              &quot;Variant allows me to cut through the noise. The models are
              robust, the assumptions are clear, and the insights are genuinely
              differentiated.&quot;
            </h3>
            <div>
              <div className="font-bold text-sm tracking-wide uppercase text-foreground">
                Michael Chen
              </div>
              <div className="text-muted-foreground text-xs mt-1">
                Portfolio Manager
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
