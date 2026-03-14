import {FaInstagram} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    const mobilenavbarstyling = "text-black font-pixel p-2 px-10 hover:text-red-500 cursor-pointer hover:bg-black hover:rounded-full border-red-500";
    const desktopnavbarstyling = "text-black font-pixel my-1 py-1 px-4 hover:text-red-500 hover:bg-black hover:rounded-full border-red-500 cursor-pointer";
    return (
        <nav className={`sticky top-0 z-50 py-3 mx-auto transition-all duration-1000 ${isScrolled ? 'shadow-lg bg-transparent backdrop-blur-2xl' : 'bg-[#F7F4EA]'}`}>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center">
                <div className="hidden md:flex flex-1">
                    <ul className="flex gap-4 border border-transparent px-2 rounded-3xl">
                        <li className={desktopnavbarstyling} style={{fontSize: '23px'}}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={desktopnavbarstyling} style={{fontSize: '23px'}}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={desktopnavbarstyling} style={{fontSize: '23px'}}>
                            <Link to="/products">Products</Link>
                        </li>
                        <li className={desktopnavbarstyling} style={{fontSize: '23px'}}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                <a href="/" className="text-black font-pixel hover:text-red-500" style={{ letterSpacing: '1px', fontSize:'35px' }}>SIXTY</a>
                </div>
                <div className="md:hidden flex-1 flex justify-end">
                    <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX className="text-black" style={{fontSize: '35px'}} /> : <FiMenu className="text-black" style={{fontSize: '35px'}} />}</button>
                </div>
                
                <div className="hidden md:flex flex-1 justify-end">
                    <ul className="flex gap-4">
                        <li><a href="https://www.instagram.com/wear.sixty" target="_blank" rel="noopener noreferrer" ><FaInstagram className="text-black hover:text-red-500 pt-2 mt-0.5" style={{fontSize: '35px'}} /></a></li>
                        <li><a href="mailto:pallatikalyansai@gmail.com" rel="noopener noreferrer"><MdEmail className="text-black hover:text-red-500 pt-2 mt-0.5" style={{fontSize: '35px'}} /></a></li>
                        <li className='font-pixel text-black hover:text-black-500 hover:bg-red-500 mt-1 border-2 border-black rounded-md p-0.5 px-3' style={{fontSize: '20px'}}>Follow us</li>
                    </ul>
                </div>
            </div>
            {menuOpen && (
                
                    <div className='md:hidden bg-[#F7F4EA] border-t-2 border-gray-800'>
                        <ul className="flex flex-col items-center gap-4 mt-4">
                            <li className={mobilenavbarstyling} style={{fontSize: '20px'}}>Home</li>
                            <li className={mobilenavbarstyling} style={{fontSize: '20px'}}>About</li>
                            <li className={mobilenavbarstyling} style={{fontSize: '20px'}}>Products</li>
                            <li className={mobilenavbarstyling} style={{fontSize: '20px'}}>Contact</li>
                        </ul>
                    </div>
                )}
        </nav>
        
    )
}