import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div>
            <div className="min-h-[80vh] bg-red-700 text-center px-6 py-32">
            <motion.h1 
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
                className="text-white text-4xl md:text-6xl font-semibold font-pixel tracking-wider">
                We don't follow trends
            </motion.h1>
            <motion.h1 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
                className="text-black text-4xl md:text-6xl font-semibold font-pixel tracking-wider">
                We create standards.
            </motion.h1>
            <motion.p 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 2}}
                className="mt-6 text-lg text-white max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
                SIXTY is built for people who wear confidence like a second skin.
                Our pieces combine bold expression with everyday comfort.
            </motion.p>
        </div>
        </div>
    )
}