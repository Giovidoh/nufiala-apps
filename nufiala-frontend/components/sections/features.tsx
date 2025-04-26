'use client'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function FeaturesSection() {
  const { t } = useTranslation()
  const features = t('landing.features.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('landing.features.title')}
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
