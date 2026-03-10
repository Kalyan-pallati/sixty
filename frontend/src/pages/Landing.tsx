import NavBar from "../components/NavBar"
import { motion } from "framer-motion";
import { Typewriter } from "../components/TypeWriter"

export default function Landing() {
    return (
        <div className="min-h-screen bg-[#280905] antialiased selection:bg-red-500 selection:text-white">
            <NavBar />
            <div className="min-h-[80vh]">
                <div className="min-h-[80vh] flex flex-col justify-center p-8">
                    <motion.div className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typewriter
                            staticText="SIXTY"
                            words={["Streetwear", "Limited Drops", "Built Different"]}
                            typingSpeed={120}
                            deletingSpeed={80}
                            pauseTime={1000}
                        />
                    </motion.div>
                    
                    <div className="max-w-2xl mt-4 text-lg md:text-xl text-white font-medium leading-relaxed tracking-wide">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            We are a streetwear brand that focuses on limited drops and high quality products. We are built different and we want to change the game.
                        </motion.p>
                    </div>
                    
                    <div className="mt-8">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                default: { duration: 0.7, delay: 1 },
                                scale: { duration: 0.2 },
                            }}
                            type="button" 
                            className="bg-white text-black py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-shadow duration-300"
                        >
                            Explore
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}