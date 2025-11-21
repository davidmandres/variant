"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Stories() {
  return (
    <>
      <div className="bg-video">
        <video className="content" autoPlay muted loop>
          <source src="/img/video.mp4" type="video/mp4" />
          <source src="/img/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-l">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        autoHeight={true}
        className="testimonial-slider"
      >
        <SwiperSlide>
          <div className="story">
            <figure className="shape">
              <Image
                src="/img/nat-8.jpg"
                alt="PFP for first story"
                className="img img--1"
                width={100}
                height={100}
              />
              <figcaption className="caption">Jane Doe</figcaption>
            </figure>
            <div className="text">
              <h3 className="heading-tertiary u-margin-bottom-sm">
                I had the best week ever with Natours
                <div className="icon-container">
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                </div>
              </h3>
              <p className="paragraph">
                Quis nostrum, voluptatibus, cumque, asperiores magnam incidunt
                voluptatum enim sed doloremque facilis laboriosam. In eveniet
                numquam quo. Laboriosam veritatis mollitia alias animi
                repellendus. Commodi, voluptatibus maxime illum quae consequatur
                corrupti! Corrupti minus nisi nihil ipsum!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="story">
            <figure className="shape">
              <Image
                src="/img/nat-9.jpg"
                alt="PFP for first story"
                className="img img--2"
                width={100}
                height={100}
              />
              <figcaption className="caption">John Doe</figcaption>
            </figure>
            <div className="text">
              <h3 className="heading-tertiary u-margin-bottom-sm">
                What a great tour
                <div className="icon-container">
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                  <i className="icon icon-basic-star"></i>
                </div>
              </h3>
              <p className="paragraph">
                Quis nostrum, voluptatibus, cumque, asperiores magnam incidunt
                voluptatum enim sed doloremque facilis laboriosam. In eveniet
                numquam quo. Laboriosam veritatis mollitia alias animi
                repellendus. Commodi, voluptatibus maxime illum quae consequatur
                corrupti! Corrupti minus nisi nihil ipsum!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="u-center-text u-margin-top-xl">
        <a href="#popup" className="btn-text">
          Book now &rarr;
        </a>
      </div>
    </>
  );
}
