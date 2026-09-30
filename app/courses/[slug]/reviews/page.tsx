import { notFound } from "next/navigation";
import { CourseShell } from "@/components/CourseShell";
import { getCourse, reviews } from "@/lib/data";

const bars = [
  { value: 720, width: "100%" },
  { value: 120, width: "17%" },
  { value: 21, width: "3%" },
  { value: 12, width: "2%" },
  { value: 16, width: "2%" },
];

function Stars() {
  return (
    <span className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <img key={i} src="/icon-star.svg" alt="" width={16} height={16} />
      ))}
    </span>
  );
}

export default async function ReviewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <CourseShell course={course} tab="reviews">
      <div className="max-w-[723px] space-y-6">
        <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">What Learners Are Saying</h2>
        <p className="text-base leading-[1.6] text-slate">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
          Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
          transformative journey of mastering digital asset creation.
        </p>

        <div className="flex items-center gap-6 rounded-2xl border border-line bg-white p-10">
          <div className="shrink-0 rounded-lg bg-lime px-10 py-10 text-center">
            <p className="text-sm font-medium leading-[1.2] text-ink">Ratings</p>
            <p className="font-display mt-1 text-4xl font-semibold tracking-[-0.01em] text-ink">4.7</p>
          </div>
          <div className="flex-1 space-y-1">
            {bars.map((bar) => (
              <div key={bar.value} className="flex items-center gap-4">
                <div className="h-2 flex-1 rounded-full bg-mist">
                  <div className="h-2 rounded-full bg-lime" style={{ width: bar.width }} />
                </div>
                <Stars />
                <span className="w-10 text-center text-base leading-[1.6] text-slate">{bar.value}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">Individual Reviews:</h2>
        <div className="flex flex-wrap gap-4">
          <span className="pill bg-lime text-ink">All rating</span>
          {["5", "4", "3", "2", "1"].map((label) => (
            <span key={label} className="pill gap-1 bg-mist text-slate">
              <img src="/icon-star.svg" alt="" width={16} height={16} />
              {label}
            </span>
          ))}
        </div>

        {reviews.map((review) => (
          <article key={review.name} className="rounded-3xl border border-line p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt="" className="size-[52px] rounded-full object-cover" />
                  <div>
                    <p className="text-lg font-medium leading-[1.2] text-ink">{review.name}</p>
                    <p className="mt-1 text-base text-slate">{review.role}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Stars />
                </div>
              </div>
              <p className="shrink-0 text-base text-slate">{review.when}</p>
            </div>
            <p className="mt-6 text-base leading-[1.6] text-slate">&ldquo;{review.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </CourseShell>
  );
}
