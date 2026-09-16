import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import icon30 from '@/assets/images/icons/icon-30.svg'
import icon32 from '@/assets/images/icons/icon-32.svg'
import dashboard04 from '@/assets/images/workspace/dashboard-04.svg'
import dashboard05 from '@/assets/images/workspace/dashboard-05.svg'
import dashboard06 from '@/assets/images/workspace/dashboard-06.svg'
import dashboard20 from '@/assets/images/workspace/dashboard-20.svg'
import dashboard21 from '@/assets/images/workspace/dashboard-21.svg'
import dashboard22 from '@/assets/images/workspace/dashboard-22.svg'
import dashboard07 from '@/assets/images/workspace/dashboard-07.png'
import dashboard19 from '@/assets/images/workspace/dashboard-19.svg'
import suggestionImage from '@/assets/images/workspace/suggestion-image.webp'

const SmartAssist = () => {
  return (
    <section className="pb-25 lg:pb-50" id="smart-assist">
      <div className="container">
        <div className="mb-20 grid grid-cols-1 items-center gap-7.5 md:grid-cols-2">
          <div>
            <span className="border-default-200 text-ink mb-2.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Smarter Decisions, Better Performance</span>
            <h3 className="text-ink mb-2.5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl">
              Wealth advisory
              <br className="hidden md:block" />
              uniquely for you
            </h3>
            <p className="text-default-500 mb-6 max-w-lg text-base leading-normal md:text-lg md:leading-relaxed">Pie helps you manage your different wealth wealth objectives in different portfolios and make the best investment decisions suitable for your achieving them.</p>
            <div>
              <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ink px-8.5 text-white shadow-xl transition-all duration-300 hover:scale-95">
                <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-3">
                    <span className="font-medium">See how Pie works</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-3">
                    <span className="font-medium">See how Pie works</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl shadow-2xl md:aspect-video lg:aspect-[4/3] lg:h-142 lg:max-w-4xl" style={{ backgroundImage: `url(${suggestionImage.src})` }}>
            <div className="absolute top-10 -right-16 transition-transform duration-700 ease-out md:top-20">
              <Image src={dashboard19} alt="Smartphone Mockup" className="h-auto -rotate-20 lg:w-xs" />
            </div>

            <div className="absolute top-12 left-6 z-30 hidden flex-col gap-4 md:top-20 md:left-12 lg:flex">
              <div className="animate-float">
                <Image src={dashboard20} alt="Suggestion 01" className="w-48 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={dashboard21} alt="Suggestion 02" className="ms-2 w-48 md:ms-4 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={dashboard22} alt="Suggestion 03" className="w-48 md:w-64" />
              </div>
            </div>

            <div className="animate-pulse-slow absolute bottom-20 left-40 z-30 hidden lg:block">
              <div>
                <Image src={icon30} alt="AI Icon" className="size-18 rounded-2xl shadow-inner" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 items-stretch gap-2.5 md:gap-7.5 lg:grid-cols-4">
          <div className="group flex h-full flex-col justify-start gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-3 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:bell-dot" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-ink mb-2.5 text-xl font-medium md:text-2xl">Higer Returns</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Recommended investments with the highest risk adjusted returns.</p>
            </div>
          </div>

          <div className="group flex h-full flex-col justify-start gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-7 flex size-12.5 items-center justify-center rounded-full">
              <Image src={icon32} alt="" />
            </div>
            <div>
              <h4 className="text-ink mb-2.5 text-xl font-medium md:text-2xl">Increased Liquidity</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">T+0 withdrawals.</p>
            </div>
          </div>

          <div className="group flex h-full flex-col justify-start gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-6 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:eye" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-ink mb-2.5 text-xl font-medium md:text-2xl">Personalised Constraints</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Define your liquidity lock, withdrawal limit and commitment tailored to your unique wealth objectives.</p>
            </div>
          </div>

          <div className="group flex h-full flex-col justify-start gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-2 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:lightbulb" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-ink mb-2.5 text-xl font-medium md:text-[21px]">Investing Confidence</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Vetted opportunities, simple decision walkthrough and decision intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartAssist
