"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Check,
  Star,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useToast } from "@/hooks/use-toast";
import { ProductCard } from "@/components/product-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This would normally come from a database
const productsData = [
  {
    id: "1",
    title: "Brass Ganesh Idol",
    price: 1299,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Idols & Statues",
    description:
      "This beautifully crafted brass Ganesh idol is perfect for your home temple or as a decorative piece. Made with high-quality brass and intricate detailing, this idol represents Lord Ganesha, the remover of obstacles and the god of new beginnings.",
    specifications:
      "Material: Brass\nHeight: 8 inches\nWidth: 5 inches\nWeight: 1.2 kg",
    care: "Clean with a soft dry cloth. Avoid using water or harsh chemicals.",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: "2",
    title: "Silver Pooja Thali Set",
    price: 2499,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Pooja Thali Sets",
    description:
      "This elegant silver pooja thali set includes all the essential items needed for daily rituals and special occasions. The set features a beautifully designed thali with intricate patterns, along with matching accessories.",
    specifications:
      "Material: German Silver\nThali Diameter: 10 inches\nItems Included: Thali, Bell, Diya, Incense Holder, Small Bowls (2)\nWeight: 800g",
    care: "Clean with a soft dry cloth. For stubborn stains, use a mild silver polish.",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    title: "Decorative Diya Set",
    price: 599,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Diyas & Lamps",
    description:
      "Brighten up your home with this beautiful set of decorative diyas. Perfect for Diwali celebrations or to add a warm glow to your home decor throughout the year. Each diya is handcrafted with attention to detail.",
    specifications:
      "Material: Terracotta with metallic paint\nQuantity: Set of 6 diyas\nSize: 3 inches diameter each\nStyle: Assorted designs",
    care: "Wipe with a dry cloth. Fill with oil or ghee and use a cotton wick for lighting.",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "4",
    title: "Sandalwood Incense Sticks",
    price: 199,
    image:
      "https://plus.unsplash.com/premium_photo-1676093698112-c35300feada7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYmxlJTIwbGFrc2htaSUyMGlkb2x8ZW58MHx8MHx8fDA%3D",
    category: "Incense & Dhoop",
    description:
      "These premium sandalwood incense sticks provide a calming and spiritual atmosphere for meditation, yoga, or daily prayers. Made from natural sandalwood, these sticks burn evenly and release a soothing fragrance.",
    specifications:
      "Material: Natural Sandalwood\nQuantity: 20 sticks per pack\nBurning Time: Approximately 30 minutes per stick\nLength: 10 inches",
    care: "Store in a cool, dry place. Keep away from direct sunlight.",
    rating: 4.8,
    reviews: 203,
  },
];

// Sample reviews
const sampleReviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    rating: 5,
    date: "2023-10-15",
    title: "Excellent quality",
    comment: "The craftsmanship is outstanding. Very pleased with my purchase.",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 4,
    date: "2023-09-22",
    title: "Beautiful piece",
    comment:
      "The product looks even better in person. The only reason for 4 stars is that delivery took longer than expected.",
    verified: true,
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 5,
    date: "2023-08-30",
    title: "Perfect for my home temple",
    comment:
      "Exactly what I was looking for. The size is perfect and the details are amazing.",
    verified: true,
  },
  {
    id: 4,
    name: "Sunita Gupta",
    rating: 3,
    date: "2023-11-05",
    title: "Good but could be better",
    comment:
      "The product is good but there were some minor imperfections. Customer service was helpful though.",
    verified: false,
  },
];

// Related products
const getRelatedProducts = (currentId, category) => {
  return productsData
    .filter(
      (product) => product.id !== currentId && product.category === category
    )
    .slice(0, 4);
};

export default function ProductPage({ params }) {
  const productId = params.id;
  const product = productsData.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { toast } = useToast();

  // Product images (in a real app, these would come from the database)
  const productImages = [
    product?.image || "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ];

  useEffect(() => {
    if (isInWishlist) {
      setIsWishlisted(isInWishlist(productId));
    }
  }, [isInWishlist, productId]);

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">
          The product you are looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/categories">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setIsWishlisted(false);
      toast({
        title: "Removed from wishlist",
        description: `${product.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      });
      setIsWishlisted(true);
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist.`,
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `Check out this amazing product: ${product.title} at PujaStore!`
    );
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard.",
    });
  };

  const relatedProducts = getRelatedProducts(product.id, product.category);

  return (
    <div className="container py-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-primary">
          Categories
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${product.category
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/&/g, "")}`}
          className="hover:text-primary"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="relative rounded-lg overflow-hidden border mb-4">
            <Image
              src={productImages[activeImage] || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={() =>
                setActiveImage(
                  (activeImage - 1 + productImages.length) %
                    productImages.length
                )
              }
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={() =>
                setActiveImage((activeImage + 1) % productImages.length)
              }
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`cursor-pointer border rounded-md overflow-hidden ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.title} - view ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-muted-foreground mb-4">{product.category}</p>

          <div className="text-3xl font-bold mb-6">
            ₹{product.price.toLocaleString()}
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground mb-4">{product.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(Number.parseInt(e.target.value))
                  }
                  className="w-16 rounded-none text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleShare}>
                    Copy Link
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=Check out this amazing product: ${product.title} at PujaStore!`,
                        "_blank"
                      )
                    }
                  >
                    Share on WhatsApp
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=https://pujastore.com/products/${product.id}`,
                        "_blank"
                      )
                    }
                  >
                    Share on Facebook
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                {addedToCart ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" onClick={handleWishlist}>
                <Heart
                  className={`mr-2 h-4 w-4 ${
                    isWishlisted ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>

          <div className="mt-8 space-y-4 border-t pt-6">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">
                  On orders above ₹1000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-muted-foreground">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-muted-foreground">
                  10 day return policy
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4 border rounded-b-lg">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent
                value="specifications"
                className="p-4 border rounded-b-lg"
              >
                <pre className="whitespace-pre-wrap font-sans">
                  {product.specifications}
                </pre>
              </TabsContent>
              <TabsContent value="care" className="p-4 border rounded-b-lg">
                <p>{product.care}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{product.rating}</div>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Based on {product.reviews} reviews
              </p>
              <Button>Write a Review</Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              {sampleReviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{review.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-sm mb-2">{review.comment}</p>
                  <p className="text-sm text-muted-foreground">
                    By {review.name}
                  </p>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
