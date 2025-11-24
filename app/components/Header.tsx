import Image from "next/image";
import Navigation from "./Navigation";

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
      <Navigation />
    </header>
  );
}
