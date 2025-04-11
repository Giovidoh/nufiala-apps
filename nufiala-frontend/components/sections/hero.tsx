"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="w-full pt-5 pb-12 md:pb-24 lg:pb-32 scroll-mt-20"
        >
            <div className="container px-4 md:px-6">
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
                    <CardContent className="flex flex-col items-center justify-center space-y-4 text-center p-12">
                        <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {t("landing.hero.title")}
                        </CardTitle>
                        <p className="max-w-[600px] text-gray-500 md:text-xl">
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
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
