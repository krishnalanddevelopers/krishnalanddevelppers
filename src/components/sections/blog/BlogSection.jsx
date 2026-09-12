"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function BlogSection() {
  const blogs = [
    {
      id: "why-dholera-smart-city-investment-2026",
      title: "Why Dholera Smart City is India's Next Investment Destination in 2026",
      description:
        "Discover why Dholera Smart City is emerging as India's most promising investment destination with government-backed infrastructure, world-class connectivity, and exceptional long-term growth potential.",
      date: "August 5, 2026",
      category: "Investment",
      image: "/dholera-smart-city.webp",
    },
    {
      id: "top-reasons-buy-residential-plots-dholera",
      title: "Top Reasons to Buy Residential Plots in Dholera Smart City",
      description:
        "Explore why residential plots in Dholera Smart City offer affordability, smart infrastructure, and excellent long-term appreciation for investors and homebuyers.",
      date: "July 28, 2026",
      category: "Real Estate",
      image: "/1.webp",
    },
    {
      id: "major-infrastructure-projects-dholera",
      title: "Major Infrastructure Projects Transforming Dholera Smart City",
      description:
        "Learn how the international airport, expressway, industrial zones, and smart infrastructure are shaping the future of Dholera Smart City.",
      date: "July 12, 2026",
      category: "Infrastructure",
      image: "/dholera-infrastructure.webp",
    },
  ];
  return (
    <section id="blog" aria-labelledby="blog-heading" className="w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-start bg-[#2C578B]/10 rounded-full px-4 py-2 text-[#2C578B]">
            <span className="font-sans text-[11px] font-semibold tracking-[4px] uppercase">
              Insights
            </span>
          </div>
          <h2
            id="blog-heading"
            className="font-display text-[32px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.15] tracking-[-1px] text-[#0B2545]"
          >
            Latest News & Articles
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#e5e5e5] bg-white text-[#0B2545] font-sans text-[13px] font-medium hover:border-[#2C578B] hover:text-[#2C578B] hover:shadow-sm transition-all duration-200 whitespace-nowrap md:self-end self-start"
        >
          View Blog
        </Link>
      </div>

      {/* Blogs Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
      >
        {blogs.map(post => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col h-full">
            <motion.div
              variants={cardVariants}
              className="flex flex-col h-full bg-white rounded-[24px] border border-[#e5e5e5] overflow-hidden hover:shadow-[0_15px_30px_rgba(11,37,69,0.06)] hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f5] shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-[#0B2545] font-sans text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm border border-neutral-100">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="font-sans text-[12px] text-[#737373]">{post.date}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[18px] sm:text-[20px] font-semibold text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200 leading-[1.3] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#404040] font-normal leading-[22px] sm:leading-[24px] line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
