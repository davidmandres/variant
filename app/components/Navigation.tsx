import { useState } from "react";

export default function Navigation() {
  const links = [
    { id: "section-about", label: "About Natours", num: "01" },
    { id: "section-features", label: "Your benefits", num: "02" },
    { id: "section-services", label: "Popular tours", num: "03" },
    { id: "section-stories", label: "Stories", num: "04" },
    { id: "popup", label: "Book now", num: "05" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={`nav-container ${isOpen ? "nav-open" : ""}`} id="nav">
      <button
        onClick={handleToggle}
        className="nav-btn"
        aria-label="Toggle navigation"
      >
        <span className="nav-icon">&nbsp;</span>
      </button>

      <div className="bg">&nbsp;</div>

      <nav className="nav">
        <ul className="list">
          {links.map(({ id, label, num }) => (
            <li className="item" key={id}>
              <a href={`#${id}`} className="link" onClick={handleClose}>
                <span>{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
