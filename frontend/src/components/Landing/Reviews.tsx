import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/all";
import { useRef } from "react";
import { IoSend } from "react-icons/io5"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
export default function Reviews() {

    // reviews = [
    //     {id: 1, review: "Amazing quality. The hoodie feels premium.", stars: 5},
    //     {id: 2, review: "I love the oversized fit. It's so comfortable and stylish.", stars: 5},
    //     {id: 3, review: "The designs are so clean and minimal. Perfect for everyday wear.", stars: 5},
    //     {id: 4, review: "Great value for the price. Highly recommend!", stars: 5},
    // ]

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
                { x: 300, y: 400 },      
                { x: -400, y: 600 },    
                { x: 400, y: 800 },     
                { x: 0, y: 1000 }        
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
                className="absolute top-0 left-1/2 text-4xl">
                <IoSend className="text-red-800" />
            </div>
            <div className="flex flex-col bg-gray-900 w-80 max-w-3xl p-8 rounded-3xl shadow-xl">
                <div className="relative w-full">
                    <div className="text-yellow-300 text-xl">“</div>

                    <div className="font-bold text-lg text-center font-pixel text-yellow-300 tracking-wider">NAME HERE</div>
                    <div className="flex flex-col gap-2">
                    <div className="mt-4 text-gray-300 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                    <div className="text-yellow-400 text-center">★★★★★</div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}