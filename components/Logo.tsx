import Link from "next/link";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.svg" alt="" width={29} height={32} className="h-8 w-7" />
      <span
        className={`font-brand text-2xl font-bold tracking-normal ${
          tone === "light" ? "text-mist" : "text-ink"
        }`}
      >
        ByteSpace
      </span>
    </Link>
  );
}
