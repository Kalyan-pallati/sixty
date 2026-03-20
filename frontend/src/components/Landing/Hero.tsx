import { motion } from "framer-motion";
import { Typewriter } from "../TypeWriter";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
    <div className="bg-[#fefefe] min-h-[80vh]">
        <div className="min-h-[80vh] flex flex-col justify-center p-8">
            <motion.div className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <Typewriter
                    staticText="SIXTY"
                    words={["Oversized","Weird","UNISEX"]}
                    typingSpeed={120}
                    deletingSpeed={80}
                    pauseTime={1000}
                />
            </motion.div>
            
            <div className="max-w-2xl mt-2 text-lg md:text-xl text-black font-medium leading-relaxed tracking-wide">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    SIXTY is an oversized unisex streetwear label focused on comfort and simplicity.
                    Our pieces are made to be worn every day without overthinking the fit.
                    Clean designs, relaxed silhouettes, and a little bit of attitude.
                    Just good clothing that feels right when you put it on.
                </motion.p>
            </div>
            
            <div className="-ml-1 mt-6 flex flex-col md:flex-row gap-4">
                <motion.button
                    onClick={() => { navigate("/products") }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        default: { duration: 0.7, delay: 1 },
                        scale: { duration: 0.2 },
                    }}
                    type="button" 
                    className="bg-black text-white py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-shadow duration-300 overflow-hidden group"
                >
                    <div className="h-6 overflow-hidden">
                        <div className="flex flex-col transition-transform  duration-200 group-hover:-translate-y-1/2 items-center justify-center">
                            <span className="h-6 items-center justify-center mt-0.5">Explore</span>
                            <span className="h-6 items-center justify-center mt-0.5">Let's go →</span>
                        </div>
                    </div>
                </motion.button>
                <motion.button 
                initial={{opacity: 0, y : 20}}
                animate={{opacity: 1, y: 0}}
                whileHover={{scale: 1.05}}
                whileTap={{scale:0.95}}
                transition={{
                    default: {duration: 0.7, delay: 1},
                    scale: {duration: 0.2}
                }}
                type="button" 
                className="bg-red-700 text-black py-4 px-10 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-shadow duration-300 overflow-hidden group">
                    <div className="h-6 overflow-hidden">
                        <div className="flex flex-col transition-transform  duration-200 group-hover:-translate-y-1/2 items-center justify-center">
                            <span className="h-6 items-center justify-center mt-0.5">Next Drop</span>
                            <span className="h-6 items-center justify-center mt-0.5">Know More →</span>
                        </div>
                    </div>
                </motion.button>
            </div>
        </div>
    </div>
    )
}