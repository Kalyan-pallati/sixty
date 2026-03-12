import { Star, Quote } from "lucide-react";

type ReviewCardProps = {
  name: string
  review: string
  stars: number
  image?: string
}

export default function ReviewCardFancy({ name, review, stars, image }: ReviewCardProps) {
  return (
    <div className="relative  w-[520px] h-[520px] rounded-2xl p-8">
      <h2 className="text-3xl font-serif mb-6">
        <Quote className="w-16 h-16 inline-block mb-1 fill-black" />
      </h2>
      <div className="flex flex-col gap-1">
        <h2 className="font-pixel text-3xl font-semibold -ml-2">Customer</h2>
        <h2 className="font-pixel text-3xl font-semibold pl-6">Reviews</h2>
      </div>
      <div className="absolute right-10 top-8 w-72 h-[470px] rounded-2xl border-4 border-white overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-110 transition:transform duration-1000"
        />
      </div>

      <div className="absolute left-12 md:left-8 bottom-12 bg-red-700 p-6 rounded-2xl shadow-lg w-60 flex flex-col items-center">

        <div className="flex gap-2 text-black mb-2">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400" />
          ))}
        </div>

        <p className="text-white text-sm mb-2 pb-4 border-b border-white tracking-wide text-center">
          "{review}"
        </p>

        <p className="font-semibold text-white borde font-pixel text-xl tracking-wider">
          {name}
        </p>
      </div>

    </div>
  )
}