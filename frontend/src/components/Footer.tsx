import {Instagram, Phone, Mail} from "lucide-react"
import { FaFacebook, FaInstagram} from "react-icons/fa";

export default function Footer() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if(element) element.scrollIntoView({behavior: "smooth"});
    }
    return (
        <footer className="bg-[#F7F4EA] -mt-12 gap-4 px-16 py-12 border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-2 max-w-xs">
                <h1 className="font-pixel text-4xl tracking-wide hover:text-red-700">SIXTY</h1>
                <p className="-ml-0.5 text-red-700 tracking-wide font-semibold text-lg leading-snug">Ultimate Fashion Destination for everyone</p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-black font-bold tracking-wider text-xl uppercase">Quick Links</h2>
                <ul className="flex flex-col gap-3 font-semibold text-lg">
                    <li onClick={() => scrollToSection("reviews")} className="text-red-700 tracking-wide hover:text-black transition cursor-pointer">Reviews</li>
                    <li onClick={() => scrollToSection("featured")} className="text-red-700 tracking-wide hover:text-black transition cursor-pointer">Featured Products</li>
                    <li onClick={() => scrollToSection("next-drop")} className="text-red-700 tracking-wide hover:text-black transition cursor-pointer">Next Drop</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 text-red-700">
                <h1 className="text-black font-bold tracking-wider text-xl uppercase">Contact Us</h1>
                <div className="flex items-center gap-3 hover:text-black transition cursor-pointer"><Mail />contact@sixty.com</div>
                <div className="flex items-center gap-3 hover:text-black transition cursor-pointer"><Phone />+1 (555) 123-4567</div>
                <div className="flex items-center gap-3 hover:text-black transition cursor-pointer"><Instagram />@sixty fashion</div>
            </div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 p-4 items-center">
            <p className="tracking-wide font-semibold">Follow us:</p>
            <a 
            href="https://www.instagram.com/sixtyfashion/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer bg-pink-600 p-2.5 rounded-full hover:bg-pink-700 transition hover:-translate-y-1.5 duration-200">
                <div className="text-white text-2xl"><FaInstagram />
                </div>
            </a>
            <a 
            href="https://www.facebook.com/sixtyfashion/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer bg-blue-500 p-2.5 rounded-full hover:bg-blue-600 transition hover:-translate-y-1.5 duration-200">
                <div className="text-white text-2xl"><FaFacebook />
                </div>
            </a>
            <a 
            href="mailto:contact@sixty.com"
            className="cursor-pointer bg-red-700 p-2.5 rounded-full hover:bg-red-800 transition hover:-translate-y-1.5 duration-200">
                <div className="text-white text-2xl"><Mail />
                </div>
            </a>
        </div>
        <div className="border-t border-red-700 pt-12 text-center text-lg">
            © 2026 SIXTY. All rights reserved.
        </div>

        </footer>
    )
}