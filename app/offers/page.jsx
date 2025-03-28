"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// This would normally come from a database
const offerProducts = [
  {
    id: "5",
    title: "Marble Lakshmi Idol",
    price: 1899,
    discountPrice: 1599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.8,
    badge: "15% OFF",
    offerType: "discount",
  },
  {
    id: "10",
    title: "Brass Pooja Thali",
    price: 1299,
    discountPrice: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    rating: 4.5,
    badge: "SALE",
    offerType: "discount",
  },
  {
    id: "13",
    title: "Brass Oil Lamp",
    price: 899,
    discountPrice: 699,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.7,
    badge: "22% OFF",
    offerType: "discount",
  },
  {
    id: "20",
    title: "Rangoli Colors Set",
    price: 349,
    discountPrice: 299,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diwali Special",
    rating: 4.6,
    badge: "DEAL",
    offerType: "discount",
  },
  {
    id: "31",
    title: "Marble Ganesha with Peacock",
    price: 2499,
    discountPrice: 1999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.9,
    badge: "20% OFF",
    offerType: "discount",
  },
  {
    id: "34",
    title: "Meenakari Pooja Thali",
    price: 1699,
    discountPrice: 1499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    rating: 4.7,
    badge: "OFFER",
    offerType: "discount",
  },
  {
    id: "38",
    title: "Copper Puja Lamp",
    price: 1199,
    discountPrice: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.7,
    badge: "DEAL",
    offerType: "discount",
  },
  {
    id: "42",
    title: "Premium Dhoop Sticks",
    price: 299,
    discountPrice: 249,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Incense & Dhoop",
    rating: 4.7,
    badge: "BEST SELLER",
    offerType: "discount",
  },
  {
    id: "43",
    title: "Diwali Gift Hamper",
    price: 1499,
    discountPrice: 1299,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diwali Special",
    rating: 4.8,
    badge: "POPULAR",
    offerType: "discount",
  },
  {
    id: "50",
    title: "Silver Plated Ganesh Lakshmi Set",
    price: 2999,
    discountPrice: 2499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.9,
    badge: "FESTIVE OFFER",
    offerType: "discount",
  },
  {
    id: "51",
    title: "Brass Aarti Lamp",
    price: 1299,
    discountPrice: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.6,
    badge: "LIMITED TIME",
    offerType: "discount",
  },
  {
    id: "52",
    title: "Sandalwood Prayer Beads",
    price: 799,
    discountPrice: 599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Spiritual Accessories",
    rating: 4.7,
    badge: "25% OFF",
    offerType: "discount",
  },

  // Bundle offers
  {
    id: "60",
    title: "Complete Puja Essentials Kit",
    price: 3999,
    discountPrice: 2999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Puja Kits",
    rating: 4.9,
    badge: "BUNDLE OFFER",
    offerType: "bundle",
  },
  {
    id: "61",
    title: "Diwali Decoration Set",
    price: 2499,
    discountPrice: 1999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diwali Special",
    rating: 4.8,
    badge: "BUNDLE OFFER",
    offerType: "bundle",
  },
  {
    id: "62",
    title: "Navratri Special Kit",
    price: 1899,
    discountPrice: 1599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Festival Kits",
    rating: 4.7,
    badge: "BUNDLE OFFER",
    offerType: "bundle",
  },

  // Buy One Get One
  {
    id: "70",
    title: "Brass Diya Set (Buy 1 Get 1)",
    price: 1299,
    discountPrice: 1299,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.6,
    badge: "BOGO",
    offerType: "bogo",
  },
  {
    id: "71",
    title: "Incense Sticks Pack (Buy 1 Get 1)",
    price: 399,
    discountPrice: 399,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Incense & Dhoop",
    rating: 4.5,
    badge: "BOGO",
    offerType: "bogo",
  },
  {
    id: "72",
    title: "Rudraksha Mala (Buy 1 Get 1)",
    price: 899,
    discountPrice: 899,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Spiritual Jewelry",
    rating: 4.8,
    badge: "BOGO",
    offerType: "bogo",
  },
];

export default function OffersPage() {
  const [sortBy, setSortBy] = useState("featured");
  const [currentTab, setCurrentTab] = useState("all");

  // Filter products based on current tab
  const filteredProducts =
    currentTab === "all"
      ? offerProducts
      : offerProducts.filter((product) => product.offerType === currentTab);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") {
      return (a.discountPrice || a.price) - (b.discountPrice || b.price);
    } else if (sortBy === "price-high-low") {
      return (b.discountPrice || b.price) - (a.discountPrice || a.price);
    } else if (sortBy === "discount") {
      const discountA = a.price - (a.discountPrice || a.price);
      const discountB = b.price - (b.discountPrice || b.price);
      return discountB - discountA;
    }
    return 0; // Default to featured order
  });

  return (
    <div className="container py-12">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg"></div>
        <div className="relative py-8 px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Special Offers
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our exclusive deals, discounts, and limited-time offers on a
            wide range of puja essentials and spiritual products.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              Up to 25% OFF
            </Badge>
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              Buy One Get One Free
            </Badge>
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              Bundle Deals
            </Badge>
            <Badge
              variant="outline"
              className="bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              Free Shipping
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <Tabs
          defaultValue="all"
          className="w-full md:w-auto"
          onValueChange={setCurrentTab}
        >
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="all">All Offers</TabsTrigger>
            <TabsTrigger value="discount">Discounts</TabsTrigger>
            <TabsTrigger value="bundle">Bundles</TabsTrigger>
            <TabsTrigger value="bogo">Buy 1 Get 1</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="w-full md:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="discount">Biggest Discount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            discountPrice={product.discountPrice}
            image={product.image}
            category={product.category}
            rating={product.rating}
            badge={product.badge}
          />
        ))}
      </div>

      <div className="mt-12 bg-primary/5 rounded-lg p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Limited Time Offers</h2>
          <p className="text-muted-foreground">
            These special deals are only available for a limited time. Don't
            miss out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background rounded-lg border p-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M19.73 14.87a7 7 0 1 0-9.46 0L12 20l1.73-5.13Z" />
                <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Free Shipping Nationwide</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Enjoy free shipping on all orders above ₹1000 across India.
              </p>
              <Button size="sm" asChild>
                <Link href="/categories">Shop Now</Link>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-lg border p-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                <path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                <path d="M12 11v4" />
                <path d="M15 13h-6" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">10% Off First Order</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Use code FIRST10 at checkout to get 10% off your first purchase.
              </p>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "How long do special offers last?",
              a: "Most of our special offers are available for a limited time, typically 1-2 weeks. The exact duration is mentioned on the product page.",
            },
            {
              q: "Can I combine multiple offers?",
              a: "Generally, only one offer can be applied per product. However, you can use a coupon code along with products that are already on sale.",
            },
            {
              q: "How do Buy One Get One offers work?",
              a: "For BOGO offers, add the product to your cart and the second item will be automatically added at checkout at no additional cost.",
            },
            {
              q: "Are discounted items eligible for return?",
              a: "Yes, our standard return policy applies to discounted items as well, unless specifically mentioned otherwise.",
            },
          ].map((faq, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
