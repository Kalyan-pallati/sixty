import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Team() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return (    
        <div className="my-10">
            <motion.h1 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{once: true}}
                className="text-center md:text-start md:pl-20 text-5xl md:text-6xl font-pixel tracking-wide">
                    Meet our Team
                </motion.h1>
            <div className="flex flex-col md:flex-row items-center md:justify-between mt-10 px-6 md:px-20 gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                >
                    <img src="/images/team1.png" alt="Team Member 1" className="w-64 h-64 object-cover mx-auto border border-black rounded-md" />
                    <h1 className="font-pixel text-2xl pt-2 tracking-wide font-semibold">Name Goes Here</h1>
                    <p className="font-pixel text-xl">Position</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 80 : -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                >
                    <img src="/images/team2.png" alt="Team Member 2" className="w-64 h-64 object-cover mx-auto border border-black rounded-md" />
                    <h1 className="font-pixel text-2xl pt-2 tracking-wide font-semibold">Name Goes Here</h1>
                    <p className="font-pixel text-xl">Position</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                >
                    <img src="/images/team3.png" alt="Team Member 3" className="w-64 h-64 object-cover mx-auto border border-black rounded-md" />
                    <h1 className="font-pixel text-2xl pt-2 tracking-wide font-semibold">Name Goes Here</h1>
                    <p className="font-pixel text-xl">Position</p>

                </motion.div>
            </div>
        </div>
    )
}