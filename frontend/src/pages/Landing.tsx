import NavBar from "../components/NavBar"
import Scrolling from "../components/Landing/Scrolling";
import Hero from "../components/Landing/Hero";
export default function Landing() {
    return (
        <div className="min-h-screen bg-[#fefefe] antialiased selection:bg-red-500 selection:text-white">
            <NavBar />
            <Hero />
            <Scrolling />
        </div>
    )
}