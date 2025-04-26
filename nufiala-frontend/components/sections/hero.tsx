"use client";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { GeometricFigures } from "./GeometricFigures";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="w-full min-h-screen pt-5 pb-12 md:pb-24 lg:pb-32 scroll-mt-20 flex items-center"
        >
            <div className="container mx-auto px-4 md:px-6">
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between p-12 gap-8">
                        {/* Left column: Text content */}
                        <div className="flex flex-col items-start text-left space-y-6 md:w-1/2">
                            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {t("landing.hero.title")}
                            </CardTitle>
                            <p className="text-gray-500 md:text-xl">
                                {t("landing.hero.description")}
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg">
                                    {t("landing.cta.take_course")}
                                </Button>
                                <Button size="lg" variant="outline">
                                    {t("landing.cta.give_course")}
                                </Button>
                            </div>
                        </div>
                        {/* Right column: Geometric figures */}
                        <div className="md:w-1/2">
                            <GeometricFigures />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
