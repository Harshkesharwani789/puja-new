import Link from "next/link"
import Image from "next/image"

export function CategoryCard({ title, image, href }) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

