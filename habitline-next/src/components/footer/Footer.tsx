import logo from '@/assets/images/footerLogo.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export type FooterLink = {
  label: string
  link: string
  className: string
}

export type SocialLink = {
  link: string
  icon: string
}

const footerLinkClass = 'md:text-lg text-base text-[#FFC0BB] hover:text-white hover:underline underline-offset-4 decoration-2 transition-colors'

const pageLinks: FooterLink[] = [
  { label: 'Home', link: '/', className: footerLinkClass },
  { label: 'About', link: '/about', className: footerLinkClass },
  { label: 'Pricing', link: '/pricing', className: footerLinkClass },
  { label: 'Contact', link: '/contact', className: footerLinkClass },
  { label: 'Waitlist', link: '/waitlist', className: footerLinkClass },
]

const otherLinks: FooterLink[] = [
  { label: 'Download', link: '/download', className: footerLinkClass },
  { label: 'FAQs', link: '/faqs', className: footerLinkClass },
  { label: 'Privacy Policy', link: '/privacy-policy', className: footerLinkClass },
]

const socialLinks: SocialLink[] = [
  { link: 'https://www.instagram.com/wealth.pie/', icon: 'tabler:brand-instagram' },
  { link: 'https://www.linkedin.com/company/pie-wealth/', icon: 'tabler:brand-x-filled' },
  { link: 'https://x.com/piewealth', icon: 'tabler:brand-linkedin-filled' },
]

const Footer = () => {
  return (
    <footer className="bg-ink pt-20 pb-5 text-[#FFC0BB] lg:pb-7.5">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="mb-10 inline-block">
              <Image src={logo} alt="Habitline Logo" height={44} className="h-11" />
            </Link>

            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">Stay on top of your habits</h2>
              <p className="mb-5 text-lg text-[#FFC0BB]">No spam. Just simple advice for staying consistent.</p>

              <form className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
                <input type="email" placeholder="Enter your email" required className="placeholder:text-ink/40 rounded-full border border-[#FFC0BB]/30 bg-white px-5 py-3 text-base text-ink transition-all focus:outline-none lg:w-lg!" />
                <button type="submit" className="w-full rounded-full bg-[#FFC0BB] px-8 py-3.5 font-medium whitespace-nowrap text-ink transition-all hover:scale-95 md:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

          {/* <div>
            <h3 className="mb-5 text-base font-medium text-[#FFC0BB] lg:mb-7.5">Pages links</h3>
            <div className="flex flex-col justify-end gap-2">
              {pageLinks.map((item, index) => (
                <Link key={index} href={item.link} className={item.className}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-5 text-base font-medium text-[#FFC0BB] lg:mb-7.5">Other links</h3>
            {otherLinks.map((item, index) => (
              <Link key={index} href={item.link} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div> */}

        <div className="mt-6 flex flex-col items-center justify-center gap-5 border-t border-[#FFC0BB]/20 pt-5 md:mt-8 md:flex-row md:gap-6 md:pt-7.5 lg:mt-16">
          {/* <p className="text-base text-[#FFC0BB] md:text-lg">
            Develop by{' '}
            <a href="https://unifato.com/" target="_blank" className="font-medium text-[#FFC0BB] hover:underline">
              Unifato
            </a>
          </p> */}

          <div className="flex items-center justify-center gap-2.5">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="group inline-flex size-9 items-center justify-center overflow-hidden rounded-full bg-[#FFC0BB]/15">
                <div className="relative size-4 overflow-hidden">
                  <Icon icon={item.icon} className="absolute inset-0 size-4 h-full w-full text-[#FFC0BB] transition-transform duration-300 group-hover:-translate-y-[200%]" />
                  <Icon icon={item.icon} className="absolute inset-0 size-4 h-full w-full translate-y-[200%] text-[#FFC0BB] transition-transform duration-300 group-hover:translate-y-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
