"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Courses" },
  { href: "/creators/purepearl-studio", label: "Creators" },
];

export function Header({ variant = "blue" }: { variant?: "blue" | "light" }) {
  const pathname = usePathname();
  const onBlue = variant === "blue";

  return (
    <header className="mx-auto flex h-[120px] w-full max-w-[1440px] items-center justify-between px-6 md:px-[120px]">
      <Logo tone={onBlue ? "light" : "dark"} />
      <nav className="hidden items-center gap-6 text-base md:flex">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${active ? "font-medium" : "font-normal"} ${
                onBlue ? "text-mist" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className={`flex items-center gap-6 text-base ${onBlue ? "text-mist" : "text-ink"}`}>
        <Link href="/login">Sign In</Link>
        <Link href="/register">Join Us</Link>
        <Link href="/search" aria-label="Bag">
          <img src="/icon-bag.svg" alt="" className="size-6" />
        </Link>
      </div>
    </header>
  );
}
