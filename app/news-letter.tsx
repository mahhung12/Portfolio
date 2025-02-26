"use client";

import { Button } from "@/components/Button";
import { Input } from "@headlessui/react";
import { useState } from "react";
import { PiEnvelopeBold } from "react-icons/pi";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleGetNotify = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    alert(`Thank you! We'll send notifications to ${email}`);
  };

  return (
    <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PiEnvelopeBold className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex mt-6">
        <Input
          placeholder="Enter your email address"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button className="ml-4 flex-none" onClick={handleGetNotify}>
          Join
        </Button>
      </div>
    </div>
  );
}
