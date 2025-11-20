"use client";
import { Link } from "react-router-dom";

export default function HomeAbout() {
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
            facilisis enim nisi euismod nisi.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-sm">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            non perferendis qui, ratione eum recusandae vitae vero quidem illo
            earum quas nam fugiat odit aspernatur nemo impedit facere quos
            veritatis!
          </p>

          <Link to="/about" className="btn-text">
            Learn more &rarr;
          </Link>
        </div>

        <div className="col--c col--padded">
          <div className="composition">
            <img
              src="./src/assets/img/nat-1-large.jpg"
              srcSet="
                  ./src/assets/img/nat-1.jpg        300w,
                  ./src/assets/img/nat-1-large.jpg 1000w
                "
              sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
              alt="Nature image 1"
              className="photo photo--1"
            />
            <img
              src="./src/assets/img/nat-2-large.jpg"
              srcSet="
                  ./src/assets/img/nat-2.jpg        300w,
                  ./src/assets/img/nat-2-large.jpg 1000w
                "
              sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
              alt="Nature image 2"
              className="photo photo--2"
            />
            <img
              src="./src/assets/img/nat-3-large.jpg"
              srcSet="
                  ./src/assets/img/nat-3.jpg        300w,
                  ./src/assets/img/nat-3-large.jpg 1000w
                "
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
