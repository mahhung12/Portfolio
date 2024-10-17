import { Container } from "@/components/Container";

import SocialList from "./social-list";
import Resume from "./resume";
import Newsletter from "./news-letter";
import SideProject from "./side-project";

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey there 👋👋, I&apos;m <b>Harry D</b>. <br />
            For the past 4 years, I&apos;ve been crafting seamless digital experiences as a Fullstack developer. Explore
            my portfolio to see how I can bring your ideas to life with precision and creativity.
            <br />
            Also i&apos;m living in Hanoi, Vietnam 🇻🇳.
          </p>
          <div className="mt-6">
            <SocialList />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28 relative">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6">Job Experiences</h2>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Resume />
          </div>
          <div className="h-fit space-y-10 lg:pl-16 xl:pl-24 justify-center sticky top-5">
            <SideProject />
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}
