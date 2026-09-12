"use client";

import BlogHero from "@/components/sections/blog/BlogHero";
import { blogsData } from "@/data/blogsData";
import { motion } from "framer-motion";
import { Calendar, FolderOpen } from "lucide-react";
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
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function BlogListingPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Blog Hero Banner */}
      <BlogHero />

      {/* 2. Blog Grid Listing */}
      <main className="w-full bg-[#fafafa] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10">
          {/* Header row within listing */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.1] tracking-[-1px] text-[#0B2545]">
              Latest News & Articles
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#404040]">
              Educational and informational content about Dholera SIR, real estate investment, and
              market trends.
            </p>
          </div>

          {/* Blogs Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-4"
          >
            {blogsData.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col h-full">
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col h-full bg-white rounded-[24px] border border-[#e5e5e5] p-3.5 overflow-hidden hover:shadow-[0_15px_30px_rgba(11,37,69,0.06)] hover:-translate-y-1.5 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5] shrink-0">
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
                      <span className="bg-white/95 backdrop-blur-sm text-[#0B2545] font-sans text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm border border-neutral-100 flex items-center gap-1">
                        <FolderOpen size={11} className="text-[#2C578B]" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 p-4.5 flex-1 justify-between">
                    <div>
                      <span className="font-sans text-[12px] text-neutral-400 flex items-center gap-1 mb-2.5">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-display text-[18px] sm:text-[20px] font-semibold text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200 leading-[1.3] line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="font-sans text-[14px] sm:text-[15px] text-[#404040] font-normal leading-[22px] sm:leading-[24px] line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center gap-1 text-[#2C578B] font-sans text-[13px] sm:text-[14px] font-semibold group-hover:text-[#0b2545] transition-colors duration-200">
                      <span>Read More</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="translate-y-px transition-transform duration-250 group-hover:translate-x-1"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
