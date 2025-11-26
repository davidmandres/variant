import {
  LandingHero,
  ValueProps,
  ProPlan,
  Guarantee,
} from "../components/landing-page-sections";

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <ValueProps />
      <ProPlan />
      <Guarantee />
    </>
  );
}
