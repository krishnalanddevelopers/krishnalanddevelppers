"use client";

import ContactQueryModal from "@/components/layout/ContactQueryModal";
import { blogsData } from "@/data/blogsData";
import { Calendar, ChevronRight, FolderOpen, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Find matching blog post
  const blog = blogsData.find(item => item.id === id) || blogsData[0];

  // Filter recent posts (excluding current post if possible)
  const recentPosts = blogsData.filter(item => item.id !== blog.id).slice(0, 3);

  // If we don't have enough other posts, just show the rest
  const displayRecent = recentPosts.length > 0 ? recentPosts : blogsData.slice(0, 3);

  // Filter related posts based on matching category
  const relatedBlogs = blogsData
    .filter(item => item.category === blog.category && item.id !== blog.id)
    .slice(0, 2);

  // If no related posts in same category, show any other post
  const displayRelated =
    relatedBlogs.length > 0
      ? relatedBlogs
      : blogsData.filter(item => item.id !== blog.id).slice(0, 2);

  // Static Categories directory with mock counts
  const categories = [
    { name: "Infrastructure", count: 12 },
    { name: "Investment", count: 8 },
    { name: "Connectivity", count: 5 },
    { name: "Zoning & Planning", count: 9 },
  ];

  if (!blog) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#fafafa]">
        <p className="font-sans text-[16px] text-neutral-500">Loading blog details...</p>
      </div>
    );
  }

  return (
    <>
      <main className="w-full bg-[#fafafa] min-h-screen py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-12">
          {/* ─── 6.1 HEADER SECTION ───────────────────────────────────── */}
          <header className="flex flex-col gap-6 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] font-sans text-neutral-500">
              <Link href="/" className="hover:text-[#2C578B] transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link href="/blog" className="hover:text-[#2C578B] transition-colors">
                Blog
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#0B2545] font-medium truncate max-w-[240px] sm:max-w-xs">
                {blog.title}
              </span>
            </div>

            {/* Title & Metadata */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-1.5 bg-[#2C578B]/10 text-[#2C578B] text-[12px] font-semibold px-3 py-1 rounded-full font-sans">
                  <FolderOpen size={12} />
                  {blog.category}
                </span>
                <span className="text-neutral-400 text-[12px]">•</span>
                <span className="font-sans text-[13px] text-neutral-500 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {blog.date}
                </span>
              </div>

              <h1 className="font-display text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#0B2545] leading-[1.15] tracking-tight">
                {blog.title}
              </h1>

              {/* Author display */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C578B]/10 text-[#2C578B]">
                  <User size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-sans text-[14px] font-semibold text-[#0B2545]">
                    By {blog.author}
                  </p>
                  <p className="font-sans text-[12px] text-neutral-500 font-light">{blog.role}</p>
                </div>
              </div>
            </div>

            {/* Featured Image banner */}
            <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[360px] rounded-[24px] sm:rounded-[32px] border border-neutral-200 overflow-hidden shadow-sm">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </header>

          {/* Grid Layout for Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* ─── 6.2 CONTENT SECTION ─────────────────────────────────── */}
            <article className="col-span-1 lg:col-span-8 bg-white rounded-[28px] border border-neutral-200/60 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col gap-6">
              {blog.content.map((element, index) => {
                if (element.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="font-sans text-[15px] sm:text-[16px] font-normal leading-[26px] text-[#404040]"
                    >
                      {element.text}
                    </p>
                  );
                }
                if (element.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="font-display text-[22px] sm:text-[26px] font-semibold text-[#0B2545] tracking-tight mt-4"
                    >
                      {element.text}
                    </h2>
                  );
                }
                if (element.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-[#2C578B] bg-[#2C578B]/5 p-5 rounded-r-2xl font-serif text-[17px] italic text-[#0B2545] leading-[26px] my-2"
                    >
                      "{element.text}"
                    </blockquote>
                  );
                }
                if (element.type === "image") {
                  return (
                    <div
                      key={index}
                      className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden my-4 border border-neutral-200/80"
                    >
                      <Image
                        src={element.src}
                        alt={element.caption || "blog layout element"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      {element.caption && (
                        <div className="absolute bottom-4 left-4 bg-[#0B2545]/80 backdrop-blur-sm text-white text-[12px] px-3.5 py-1.5 rounded-lg border border-white/10 font-sans">
                          {element.caption}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}

              {/* ─── 6.4 BOTTOM CALL-TO-ACTION ─────────────────────────── */}
              <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-[18px] font-semibold text-[#0B2545]">
                    Ready to Invest in Dholera?
                  </h4>
                  <p className="font-sans text-[13px] text-[#404040] font-normal">
                    Speak to our financial advisors and secure your future today.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[#0B2545] hover:bg-[#2C578B] text-[#171717] font-sans text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-[0_4px_12px_rgba(44,87,139,0.2)] animate-none"
                  >
                    Contact Us for Investment
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-full border border-neutral-200 bg-white hover:border-[#2C578B] hover:text-[#2C578B] text-[#0B2545] font-sans text-[13px] font-medium transition-all duration-200 whitespace-nowrap"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </article>

            {/* ─── 6.3 SIDEBAR ─────────────────────────────────────────── */}
            <aside className="col-span-1 lg:col-span-4 flex flex-col gap-8 w-full">
              {/* Sidebar Component: Recent Posts */}
              <div className="bg-white rounded-[24px] border border-neutral-200/60 p-6 shadow-sm flex flex-col gap-5">
                <h3 className="font-display text-[18px] font-semibold text-[#0B2545] border-b border-neutral-100 pb-3">
                  Recent Posts
                </h3>
                <div className="flex flex-col gap-4">
                  {displayRecent.map(post => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="group flex items-center gap-3"
                    >
                      <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h4 className="font-display text-[13px] font-medium text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200 leading-[1.3] line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="font-sans text-[11px] text-neutral-400">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar Component: Categories */}
              <div className="bg-white rounded-[24px] border border-neutral-200/60 p-6 shadow-sm flex flex-col gap-5">
                <h3 className="font-display text-[18px] font-semibold text-[#0B2545] border-b border-neutral-100 pb-3">
                  Categories
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {categories.map((cat, index) => (
                    <Link
                      key={index}
                      href="/blog"
                      className="group flex items-center justify-between font-sans text-[13.5px] text-[#404040] hover:text-[#2C578B] transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11.5px] font-semibold bg-neutral-100 group-hover:bg-[#2C578B]/10 group-hover:text-[#2C578B] text-neutral-500 px-2 py-0.5 rounded-md transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Sidebar Component: Related Blogs */}
              <div className="bg-white rounded-[24px] border border-neutral-200/60 p-6 shadow-sm flex flex-col gap-5">
                <h3 className="font-display text-[18px] font-semibold text-[#0B2545] border-b border-neutral-100 pb-3">
                  Related Blogs
                </h3>
                <div className="flex flex-col gap-5">
                  {displayRelated.map(post => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="group flex flex-col gap-2"
                    >
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 30vw"
                        />
                      </div>
                      <div className="flex flex-col gap-1 px-1">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#2C578B]">
                          {post.category}
                        </span>
                        <h4 className="font-display text-[14px] font-semibold text-[#0B2545] group-hover:text-[#2C578B] transition-colors duration-200 leading-[1.3] line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ContactQueryModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
