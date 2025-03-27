import Link from "next/link";
import { CategoryCard } from "@/components/category-card";

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
        <CategoryCard
          title="Idols & Statues"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/idols"
        />
        <CategoryCard
          title="Pooja Thali Sets"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/pooja-thali"
        />
        <CategoryCard
          title="Diyas & Lamps"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/diyas"
        />
        <CategoryCard
          title="Incense & Dhoop"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/incense"
        />
        <CategoryCard
          title="Diwali Special"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/diwali"
        />
        <CategoryCard
          title="Brass Items"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/brass"
        />
        <CategoryCard
          title="Silver Items"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/silver"
        />
        <CategoryCard
          title="Puja Accessories"
          image="https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D"
          href="/categories/accessories"
        />
      </div>
    </div>
  );
}
