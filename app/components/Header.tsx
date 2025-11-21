import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <Image
          src="/img/logo-white.png"
          alt="Logo"
          className="logo"
          width={65}
          height={50}
        />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="main">Outdoors</span>
          <span className="sub">is where life happens</span>
        </h1>
        <a href="#section-services" className="btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}
