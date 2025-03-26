import Link from "next/link"
import { CategoryCard } from "@/components/category-card"

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Categories</span>
        </div>
        <h1 className="text-3xl font-bold">Shop by Category</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CategoryCard title="Idols & Statues" image="/placeholder.svg?height=300&width=300" href="/categories/idols" />
        <CategoryCard
          title="Pooja Thali Sets"
          image="/placeholder.svg?height=300&width=300"
          href="/categories/pooja-thali"
        />
        <CategoryCard title="Diyas & Lamps" image="/placeholder.svg?height=300&width=300" href="/categories/diyas" />
        <CategoryCard
          title="Incense & Dhoop"
          image="/placeholder.svg?height=300&width=300"
          href="/categories/incense"
        />
        <CategoryCard title="Diwali Special" image="/placeholder.svg?height=300&width=300" href="/categories/diwali" />
        <CategoryCard title="Brass Items" image="/placeholder.svg?height=300&width=300" href="/categories/brass" />
        <CategoryCard title="Silver Items" image="/placeholder.svg?height=300&width=300" href="/categories/silver" />
        <CategoryCard
          title="Puja Accessories"
          image="/placeholder.svg?height=300&width=300"
          href="/categories/accessories"
        />
      </div>
    </div>
  )
}

