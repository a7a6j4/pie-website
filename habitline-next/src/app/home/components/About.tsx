'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import about01 from '@/assets/images/about/about-01.webp'
import about02 from '@/assets/images/about/about-02.webp'
import about03 from '@/assets/images/about/about-03.webp'
import about04 from '@/assets/images/about/about-04.webp'
import phoneImage from '@/assets/images/event/phone-image.png'
import newPhoneImage from '@/assets/images/event/phone-image01.png'
import marquee01 from '@/assets/images/gallery/marquee-image-01.webp'
import marquee02 from '@/assets/images/gallery/marquee-image-02.webp'
import marquee03 from '@/assets/images/gallery/marquee-image-03.webp'
import marquee04 from '@/assets/images/gallery/marquee-image-04.webp'
import marquee05 from '@/assets/images/gallery/marquee-image-05.webp'
import marquee06 from '@/assets/images/gallery/marquee-image-06.webp'
import marquee07 from '@/assets/images/gallery/marquee-image-07.webp'
import marquee08 from '@/assets/images/gallery/marquee-image-08.webp'
import collegeFund from '@/assets/images/gallery/college.webp'
import buyHouse from '@/assets/images/gallery/newHome.webp'
import buyCar from '@/assets/images/gallery/buyCar.webp'
import retirement from '@/assets/images/gallery/retire.webp'
import groceries from '@/assets/images/gallery/groceries.png'
import schoolFees from '@/assets/images/gallery/schoolFees.webp'
import emergencyFund from '@/assets/images/gallery/emergency.webp'
import vacation from '@/assets/images/gallery/vacation.webp'
import appStoreLightIcon from '@/assets/images/icons/app-store-light.svg'
import playStoreIcon from '@/assets/images/icons/play-store.svg'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud02 from '@/assets/images/locations/cloud-02.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'


export type AboutImage = {
  image: StaticImageData
  animationClass: string
}

export type MarqueeItem = {
  bgColorClass: string
  icon: string
  label: string
  image: StaticImageData
}

const aboutImages: AboutImage[] = [
  { image: collegeFund, animationClass: 'animate-imageSwap' },
  { image: buyCar, animationClass: 'animate-imageSwap2' },
  { image: retirement, animationClass: 'animate-imageSwap3' },
  { image: buyHouse, animationClass: 'animate-imageSwap4' },
  // { image: buyCar, animationClass: 'animate-imageSwap5' },
]

const hashtags: string[] = ['Income Earning', 'Wealth Accumulation', 'Liqudity', 'Value Preservation']

const marqueeItems: MarqueeItem[] = [
  { bgColorClass: 'bg-primary-8', icon: 'lucide:palmtree', label: 'Vacation', image: vacation },
  { bgColorClass: 'bg-primary-1', icon: 'lucide:shopping-cart', label: 'Monthly Groceries', image: groceries },
  { bgColorClass: 'bg-primary-2', icon: 'lucide:armchair', label: 'Retirement', image: retirement },
  { bgColorClass: 'bg-primary-3', icon: 'lucide:shield', label: 'Emergency Fund', image: emergencyFund },
  { bgColorClass: 'bg-primary-7', icon: 'lucide:book-open', label: 'School Fees', image: schoolFees },
  { bgColorClass: 'bg-primary-6', icon: 'lucide:graduation-cap', label: 'Children College Fund', image: collegeFund },
  { bgColorClass: 'bg-primary-5', icon: 'lucide:home', label: 'Buy House', image: buyHouse },
  { bgColorClass: 'bg-primary-4', icon: 'lucide:car', label: 'New Car', image: buyCar },
]

const About = () => {
  return (
    <section className="relative pb-20 text-center lg:pt-6 lg:pb-50">
      <div className="container">
        <div className="md:mb-15">
          <h2 className="mx-auto mb-10 max-w-5xl text-center text-3xl leading-tight font-medium tracking-tight text-ink md:text-5xl">
            Skip the continuous mental effort of making good investment decisions, define your objectives{' '}
            <span className="relative inline-flex h-6.5 w-12.5 overflow-hidden rounded-full align-middle md:h-11 md:w-22.5">
              {aboutImages.map((img, idx) => (
                <Image key={idx} src={img.image} className={`absolute inset-0 h-full w-full object-cover ${img.animationClass}`} alt="" />
              ))}
            </span>{' '}
            and let Pie find and manage the best opportunities for you with cutting edge robo-advisory,
            <br className="hidden lg:block" />
            &nbsp;
            so you can focus on what really matters.
          </h2>

          <p className="text-default-500 mb-3.5 text-base font-medium md:text-xl lg:text-2xl">For everyone and anyone.</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            {hashtags.map((tag, idx) => (
              <span key={idx} className="bg-default-200 text-ink rounded-full px-3.5 py-2 text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-24">
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -left-20 z-20 hidden w-37.5 blur-[20px] md:block"></div>
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -right-20 z-20 hidden w-37.5 blur-[30px] md:block"></div>

          <div className="mt-10 overflow-hidden py-6 md:mt-20">
            <div className="animate-marquee-left flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-ink text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-ink text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden pb-6 md:mb-20">
            <div className="animate-marquee-right flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-ink text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Icon icon={item.icon} className="size-3.5 text-white md:size-6" />
                      </div>
                      <span className="text-ink text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <Image src={newPhoneImage} className="h-88 w-42 md:h-175 md:w-85" alt="App Interface" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex flex-col items-center gap-y-5 px-6 md:mt-12">
          {/* <div className="border-default-200 flex items-center gap-2 rounded-full border bg-white px-2.5 py-2 md:px-5">
            <Icon icon="tabler:star-filled" className="text-primary-1 size-3.5" />
            <p className="text-default-500 text-sm font-medium">
              <span className="font-medium text-ink">4.7 rating</span> (based on 125 reviews)
            </p>
          </div> */}

          <p className="text-default-700 mb-2.5 w-xs text-base leading-normal md:w-xl md:text-lg">Hold investments with the best risk adjusted returns that suit your unique wealth objectives. Stay on track with periodic advisory to optimize performance.</p>

          <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
            <Link href="/waitlist" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ink px-8.5 text-white shadow-xl! transition-all duration-300 hover:scale-95">
              <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-3">
                  <Image src={appStoreLightIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Download for iPhone</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-3">
                  <Image src={appStoreLightIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Download for iPhone</span>
                </div>
              </div>
            </Link>

            <Link href="/waitlist" className="group bg-default-200 relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.5 text-ink transition-all duration-300 hover:scale-95">
              <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-2.5">
                  <Image src={playStoreIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Get it on Android</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-2.5">
                  <Image src={playStoreIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Get it on Android</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image src={cloud04} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 inset-e-0 -bottom-100 -z-5 h-148 w-full object-cover" />
        <Image src={cloud02} loading="lazy" alt="Decoration Image" className="absolute inset-e-0 -bottom-38 -z-5 h-75" />
        <Image src={cloud01} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 -bottom-48 -z-5 h-75" />
      </div>
    </section>
  )
}

export default About
