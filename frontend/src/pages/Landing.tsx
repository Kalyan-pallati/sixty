import NavBar from "../components/NavBar"
import Scrolling from "../components/Landing/Scrolling";
import Hero from "../components/Landing/Hero";
import Featured from "../components/Landing/Featured";
import bgla from "../assets/featured_pictures/bg-landing.png"
import Reviews from "../components/Landing/Reviews";
import Footer from "../components/Footer";
// import StackScroll from "../components/Landing/StackScroll";
export default function Landing() {
    return (
        <div className="min-h-screen antialiased bg-fixed selection:bg-red-500 selection:text-white"
        style={{backgroundImage: `url(${bgla})`,
        backgroundSize: "cover",
        backgroundPosition : "center"
    }}>
            {/* bg-[#fefefe] */}
            <NavBar />
            <Hero />
            <Scrolling />
            <div id="featured"><Featured /></div>
            {/* <StackScroll /> */}
            <div id="reviews"><Reviews /></div>
            <Footer />
        </div>
    )
}