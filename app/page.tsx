import { Container } from "@/components/Container";

import Newsletter from "./news-letter";
import Resume from "./resume";
import SideProject from "./side-project";
import Skills, { SkillsAnimation } from "./skills";
import SocialList from "./social-list";
import RotatingText from "@/components/RoatingText/RoatingText";
import FadeContent from "@/components/FaceContent";

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 flex gap-5 items-center">
              Software
              <RotatingText
                texts={["Engineer", "Developer"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Hi, I&apos;m <b>Harry</b>! 👋 <br />
              For the past four years, I&apos;ve been building intuitive, high-performing digital experiences as a
              Fullstack Developer. From sleek front-end interfaces to robust back-end systems, I transform ideas into
              reality with precision and creativity.
              <br />
              <b>🇻🇳</b> Based in Hanoi, Vietnam.
            </p>
            <div className="mt-6">
              <SocialList />
            </div>
          </div>
        </FadeContent>
      </Container>

      <Container>
        {/* List  */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="mt-40 space-y-6">
            {/* <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">About Me</h2> */}
            <SkillsAnimation />
          </div>
        </FadeContent>
      </Container>

      <Container className="mt-24 md:mt-28 relative">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">Job Experiences</h2>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              <Resume />
            </div>

            <div className="h-fit space-y-10 lg:pl-16 xl:pl-24 justify-center sticky top-5">
              {/* <Skills /> */}
              <SideProject />
              <Newsletter />
            </div>
          </div>
        </FadeContent>
      </Container>
    </>
  );
}
