export type Course = {
  slug: string;
  title: string;
  image: string;
  level: "Beginner" | "Intermediate";
  price: number;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  author: string;
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/course-1.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/course-2.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/course-3.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/course-4.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/course-5.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/course-6.png",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    author: "purepearl studio",
  },
];

export const featuredCourse = courses[1];

export const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];

export const categoryItems = [
  { name: "Design", icon: "/icon-design.svg" },
  { name: "Development", icon: "/icon-dev.svg" },
  { name: "IT & Software", icon: "/icon-it.svg" },
  { name: "Business", icon: "/icon-biz.svg" },
  { name: "Marketing", icon: "/icon-mkt.svg" },
  { name: "Photography", icon: "/icon-photo.svg" },
];

export const pillRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

export const partners = [
  "/partner-1.svg",
  "/partner-2.svg",
  "/partner-3.svg",
  "/partner-4.svg",
  "/partner-5.svg",
];

export const faces = ["/face-1.png", "/face-2.png", "/face-3.png", "/face-4.png"];
export const students = [
  "/avatar-1.png",
  "/avatar-2.png",
  "/avatar-3.png",
  "/avatar-4.png",
  "/avatar-5.png",
  "/avatar-6.png",
  "/avatar-7.png",
];

export const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    body: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    body: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    body: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    body: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    body: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    body: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const sneakLessons = [
  { index: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { index: "02", title: "Design Principles for Impacts", time: "21 mins" },
  { index: "03", title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

export const sneakPeeks = ["/sneak-1.png", "/sneak-2.png", "/sneak-3.png", "/sneak-4.png"];

export const courseIncludes = [
  { icon: "/icon-source.svg", label: "Learning Resources" },
  { icon: "/icon-video.svg", label: "Quality Lesson Videos" },
  { icon: "/icon-badge.svg", label: "Certificate of Completion" },
  { icon: "/icon-consult.svg", label: "Private Consultation" },
];

export const courseDescription = `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.

In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.

As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`;

export const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    when: "a year ago",
    quote:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    avatar: "/avatar-1.png",
  },
  {
    name: "Albert Flores",
    role: "Product Designer",
    when: "8 months ago",
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    avatar: "/avatar-2.png",
  },
  {
    name: "Cody Fisher",
    role: "Visual Designer",
    when: "5 months ago",
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    avatar: "/avatar-3.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Brand Designer",
    when: "2 months ago",
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    avatar: "/avatar-4.png",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/avatar-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/avatar-3.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/avatar-5.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
