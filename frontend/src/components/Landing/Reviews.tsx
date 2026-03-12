import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/all";
import { useRef } from "react";
import { IoSend } from "react-icons/io5"
import ReviewCard from "../ReviewCard";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
export default function Reviews() {

    const reviews = [
        {id: 1, name: "Alice Johnson", review: "Amazing quality. The hoodie feels premium.", stars: 5},
        {id: 2, name: "Bob Smith", review: "I love the oversized fit. It's so comfortable and stylish.", stars: 5},
        {id: 3, name: "Charlie Brown", review: "The designs are so clean and minimal. Perfect for everyday wear.", stars: 5},
        {id: 4, name: "Diana Miller", review: "Great value for the price. Highly recommend!", stars: 5},
    ]

    const sectionRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
    gsap.to(iconRef.current, {
        keyframes: {
            opacity: [0, 1, 1, 0],
        },
        motionPath: {
            path: [         
                { x: -400, y: 200 },    
                { x: 300, y: 500 },      
                { x: -400, y: 750 },    
                { x: 400, y: 1150 },     
                { x: 0, y: 1200 }        
            ],
            
            autoRotate: true
        },
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",      
            end: "bottom center",         
            scrub: 2.0,              
        }
    });
}, []);

    return (
        <section  ref={sectionRef} className="relative min-h-[200vh] py-40 px-8">
            <div
                id="message-icon"
                ref={iconRef}
                className="absolute top-0 left-1/2 text-6xl">
                <IoSend className="text-black-800" />
            </div>
            <h1 className="-mt-32 font-bold text-center text-black mb-12 font-pixel text-6xl tracking-wider"
                style={{
                    textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)"
                }}>
                What Our Customers Say
            </h1>
            <div className="flex flex-col gap-12">
                {reviews.map((review) => (
                    <div key={review.id} 
                    className={`flex items-center ${review.id % 2 !== 0 ? 'justify-start pl-5' : 'justify-end pr-5'} `}>
                        <ReviewCard 
                        name={review.name}
                        review={review.review}
                        stars={review.stars}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}