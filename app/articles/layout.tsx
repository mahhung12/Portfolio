import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry - Articles",
  description: "Articles of Harry",
  icons: { icon: "/favicon.jpg" },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
