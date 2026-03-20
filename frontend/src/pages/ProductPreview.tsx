import { Star } from "lucide-react"
import type { JSX } from "react"

type Breadcrumb = {
  id: number
  name: string
  href: string
}

type ProductImage = {
  src: string
  alt: string
}

type Color = {
  id: string
  name: string
  classes: string
}

type Size = {
  name: string
  inStock: boolean
}

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ] as Breadcrumb[],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Product image 1",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Product image 2",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Product image 3",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Product image 4",
    },
  ] as ProductImage[],
  colors: [
    { id: "white", name: "White", classes: "bg-white" },
    { id: "gray", name: "Gray", classes: "bg-gray-200" },
    { id: "black", name: "Black", classes: "bg-gray-900" },
  ] as Color[],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ] as Size[],
  description:
    "Simple, clean, and comfortable tees. Because overthinking clothes is exhausting.",
}

const reviews = {
  average: 4,
  totalCount: 117,
}

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function ProductPreview(): JSX.Element {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-6">

        {/* Breadcrumb */}
        <nav className="mx-auto max-w-7xl px-4 mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            {product.breadcrumbs.map((b) => (
              <li key={b.id} className="flex items-center">
                <a href={b.href} className="text-gray-700 hover:text-black">
                  {b.name}
                </a>
                <span className="mx-2 text-gray-400">/</span>
              </li>
            ))}
            <li className="text-gray-500">{product.name}</li>
          </ol>
        </nav>

        {/* Image Grid */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="lg:row-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src={product.images[1].src}
            alt={product.images[1].alt}
            className="hidden lg:block rounded-lg"
          />
          <img
            src={product.images[2].src}
            alt={product.images[2].alt}
            className="hidden lg:block rounded-lg"
          />
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mx-auto max-w-7xl px-4 pt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-gray-700">
              {product.description}
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="text-2xl font-semibold text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((r) => (
                <Star
                  key={r}
                  className={classNames(
                    "w-5 h-5",
                    reviews.average > r
                      ? "fill-black text-black"
                      : "text-gray-300"
                  )}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {reviews.totalCount} reviews
              </span>
            </div>

            {/* Colors */}
            <div className="mt-6">
              <h3 className="text-sm font-medium">Color</h3>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color) => (
                  <div
                    key={color.id}
                    className={classNames(
                      "w-8 h-8 rounded-full border cursor-pointer",
                      color.classes
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <h3 className="text-sm font-medium">Size</h3>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    disabled={!size.inStock}
                    className="border rounded py-2 text-sm disabled:opacity-40 hover:border-black"
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
              Add to bag
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}