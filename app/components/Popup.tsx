"use client";

import { useRef } from "react";
import Image from "next/image";

import useModalFunc from "../hooks/useModalFunc";

export default function Popup() {
  const contentRef = useRef<HTMLDivElement>(null);

  useModalFunc(contentRef, "#popup", "section-services");

  return (
    <div className="popup" id="popup">
      <div ref={contentRef} className="content">
        <div className="left">
          <Image
            src="/img/nat-8.jpg"
            alt="Tour photo 1"
            className="img"
            fill
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/img/nat-9.jpg"
            alt="Tour photo 2"
            className="img"
            width={100}
            height={100}
          />
        </div>
        <div className="right">
          <h2 className="heading-secondary">Start booking now</h2>
          <h3 className="heading-tertiary">
            Important &ndash; Please read terms before booking
          </h3>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            voluptas? Obcaecati enim sequi quis animi eligendi cum perspiciatis
            rerum, aliquid minima iure placeat molestiae ipsam unde culpa cumque
            necessitatibus at? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis assumenda dolor quod dolorem architecto
            inventore sint hic, quam beatae error. Odit vitae quidem aliquam
            inventore maxime. Ipsum tempore sunt facere. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni debitis tenetur quis
            dignissimos corrupti animi corporis dolores itaque sit, ut autem
            asperiores sapiente. Sunt, soluta alias sequi eos nulla delectus.
          </p>
          <a href="#signup-form" className="btn--green">
            Book Now
          </a>
        </div>

        <a href="#section-tours" className="close">
          &times;
        </a>
      </div>
    </div>
  );
}
