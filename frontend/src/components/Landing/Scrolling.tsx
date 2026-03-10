import { motion } from "framer-motion";

export default function Scrolling() {
    const text = "STREETWEAR • SIXTY • LIMITED • DROPS • BUILT DIFFERENT • ";
    
    return (
        <div 
            className="relative w-full overflow-hidden py-4">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <motion.div
                className="flex whitespace-nowrap text-neutral-800 font-pixel" 
                style={{fontSize: '80px'}}
                animate={{ x: ["0%", "-50%"]}}
                transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity
                }}
            >
                {text.repeat(6)}
            </motion.div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
    )
}