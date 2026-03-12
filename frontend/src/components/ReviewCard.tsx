import { Star, Quote } from "lucide-react";
type ReviewCardProps = {
    name: string,
    review: string,
    stars: number
}
export default function ReviewCard({name, review, stars}: ReviewCardProps) {
    return (
        <div>
            <div className="flex flex-col bg-red-700 w-80 p-8 rounded-3xl shadow-3xl">
                <div className="relative w-full">
                    <div className="text-yellow-300">
                        <Quote className="w-10 h-10 fill-yellow-300"/>
                    </div>

                    <div className="font-bold text-lg -mt-5 text-center font-pixel text-white tracking-widest">{name}</div>
                    <div className="flex flex-col gap-2">
                    <div className="mt-4 text-gray-300 text-center tracking-wider font-semibold">
                        {review}
                    </div>         
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-700 w-80 max-w-3xl max-h-20 p-8 rounded-3xl shadow-3xl ">
                <div className="flex text-yellow-400 text-center gap-3">
                    {[...Array(stars)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-white fill-white" />
                    ))}
                </div>
            </div>
        </div>
    )
}