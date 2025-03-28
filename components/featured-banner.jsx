import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FeaturedBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1671498256164-fe6dc7d4a473?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvb2phJTIwYmFubmVyJTIwZm9yJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
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
