"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { courses, pillRows } from "@/lib/data";

function SearchResults() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const initialCategory = params.get("category") ?? "Featured";
  const [query, setQuery] = useState(initial);
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    const matches = courses.filter(
      (course) => course.title.toLowerCase().includes(q) || course.author.toLowerCase().includes(q),
    );
    return matches.length ? matches : courses;
  }, [query]);

  return (
    <div>
      <section className="relative overflow-hidden bg-blue text-white">
        <div className="grid-bg absolute inset-0" />
        <div className="relative">
          <Header />
          <div className="mx-auto flex max-w-[760px] flex-col items-center px-6 pb-16 text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">Find Your Next Course</h1>
            <form
              className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                setPage(1);
              }}
            >
              <label className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white px-6">
                <img src="/icon-search.svg" alt="" className="size-6" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-muted"
                />
              </label>
              <button className="h-[46px] rounded-full bg-lime px-6 text-lg font-medium text-ink">Search</button>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {pillRows[0].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setCategory(label)}
              className={`pill ${category === label ? "bg-lime text-ink" : "bg-mist text-slate"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            {["Filter", "Level", "Category"].map((label) => (
              <button key={label} type="button" className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-4 text-sm">
                {label}
              </button>
            ))}
          </div>
          <button type="button" className="inline-flex h-12 items-center rounded-full bg-mist px-4 text-sm font-medium">
            Most relevant
          </button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[1, 2, 3].map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => setPage(number)}
              className={`grid size-10 place-items-center rounded-full text-sm font-medium ${
                page === number ? "bg-lime text-ink" : "bg-mist text-slate"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
