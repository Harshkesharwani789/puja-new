import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialCard({ name, location, image, rating, text }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="rounded-full overflow-hidden h-12 w-12">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
          />
        ))}
      </div>

      <p className="text-sm">{text}</p>
    </div>
  )
}

