import Begin from "../components/About/Begin";
import Hero from "../components/About/Hero";
import Team from "../components/About/Team";
import Why from "../components/About/Why";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function About() {
  return (
    <div>
        <NavBar />
        <Hero />
        <Team />
        <Begin />
        <Why />
        <Footer />
    </div>
  );
}