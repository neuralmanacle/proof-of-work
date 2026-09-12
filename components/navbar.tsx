"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  Rss, Mail, Github, Coffee, Search, History, Linkedin, X, User, Book, Headphones, Package, Briefcase, Play, Wrench
} from "lucide-react"

import { cn } from "@/lib/utils"
import ThemeToggle from '@/components/theme-toggle'

type SectionItem = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const sectionList: SectionItem[] = [
  { id: "about-me", label: "about me", icon: User },
  { id: "tech", label: "blog", icon: Headphones },
  { id: "projects", label: "projects", icon: Package },
  { id: "demos", label: "demos", icon: Play },
  { id: "setup", label: "setup", icon: Wrench },
  { id: "books", label: "reading", icon: Book },
  { id: "resume", label: "resume", icon: Briefcase },
  { id: "changelog", label: "changelog", icon: History },
]

const SocialLinks = ({ onAction }: { onAction?: () => void }) => {
  const handleClick = () => onAction?.()
  const searchAction = () => {
    onAction?.()
    setTimeout(() => window.dispatchEvent(new CustomEvent("toggle-search")), 50)
  }

  const linkCls =
    "inline-flex items-center justify-center rounded-md p-2 text-neutral-500 hover:text-[#e3b50f] dark:text-neutral-400 dark:hover:text-[#e3b50f] hover:bg-neutral-100 dark:hover:bg-neutral-900/60 transition-all duration-200"

  return (
    <div className="flex flex-wrap items-center gap-1">
      <Link
        href="mailto:arjunshenoy23@gmail.com"
        onClick={handleClick}
        className={linkCls}
        aria-label="Email"
        title="Email"
      >
        <Mail className="h-4 w-4" />
      </Link>
      <Link
        href="https://github.com/neuralmanacle"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={linkCls}
        aria-label="GitHub"
        title="GitHub"
      >
        <Github className="h-4 w-4" />
      </Link>
      <Link
        href="https://linkedin.com/in/neuralmanacle"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={linkCls}
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Link>
      <Link
        href="https://x.com/neuralmanacle"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={linkCls}
        aria-label="X"
        title="X"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </Link>
      <Link
        href="https://razorpay.me/@arjunkshenoy"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={linkCls}
        aria-label="Buy Me a Coffee"
        title="Buy Me a Coffee"
      >
        <Coffee className="h-4 w-4" />
      </Link>
      <Link
        href="/changes"
        onClick={handleClick}
        className={linkCls}
        aria-label="Changelog"
        title="Changelog"
      >
        <History className="h-4 w-4" />
      </Link>
      <button
        onClick={searchAction}
        className={linkCls + " cursor-pointer"}
        aria-label="Search"
        title="Search (Cmd+K)"
      >
        <Search className="h-4 w-4" />
      </button>
    </div>
  )
}

function NavOverlay({
    onClose,
  }: {
    onClose: () => void
  }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const activeSection = searchParams.get("section") || "about-me"
    const isHomepage = pathname === "/"

    const handleSectionClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      id: string,
    ) => {
      e.preventDefault()
      onClose()
      const target = id === "changelog" ? "/changes" : `/?section=${id}`
      router.push(target, { scroll: true })
    }

    return (
      <>
        {/* Navigate */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500">
            Navigate
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sectionList.map((section) => {
              const Icon = section.icon
              const isChangelog = section.id === "changelog"
              const isActive = isChangelog
                ? pathname === "/changes"
                : isHomepage && activeSection === section.id

              return (
                <a
                  key={section.id}
                  href={isChangelog ? "/changes" : `/?section=${section.id}`}
                  onClick={(e) => handleSectionClick(e, section.id)}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-lg border px-3 py-2.5 font-mono text-sm transition-all duration-200",
                    "border-neutral-200 dark:border-neutral-800",
                    isActive
                      ? "bg-neutral-100 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white"
                      : "bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-900/40 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110",
                      isActive
                        ? "text-[#e3b50f]"
                        : "text-neutral-400 dark:text-neutral-500 group-hover:text-[#e3b50f]",
                    )}
                  />
                  <span
                    className={cn(
                      "capitalize whitespace-nowrap",
                      isActive ? "font-bold animate-rainbow" : "font-medium",
                    )}
                  >
                    {section.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      </>
    )
  }

  export default function Navbar({ className }: { className?: string }) {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const closeMenu = React.useCallback(() => setMenuOpen(false), [])

  React.useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen, closeMenu])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-white/30 dark:bg-transparent",
        "supports-[backdrop-filter]:bg-white/25 dark:supports-[backdrop-filter]:bg-black/10",
        "backdrop-blur-[2px] supports-[backdrop-filter]:backdrop-blur-md",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px",
        "after:bg-gradient-to-r after:from-transparent after:via-neutral-300/50 dark:after:via-neutral-700/50 after:to-transparent",
        className
      )}
    >
      <div className="mx-auto flex h-[52px] md:min-h-[5rem] md:py-4 md:h-24 max-w-2xl items-center justify-between px-4 relative">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 min-w-0">
          <Link
            href="/"
            onClick={closeMenu}
            className={cn(
              "group inline-flex items-center gap-1.5 md:gap-3 tracking-tight text-neutral-900 dark:text-white",
              "font-mono font-semibold"
            )}
            style={{ fontSize: "clamp(1rem, 4.5vw, 1.875rem)" }}
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="h-6 w-6 md:h-7 md:w-7 object-cover shrink-0"
              priority
            />
            <span className="truncate">neural manacle</span>
          </Link>
          <Link
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e3b50f] hover:text-[#e3b50f] transition-colors p-0.5 shrink-0 hidden md:inline-flex"
            aria-label="RSS Feed"
          >
            <Rss className="h-4 w-4" />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <SocialLinks />
            <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 mx-1" />
          </div>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "md:hidden relative inline-flex items-center justify-center rounded-md p-1.5",
              "text-neutral-700 dark:text-neutral-200",
              "hover:bg-neutral-100 dark:hover:bg-neutral-900/60",
              "transition-colors duration-200"
            )}
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-200 ease-out",
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out",
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[52px] bottom-0 z-[60]",
          "transition-all duration-300 ease-out",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm",
            "transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Panel */}
        <div
          className={cn(
            "relative mx-auto w-full max-w-2xl px-4 pt-4",
            "transition-transform duration-300 ease-out",
            menuOpen ? "translate-y-0" : "-translate-y-4"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/95 dark:bg-black/80 backdrop-blur-xl shadow-xl p-5 space-y-5 animate-fade-in max-h-[calc(100dvh-68px)] overflow-y-auto">
            {/* Brand block */}
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-cover"
                />
                <span className="font-mono font-bold text-neutral-900 dark:text-white">
                  neural manacle
                </span>
              </Link>
              <Link
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-[#e3b50f] hover:text-[#e3b50f] transition-colors p-1"
                aria-label="RSS Feed"
              >
                <Rss className="h-4 w-4" />
              </Link>
            </div>

            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

            <React.Suspense fallback={null}>
              <NavOverlay onClose={closeMenu} />
            </React.Suspense>

            {/* Socials */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500">
                Connect
              </div>
              <SocialLinks onAction={closeMenu} />
            </div>

            {/* Close hint */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <X className="h-3 w-3" />
                close menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}