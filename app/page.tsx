/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";

export default function page() {
  return <div>Hello</div>;
}

// export default function Home() {
//   return (
//     <>
//       <div className="nav-container">
//         <input type="checkbox" className="checkbox" id="nav-toggle" />
//         <label htmlFor="nav-toggle" className="nav-btn">
//           <span className="nav-icon">&nbsp;</span>
//         </label>
//         <div className="bg">&nbsp;</div>
//         <nav className="nav">
//           <ul className="list">
//             <li className="item">
//               <a href="#" className="link">
//                 <span>01</span>About Natours
//               </a>
//             </li>
//             <li className="item">
//               <a href="#" className="link">
//                 <span>02</span>Your benefits
//               </a>
//             </li>
//             <li className="item">
//               <a href="#" className="link">
//                 <span>03</span>Popular tours
//               </a>
//             </li>
//             <li className="item">
//               <a href="#" className="link">
//                 <span>04</span>Stories
//               </a>
//             </li>
//             <li className="item">
//               <a href="#" className="link">
//                 <span>05</span>Book now
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <header className="header">
//         <div className="logo-box">
//           <img src="public/img/logo-white.png" alt="Logo" className="logo" />
//         </div>
//         <div className="text-box">
//           <h1 className="heading-primary">
//             <span className="main">Outdoors</span>
//             <span className="sub">is where life happens</span>
//           </h1>
//           <a href="#section-tours" className="btn--white btn--animated">
//             Discover our tours
//           </a>
//         </div>
//       </header>

//       <main>
//         <section className="section-about">
//           <div className="u-center-text u-margin-bottom-l">
//             <h2 className="heading-secondary">
//               Exciting tours for adventurous people
//             </h2>
//           </div>

//           <div className="grid-2-cols">
//             <div className="col--c col--padded">
//               <h3 className="heading-tertiary u-margin-bottom-sm">
//                 You're going to fall in love with nature
//               </h3>
//               <p className="paragraph">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 tincidunt, nunc at venenatis facilisis, enim erat commodo est,
//                 nec facilisis enim nisi euismod nisi.
//               </p>

//               <h3 className="heading-tertiary u-margin-bottom-sm">
//                 You're going to fall in love with nature
//               </h3>
//               <p className="paragraph">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Excepturi non perferendis qui, ratione eum recusandae vitae vero
//                 quidem illo earum quas nam fugiat odit aspernatur nemo impedit
//                 facere quos veritatis!
//               </p>

//               <a href="#" className="btn-text">
//                 Learn more &rarr;
//               </a>
//             </div>

//             <div className="col--c col--padded">
//               <div className="composition">
//                 <img
//                   src="public/img/nat-1-large.jpg"
//                   srcSet="
//                   public/img/nat-1.jpg        300w,
//                   public/img/nat-1-large.jpg 1000w
//                 "
//                   sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
//                   alt="Nature image 1"
//                   className="photo photo--1"
//                 />
//                 <img
//                   src="public/img/nat-2-large.jpg"
//                   srcSet="
//                   public/img/nat-2.jpg        300w,
//                   public/img/nat-2-large.jpg 1000w
//                 "
//                   sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
//                   alt="Nature image 2"
//                   className="photo photo--2"
//                 />
//                 <img
//                   src="public/img/nat-3-large.jpg"
//                   srcSet="
//                   public/img/nat-3.jpg        300w,
//                   public/img/nat-3-large.jpg 1000w
//                 "
//                   sizes="(max-width: 37.5em) 30vw, (max-width: 56.25em) 20vw, 300px"
//                   alt="Nature image 3"
//                   className="photo photo--3"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section-features">
//           <div className="grid-4-cols">
//             <div className="col">
//               <div className="feature-box">
//                 <i className="icon icon-basic-world"></i>
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   Explore the world
//                 </h3>
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>

//             <div className="col">
//               <div className="feature-box">
//                 <i className="icon icon-basic-compass"></i>
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   Meet nature
//                 </h3>
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>

//             <div className="col">
//               <div className="feature-box">
//                 <i className="icon icon-basic-map"></i>
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   Find your way
//                 </h3>
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>

//             <div className="col">
//               <div className="feature-box">
//                 <i className="icon icon-basic-heart"></i>
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   Live a healthier life
//                 </h3>
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section-tours" id="section-tours">
//           <div className="u-center-text u-margin-bottom-l">
//             <h2 className="heading-secondary">Most popular tours</h2>
//           </div>

//           <div className="grid-3-cols">
//             <div className="col--c">
//               <div className="card">
//                 <div className="side side--front">
//                   <div className="picture picture--1">&nbsp;</div>
//                   <h4 className="heading">
//                     <span className="heading-span heading-span--1">
//                       The Sea Explorer
//                     </span>
//                   </h4>

