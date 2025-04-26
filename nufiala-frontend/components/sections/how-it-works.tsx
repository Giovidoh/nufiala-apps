'use client'
import { useTranslation } from 'react-i18next'

export function HowItWorksSection() {
  const { t } = useTranslation()
  const steps = t('landing.how_it_works.steps', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('landing.how_it_works.title')}
          </h2>
          <div className="grid w-full max-w-3xl gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-full w-px bg-border" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
