import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CourseCard } from "@/components/CourseCard";
import { courses, students } from "@/lib/data";

export function AuthShell({
  showcaseTitle,
  showcaseBody,
  eyebrow,
  title,
  children,
  footer,
}: {
  showcaseTitle: string;
  showcaseBody: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-blue">
      <div className="grid-bg absolute inset-0 opacity-[0.12]" />
      <div className="relative mx-auto min-h-screen max-w-[1440px] px-6 md:px-[120px]">
        <header className="flex h-[120px] items-center">
          <Logo tone="light" />
        </header>

        <div className="flex flex-col items-center gap-10 pb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="hidden w-[548px] lg:block">
            <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-mist">{showcaseTitle}</h2>
            <p className="mt-4 max-w-[475px] text-lg leading-[1.6] text-mist">{showcaseBody}</p>
            <div className="relative mt-[58px] h-[585px] w-[548px]">
              <img
                src="/ornament-cone-right.png"
                alt=""
                className="pointer-events-none absolute left-[54px] top-[15px] z-20 w-[146px]"
              />
              <img
                src="/ornament-cone-right.png"
                alt=""
                className="pointer-events-none absolute bottom-0 left-0 z-0 w-[188px]"
              />
              <img
                src="/ornament-squiggle-small.png"
                alt=""
                className="pointer-events-none absolute right-0 top-[321px] z-20 w-[175px]"
              />
              <div className="absolute left-[25px] top-[89px] z-[1] w-[373px]">
                <CourseCard course={courses[1]} />
              </div>
              <div className="absolute left-[136px] top-0 z-10 w-[373px]">
                <CourseCard course={courses[2]} />
              </div>
              <div className="absolute left-[251px] top-[435px] z-20 w-[258px] rounded-2xl bg-lime p-4 backdrop-blur-[10px]">
                <p className="text-base font-medium leading-6 text-ink">Happy Students</p>
                <p className="flex items-center text-[10px] leading-[1.5] text-[#424348]">
                  <span className="mr-1 font-bold text-ink">4.5</span> (240)
                  <span className="ml-1 inline-block size-4 text-blue">★</span>
                </p>
                <div className="mt-2 flex items-center">
                  {students.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="size-[43px] rounded-full border-2 border-lime object-cover"
                      style={{ marginLeft: index === 0 ? 0 : -16 }}
                    />
                  ))}
                  <span className="relative -ml-4 grid size-[43px] place-items-center rounded-full bg-ink text-xs font-bold text-mist">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-[579px] flex-col rounded-3xl bg-white px-8 py-[61px] sm:px-[63px] lg:min-h-[784px]">
            <p className="text-lg leading-[1.6] text-blue">{eyebrow}</p>
            <h1 className="font-display mt-0 text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[44px]">
              {title}
            </h1>
            <div className="mt-10 flex flex-1 flex-col">{children}</div>
            <div className="mt-auto pt-10 text-center text-base leading-[1.6] text-slate">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block w-full">
      <span className="text-sm font-medium leading-[1.2] text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 h-[52px] w-full rounded-xl border border-line bg-white px-6 text-lg text-ink outline-none placeholder:text-muted focus:border-blue"
      />
    </label>
  );
}

export function LimeButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className="rounded-full bg-lime px-6 py-3 text-lg font-medium leading-[1.2] text-ink">
      {children}
    </button>
  );
}

export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-blue">
      {children}
    </Link>
  );
}
