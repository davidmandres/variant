import { Link } from "react-router-dom";

export default function ServicesServices() {
  return (
    <section className="section-services" id="section-services">
      <div className="u-center-text u-margin-bottom-l">
        <h2 className="heading-secondary">Our tours</h2>
      </div>

      <div className="grid-2-cols">
        <div className="col--c">
          <div className="card">
            <div className="side side--front">
              <div className="picture picture--1">&nbsp;</div>
              <h4 className="heading">
                <span className="heading-span heading-span--1">
                  The Sea Explorer
                </span>
              </h4>

              <div className="details">
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>

            <div className="side side--back side--back--1">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <p className="price-value">$297</p>
                </div>

                <a href="#popup" className="btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col--c">
          <div className="card">
            <div className="side side--front">
              <div className="picture picture--2">&nbsp;</div>
              <h4 className="heading">
                <span className="heading-span heading-span--2">
                  The Forest Hiker
                </span>
              </h4>

              <div className="details">
                <ul>
                  <li>5 day tour</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>

            <div className="side side--back side--back--2">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <p className="price-value">$597</p>
                </div>

                <a href="#popup" className="btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2-cols u-margin-top-l">
        <div className="col--c">
          <div className="card">
            <div className="side side--front">
              <div className="picture picture--3">&nbsp;</div>
              <h4 className="heading">
                <span className="heading-span heading-span--3">
                  The Snow Adventurer
                </span>
              </h4>

              <div className="details">
                <ul>
                  <li>5 day tour</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>

            <div className="side side--back side--back--3">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <p className="price-value">$897</p>
                </div>

                <a href="#popup" className="btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col--c">
          <div className="card">
            <div className="side side--front">
              <div className="picture picture--4">&nbsp;</div>
              <h4 className="heading">
                <span className="heading-span heading-span--4">
                  The Desert Wanderer
                </span>
              </h4>

              <div className="details">
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 8 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: very hard</li>
                </ul>
              </div>
            </div>

            <div className="side side--back side--back--4">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <p className="price-value">$1197</p>
                </div>

                <a href="#popup" className="btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="btn--green u-margin-top-l">
        &larr; Go back
      </Link>
    </section>
  );
}
