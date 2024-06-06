"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./theme-toggle"

const linkList = [
  { title: 'blogs', link: '/blog' },
  { title: 'about', link: '/about' }
]

export const HomeNav = () => {
  const pathname = usePathname()
  return (
    <nav className="p-4 flex justify-end items-center gap-4">
      <div>
        {linkList.map(i => (
          <Link
            key={i.title}
            className={cn(
              buttonVariants({ variant: 'link' }),
              pathname === i.link
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}
            href={i.link}>{i.title}</Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  )
}
