"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { FeaturedBanner } from "@/components/featured-banner";
import { TestimonialCard } from "@/components/testimonial-card";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { MobileMenu } from "@/components/mobile-menu";
import { SearchBar } from "@/components/search-bar";
import { ScrollingCategories } from "@/components/scrolling-categories";
import { CountdownTimer } from "@/components/countdown-timer";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setShowMobileMenu(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-primary">PujaStore</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/offers"
              className="text-sm font-medium hover:text-primary"
            >
              Special Offers
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login" className="hidden sm:block">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </div>

        {showSearch && (
          <div className="border-t py-3 px-4 bg-background">
            <SearchBar />
          </div>
        )}
      </header>

      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)} />
      )}

      <main className="container py-8">
        <FeaturedBanner />

        {/* Announcement Bar */}
        <div className="my-6 bg-primary/10 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground"
            >
              NEW
            </Badge>
            <p className="text-sm md:text-base">
              Diwali Special Collection is now available! Limited stock.
            </p>
          </div>
          <CountdownTimer targetDate="2023-11-10T00:00:00" />
        </div>

        {/* Scrolling Categories */}
        <section className="my-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link
              href="/categories"
              className="text-sm text-primary hover:underline flex items-center"
            >
              View All Categories
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <ScrollingCategories />
        </section>

        <section className="my-12 py-10 px-6 bg-primary/5 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Special Offers</h2>
            <p className="text-muted-foreground">
              Limited time deals on premium puja items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              id="5"
              title="Marble Lakshmi Idol"
              price={1899}
              discountPrice={1599}
              image="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVqYXxlbnwwfHwwfHx8MA%3D%3D"
              category="Idols & Statues"
              rating={4.8}
              badge="15% OFF"
            />
            <ProductCard
              id="10"
              title="Brass Pooja Thali"
              price={1299}
              discountPrice={999}
              image="https://images.unsplash.com/photo-1551979122-3a33d9391335?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVqYXxlbnwwfHwwfHx8MA%3D%3D"
              category="Pooja Thali Sets"
              rating={4.5}
              badge="SALE"
            />
            <ProductCard
              id="13"
              title="Brass Oil Lamp"
              price={899}
              discountPrice={699}
              image="https://plus.unsplash.com/premium_photo-1698500034922-3a6dfd24ef1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVqYXxlbnwwfHwwfHx8MA%3D%3D"
              category="Diyas & Lamps"
              rating={4.7}
              badge="22% OFF"
            />
            <ProductCard
              id="20"
              title="Rangoli Colors Set"
              price={349}
              discountPrice={299}
              image="https://plus.unsplash.com/premium_photo-1677159520764-e91ce3ddfc89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZ29saSUyMGNvbG9yJTIwc2V0fGVufDB8fDB8fHww"
              category="Diwali Special"
              rating={4.6}
              badge="DEAL"
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/offers" className="flex items-center">
                View All Offers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-lg border hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Diwali Collection"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[300px] justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Diwali Collection
                </h3>
                <p className="text-white/90 mb-4">
                  Illuminate your celebrations with our exclusive Diwali
                  collection
                </p>
                <Button asChild className="w-fit" variant="secondary">
                  <Link href="/categories/diwali">Explore Collection</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Premium Idols"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[300px] justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium Idols
                </h3>
                <p className="text-white/90 mb-4">
                  Exquisitely crafted idols for your home temple
                </p>
                <Button asChild className="w-fit" variant="secondary">
                  <Link href="/categories/idols">Explore Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link
              href="/featured"
              className="text-sm text-primary hover:underline flex items-center"
            >
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              id="1"
              title="Brass Ganesh Idol"
              price={1299}
              image="https://images.unsplash.com/photo-1608616693532-89a59cb12324?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhc2glMjBnYW5lc2glMjBpZG9sfGVufDB8fDB8fHww"
              category="Idols & Statues"
              rating={4.9}
            />
            <ProductCard
              id="2"
              title="Silver Pooja Thali Set"
              price={2499}
              image="https://plus.unsplash.com/premium_photo-1675053533678-615611ecc0b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbHZlciUyMHB1amElMjB0aGFsaSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D"
              category="Pooja Thali Sets"
              rating={4.7}
            />
            <ProductCard
              id="3"
              title="Decorative Diya Set"
              price={599}
              image="https://images.unsplash.com/photo-1605302977593-fe0329b1effd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVjb3JhdGl2ZSUyMGRpeWElMjBzZXR8ZW58MHx8MHx8fDA%3D"
              category="Diyas & Lamps"
              rating={4.5}
            />
            <ProductCard
              id="4"
              title="Sandalwood Incense Sticks"
              price={199}
              image="https://images.unsplash.com/photo-1611800065908-233b597db552?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZGxld29kJTIwaW5jZW5zZSUyMHN0aWNrfGVufDB8fDB8fHww"
              category="Incense & Dhoop"
              rating={4.8}
            />
          </div>
        </section>

        {/* Trending Products with Animation */}
        <section className="my-12 overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">
              Our most popular products this season
            </p>
          </div>

          <div className="animate-marquee flex gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[250px] border rounded-lg p-4 flex flex-col"
              >
                <div className="aspect-square overflow-hidden rounded-md mb-3">
                  <Image
                    src={`https://images.unsplash.com/photo-1697262022725-48dca87322f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHB1amElMjBzaG9wfGVufDB8fDB8fHww${
                      index + 1
                    }`}
                    alt={`Trending Product ${index + 1}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-medium line-clamp-1">
                  Trending Product {index + 1}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Category</p>
                <div className="mt-auto">
                  <p className="font-semibold">
                    ₹{(Math.floor(Math.random() * 2000) + 500).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">
              The latest additions to our collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              id="21"
              title="Crystal Shivling"
              price={1499}
              image="https://images.unsplash.com/photo-1523681504355-8b4860f99a58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5c3RhbCUyMHNoaXZ8ZW58MHx8MHx8fDA%3D"
              category="Idols & Statues"
              rating={4.9}
              badge="NEW"
            />
            <ProductCard
              id="22"
              title="Copper Kalash Set"
              price={1899}
              image="https://media.istockphoto.com/id/1128259081/photo/turkish-coffee-pots-made-of-metal-in-a-traditional-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=ogWAxHc1rZt8ACpB8dpa5QUZq15ATPUktdGZMFiYk-8="
              category="Puja Accessories"
              rating={4.8}
              badge="NEW"
            />
            <ProductCard
              id="23"
              title="Handcrafted Bell"
              price={799}
              image="https://plus.unsplash.com/premium_photo-1714675739302-879a9e30cb5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZGNyYWZ0ZWQlMjBiZWxsfGVufDB8fDB8fHww"
              category="Puja Accessories"
              rating={4.7}
              badge="NEW"
            />
            <ProductCard
              id="24"
              title="Rudraksha Mala"
              price={499}
              image="https://media.istockphoto.com/id/177560404/photo/japa-mala.webp?a=1&b=1&s=612x612&w=0&k=20&c=a9zG8yjw3m6n74Njy4GoIvpUkiVZTIeURh_2Ef885B0="
              category="Spiritual Jewelry"
              rating={4.9}
              badge="NEW"
            />
          </div>
        </section>

        <section className="my-12 py-10 px-6 bg-primary/5 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Trusted by devotees across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Priya Sharma"
              location="Delhi"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              text="The quality of the Ganesh idol I purchased exceeded my expectations. The craftsmanship is exquisite and the delivery was prompt. Will definitely shop again!"
            />
            <TestimonialCard
              name="Rajesh Patel"
              location="Mumbai"
              image="/placeholder.svg?height=100&width=100"
              rating={4}
              text="I ordered a complete pooja thali set for my mother's birthday. She was delighted with the quality and design. The packaging was also very secure."
            />
            <TestimonialCard
              name="Ananya Gupta"
              location="Bangalore"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              text="The incense sticks have a beautiful, authentic fragrance. I've been ordering regularly for the past 6 months and the quality has been consistently excellent."
            />
          </div>
        </section>

        <section className="my-12">
          <NewsletterSignup />
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PujaStore</h3>
              <p className="text-sm">
                Your one-stop shop for all puja essentials and spiritual
                products.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">Facebook</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">Instagram</span>
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
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">Twitter</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <span className="sr-only">YouTube</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:underline">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="hover:underline">
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shipping" className="hover:underline">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:underline">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="hover:underline">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-sm not-italic">
                <p>123 Temple Street</p>
                <p>Spiritual City, SP 12345</p>
                <p className="mt-2">Email: info@pujastore.com</p>
                <p>Phone: +91 1234567890</p>
              </address>
              <div className="mt-4">
                <p className="text-sm font-medium">We Accept</p>
                <div className="flex gap-2 mt-2">
                  <div className="bg-white text-black rounded p-1 w-10 h-6"></div>
                  <div className="bg-white text-black rounded p-1 w-10 h-6"></div>
                  <div className="bg-white text-black rounded p-1 w-10 h-6"></div>
                  <div className="bg-white text-black rounded p-1 w-10 h-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm">
            <p>© {new Date().getFullYear()} PujaStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
