import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="not-found">
      <p>Sorry, this URL does not lead anywhere :(</p>
      <Link to="/" className="btn-text">
        &larr; Go to home
      </Link>
    </main>
  );
}
