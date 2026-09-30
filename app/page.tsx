import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import {
  categoryItems,
  courses,
  partners,
  pillRows,
  students,
  testimonials,
} from "@/lib/data";

function StudentStack() {
  return (
    <div className="flex items-center">
      {students.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className="size-[43px] rounded-full border-2 border-white object-cover"
          style={{ marginLeft: index === 0 ? 0 : -16 }}
        />
      ))}
      <span className="relative -ml-4 grid size-[43px] place-items-center rounded-full bg-lime">
        <span className="text-xs font-bold text-ink">2K+</span>
      </span>
    </div>
  );
}

function HeroOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <img src="/ornament-squiggle-left.png" alt="" className="absolute left-[-80px] top-[220px] w-[385px]" />
      <img src="/ornament-squiggle-small.png" alt="" className="absolute left-[180px] top-[470px] w-[175px]" />
      <img src="/ornament-cone-left.png" alt="" className="absolute left-[18px] bottom-[-40px] w-[342px]" />
      <img src="/ornament-cone-right.png" alt="" className="absolute right-[-160px] top-[220px] w-[370px]" />
      <img src="/ornament-cone-mid.png" alt="" className="absolute right-[146px] top-[460px] w-[188px]" />
      <img src="/ornament-squiggle-right.png" alt="" className="absolute bottom-[-20px] right-[-10px] w-[330px]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-blue text-white">
        <div className="grid-bg absolute inset-0 opacity-[0.12]" />
        <img
          src="/lime-blob.svg"
          alt=""
          className="pointer-events-none absolute left-[145px] top-[582px] w-[1149px] max-w-none"
        />
        <HeroOrnaments />
        <div className="relative">
          <Header />
          <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 pb-8 pt-8 text-center">
            <h1 className="font-display max-w-[935px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] sm:text-6xl lg:text-[72px]">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="mt-8 max-w-[819px] text-lg leading-[1.6] text-line">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
            <form action="/search" className="mt-[60px] flex w-full max-w-[581px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <label className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white px-6 text-muted">
                <img src="/icon-search.svg" alt="" className="size-6" />
                <input
                  name="q"
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-lg text-muted outline-none placeholder:text-muted"
                />
              </label>
              <button className="h-[46px] shrink-0 rounded-full bg-lime px-6 text-lg font-medium text-ink">
                Search
              </button>
            </form>
          </div>
          <div className="relative mx-auto h-[460px] max-w-[1100px] px-6">
            <img
              src="/hero-person.png"
              alt="Student with headphones and a laptop"
              className="absolute bottom-0 left-1/2 z-10 h-[430px] w-auto -translate-x-1/2 object-contain"
            />
            <div className="absolute left-[80px] top-[120px] z-20 hidden rounded-2xl bg-white p-4 text-ink shadow-[0_24px_48px_rgba(0,0,0,0.1)] backdrop-blur-[10px] md:block">
              <p className="text-base font-medium leading-[1.2]">UI/UX Design</p>
              <p className="mt-1 text-xs leading-[1.6] text-muted">
                200 Courses <span className="mx-1">•</span> 1000+ Students
              </p>
            </div>
            <div className="absolute right-[40px] top-[140px] z-20 hidden w-[232px] rounded-2xl bg-white p-4 text-ink shadow-[0_24px_48px_rgba(0,0,0,0.1)] backdrop-blur-[10px] md:block">
              <p className="text-sm font-medium leading-6">Learning Progress</p>
              <p className="font-display mt-1 text-5xl font-semibold tracking-[-0.01em]">55%</p>
              <div className="mt-2 h-2 w-full rounded-full bg-[#f6f6f6]">
                <div className="h-2 w-[56%] rounded-full bg-lime" />
              </div>
            </div>
            <div className="absolute bottom-6 left-[40px] z-20 hidden w-[258px] rounded-2xl bg-white p-4 text-ink shadow-[0_24px_48px_rgba(0,0,0,0.1)] backdrop-blur-[10px] lg:block">
              <p className="text-base font-medium leading-6">Happy Students</p>
              <p className="mt-0.5 flex items-center text-xs text-muted">
                <span className="mr-1 font-bold text-ink">4.5</span> (240)
                <img src="/icon-star.svg" alt="" className="ml-1 size-4" />
              </p>
              <div className="mt-2">
                <StudentStack />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto flex max-w-[1132px] flex-wrap items-center justify-center gap-10 px-6 py-20 md:gap-[72px]">
          {partners.map((src) => (
            <img key={src} src={src} alt="Logoipsum" className="h-10 w-auto" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[917px] px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="mt-4 text-lg leading-[1.6] text-muted">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </section>

      <section className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-6">
        {pillRows.map((row, rowIndex) => (
          <div key={row[0]} className="flex flex-wrap justify-center gap-4">
            {row.map((label) => (
              <Link
                key={label}
                href={`/search?category=${encodeURIComponent(label)}`}
                className={`pill ${rowIndex === 0 && label === "Featured" ? "bg-lime text-ink" : "bg-mist text-slate"}`}
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </section>

      <section className="mx-auto max-w-[917px] px-6 pb-10 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.01em] text-ink md:text-[40px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-lg leading-[1.6] text-muted">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 px-6 pb-20 sm:grid-cols-3 lg:grid-cols-6">
        {categoryItems.map((item) => (
          <Link
            key={item.name}
            href={`/search?category=${encodeURIComponent(item.name)}`}
            className="flex h-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-white"
          >
            <span className="grid size-[60px] place-items-center rounded-[40px] bg-lime">
              <img src={item.icon} alt="" className="size-9" />
            </span>
            <span className="text-center text-xl font-medium text-ink">{item.name}</span>
          </Link>
        ))}
      </section>

      <section className="relative overflow-hidden bg-[#fafafa]">
        <div className="pointer-events-none absolute -left-40 -top-20 size-[720px] rounded-full bg-lime/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 top-40 size-[720px] rounded-full bg-blue/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-[520px] rounded-full bg-lime/30 blur-[120px]" />
        <div className="relative mx-auto flex max-w-[1258px] flex-col gap-[72px] px-6 py-[120px]">
          <div className="grid items-center gap-16 lg:grid-cols-[574px_1fr]">
            <div>
              <h2 className="font-display max-w-[577px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="mt-10 max-w-[477px] text-lg leading-[1.6] text-slate">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
              <div className="mt-10 flex gap-14">
                {[
                  ["12K", "Students"],
                  ["70+", "Courses"],
                  ["16", "Creators"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-4xl font-medium leading-[44px] tracking-[-0.01em] text-blue">
                      {value}
                    </p>
                    <p className="text-lg leading-[1.6] text-slate">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto h-[552px] w-full max-w-[621px]">
              <img
                src="/growth-person-1.png"
                alt=""
                className="absolute left-0 top-3 w-[min(100%,577px)] drop-shadow-[0_36px_56px_rgba(0,0,0,0.12)]"
              />
              <img
                src="/ornament-squiggle-left.png"
                alt=""
                className="pointer-events-none absolute right-0 top-16 hidden w-[215px] lg:block"
              />
              <div className="absolute right-0 top-[213px] z-10 w-[232px] rounded-2xl bg-white p-4 shadow-[0_24px_48px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
                <p className="text-sm font-medium leading-6">Learning Progress</p>
                <p className="font-display text-5xl font-semibold tracking-[-0.01em]">55%</p>
                <div className="mt-2 h-2 w-full rounded-full bg-[#f6f6f6]">
                  <div className="h-2 w-[56%] rounded-full bg-lime" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[541px_1fr]">
            <div className="relative mx-auto h-[596px] w-full max-w-[541px]">
              <img
                src="/growth-person-2.png"
                alt=""
                className="absolute left-[50px] top-0 h-[596px] w-[435px] object-contain drop-shadow-[0_36px_56px_rgba(0,0,0,0.12)]"
              />
              <img
                src="/ornament-squiggle-left.png"
                alt=""
                className="pointer-events-none absolute right-0 top-[114px] hidden w-[215px] lg:block"
              />
              <div className="absolute left-0 top-11 z-10 w-[232px] rounded-2xl bg-blue p-4 text-mist backdrop-blur-[10px]">
                <p className="text-base font-medium leading-[1.2]">Total Revenue</p>
                <p className="text-[10px] leading-[1.2]">July 1-28</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-display text-2xl font-semibold tracking-[-0.01em]">$120.29</p>
                  <span className="rounded-full bg-[#cbfc01] px-2 py-0.5 text-[10px] font-medium text-ink">+12$</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white">
                  <div className="h-2 w-[56%] rounded-full bg-lime" />
                </div>
              </div>
              <div className="absolute left-0 top-[194px] z-10 w-[134px] rounded-2xl bg-blue p-4 text-mist backdrop-blur-[10px]">
                <p className="text-base font-medium leading-[1.2]">Year to Date</p>
                <p className="text-[10px] leading-[1.2]">2023</p>
                <p className="font-display mt-2 text-2xl font-semibold tracking-[-0.01em]">$1,200.38</p>
                <span className="mt-2 inline-block rounded-full bg-[#cbfc01] px-2 py-0.5 text-[10px] font-medium text-ink">
                  +12$
                </span>
              </div>
              <div className="absolute bottom-0 right-0 z-10 w-[258px] rounded-2xl bg-white p-4 shadow-[0_24px_48px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
                <p className="text-base font-medium leading-6">Happy Students</p>
                <p className="flex items-center text-[10px] text-muted">
                  <span className="mr-1 font-bold text-ink">4.5</span> (240)
                  <img src="/icon-star.svg" alt="" className="ml-1 size-4" />
                </p>
                <div className="mt-2">
                  <StudentStack />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display max-w-[391px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
                Create & Manage Courses Easily.
              </h2>
              <p className="mt-10 max-w-[574px] text-lg leading-[1.6] text-slate">
                <span className="font-bold text-ink">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              <ul className="mt-10 space-y-4">
                {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map(
                  (item) => (
                    <li key={item} className="flex items-end gap-2 text-lg font-medium text-ink">
                      <img src="/icon-check.svg" alt="" width={24} height={24} />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue">
        <div className="grid-bg absolute inset-0 opacity-[0.12]" />
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <img src="/ornament-squiggle-left.png" alt="" className="absolute -left-[118px] -top-40 w-[385px]" />
          <img src="/ornament-squiggle-small.png" alt="" className="absolute left-[353px] top-1 w-[175px]" />
          <img src="/ornament-cone-left.png" alt="" className="absolute -left-12 bottom-[-80px] w-[342px]" />
          <img src="/ornament-cone-mid.png" alt="" className="absolute -left-12 top-[225px] w-[188px]" />
          <img src="/ornament-cone-right.png" alt="" className="absolute -right-[50px] top-1.5 w-[370px]" />
          <img src="/ornament-squiggle-right.png" alt="" className="absolute -right-8 bottom-[-40px] w-[330px]" />
          <img src="/ornament-cone-mid.png" alt="" className="absolute right-[172px] top-0 w-[188px]" />
        </div>
        <div className="relative mx-auto flex max-w-[964px] flex-col items-center px-6 py-[85px] text-center text-white">
          <h2 className="font-display max-w-[710px] text-4xl font-semibold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mt-10 text-lg leading-[1.6] text-line">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link href="/register" className="mt-10 rounded-full bg-lime px-6 py-3 text-lg font-medium text-ink">
            Join as Creator
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-[442px] top-[149px] size-[1137px] rounded-full bg-lime/35 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-200px] -top-[241px] size-[1137px] rounded-full bg-blue/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-[395px] -top-[138px] size-[672px] rounded-full bg-lime/25 blur-[100px]" />
        <div className="relative mx-auto max-w-[1204px] px-6 py-[74px]">
          <div className="grid items-start gap-8 lg:grid-cols-[577px_1fr]">
            <h2 className="font-display text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
              Discover What Our Community Is Saying
            </h2>
            <p className="text-lg leading-[1.6] text-slate">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="mt-[72px] grid gap-10 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-border bg-white p-6">
                <img src={item.avatar} alt="" className="size-20 rounded-full object-cover" />
                <h3 className="font-display mt-6 text-xl font-semibold leading-7">{item.name}</h3>
                <p className="text-lg leading-[1.6] text-muted">{item.role}</p>
                <p className="mt-6 text-base leading-relaxed text-ink">&ldquo;{item.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
