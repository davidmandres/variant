import Link from "next/link";
import Image from "next/image";

export default function AboutAbout() {
  return (
    <section className="section-about" id="section-about">
      <div className="u-center-text u-margin-bottom-l">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="grid-2-cols">
        <div className="col--c col--padded">
          <h3 className="heading-tertiary u-margin-bottom-sm">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc at venenatis facilisis, enim erat commodo est, nec
            facilisis enim nisi euismod nisi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed tincidunt, nunc at venenatis
            facilisis, enim erat commodo est, nec facilisis enim nisi euismod
            nisi.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-sm">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            non perferendis qui, ratione eum recusandae vitae vero quidem illo
            earum quas nam fugiat odit aspernatur nemo impedit facere quos
            veritatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi non perferendis qui, ratione eum recusandae vitae vero
            quidem illo earum quas nam fugiat odit aspernatur nemo impedit
            facere quos veritatis!
          </p>

          <Link href="/#section-about" className="btn-text">
            &larr; Go back
          </Link>
        </div>

        <div className="col--c col--padded">
          <div className="composition">
            <Image
              src="/img/nat-1-large.jpg"
              sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
              alt="Nature image 1"
              className="photo photo--1"
            />
            <Image
              src="/img/nat-2-large.jpg"
              sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
              alt="Nature image 2"
              className="photo photo--2"
            />
            <Image
              src="/img/nat-3-large.jpg"
              sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
              alt="Nature image 3"
              className="photo photo--3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
