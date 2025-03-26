"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollingCategories() {
  const scrollContainerRef = useRef(null)

  const categories = [
    { title: "Idols & Statues", image: "/placeholder.svg?height=200&width=200", href: "/categories/idols" },
    { title: "Pooja Thali Sets", image: "/placeholder.svg?height=200&width=200", href: "/categories/pooja-thali" },
    { title: "Diyas & Lamps", image: "/placeholder.svg?height=200&width=200", href: "/categories/diyas" },
    { title: "Incense & Dhoop", image: "/placeholder.svg?height=200&width=200", href: "/categories/incense" },
    { title: "Diwali Special", image: "/placeholder.svg?height=200&width=200", href: "/categories/diwali" },
    { title: "Brass Items", image: "/placeholder.svg?height=200&width=200", href: "/categories/brass" },
    { title: "Silver Items", image: "/placeholder.svg?height=200&width=200", href: "/categories/silver" },
    { title: "Puja Accessories", image: "/placeholder.svg?height=200&width=200", href: "/categories/accessories" },
    { title: "Spiritual Jewelry", image: "/placeholder.svg?height=200&width=200", href: "/categories/jewelry" },
    { title: "Festival Kits", image: "/placeholder.svg?height=200&width=200", href: "/categories/festival-kits" },
  ]

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Optional: Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scroll("left")
      } else if (e.key === "ArrowRight") {
        scroll("right")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative group">
      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth snap-x">
        {categories.map((category, index) => (
          <Link key={index} href={category.href} className="group flex-shrink-0 w-[180px] md:w-[220px] snap-start">
            <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={220}
                  height={220}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

