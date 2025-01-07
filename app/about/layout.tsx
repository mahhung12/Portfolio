import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry - About",
  description: "I’m Harry. living in Hanoi - Vietnam, enjoy building software and learning new technologies.",
  icons: { icon: "/favicon.jpg" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
