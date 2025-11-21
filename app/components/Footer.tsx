import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-box u-margin-bottom-l">
        <picture className="logo">
          <source
            srcSet="
              /img/logo-green-small-1x.png 1x,
              /img/logo-green-small-2x.png 2x
            "
            media="(max-width: 37.5em)"
          />
          <Image
            src="/img/logo-green-1x.png"
            alt="Full logo"
            width={150}
            height={119}
          />
        </picture>
      </div>

      <div className="grid-2-cols">
        <div className="col">
          <div className="nav">
            <ul className="list">
              <li className="item">
                <a href="#" className="link">
                  Company
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Contact us
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Careers
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Privacy policy
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <p className="copyright">
            Built by{" "}
            <a href="https://github.com/davidmandres" className="link">
              David Mandres
            </a>{" "}
            and Jonas Schmedtmann. Copyright &copy; by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
}
