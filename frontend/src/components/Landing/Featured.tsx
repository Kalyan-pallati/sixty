import product1 from "../../assets/featured_pictures/product_1.jpg"
import product2 from "../../assets/featured_pictures/product_2.jpg"
import product3 from "../../assets/featured_pictures/product_3.jpg"
import product4 from "../../assets/featured_pictures/product_4.jpg"
import { motion } from "framer-motion";
export default function Featured() {
    const data = [
        {id: 1, name: "Navy Blue Tee", price: "$29.99", image: product1},
        {id: 2, name: "Limited Edition Tee ", price: "$29.99", image: product2},
        {id: 3, name: "Black & White Tee", price: "$29.99", image: product3},
        {id: 4, name: "Anime Tee", price: "$29.99", image: product4}
    ];
    return (
        <div className="bg-[#fefefe] flex flex-col text-center pt-12">
            <div className="p-4">
            <motion.h2 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="font-pixel text-[clamp(2rem,6vw,5rem)] ">
                Featured Products
            </motion.h2>
            <motion.p 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="-mt-3 text-[clamp(12px,16px,24px)] font-semibold tracking-wider">
                Check out the products that are curated just for you!

            </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 pt-16 w-full mt-8 bg-red-700 rounded-t-3xl">
                {data.map(product => (
                    <div title={product.name}
                        key={product.id} >
                        <motion.div className="p-2 "
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}>
                            <div className="overflow-hidden w-full h-full aspect-[3/4] border rounded-t-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                                <img src={product.image} alt={product.name} className="w-full h-full hover:scale-110 duration-1000 overflow-hidden " />
                            </div>
                            <div className="flex flex-col items-start mt-4 rounded-xl transition-transform duration-300">
                            <h1 className=" font-bold text-2xl border-b-2 text-white">{product.name}</h1>
                            <p className="text-xl font-pixel py-1 pd-2 text-white">{product.price}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}