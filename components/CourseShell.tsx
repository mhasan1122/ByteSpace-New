import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { courseIncludes, sneakLessons, type Course } from "@/lib/data";

export function CourseShell({
  course,
  tab,
  children,
}: {
  course: Course;
  tab: "about" | "lessons" | "reviews";
  children: ReactNode;
}) {
  const tabs = [
    { id: "about" as const, href: `/courses/${course.slug}`, label: "About" },
    { id: "lessons" as const, href: `/courses/${course.slug}/lessons`, label: "Lesson" },
    { id: "reviews" as const, href: `/courses/${course.slug}/reviews`, label: "Reviews" },
  ];

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-blue md:h-[957px]">
          <div className="grid-bg absolute inset-0 opacity-[0.12]" />
        </div>
        <div className="relative text-white">
          <Header />
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex items-start justify-between gap-8">
              <div className="max-w-[769px]">
                <h1 className="font-display text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-mist md:text-4xl">
                  {course.title}: A Comprehensive Guide
                </h1>
                <p className="mt-2 text-xl font-semibold tracking-[-0.01em] text-mist">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
                <p className="mt-6 text-lg font-medium text-[#f1f4fe]">
                  by <span className="text-lime">{course.author}</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium text-ink">
                    <img src="/icon-signal.svg" alt="" className="size-6" />
                    Intermediate
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium text-ink">
                    <img src="/icon-star-outline.svg" alt="" className="size-6" />
                    4.8 (172 reviews)
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium text-ink">
                    <img src="/icon-people.svg" alt="" className="size-6" />
                    199 Students
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="hidden shrink-0 items-center gap-2 rounded-full bg-lime px-6 py-2 text-base font-medium text-ink md:inline-flex"
              >
                <img src="/icon-share.svg" alt="" className="size-6" />
                Share
              </button>
            </div>

            <div className="mt-14 grid items-start gap-10 pb-20 lg:grid-cols-[720px_412px]">
              <div>
                <div className="relative overflow-hidden rounded-3xl bg-[#443131]">
                  <img src="/course-hero.png" alt="" className="h-[280px] w-full object-cover md:h-[479px]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center rounded-3xl border border-[#4f4f4f] bg-[rgba(61,61,61,0.24)] p-4 backdrop-blur-[20px]">
                      <img src="/icon-play.svg" alt="" width={72} height={72} />
                    </span>
                  </div>
                </div>
                <div className="pt-16 text-ink">
                  <div className="flex gap-4">
                    {tabs.map((item) =>
                      item.id === tab ? (
                        <span key={item.id} className="pill bg-lime text-ink">
                          {item.label}
                        </span>
                      ) : (
                        <Link key={item.id} href={item.href} className="pill bg-mist text-slate">
                          {item.label}
                        </Link>
                      ),
                    )}
                  </div>
                  <div className="mt-10">{children}</div>
                </div>
              </div>

              <aside className="rounded-3xl border border-border bg-white p-10 text-ink">
                <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">
                  112 Lessons (24 hours)
                </h2>
                <ul className="mt-6 space-y-3">
                  {sneakLessons.map((lesson) => (
                    <li key={lesson.index} className="flex items-start justify-between gap-4">
                      <p className="text-base font-medium">
                        <span className="mr-2 inline-block w-6">{lesson.index}</span>
                        {lesson.title}
                      </p>
                      <span className="shrink-0 text-base text-blue">{lesson.time}</span>
                    </li>
                  ))}
                  <li className="text-base text-slate">99 more videos</li>
                </ul>
                <p className="mt-10 text-center text-base leading-[1.6] text-slate">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <p className="mt-6 flex items-end">
                  <span className="font-display text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-blue">
                    ${course.price}
                  </span>
                  <span className="mb-1 text-base text-slate">/lifetime</span>
                </p>
                <Link
                  href="/register"
                  className="mt-6 block rounded-full bg-lime py-3 text-center text-lg font-medium text-ink"
                >
                  Enroll Now
                </Link>
                <h3 className="font-display mt-10 text-xl font-semibold tracking-[-0.01em]">
                  This course include
                </h3>
                <ul className="mt-6 space-y-3">
                  {courseIncludes.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-base text-slate">
                      <img src={item.icon} alt="" className="size-6" />
                      {item.label}
                    </li>
                  ))}
                </ul>
                <hr className="my-6 border-[#d1d1d1]" />
                <div className="flex items-center gap-3">
                  <img src="/creator-avatar.png" alt="" className="size-[52px] rounded-full object-cover" />
                  <div>
                    <p className="text-lg font-medium">PurePearl Studio</p>
                    <p className="text-base text-slate">Professional Creator</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-base leading-[1.6] text-slate">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <Link
                  href="/creators/purepearl-studio"
                  className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-base font-medium text-slate"
                >
                  See Full Profile
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
