import { HomeHero } from "@/src/components/home-hero";
import { HomePillars } from "@/src/components/home-pillars";
import { HomeOpportunities } from "@/src/components/home-open-positions";
import { HomeCTA } from "@/src/components/home-cta";

export default function Home() {
  return (
    <>
      <main>
        <HomeHero />
        <HomePillars />
        <HomeOpportunities />
        <HomeCTA />
      </main>
    </>
  );
}
