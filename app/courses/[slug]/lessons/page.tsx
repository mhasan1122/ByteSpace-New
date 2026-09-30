import { notFound } from "next/navigation";
import { CourseShell } from "@/components/CourseShell";
import { getCourse, modules } from "@/lib/data";

export default async function LessonsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <CourseShell course={course} tab="lessons">
      <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">Explore the Modules</h2>
      <p className="mt-6 max-w-[723px] text-base leading-[1.6] text-slate">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <h2 className="font-display mt-6 text-xl font-semibold tracking-[-0.01em]">Lesson List</h2>
      <div className="mt-6 space-y-6">
        {modules.map((module) => (
          <article key={module.title} className="flex gap-[13px]">
            <span className="grid size-[72px] shrink-0 place-items-center rounded-3xl bg-lime">
              <img src="/icon-module.svg" alt="" width={40} height={40} />
            </span>
            <div>
              <h3 className="text-base font-medium leading-[1.2] text-ink">{module.title}</h3>
              <p className="mt-1 text-base leading-[1.6] text-slate">{module.body}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="font-display mt-6 text-xl font-semibold tracking-[-0.01em]">Lesson Content</h2>
      <p className="mt-6 max-w-[723px] text-base leading-[1.6] text-slate">
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>

      <h2 className="font-display mt-6 text-xl font-semibold tracking-[-0.01em]">Lesson Progress Tracking</h2>
      <p className="mt-6 max-w-[723px] text-base leading-[1.6] text-slate">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
      </p>
      <div className="mt-6 rounded-2xl bg-white p-4">
        <p className="text-sm font-medium leading-[1.2] text-ink">Learning Progress</p>
        <p className="font-display mt-2 text-4xl font-semibold tracking-[-0.01em] text-ink">55%</p>
        <div className="mt-2 h-2 w-full rounded-full bg-[#f6f6f6]">
          <div className="h-2 w-[56%] rounded-full bg-lime" />
        </div>
      </div>
    </CourseShell>
  );
}
