"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import RevealOnView from "@/components/reveal-on-view"
import { cn } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useSupabaseData } from "@/components/supabase-provider"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { films } from "@/lib/films"
import { type Book } from "@/lib/books"
import PhotoMap from "@/components/photo-map"

function PhotographySection() {
  const { photos } = useSupabaseData()
  const [openAccordions, setOpenAccordions] = React.useState<string[]>([
    "north-goa",
    "rishikesh",
    "dharamkot-&-mcleodganj",
    "new-delhi",
    "kerala",
    // "bikaner",
  ])
  const [activeLoc, setActiveLoc] = React.useState<string | null>(null)

  const keralaPhotos = photos.filter(p => p.gallery === 'kerala').slice().reverse()
  const delhiPhotos = photos.filter(p => p.gallery === 'new-delhi').slice().reverse()
  const hpPhotos = photos.filter(p => p.gallery === 'dharamkot-&-mcleodganj').slice().reverse()
  const rishikeshPhotos = photos.filter(p => p.gallery === 'rishikesh').slice().reverse()
  const goaPhotos = photos.filter(p => p.gallery === 'north-goa').slice().reverse()

  const otherGoaPhotos = goaPhotos.slice(1)

  /*
  const bikanerPhotos = [
    { src: "/gallery/bikaner/IMG_2385.jpg", alt: "Bikaner photo 1", name: "IMG_2385.jpg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2386.jpg", alt: "Bikaner photo 2", name: "IMG_2386.jpg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2387.jpeg", alt: "Bikaner photo 3", name: "IMG_2387.jpeg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2390.jpeg", alt: "Bikaner photo 4", name: "IMG_2390.jpeg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2393.jpeg", alt: "Bikaner photo 5", name: "IMG_2393.jpeg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2394.jpeg", alt: "Bikaner photo 6", name: "IMG_2394.jpeg", gallery: "bikaner" },
    { src: "/gallery/bikaner/IMG_2395.jpeg", alt: "Bikaner photo 7", name: "IMG_2395.jpeg", gallery: "bikaner" },
  ]
  */

  const handleSelectLocation = (id: string) => {
    setActiveLoc(id)
    if (!openAccordions.includes(id)) {
      setOpenAccordions(prev => [...prev, id])
    }
  }

  return (
    <div className="space-y-6">
      {/* <PhotoMap onSelectLocation={handleSelectLocation} activeLocation={activeLoc} /> */}

      <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions} className="space-y-4">
        <AccordionItem value="north-goa" id="photo-accordion-north-goa" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            North Goa, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherGoaPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rishikesh" id="photo-accordion-rishikesh" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Rishikesh, Uttarakhand, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {rishikeshPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dharamkot-&-mcleodganj" id="photo-accordion-dharamkot-&-mcleodganj" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Dharamkot & Mcleodganj, Himachal Pradesh, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {hpPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="new-delhi" id="photo-accordion-new-delhi" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            New Delhi, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {delhiPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/*
        <AccordionItem value="bikaner" id="photo-accordion-bikaner" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Bikaner, Rajasthan, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {bikanerPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        */}

        <AccordionItem value="kerala" id="photo-accordion-kerala" className="border-none">
          <AccordionTrigger className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold py-2 hover:no-underline cursor-pointer">
            Kochi, Kerala, India
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {keralaPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const StarIcon = ({ filled, half }: { filled: boolean; half?: boolean }) => {
  if (half) {
    return (
      <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  return (
    <svg
      className={`w-3.5 h-3.5 ${filled ? "text-amber-500" : "text-neutral-300 dark:text-neutral-700"}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.977-2.888a1 1 0 00-1.176 0l-3.977 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= Math.floor(rating)
        const isHalf = !isFilled && star === Math.ceil(rating) && rating % 1 !== 0
        return <StarIcon key={star} filled={isFilled} half={isHalf} />
      })}
      <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 ml-1.5">
        {rating}/5
      </span>
    </div>
  )
}

function PortfolioContent() {
  const { articles, books } = useSupabaseData()
  const searchParams = useSearchParams()
  const urlTag = searchParams.get("tag")
  const currentSection = searchParams.get("section") || "about-me"
  const [activeReviewBook, setActiveReviewBook] = React.useState<Book | null>(null)
  const [iframeLoading, setIframeLoading] = React.useState(true)

  const filteredArticles = React.useMemo(() => {
    if (urlTag) {
      return articles.filter((article) => article.tags?.includes(urlTag))
    }
    return []
  }, [urlTag, articles])

  return (
    <RevealOnView intensity="soft">
      {urlTag ? (
        /* FILTERED TAG VIEW */
        <div className="space-y-12">
          <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8 font-mono text-sm overflow-x-auto scrollbar-none whitespace-nowrap">
            <div className="flex items-center gap-2 pb-2 -mb-px">
              <span className="text-neutral-500">tag:</span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium border-b-2 border-neutral-900 dark:border-neutral-100 pb-2 -mb-px">
                {urlTag}
              </span>
              <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 ml-2">
                (clear)
              </Link>
            </div>
          </div>

          <div className="space-y-12">
            {filteredArticles.map((article, i) => {
              const isPoetry = article.tags?.includes("poetry")

              if (isPoetry) {
                return (
                  <div key={i} className="space-y-4 max-w-lg">
                    <h3 className="text-lg font-semibold font-mono text-neutral-900 dark:text-neutral-200">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                      {article.content}
                    </p>
                  </div>
                )
              }

              return (
                <Link
                  key={i}
                  href={article.href}
                  className="group block"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10">
                    <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[140px]">
                      {article.date}
                    </span>
                    <div className="space-y-1.5">
                      <span className="text-lg text-neutral-900 group-hover:text-black transition-colors decoration-neutral-300 group-hover:decoration-neutral-700 underline underline-offset-4 block dark:text-neutral-200 dark:group-hover:text-white dark:decoration-neutral-800 dark:group-hover:decoration-neutral-400">
                        {article.title}
                      </span>
                      <span className="text-sm text-neutral-500 block font-mono">
                        {article.takeaway}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      ) : (
        /* SIMPLE VERTICAL SECTIONS VIEW - Now displaying one section at a time */
        <div className="space-y-12">


          {/* TECH SECTION */}
          {currentSection === "tech" && (
            <section
              id="tech"
              className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in"
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                blog
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("tech") && !article.tags?.includes("archives"))
                  .map((article, i) => (
                    <Link
                      key={i}
                      href={article.href}
                      className="group block"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10">
                        <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[140px]">
                          {article.date}
                        </span>
                        <div className="space-y-1.5">
                          <span className="text-lg text-neutral-900 group-hover:text-black transition-colors decoration-neutral-300 group-hover:decoration-neutral-700 underline underline-offset-4 block dark:text-neutral-200 dark:group-hover:text-white dark:decoration-neutral-800 dark:group-hover:decoration-neutral-400">
                            {article.title}
                          </span>
                          <span className="text-sm text-neutral-500 block font-mono">
                            {article.takeaway}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}

          {/* PRODUCTS SECTION */}
          {currentSection === "products" && (
            <section
              id="products"
              className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in"
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                products
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed text-justify max-w-lg">
                <strong>Focus Areas:</strong> Building audio software in C++, including VST plugins and real-time audio processing. Applying machine learning to create intelligent tools for audio effects, analysis, and music generation. Developing tools for separating instruments and vocals (STEM separation), browser-based music applications, and sample management. Improving digital audio workstation (DAW) workflows through automation, MIDI integration, and plugin compatibility. Following modern software engineering practices such as version control, CI/CD, and intuitive UI/UX design to build reliable, easy-to-use tools for musicians, producers, and audio developers.
              </p>
            </section>
          )}

          {currentSection === "demos" && (
            <section id="demos" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                demos
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed max-w-lg">
                Small experiments, audio tools, and interactive work in progress.
              </p>
            </section>
          )}

          {currentSection === "setup" && (
            <section id="setup" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                setup
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed max-w-lg">
                The tools, systems, and rituals behind the work.
              </p>
            </section>
          )}

          {/* MUSIC TECH — BOOKS SECTION */}
          {currentSection === "books" && (
            <section id="books" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                reading
              </h2>

              <blockquote className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 py-1 italic my-6 text-neutral-600 dark:text-neutral-400 font-mono text-base max-w-lg leading-relaxed">
                &ldquo;The computer programmer is a creator of universes for which he alone is the lawgiver.&rdquo;
                <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-2 not-italic">
                  &mdash; Joseph Weizenbaum
                </span>
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center py-4">
                {books
                  .filter((b) => b.category === "tech")
                  .map((book, i) => (
                    <a
                      key={i}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveReviewBook(book)
                      }}
                      className="group flex flex-col items-center text-center space-y-3 cursor-pointer w-full max-w-[160px]"
                    >
                      {/* Status / Rating */}
                      <div className="h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {book.status === "to-read" ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider font-mono">
                            To Be Read
                          </span>
                        ) : book.status === "reading" ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                            Currently Reading
                          </span>
                        ) : book.status === "paused" ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-wider font-mono">
                            Paused
                          </span>
                        ) : book.rating !== undefined ? (
                          <RatingStars rating={book.rating} />
                        ) : null}
                      </div>

                      {/* Book Cover */}
                      <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-black transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl dark:group-hover:shadow-neutral-900/50">
                        <Image
                          src={book.coverUrl}
                          alt={book.title}
                          fill
                          sizes="(max-width: 640px) 112px, 144px"
                          className="object-cover grayscale"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-white bg-black/80 border border-neutral-700 px-2.5 py-1.5 rounded shadow-lg backdrop-blur-xs">
                            Read Review
                          </span>
                        </div>
                      </div>

                      {/* Book Information */}
                      <div className="space-y-1">
                        <div className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors text-xs sm:text-sm font-sans line-clamp-2 leading-snug">
                          {book.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                          {book.author} {book.publishedYear && `(${book.publishedYear})`}
                        </div>
                      </div>
                    </a>
                  ))}
              </div>

              {/* BOOK REVIEW MODAL */}
              {activeReviewBook && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
                  onClick={() => setActiveReviewBook(null)}
                >
                  <div
                    className="bg-white dark:bg-black text-neutral-900 dark:text-white rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 max-w-sm w-full relative space-y-4 animate-scale-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setActiveReviewBook(null)}
                      className="absolute top-3.5 right-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xl font-bold font-mono transition-colors cursor-pointer leading-none"
                    >
                      &times;
                    </button>

                    <div className="flex gap-4">
                      <div className="relative w-20 h-28 rounded border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden shrink-0 bg-neutral-100 dark:bg-black">
                        <Image
                          src={activeReviewBook.coverUrl}
                          alt={activeReviewBook.title}
                          fill
                          sizes="80px"
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 dark:text-white text-sm font-sans leading-snug line-clamp-2">
                          {activeReviewBook.title}
                        </h3>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans truncate">
                          {activeReviewBook.author}
                        </div>
                        <div className="text-[10px] text-neutral-400 dark:text-neutral-500 font-sans">
                          Published: {activeReviewBook.publishedYear}
                        </div>
                        <div className="pt-0.5">
                          {activeReviewBook.status === "to-read" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider font-mono">
                              To Be Read
                            </span>
                          ) : activeReviewBook.status === "reading" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                              Currently Reading
                            </span>
                          ) : activeReviewBook.status === "paused" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-wider font-mono">
                              Paused
                            </span>
                          ) : activeReviewBook.rating !== undefined ? (
                            <RatingStars rating={activeReviewBook.rating} />
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                      <h4 className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold">
                        Review / Thoughts
                      </h4>
                      <p className="text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed italic whitespace-pre-wrap">
                        {activeReviewBook.review ||
                          (activeReviewBook.status === "to-read"
                            ? "On my reading list. Review and thoughts will be added after I read it."
                            : activeReviewBook.status === "reading"
                              ? "Currently reading this book. My thoughts and review will be updated here soon!"
                              : activeReviewBook.status === "paused"
                                ? "Reading is paused for now. Will pick it up again when the timing feels right."
                                : "No review added yet.")}
                      </p>
                    </div>

                    <div className="pt-2 flex justify-between items-center gap-4">
                      <a
                        href={activeReviewBook.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-200/30 dark:hover:bg-white/5 text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 px-3 py-1.5 transition-colors font-mono cursor-pointer"
                      >
                        Wikipedia &rarr;
                      </a>
                      <button
                        onClick={() => setActiveReviewBook(null)}
                        className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[11px] font-semibold px-4 py-1.5 transition-colors font-mono cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* MUSIC SECTION */}
          {currentSection === "music" && (
            <section id="music" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                music
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono italic leading-relaxed text-justify max-w-lg">
                Focused on musical training and education. Awaiting for the music and live shows to unfold in the upcoming times. Stay Tuned!! Stay Blessed!!
              </p>
              <div className="flex flex-col items-center justify-center space-y-3 pt-4 max-w-md">
                <div className="relative w-full rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                  <img
                    src="https://www.learnreligions.com/thmb/w3j_YcohdrgsULfyrXKj6qnsGg0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/158320403_HighRes-56a4839d3df78cf77282ca06.jpg"
                    alt="Music Inspiration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono italic text-center">
                  Credit: Anwar Hussein/Hulton Archive/Getty Images
                </div>
              </div>
            </section>
          )}

          {/* ARTICLES & ESSAYS SECTION */}
          {currentSection === "articles" && (
            <section id="articles" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                articles & essays
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => !article.tags?.includes("poetry") && !article.tags?.includes("archives") && !article.tags?.includes("tech"))
                  .map((article, i) => (
                    <Link
                      key={i}
                      href={article.href}
                      className="group block"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10">
                        <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[140px]">
                          {article.date}
                        </span>
                        <div className="space-y-1.5">
                          <span className="text-lg text-neutral-900 group-hover:text-black transition-colors decoration-neutral-300 group-hover:decoration-neutral-700 underline underline-offset-4 block dark:text-neutral-200 dark:group-hover:text-white dark:decoration-neutral-800 dark:group-hover:decoration-neutral-400">
                            {article.title}
                          </span>
                          <span className="text-sm text-neutral-500 block font-mono">
                            {article.takeaway}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}

          {/* POETRY SECTION */}
          {currentSection === "poetry" && (
            <section id="poetry" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                poetry
              </h2>
              <div className="flex flex-col items-center justify-center space-y-3 pt-2 pb-6 max-w-md">
                <div className="relative w-full rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                  <img
                    src="https://imgs.search.brave.com/dt8R3ByEfQyfTIUD4QbvQ8yESNj761rwqCbL63oy6J8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5uZXd5b3JrZXIu/Y29tL3Bob3Rvcy81/YTI5YTY5MTRlYzVi/ZDQ2NzhlNjQxNWUv/NDozL3dfNjQwLGNf/bGltaXQvQ3Jhd2Zv/cmQtTGV0dGVycy1v/Zi1TeWx2aWEtUGxh/dGguanBn"
                    alt="Letters of Sylvia Plath"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono italic text-center">
                  Source: <a href="https://media.newyorker.com/photos/5a29a6914ec5bd4678e6415e/4:3/w_640,c_limit/Crawford-Letters-of-Sylvia-Plath.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-600 dark:hover:text-neutral-400">The New Yorker</a>
                </div>
              </div>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("poetry"))
                  .map((article, i) => (
                    <div key={i} className="space-y-4 max-w-lg">
                      <h3 className="text-base font-semibold font-mono text-neutral-900 dark:text-neutral-200">
                        {article.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed whitespace-pre-line">
                        {article.content}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {/* PHOTOGRAPHY SECTION */}
          {currentSection === "photography" && (
            <section id="photography" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                photography
              </h2>
              <PhotographySection />
            </section>
          )}

          {/* BOOKS SECTION */}
          {currentSection === "bookshelf" && (
            <section id="bookshelf" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                reading nook
              </h2>

              <blockquote className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 py-1 italic my-6 text-neutral-600 dark:text-neutral-400 font-mono text-base max-w-lg leading-relaxed">
                &ldquo;A mind needs books as a sword needs a whetstone, if it is to keep its edge.&rdquo;
                <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mt-2 not-italic">
                  &mdash; Tyrion Lannister
                </span>
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center py-4">
                {books
                  .filter((b) => b.category === "art")
                  .map((book, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveReviewBook(book)
                    }}
                    className="group flex flex-col items-center text-center space-y-3 cursor-pointer w-full max-w-[160px]"
                  >
                    {/* Status / Rating */}
                    <div className="h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {book.status === "to-read" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider font-mono">
                          To Be Read
                        </span>
                      ) : book.status === "reading" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                          Currently Reading
                        </span>
                      ) : book.status === "paused" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-wider font-mono">
                          Paused
                        </span>
                      ) : book.rating !== undefined ? (
                        <RatingStars rating={book.rating} />
                      ) : null}
                    </div>

                    {/* Book Cover */}
                    <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-black transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl dark:group-hover:shadow-neutral-900/50">
                      <Image
                        src={book.coverUrl}
                        alt={book.title}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover grayscale"
                        loading="lazy"
                      />

                      {/* Hover review hint */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-white bg-black/80 border border-neutral-700 px-2.5 py-1.5 rounded shadow-lg backdrop-blur-xs">
                          Read Review
                        </span>
                      </div>
                    </div>

                    {/* Book Information */}
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors text-xs sm:text-sm font-sans line-clamp-2 leading-snug">
                        {book.title}
                      </div>

                      <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                        {book.author} {book.publishedYear && `(${book.publishedYear})`}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* BOOK REVIEW MODAL */}
              {activeReviewBook && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
                  onClick={() => setActiveReviewBook(null)}
                >
                  <div
                    className="bg-white dark:bg-black text-neutral-900 dark:text-white rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 max-w-sm w-full relative space-y-4 animate-scale-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveReviewBook(null)}
                      className="absolute top-3.5 right-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xl font-bold font-mono transition-colors cursor-pointer leading-none"
                    >
                      &times;
                    </button>

                    {/* Book Header */}
                    <div className="flex gap-4">
                      <div className="relative w-20 h-28 rounded border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden shrink-0 bg-neutral-100 dark:bg-black">
                        <Image
                          src={activeReviewBook.coverUrl}
                          alt={activeReviewBook.title}
                          fill
                          sizes="80px"
                          className="object-cover grayscale"
                        />
                      </div>

                      <div className="space-y-1.5 flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 dark:text-white text-sm font-sans leading-snug line-clamp-2">
                          {activeReviewBook.title}
                        </h3>

                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans truncate">
                          {activeReviewBook.author}
                        </div>

                        <div className="text-[10px] text-neutral-400 dark:text-neutral-500 font-sans">
                          Published: {activeReviewBook.publishedYear}
                        </div>

                        {/* Status / Rating */}
                        <div className="pt-0.5">
                          {activeReviewBook.status === "to-read" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider font-mono">
                              To Be Read
                            </span>
                          ) : activeReviewBook.status === "reading" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                              Currently Reading
                            </span>
                          ) : activeReviewBook.status === "paused" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-wider font-mono">
                              Paused
                            </span>
                          ) : activeReviewBook.rating !== undefined ? (
                            <RatingStars rating={activeReviewBook.rating} />
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Review */}
                    <div className="space-y-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                      <h4 className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold">
                        Review / Thoughts
                      </h4>

                      <p className="text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed italic whitespace-pre-wrap">
                        {activeReviewBook.review ||
                          (activeReviewBook.status === "to-read"
                            ? "On my reading list. Review and thoughts will be added after I read it."
                            : activeReviewBook.status === "reading"
                              ? "Currently reading this book. My thoughts and review will be updated here soon!"
                              : activeReviewBook.status === "paused"
                                ? "Reading is paused for now. Will pick it up again when the timing feels right."
                                : "No review added yet.")}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex justify-between items-center gap-4">
                      <a
                        href={activeReviewBook.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-200/30 dark:hover:bg-white/5 text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 px-3 py-1.5 transition-colors font-mono cursor-pointer"
                      >
                        Wikipedia &rarr;
                      </a>

                      <button
                        onClick={() => setActiveReviewBook(null)}
                        className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[11px] font-semibold px-4 py-1.5 transition-colors font-mono cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* FILM AND ACTING SECTION */}
          {currentSection === "film-and-acting" && (
            <section id="film-and-acting" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                film and acting
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed text-justify max-w-lg mb-6">
                A curated selection of cinematic masterpieces that shape my worldview, alongside my journey in film and acting.
              </p>
              <div className="pt-2">
                <a
                  href="https://letterboxd.com/neuralmanacle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-white/5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 px-4 py-2 transition-colors font-mono cursor-pointer"
                >
                  <svg className="h-3 w-auto shrink-0 mr-2" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" fill="#FF8000" opacity="0.85" />
                    <circle cx="11" cy="6" r="5.5" fill="#00C030" opacity="0.85" />
                    <circle cx="16" cy="6" r="5.5" fill="#00B0EA" opacity="0.85" />
                  </svg>
                  LetterBox
                </a>
              </div>
              
              {/* UNCLE MONTY IMAGE CARD */}
              <div className="flex flex-col items-center justify-center space-y-3 pt-6 max-w-sm">
                <a
                  href="https://www.youtube.com/watch?v=pDl4ye22U-E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full aspect-[4/3] rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer block"
                >
                  <Image
                    src="/uncle-monty.jpg"
                    alt="Uncle Monty"
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono italic text-center">
                  Withnail and I (1987)
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center py-4">
                {films.map((film, i) => (
                  <a
                    key={i}
                    href={film.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center space-y-3 cursor-pointer w-full max-w-[160px]"
                  >
                    <div className="h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {film.status === "watching" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider font-mono">
                          Currently Watching
                        </span>
                      ) : film.rating !== undefined ? (
                        <RatingStars rating={film.rating} />
                      ) : null}
                    </div>
                    <div className="relative w-28 h-40 sm:w-36 sm:h-52 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl dark:group-hover:shadow-neutral-900/50">
                      <Image
                        src={film.coverUrl}
                        alt={film.title}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors text-xs sm:text-sm font-sans line-clamp-2 leading-snug">
                        {film.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                        Directed by {film.director} {film.publishedYear && `(${film.publishedYear})`}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* FASHION SECTION */}
          {currentSection === "fashion" && (
            <section id="fashion" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                fashion
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed text-justify max-w-lg mb-6">
                Exploring aesthetics, subcultures, and self-expression through garments and silhouettes. Logs, styling concepts, and collections are coming here soon.
              </p>
              <div className="flex flex-col items-center justify-center space-y-3 pt-4 max-w-sm">
                <div className="relative w-full aspect-square rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                  {iframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100 dark:bg-[#2C321E] z-10 space-y-3">
                      <div className="w-8 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-950 dark:border-t-[#EEF2E6] animate-spin" />
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest animate-pulse">
                        Loading GIF...
                      </span>
                    </div>
                  )}
                  <img
  src="https://media.tenor.com/23659393.gif"
  className="w-full h-full object-cover"
  alt="I Want To Break Free Queen GIF"
/>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono italic text-center">
                  Queen — I Want To Break Free (1984)
                </div>
              </div>
            </section>
          )}

          {/* ABOUT ME SECTION */}
          {currentSection === "about-me" && (
            <section
              id="about-me"
              className="space-y-12 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in"
            >
              {/* HERO / BIO */}
              <div className="space-y-10">
                {/* Branded hero with enlarged logo + nameplate */}
                <div className="relative flex flex-col items-center gap-6 pt-2 pb-4">
                  {/* 70s radiant halo behind logo */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[45%] -z-[1] aspect-square w-[320px] sm:w-[440px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(227,181,15,0.32) 0%, rgba(227,115,45,0.18) 38%, rgba(130,80,230,0.14) 62%, transparent 82%)",
                      filter: "blur(14px)",
                    }}
                  />
                  {/* Logo lockup */}
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-[28%] pointer-events-none"
                      style={{
                        background:
                          "conic-gradient(from 220deg, rgba(227,181,15,0.55), rgba(227,99,45,0.35), rgba(140,95,255,0.45), rgba(227,181,15,0.55))",
                        filter: "blur(10px)",
                        opacity: 0.55,
                      }}
                    />
                    <div className="relative rounded-[28%] bg-white dark:bg-black border border-neutral-200/80 dark:border-neutral-800/80 p-4 sm:p-5">
                      <Image
                        src="/logo.png"
                        alt="neural manacle logo"
                        width={120}
                        height={120}
                        className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-cover"
                        priority
                      />
                    </div>
                  </div>
                  {/* Name plate */}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <h1
                      className="font-mono font-bold tracking-tight text-neutral-900 dark:text-white leading-none"
                      style={{ fontSize: "clamp(1.9rem, 7vw, 3rem)" }}
                    >
                      neural manacle
                    </h1>
                    <h2 style={{
                      fontStyle: 'italic',
                      color: '#f7b904',
                      textShadow: '0 0 8px rgba(247, 185, 4, 0.7)',
                    }}>
                      in a synthetic dream
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 sm:w-16 bg-neutral-300/70 dark:bg-neutral-700/70" />
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#e3b50f] font-semibold">
                        Arjun Kishor Shenoy
                      </span>
                      <span className="h-px w-10 sm:w-16 bg-neutral-300/70 dark:bg-neutral-700/70" />
                    </div>
                    <p className="max-w-lg text-sm sm:text-base font-mono leading-relaxed text-neutral-500 dark:text-neutral-400 italic mt-1">
                      audio software engineer · musician
                    </p>
                  </div>
                </div>

                {/* Bio + portrait */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start pt-4 border-t border-dashed border-neutral-200/80 dark:border-neutral-800/80">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 self-center md:self-start mt-2">
                    <Image
                      src="/arjun.png"
                      alt="Arjun"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 160px"
                      priority
                    />
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono font-bold text-justify flex-1 pt-2 md:pt-0">
                    <p>Namaste 🙏</p>
                    <p>I&apos;m Arjun. a.k.a Neural Manacle!!</p> <br />
                    
                    I&apos;m an audio software engineer working in the intersection of audio and technology. 
                    The deep passion for music especially electronic and the love for synthesizers got me into audio software.
                    I love writing C++. A big time bibliophile and is into wellness and meditation.
                  </div>
                </div>
              </div>

              {/* CAL.COM BOOKING CARD WITH RAINBOW BORDER */}
              <div 
                className="p-[1.5px] rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
                style={{
                  background: 'linear-gradient(to right, var(--rainbow-1), var(--rainbow-2), var(--rainbow-3), var(--rainbow-4), var(--rainbow-5), var(--rainbow-6), var(--rainbow-1))',
                  backgroundSize: '200% auto',
                  animation: 'rainbow-flow 8s linear infinite',
                }}
              >
                <div className="rounded-[11px] bg-[#FFFFE3] dark:bg-[#000000] p-6 space-y-4 text-neutral-900 dark:text-[#FFFFE3]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#FFFFE3] dark:bg-[#000000] border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-[#FFFFE3]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-mono font-bold text-neutral-900 dark:text-[#FFFFE3] text-base">
                        Book a Session
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
                        Schedule a video call to discuss art, engineering, creative collaborations and anything across the universe. Shanti.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://cal.com/neuralmanacle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-900 dark:border-[#FFFFE3] bg-[#FFFFE3] dark:bg-[#000000] hover:bg-neutral-200/40 dark:hover:bg-white/10 text-sm font-semibold text-neutral-900 dark:text-[#FFFFE3] px-4 py-2 w-full sm:w-auto transition-colors font-mono cursor-pointer"
                    >
                      Book a call on Cal.com &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <ContactForm />


            </section>
          )}

          {/* RESUME SECTION */}
          {currentSection === "resume" && (
            <section
              id="resume"
              className="space-y-12 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in"
            >
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                resume
              </h2>

              {/* WORK EXPERIENCE */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                  work experience
                </h2>
                <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 gap-1">
                    <div>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                        Software Engineer Intern
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 block mt-1">
                        Pitch Innovations &middot; Internship &middot; Remote
                      </span>
                      <ul className="list-disc pl-4 space-y-1.5 mt-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                        <li>Developed production-grade audio applications, bridging desktop audio architectures with modern web technologies.</li>
                        <li>Engineered C++ based music plugins for Digital Audio Workstations (DAWs) and seamlessly integrated them with Node.js-based user interfaces.</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                        <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mr-1 select-none">
                          Skills:
                        </span>
                        {["C++", "JavaScript", "CI/CD", "JUCE"].map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex sm:flex-col sm:items-end text-sm text-neutral-500 dark:text-neutral-400 gap-2 sm:gap-0 shrink-0">
                      <span>Oct 2025 &mdash; Nov 2025</span>
                      <span>2 mos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORMAL EDUCATION */}
              <div className="space-y-4">
                <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                  formal education
                </h2>
                <div className="space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2 gap-1">
                    <div>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                        Computer Science and Engineering
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 block mt-1">
                        <a href="https://en.wikipedia.org/wiki/APJ_Abdul_Kalam_Technological_University" target="_blank" rel="noopener noreferrer" className="bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm hover:bg-yellow-100 dark:hover:bg-yellow-950/70 transition-colors">
                          APJ Abdul Kalam Technological University
                        </a>
                      </span>
                    </div>
                    <div className="flex sm:flex-col sm:items-end text-sm text-neutral-500 dark:text-neutral-400 gap-2 sm:gap-0 shrink-0">
                      <span>2018 &mdash; 2022</span>
                      <span>7.95 CGPA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                {/* NATURAL LANGUAGE */}
                <div className="space-y-4 flex-1">
                  <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                    natural language
                  </h2>
                  <div className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono">
                    <div className="flex justify-between max-w-xs border-b border-neutral-200 dark:border-neutral-800 pb-1">
                      <span>English</span>
                      <span className="text-neutral-900 dark:text-neutral-100 font-semibold">8/10 (<a href="https://drive.google.com/file/d/1LEPz41yJ3vUFL_huUh73JZIY93YNpuaF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded-sm hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors">IELTS</a>)</span>
                    </div>
                  </div>
                </div>

                {/* PROGRAMMING LANGUAGE */}
                <div className="space-y-4 flex-1">
                  <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                    programming language
                  </h2>
                  <div className="space-y-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono max-w-xs">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-1">
                      C++
                    </div>
                  </div>
                </div>

                {/* SCRIPTING LANGUAGE */}
                <div className="space-y-4 flex-1">
                  <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
                    scripting language
                  </h2>
                  <div className="space-y-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono max-w-xs">
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-1">
                      Python
                    </div>
                    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-1">
                      TypeScript
                    </div>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* ARCHIVES SECTION */}
          {currentSection === "archives" && (
            <section id="archives" className="space-y-6 scroll-mt-[68px] md:scroll-mt-36 animate-fade-in">
              <h2 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold mb-4">
                archives
              </h2>
              <div className="space-y-12">
                {articles
                  .filter((article) => article.tags?.includes("archives"))
                  .map((article, i) => (
                    <Link
                      key={i}
                      href={article.href}
                      className="group block"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10">
                        <span className="text-sm font-mono text-neutral-600 shrink-0 min-w-[140px]">
                          {article.date}
                        </span>
                        <div className="space-y-1.5">
                          <span className="text-lg text-neutral-900 group-hover:text-black transition-colors decoration-neutral-300 group-hover:decoration-neutral-700 underline underline-offset-4 block dark:text-neutral-200 dark:group-hover:text-white dark:decoration-neutral-800 dark:group-hover:decoration-neutral-400">
                            {article.title}
                          </span>
                          <span className="text-sm text-neutral-500 block font-mono">
                            {article.takeaway}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}
        </div>
      )}
    </RevealOnView>
  )
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 pt-[68px] md:pt-36 pb-8">
      <React.Suspense fallback={<div className="font-mono text-sm text-neutral-500">Loading...</div>}>
        <PortfolioContent />
      </React.Suspense>
    </main>
  )
}