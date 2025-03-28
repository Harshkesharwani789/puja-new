import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeaturedBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Featured banner"
          width={1200}
          height={500}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>
      <div className="elative py-8 px-4 sm:py-12 sm:px-6 md:py-24 md:px-12 max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
          Diwali Special Collection
        </h1>
        <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
          Discover our exclusive range of premium puja items and decorations for
          this festive season. Limited time offers available!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/categories/diwali">Shop Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Link href="/offers">View Offers</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
