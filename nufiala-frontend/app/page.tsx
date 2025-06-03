import Hero from "./components/Hero";
import WhyUsSection from "./components/WhyUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyUsSection />
            <HowItWorksSection />
            <TestimonialsSection />
        </>
    );
}
