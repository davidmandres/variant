import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              V
            </div>
            <span className="text-lg font-bold text-foreground">VARIANT</span>
          </div>
          <p className="text-muted-foreground max-w-xs">
            Empowering retail investors with the depth of institutional research
            and the clarity of independent thought.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-foreground">Product</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <Link href="/research" className="hover:text-foreground">
                Research Archive
              </Link>
            </li>
            <li>
              <Link href="/track-record" className="hover:text-foreground">
                Performance
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-foreground">Company</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-border/50 text-center md:text-left text-sm text-muted-foreground/80 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Variant Research. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
