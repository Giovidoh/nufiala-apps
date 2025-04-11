import { Header } from '@/components/Header'
import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { Footer } from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main className="">
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </>
    );
}
