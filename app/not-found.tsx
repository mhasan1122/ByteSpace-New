import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <div>
      <section className="relative min-h-[760px] overflow-hidden bg-blue text-white">
        <div className="grid-bg absolute inset-0" />
        <p className="font-display pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 bg-gradient-to-b from-lime via-lime/70 to-transparent bg-clip-text text-[180px] font-semibold leading-none text-transparent sm:text-[280px] lg:text-[420px]">
          404
        </p>
        <div className="relative">
          <Header />
          <div className="mx-auto flex max-w-[935px] flex-col items-center px-6 pb-24 pt-56 text-center sm:pt-72">
            <h1 className="font-display text-4xl font-semibold leading-[1.2] tracking-tight sm:text-6xl lg:text-[72px]">
              The page you are looking for doesn’t exist
            </h1>
            <p className="mt-6 text-lg text-line">Try to use a correct url or go back to homepage to start again</p>
            <Link href="/" className="mt-8 rounded-full bg-lime px-6 py-3 text-lg font-medium text-ink">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
