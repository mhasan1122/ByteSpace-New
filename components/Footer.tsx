"use client";

import { FormEvent, useState } from "react";
import { Logo } from "./Logo";

const columns = [
  { title: "Browse", items: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
  { title: "", items: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "Platform", items: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[528px_1fr] md:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Logo tone="dark" />
            <p className="max-w-lg text-sm leading-relaxed text-ink">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="h-[52px] w-full max-w-[376px] rounded-full border border-border bg-white px-6 text-base text-ink outline-none placeholder:text-ink"
              />
              <button
                type="submit"
                className="rounded-full bg-lime px-6 py-3 text-lg font-medium text-ink"
              >
                {done ? "Joined" : "Search"}
              </button>
            </div>
            <p className="max-w-lg text-xs leading-relaxed text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.items[0]}>
              {col.title ? <p className="mb-6 text-base font-medium text-ink">{col.title}</p> : <div className="mb-6 h-6" />}
              <ul className="space-y-4 text-sm leading-relaxed text-ink">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 border-t border-line px-6 py-6 text-xs text-ink md:flex-row md:items-center md:justify-between md:px-0">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies Settings</span>
        </div>
      </div>
    </footer>
  );
}
