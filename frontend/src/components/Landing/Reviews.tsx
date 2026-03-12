import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/all"
import ReviewCard from "../ReviewCard"
import MyIcon from "../../assets/arrow.svg"
import image1 from "../../assets/review_pictures/review_1.jpeg"
import image2 from "../../assets/review_pictures/review_2.jpeg"
import image3 from "../../assets/review_pictures/review_3.jpeg"
import image4 from "../../assets/review_pictures/review_4.jpeg"
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default function Reviews() {

  const reviews = [
    { id: 1, name: "Alice Johnson", review: "Amazing quality. The hoodie feels premium.", stars: 5, image : image1 },
    { id: 2, name: "Bob Smith", review: "I love the oversized fit. It's so comfortable and stylish.", stars: 5, image : image2 },
    { id: 3, name: "Charlie Brown", review: "The designs are so clean and minimal. Perfect for everyday wear.", stars: 5, image : image3 },
    { id: 4, name: "Diana Miller", review: "Great value for the price. Highly recommend!", stars: 5, image : image4 },
  ]

  const sectionRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    gsap.to(iconRef.current, {
      keyframes: {
        "0%":   { opacity: 0, scale: 1 },
        "5%":  { opacity: 0.9, scale: 0.8 },
        "15%":  { opacity: 1, scale: 0.8 },
        "30%":  { scale: 1.3 },
        "50%":  { opacity: 1, scale: 0.8 },
        "80%":  { scale: 1.2 },
        "90%": { opacity: 0.6, scale: 1.2 },
        "95%": { opacity: 0 },
        "100%": {opacity: 0, scale:1}
      },
      motionPath: {
        path: [
          { x: -500, y: 300 },
          { x: 450, y: 820 },
          { x: -500, y: 1500 },
          { x: 450, y: 2200 },
          { x: 0, y: 2400 }
        ],
        autoRotate: 90
      },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] py-40 px-8 overflow-hidden">

      <div
        id="message-icon"
        ref={iconRef}
        className="hidden md:block absolute top-0 left-1/2 origin-center z-50 pointer-events-none font-bold"
      >
        <img src={MyIcon} className="w-32 h-32 font-bold" />
      </div>

      <h1
        className="-mt-32 font-bold text-center text-white mb-12 font-pixel text-6xl tracking-wider"
        style={{
          textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)"
        }}
      >
        What Our Customers Say
      </h1>

      <div className="flex flex-col gap-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`flex items-center justify-center ${
              review.id % 2 !== 0
                ? "md:justify-start md:pl-5"
                : "md:justify-end md:pr-5"
            }`}
          >
            <ReviewCard
              name={review.name}
              review={review.review}
              stars={review.stars}
              image={review.image}
            />
          </div>
        ))}
      </div>

    </section>
  )
}