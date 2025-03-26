"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu({ onClose }) {
  const [openCategory, setOpenCategory] = useState(null)

  const categories = [
    {
      name: "Idols & Statues",
      subcategories: ["Ganesh", "Lakshmi", "Shiva", "Krishna", "Durga", "Buddha"],
    },
    {
      name: "Pooja Thali Sets",
      subcategories: ["Silver", "Brass", "Copper", "German Silver"],
    },
    {
      name: "Diyas & Lamps",
      subcategories: ["Brass Diyas", "Silver Diyas", "Decorative Lamps", "LED Diyas"],
    },
    {
      name: "Incense & Dhoop",
      subcategories: ["Incense Sticks", "Dhoop Cones", "Loban", "Camphor"],
    },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto">
          <nav className="flex flex-col">
            <Link href="/" className="px-4 py-3 border-b hover:bg-muted" onClick={onClose}>
              Home
            </Link>

            {categories.map((category, index) => (
              <div key={index}>
                <button
                  className="w-full px-4 py-3 border-b hover:bg-muted flex justify-between items-center"
                  onClick={() => setOpenCategory(openCategory === index ? null : index)}
                >
                  {category.name}
                  <span>{openCategory === index ? "−" : "+"}</span>
                </button>

                {openCategory === index && (
                  <div className="bg-muted/50">
                    {category.subcategories.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
                        className="block px-8 py-2 text-sm hover:bg-muted"
                        onClick={onClose}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/offers" className="px-4 py-3 border-b hover:bg-muted" onClick={onClose}>
              Special Offers
            </Link>

            <Link href="/about" className="px-4 py-3 border-b hover:bg-muted" onClick={onClose}>
              About Us
            </Link>

            <Link href="/contact" className="px-4 py-3 border-b hover:bg-muted" onClick={onClose}>
              Contact Us
            </Link>

            <Link href="/faq" className="px-4 py-3 border-b hover:bg-muted" onClick={onClose}>
              FAQ
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t">
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="outline" className="w-full" onClick={onClose}>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="w-full" onClick={onClose}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

