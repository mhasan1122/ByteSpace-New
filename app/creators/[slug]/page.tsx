import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";

const filters = [
  {
    label: "Filter",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z" fill="#4B4C53" />
      </svg>
    ),
  },
  { label: "Level", icon: <img src="/icon-signal.svg" alt="" className="size-6" /> },
  {
    label: "Category",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z" fill="#4B4C53" />
      </svg>
    ),
  },
];

export default function CreatorPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-blue text-white">
        <div className="grid-bg absolute inset-0 opacity-[0.12]" />
        <div className="relative">
          <Header />
          <div className="mx-auto max-w-[1200px] px-6 pb-14">
            <div className="flex items-center gap-6">
              <img src="/creator-avatar.png" alt="" className="size-24 rounded-3xl object-cover" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-mist">
                    PurePearl Studio
                  </h1>
                  <span className="rounded-full bg-lime px-6 py-2 text-base font-medium text-ink">Creator</span>
                </div>
                <p className="mt-2 text-lg leading-[1.6] text-mist">Passionate UI/UX, Web designer</p>
              </div>
            </div>
            <p className="mt-10 max-w-[1197px] whitespace-pre-line text-lg leading-[1.6] text-mist">
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              {"\n"}
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                {[
                  ["3", "Products"],
                  ["12", "Followers"],
                ].map(([value, label]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-medium text-ink"
                  >
                    <span className="text-blue">{value}</span>
                    {label}
                  </span>
                ))}
              </div>
              <button type="button" className="rounded-full bg-lime px-6 py-3 text-lg font-medium text-ink">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {filters.map((item) => (
              <span key={item.label} className="pill gap-1 border border-line bg-white text-slate">
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
          <span className="pill gap-1 border border-line bg-white text-slate">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Z" fill="#4B4C53" />
            </svg>
            Most relevant
          </span>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
