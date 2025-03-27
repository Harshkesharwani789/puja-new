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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, SlidersHorizontal, X } from "lucide-react";

// This would normally come from a database
const products = {
  idols: [
    {
      id: "1",
      title: "Brass Ganesh Idol",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1504783124764-46ceed8f15be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhc2glMjBnYW5lc2glMjBpZG9sfGVufDB8fDB8fHww",
      category: "Idols & Statues",
      rating: 4.9,
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
      id: "21",
      title: "Crystal Shivling",
      price: 1499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Idols & Statues",
      rating: 4.9,
      badge: "NEW",
    },
    {
      id: "25",
      title: "Silver Nandi Idol",
      price: 1499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Idols & Statues",
      rating: 4.7,
    },
    {
      id: "28",
      title: "Resin Radha Krishna Idol",
      price: 899,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Idols & Statues",
      rating: 4.3,
    },
    {
      id: "29",
      title: "Jade Buddha Statue",
      price: 2999,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Idols & Statues",
      rating: 4.8,
    },
    {
      id: "30",
      title: "Brass Nataraja Idol",
      price: 1799,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Idols & Statues",
      rating: 4.7,
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
    },
  ],
  "pooja-thali": [
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
      id: "32",
      title: "Gold Plated Thali Set",
      price: 3499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Pooja Thali Sets",
      rating: 4.9,
    },
    {
      id: "33",
      title: "Wooden Carved Thali",
      price: 1199,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Pooja Thali Sets",
      rating: 4.4,
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
    },
  ],
  diyas: [
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
    {
      id: "16",
      title: "Electric LED Diya",
      price: 499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diyas & Lamps",
      rating: 4.4,
    },
    {
      id: "35",
      title: "Crystal Diya Set",
      price: 1299,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diyas & Lamps",
      rating: 4.8,
    },
    {
      id: "36",
      title: "Hanging Brass Diya",
      price: 899,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diyas & Lamps",
      rating: 4.5,
    },
    {
      id: "37",
      title: "Marble Carved Diya",
      price: 699,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diyas & Lamps",
      rating: 4.6,
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
    },
  ],
  incense: [
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
      id: "17",
      title: "Organic Dhoop Cones",
      price: 249,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.6,
    },
    {
      id: "18",
      title: "Loban Dhoop Sticks",
      price: 179,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.5,
    },
    {
      id: "19",
      title: "Rose Incense Sticks",
      price: 149,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.4,
    },
    {
      id: "39",
      title: "Jasmine Incense Sticks",
      price: 159,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.7,
    },
    {
      id: "40",
      title: "Nag Champa Incense",
      price: 229,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.9,
    },
    {
      id: "41",
      title: "Camphor Tablets",
      price: 129,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Incense & Dhoop",
      rating: 4.8,
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
    },
  ],
  diwali: [
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
      id: "16",
      title: "Electric LED Diya",
      price: 499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diyas & Lamps",
      rating: 4.4,
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
    },
    {
      id: "21",
      title: "Decorative Lantern",
      price: 799,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diwali Special",
      rating: 4.5,
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
    },
    {
      id: "44",
      title: "Handmade Paper Lanterns",
      price: 599,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diwali Special",
      rating: 4.6,
    },
    {
      id: "45",
      title: "Lakshmi Ganesh Idol Set",
      price: 1899,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diwali Special",
      rating: 4.9,
    },
    {
      id: "46",
      title: "Decorative Door Hangings",
      price: 499,
      image:
        "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
      category: "Diwali Special",
      rating: 4.7,
    },
  ],
};

const categoryTitles = {
  idols: "Idols & Statues",
  "pooja-thali": "Pooja Thali Sets",
  diyas: "Diyas & Lamps",
  incense: "Incense & Dhoop",
  diwali: "Diwali Special Collection",
};

export default function CategoryPage({ params }) {
  const category = params.category;
  const allCategoryProducts = products[category] || [];
  const categoryTitle = categoryTitles[category] || "Products";

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allCategoryProducts);

  const handleRatingChange = (rating, checked) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    }
  };

  const applyFilters = () => {
    let result = [...allCategoryProducts];

    // Filter by price range
    result = result.filter((product) => {
      const price = product.discountPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Filter by rating
    if (selectedRatings.length > 0) {
      result = result.filter((product) => {
        const rating = Math.floor(product.rating);
        return selectedRatings.includes(rating);
      });
    }

    // Sort products
    if (sortBy === "price-low-high") {
      result.sort(
        (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price)
      );
    } else if (sortBy === "price-high-low") {
      result.sort(
        (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price)
      );
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);

    // On mobile, close the filter panel after applying
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  const resetFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedRatings([]);
    setSortBy("featured");
    setFilteredProducts(allCategoryProducts);
  };

  return (
    <div className="container py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-primary">
            Categories
          </Link>
          <span>/</span>
          <span className="text-foreground">{categoryTitle}</span>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">{categoryTitle}</h1>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? (
                <X className="h-4 w-4 mr-2" />
              ) : (
                <Filter className="h-4 w-4 mr-2" />
              )}
              {showFilters ? "Close" : "Filter"}
            </Button>

            <div className="hidden md:block">
              <Select
                value={sortBy}
                onValueChange={(value) => {
                  setSortBy(value);
                  setTimeout(applyFilters, 0);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high-low">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters - Mobile */}
        {showFilters && (
          <div className="fixed inset-0 z-50 bg-background p-6 overflow-y-auto md:hidden">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high-low">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={5000}
                    step={100}
                    onValueChange={setPriceRange}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={selectedRatings.includes(rating)}
                        onCheckedChange={(checked) =>
                          handleRatingChange(rating, checked)
                        }
                      />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center"
                      >
                        {Array.from({ length: rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-primary fill-primary"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="ml-1">& Up</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={applyFilters} className="flex-1">
                  Apply Filters
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Filters - Desktop */}
        <div className="hidden md:block">
          <div className="sticky top-20 space-y-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={5000}
                      step={100}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox
                          id={`rating-desktop-${rating}`}
                          checked={selectedRatings.includes(rating)}
                          onCheckedChange={(checked) =>
                            handleRatingChange(rating, checked)
                          }
                        />
                        <Label
                          htmlFor={`rating-desktop-${rating}`}
                          className="flex items-center text-sm"
                        >
                          {Array.from({ length: rating }).map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-primary fill-primary"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <span className="ml-1">& Up</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={applyFilters}
                    size="sm"
                    className="w-full mb-2"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetFilters}
                    className="w-full"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
