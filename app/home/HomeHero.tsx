import Button from "app/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="section-hero" id="section-hero">
      <div className="text-center">
        <h1 className="heading-1">Equity Research Platform</h1>
      </div>

      <div className="uppercase font-semibold">The Variant View</div>

      <div>
        Institutional-grade equity research that differs from consensus.
        Transparent valuations. Accessible Excel models. No noise.
      </div>

      <div className="cta">
        <Button btnType="btn" className="p-8">
          <Link href={"/sample"}>Access a sample &rarr;</Link>
        </Button>
        <Button btnType="btn" btnSpec="--white" className="p-8">
          <Link href={"/sample"}>View pricing</Link>
        </Button>
      </div>

      <div>$50/month • Weekly reports • Cancel anytime</div>

      <div className="stats">
        <div className="stat-container">
          <i>&uarr;</i>
          <span className="stat">2,400+</span>{" "}
          <span className="stat-descriptor">Active Subscribers</span>
        </div>
        <div className="stat-container">
          <i>&uarr;</i>
          <span className="stat">127</span>{" "}
          <span className="stat-descriptor">Research Reports</span>
        </div>
        <div className="stat-container">
          <i>&uarr;</i>
          <span className="stat">52/year</span>{" "}
          <span className="stat-descriptor">Weekly Coverage</span>
        </div>
      </div>
    </section>
  );
}
