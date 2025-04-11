'use client'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'motion/react'

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    { 
      title: t('landing.footer.product'),
      links: [
        { label: t('landing.features.title'), href: '#features' },
        { label: t('landing.how_it_works.title'), href: '#how-it-works' },
        { label: t('landing.testimonials.title'), href: '#testimonials' }
      ]
    },
    {
      title: t('landing.footer.company'),
      links: [
        { label: t('landing.footer.about'), href: '/about' },
        { label: t('landing.footer.careers'), href: '/careers' },
        { label: t('landing.footer.contact'), href: '/contact' }
      ]
    },
    {
      title: t('landing.footer.legal'),
      links: [
        { label: t('landing.footer.privacy'), href: '/privacy' },
        { label: t('landing.footer.terms'), href: '/terms' },
        { label: t('landing.footer.cookies'), href: '/cookies' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">{t('landing.hero.title')}</h2>
            <p className="text-muted-foreground mb-6">
              {t('landing.footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Replace with actual icon component */}
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Button variant="link" className="px-0" asChild>
                      <Link href={link.href} className="text-muted-foreground hover:text-primary">
                        {link.label}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} {t('landing.hero.title')}. {t('landing.footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
