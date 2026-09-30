import Link from "next/link";
import type { Course } from "@/lib/data";
import { faces } from "@/lib/data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex h-[384px] w-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-4"
    >
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <img src={course.image} alt="" className="size-full object-cover" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {[course.lessons, course.duration, course.comments].map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-[#4f4f4f] backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-black">{course.title}</h3>
          <p className="mt-1 text-xs text-[#4f4f4f]">
            by <span className="text-blue">{course.author}</span>
          </p>
        </div>
        <p className="flex items-center text-lg font-medium text-[#4f4f4f]">
          {course.rating}
          <img src="/icon-star-outline.svg" alt="" className="ml-0.5 size-6" />
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-slate">
          <img src="/icon-signal.svg" alt="" className="size-5" />
          {course.level}
        </span>
        <span className="flex items-center">
          {faces.map((face, index) => (
            <img
              key={face}
              src={face}
              alt=""
              className="size-8 rounded-full border-2 border-white object-cover"
              style={{ marginLeft: index === 0 ? 0 : -8 }}
            />
          ))}
          <span className="relative -ml-2 grid size-8 place-items-center">
            <img src="/face-plus.svg" alt="" className="absolute inset-0 size-8" />
            <span className="relative text-xs font-medium text-white">26+</span>
          </span>
        </span>
      </div>
      <p className="mt-4 font-display text-xl font-semibold text-blue">
        <span className="font-medium">$</span>
        {course.price}
        <span className="font-sans text-xs font-normal text-[#4f4f4f]">/lifetime</span>
      </p>
    </Link>
  );
}