//                   <div className="details">
//                     <ul>
//                       <li>3 day tour</li>
//                       <li>Up to 30 people</li>
//                       <li>2 tour guides</li>
//                       <li>Sleep in cozy hotels</li>
//                       <li>Difficulty: easy</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="side side--back side--back--1">
//                   <div className="cta">
//                     <div className="price-box">
//                       <p className="price-only">Only</p>
//                       <p className="price-value">$297</p>
//                     </div>

//                     <a href="#popup" className="btn--white">
//                       Book now!
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col--c">
//               <div className="card">
//                 <div className="side side--front">
//                   <div className="picture picture--2">&nbsp;</div>
//                   <h4 className="heading">
//                     <span className="heading-span heading-span--2">
//                       The Forest Hiker
//                     </span>
//                   </h4>

//                   <div className="details">
//                     <ul>
//                       <li>5 day tour</li>
//                       <li>Up to 40 people</li>
//                       <li>6 tour guides</li>
//                       <li>Sleep in provided tents</li>
//                       <li>Difficulty: medium</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="side side--back side--back--2">
//                   <div className="cta">
//                     <div className="price-box">
//                       <p className="price-only">Only</p>
//                       <p className="price-value">$597</p>
//                     </div>

//                     <a href="#popup" className="btn--white">
//                       Book now!
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col--c">
//               <div className="card">
//                 <div className="side side--front">
//                   <div className="picture picture--3">&nbsp;</div>
//                   <h4 className="heading">
//                     <span className="heading-span heading-span--3">
//                       The Snow Adventurer
//                     </span>
//                   </h4>

//                   <div className="details">
//                     <ul>
//                       <li>5 day tour</li>
//                       <li>Up to 15 people</li>
//                       <li>3 tour guides</li>
//                       <li>Sleep in provided tents</li>
//                       <li>Difficulty: hard</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="side side--back side--back--3">
//                   <div className="cta">
//                     <div className="price-box">
//                       <p className="price-only">Only</p>
//                       <p className="price-value">$897</p>
//                     </div>

//                     <a href="#popup" className="btn--white">
//                       Book now!
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="u-center-text u-margin-top-xl">
//             <a href="#" className="btn--green">
//               Discover all tours
//             </a>
//           </div>
//         </section>

//         <section className="section-stories">
//           <div className="bg-video">
//             <video className="content" autoPlay muted loop>
//               <source src="public/img/video.mp4" type="video/mp4" />
//               <source src="public/img/video.webm" type="video/webm" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           <div className="u-center-text u-margin-bottom-l">
//             <h2 className="heading-secondary">
//               We make people genuinely happy
//             </h2>
//           </div>

//           <div className="col">
//             <div className="story">
//               <figure className="shape">
//                 <img
//                   src="public/img/BIGDM1.PNG"
//                   alt="PFP for first story"
//                   className="img img--1"
//                 />
//                 <figcaption className="caption">Pamela Kyvelos</figcaption>
//               </figure>
//               <div className="text">
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   I had the best week ever with big DM
//                 </h3>
//                 <p className="paragraph">
//                   Big DM brought me and a bunch of other hoes there. Shi brazy
//                   on gang. Quis nostrum, voluptatibus, cumque, asperiores magnam
//                   incidunt voluptatum enim sed doloremque facilis laboriosam. In
//                   eveniet numquam quo. Laboriosam veritatis mollitia alias animi
//                   repellendus. Commodi, voluptatibus maxime illum quae
//                   consequatur corrupti! Corrupti minus nisi nihil ipsum!
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col">
//             <div className="story">
//               <figure className="shape">
//                 <img
//                   src="public/img/BIGDM2.JPG"
//                   alt="PFP for first story"
//                   className="img img--2"
//                 />
//                 <figcaption className="caption">
//                   David "Big DM" Mandres
//                 </figcaption>
//               </figure>
//               <div className="text">
//                 <h3 className="heading-tertiary u-margin-bottom-sm">
//                   Yo i really did ts on gang
//                 </h3>
//                 <p className="paragraph">
//                   WUGMDS TIPOITBT BDAS IGIMBAIGNF. Quis nostrum, voluptatibus,
//                   cumque, asperiores magnam incidunt voluptatum enim sed
//                   doloremque facilis laboriosam. In eveniet numquam quo.
//                   Laboriosam veritatis mollitia alias animi repellendus.
//                   Commodi, voluptatibus maxime illum quae consequatur corrupti!
//                   Corrupti minus nisi nihil ipsum!
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="u-center-text u-margin-top-xl">
//             <a href="#" className="btn-text">
//               Read all stories &rarr;
//             </a>
//           </div>
//         </section>

