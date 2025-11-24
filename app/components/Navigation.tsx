import Link from "next/link";
import Button from "./Button";

export default function Navigation() {
  return (
    <nav className="nav">
      <Button btnType="btn-text">
        <Link href="/about" className="link">
          How it works
        </Link>
      </Button>
      <Button btnType="btn-text">
        <Link href={"/pricing"} className="link">
          Pricing
        </Link>
      </Button>
      <Button btnType="btn-text">
        <Link href={"/research"} className="link">
          Research
        </Link>
      </Button>
      <div>|</div>
      <div className="login">
        <Button btnType="btn-text">
          <Link href={"/login"} className="link">
            Log in
          </Link>
        </Button>
        <Button btnType="btn">
          <Link href={"/sample"}>Access a sample</Link>
        </Button>
      </div>
    </nav>
  );
}
