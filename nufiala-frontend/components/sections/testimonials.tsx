'use client'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'

type TestimonialItem = {
  quote: string
  author: string
}

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = t('landing.testimonials.items', { returnObjects: true }) as TestimonialItem[]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('landing.testimonials.title')}
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial: TestimonialItem, index: number) => (
              <Card key={index} className="text-left">
                <CardContent className="p-6">
                  <blockquote className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <p className="font-semibold">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
