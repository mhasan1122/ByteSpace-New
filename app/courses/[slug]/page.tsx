import { notFound } from "next/navigation";
import { CourseShell } from "@/components/CourseShell";
import { courseDescription, getCourse, keyPoints, sneakPeeks } from "@/lib/data";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <CourseShell course={course} tab="about">
      <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">Description</h2>
      <div className="mt-6 space-y-6 whitespace-pre-line text-base leading-[1.6] text-slate">
        {courseDescription}
      </div>
      <h2 className="font-display mt-10 text-xl font-semibold tracking-[-0.01em]">Sneak Peak</h2>
      <div className="mt-6 grid grid-cols-2 gap-[19px] sm:grid-cols-4">
        {sneakPeeks.map((src) => (
          <img key={src} src={src} alt="" className="h-[125px] w-full rounded-2xl object-cover" />
        ))}
      </div>
      <h2 className="font-display mt-10 text-xl font-semibold tracking-[-0.01em]">Key Points</h2>
      <ul className="mt-6 space-y-3">
        {keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-2 text-base text-slate">
            <img src="/icon-check.svg" alt="" width={24} height={24} />
            {point}
          </li>
        ))}
      </ul>
    </CourseShell>
  );
}
