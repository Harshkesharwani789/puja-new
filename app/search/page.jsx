"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// This would normally come from a database
const allProducts = [
  {
    id: "1",
    title: "Brass Ganesh Idol",
    price: 1299,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.9,
  },
  {
    id: "2",
    title: "Silver Pooja Thali Set",
    price: 2499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    rating: 4.7,
  },
  {
    id: "3",
    title: "Decorative Diya Set",
    price: 599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.5,
  },
  {
    id: "4",
    title: "Sandalwood Incense Sticks",
    price: 199,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Incense & Dhoop",
    rating: 4.8,
  },
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
  },
  {
    id: "6",
    title: "Copper Saraswati Idol",
    price: 1599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.7,
  },
  {
    id: "7",
    title: "Bronze Hanuman Idol",
    price: 1499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.6,
  },
  {
    id: "8",
    title: "Silver Plated Durga Idol",
    price: 2199,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.5,
  },
  {
    id: "9",
    title: "Wooden Krishna Idol",
    price: 999,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    rating: 4.4,
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
  },
  {
    id: "11",
    title: "German Silver Thali Set",
    price: 1899,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    rating: 4.6,
  },
  {
    id: "12",
    title: "Copper Pooja Thali",
    price: 1499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    rating: 4.8,
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
  },
  {
    id: "14",
    title: "Terracotta Diya Set",
    price: 399,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.3,
  },
  {
    id: "15",
    title: "Silver Plated Diya",
    price: 799,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    rating: 4.6,
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Filter products based on search query
      const results = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would update the URL with the new search query
    window.history.pushState(
      {},
      "",
      `/search?q=${encodeURIComponent(searchQuery)}`
    );

    // Filter products based on new search query
    const results = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex max-w-lg">
          <Input
            type="search"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      {query && (
        <p className="mb-6 text-muted-foreground">
          {searchResults.length === 0
            ? `No results found for "${query}"`
            : `Showing ${searchResults.length} results for "${query}"`}
        </p>
      )}

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
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
      ) : (
        <div className="text-center py-12 border rounded-lg">
          <h2 className="text-xl font-medium mb-2">No products found</h2>
          <p className="text-muted-foreground mb-6">
            Try searching with different keywords or browse our categories
          </p>
          <Button asChild>
            <Link href="/categories">Browse Categories</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