//         <section className="section-book">
//           <div className="flex-container--center">
//             <div className="book">
//               <form action="#" className="form">
//                 <div className="u-margin-bottom-m">
//                   <h2 className="heading-secondary">Start booking now</h2>
//                 </div>

//                 <div className="name-group">
//                   <div className="group">
//                     <input
//                       id="gname"
//                       type="text"
//                       placeholder="Given name"
//                       required
//                       autoComplete="given-name"
//                     />
//                     <label htmlFor="gname">Given name</label>
//                   </div>
//                   <div className="group">
//                     <input
//                       id="fname"
//                       type="text"
//                       placeholder="Family name"
//                       required
//                       autoComplete="family-name"
//                     />
//                     <label htmlFor="fname">Family name</label>
//                   </div>
//                 </div>

//                 <div className="group">
//                   <input id="email" type="email" placeholder="Email" required />
//                   <label htmlFor="email">Email</label>
//                 </div>

//                 <div className="radio-group">
//                   <div className="radio-btn-container">
//                     <input id="small" type="radio" name="size" />
//                     <label htmlFor="small">
//                       <span className="radio-btn"></span>
//                       Small tour group
//                     </label>
//                   </div>

//                   <div className="radio-btn-container">
//                     <input id="large" type="radio" name="size" />
//                     <label htmlFor="large">
//                       <span className="radio-btn"></span>
//                       Large tour group
//                     </label>
//                   </div>
//                 </div>

//                 <button className="btn--green btn--animated u-margin-top-m">
//                   Next step &rarr;
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <div className="logo-box u-margin-bottom-l">
//           <picture className="logo">
//             <source
//               srcSet="
//               public/img/logo-green-small-1x.png 1x,
//               public/img/logo-green-small-2x.png 2x
//             "
//               media="(max-width: 37.5em)"
//             />
//             <img
//               src="public/img/logo-green-1x.png"
//               srcSet="
//               public/img/logo-green-1x.png 1x,
//               public/img/logo-green-2x.png 2x
//             "
//               alt="Full logo"
//             />
//           </picture>
//         </div>

//         <div className="grid-2-cols">
//           <div className="col">
//             <div className="nav">
//               <ul className="list">
//                 <li className="item">
//                   <a href="#" className="link">
//                     Company
//                   </a>
//                 </li>
//                 <li className="item">
//                   <a href="#" className="link">
//                     Contact us
//                   </a>
//                 </li>
//                 <li className="item">
//                   <a href="#" className="link">
//                     Careers
//                   </a>
//                 </li>
//                 <li className="item">
//                   <a href="#" className="link">
//                     Privacy policy
//                   </a>
//                 </li>
//                 <li className="item">
//                   <a href="#" className="link">
//                     Terms
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col">
//             <p className="copyright">
//               Built by
//               <a href="https://github.com/davidmandres" className="link">
//                 Big DM
//               </a>
//               with the goat Jonas Schmedtmann for his Advanced CSS and Sass
//               course. Copyright &copy; by Jonas Schmedtmann. You are 100%
//               allowed to use this webpage for both personal and commercial use,
//               but NOT to claim it as your own design. A credit to the original
//               author, Jonas Schmedtmann, is highly appreciated and required!
//             </p>
//           </div>
//         </div>
//       </footer>

//       <div className="popup" id="popup">
//         <div className="content">
//           <div className="left">
//             <img
//               src="public/img/nat-8.jpg"
//               alt="Tour photo 1"
//               className="img"
//             />
//             <img
//               src="public/img/nat-9.jpg"
//               alt="Tour photo 2"
//               className="img"
//             />
//           </div>
//           <div className="right">
//             <h2 className="heading-secondary">Start booking now</h2>
//             <h3 className="heading-tertiary">
//               Important &ndash; Please read terms before booking
//             </h3>
//             <p className="text">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
//               voluptas? Obcaecati enim sequi quis animi eligendi cum
//               perspiciatis rerum, aliquid minima iure placeat molestiae ipsam
//               unde culpa cumque necessitatibus at? Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Reiciendis assumenda dolor quod
//               dolorem architecto inventore sint hic, quam beatae error. Odit
//               vitae quidem aliquam inventore maxime. Ipsum tempore sunt facere.
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
//               debitis tenetur quis dignissimos corrupti animi corporis dolores
//               itaque sit, ut autem asperiores sapiente. Sunt, soluta alias sequi
//               eos nulla delectus.
//             </p>
//             <a href="#" className="btn--green">
//               Book Now
//             </a>
//           </div>

//           <a href="#section-tours" className="close">
//             &times;
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }
