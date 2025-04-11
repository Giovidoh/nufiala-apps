'use client'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export function Header() {
  const { t } = useTranslation()
  const [activeLink, setActiveLink] = useState<string>('hero')

  const navItems = [
    { id: 'hero', label: t('landing.cta.take_course') },
    { id: 'features', label: t('landing.features.title') },
    { id: 'how-it-works', label: t('landing.how_it_works.title') },
    { id: 'testimonials', label: t('landing.testimonials.title') }
  ]

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const item of navItems) {
        const section = document.getElementById(item.id)
        if (section && 
            section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(item.id)
          break
        }
      }
    }

    handleScroll() // Set initial active link
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.header 
      style={{ opacity: headerOpacity }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b h-16"
    >
      <div className="container flex h-full items-center justify-between px-4">
        <h1 className="text-xl font-bold">{t('landing.hero.title')}</h1>
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button key={item.id} variant="ghost" asChild>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer px-4 py-2 ${
                  activeLink === item.id 
                    ? 'text-primary font-medium bg-accent/50' 
                    : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </motion.button>
            </Button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
