import Link from "next/link";

export default function NotFound() {
  return (
    <main id="not-found">
      <p>Sorry, this URL does not lead anywhere :(</p>
      <Link href="/" className="btn-text">
        &larr; Go to home
      </Link>
    </main>
  );
}
