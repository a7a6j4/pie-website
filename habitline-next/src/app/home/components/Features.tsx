import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import bellImage from '@/assets/images/icons/bell-image.png'
import icon12 from '@/assets/images/icons/icon-12.svg'
import icon13 from '@/assets/images/icons/icon-13.svg'
import icon16 from '@/assets/images/icons/icon-16.svg'
import icon17 from '@/assets/images/icons/icon-17.svg'
import icon42 from '@/assets/images/icons/icon-42.svg'
import icon43 from '@/assets/images/icons/icon-43.svg'
import icon44 from '@/assets/images/icons/icon-44.svg'
import icon46 from '@/assets/images/icons/icon-46.svg'
import icon47 from '@/assets/images/icons/icon-47.svg'
import icon48 from '@/assets/images/icons/icon-48.svg'
import featureBg2 from '@/assets/images/locations/feature-02.webp'
import featureBg3 from '@/assets/images/locations/feature-03.webp'
import dashboard09 from '@/assets/images/workspace/dashboard-09.png'
import dashboard11 from '@/assets/images/workspace/dashboard-11.svg'
import dashboard12 from '@/assets/images/workspace/dashboard-12.svg'
import dashboard28 from '@/assets/images/workspace/dashboard-28.svg'
import dashboard13 from '@/assets/images/workspace/dashboard-13.svg'
import dashboard24 from '@/assets/images/workspace/dashboard-24.svg'
import dashboard18 from '@/assets/images/workspace/dashboard-25.svg'
import dashboard26 from '@/assets/images/workspace/dashboard-26.svg'
import folder1 from '@/assets/images/workspace/Folder 1.svg'
import folder2 from '@/assets/images/workspace/Folder 2.svg'
import folder3 from '@/assets/images/workspace/Folder 3.svg'

export type StreakRule = {
  bgColorClass: string
  icon: StaticImageData
  label: string
}

export type PlannedHabit = {
  time: string
  timeSuffix: string
  timeTextClass?: string
  cardBgClass: string
  isChecked: boolean
  label: string
  rightText: string
  rightTextClass: string
}

export type ReflectionMetric = {
  icon: StaticImageData
  alt: string
  imgClass: string
  value: string
  percentClass: string
  label: string
}

export type ReflectionStat = {
  title: ReactNode
  value: string
  footer: string
}

const streakRules: StreakRule[] = [
  { bgColorClass: 'bg-primary-1', icon: icon42, label: 'Travel Mode Active' },
  { bgColorClass: 'bg-primary-6', icon: icon43, label: 'Sick Day Allowance' },
  { bgColorClass: 'bg-primary-8', icon: icon44, label: 'Weekend Flexibility' },
  { bgColorClass: 'bg-primary-2', icon: icon12, label: 'Morning walk' },
  { bgColorClass: 'bg-primary-3', icon: icon13, label: 'Focus session' },
  { bgColorClass: 'bg-primary-4', icon: icon16, label: 'Meditate' },
  { bgColorClass: 'bg-primary-7', icon: icon17, label: 'Track water' },
]

const plannedHabits: PlannedHabit[] = [
  {
    time: '07:30',
    timeSuffix: 'AM',
    cardBgClass: 'bg-primary-2/30 border border-primary-2/20',
    isChecked: true,
    label: 'Morning walk',
    rightText: '15 minutes',
    rightTextClass: 'text-default-200',
  },
  {
    time: '09:00',
    timeSuffix: 'AM',
    cardBgClass: 'bg-primary-2/30 border border-primary-2/20',
    isChecked: true,
    label: 'Drink 3 glasses of water',
    rightText: 'Before 11:00 AM',
    rightTextClass: 'text-default-200',
  },
  {
    time: '08:15',
    timeSuffix: 'PM',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-default-900 border border-default-700',
    isChecked: false,
    label: 'Read 10 pages',
    rightText: 'Evening focus block',
    rightTextClass: 'text-white',
  },
  {
    time: '09:45',
    timeSuffix: 'AM',
    timeTextClass: 'text-white',
    cardBgClass: 'bg-default-900 border border-default-700',
    isChecked: false,
    label: 'Stretch routine',
    rightText: '5 minutes',
    rightTextClass: 'text-white',
  },
]

const reflectionMetrics: ReflectionMetric[] = [
  {
    icon: icon46,
    alt: 'Emergency Risk Protection',
    imgClass: 'size-20',
    value: '90',
    percentClass: 'text-lg',
    label: 'Emergency Risk Protection',
  },
  {
    icon: icon47,
    alt: 'Financial Independence',
    imgClass: 'md:size-30 size-20',
    value: '100',
    percentClass: 'text-xl',
    label: 'Financial Independence',
  },
  {
    icon: icon48,
    alt: 'Value Protection',
    imgClass: 'size-20',
    value: '86',
    percentClass: 'text-lg',
    label: 'Value Protection',
  },
]

const reflectionStats: ReflectionStat[] = [
  {
    title: (
      <>
        Income
        <br />
        Objectives
      </>
    ),
    value: '3',
    footer: '$5,000.00 Expected',
  },
  {
    title: 'Growth Targets',
    value: '7',
    footer: '28% Achieved',
  },
]

const Features = () => {
  return (
    <section id="features" className="relative pb-8 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-center gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-3.5 inline-flex">
              {/* <span className="border-default-200 text-ink inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Wea with structure</span> */}
            </div>
            <h2 className="text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Wealth Manager on The Go.</h2>
          </div>
          <div>
            <p className="text-default-600 float-end text-lg leading-normal lg:w-md">Pie brings clarity amd simplicity to investment decisions making, tracking essential wealth metrics and improving your investment performance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
          <div className="bg-default-200 overflow-hidden rounded-3xl">
            <div className="px-3.5 py-3.5 md:px-5 md:py-5 lg:px-10 lg:pt-10 lg:pb-12.5">
              <h3 className="text-ink mb-2.5 text-xl font-semibold md:text-2xl">High Yield Cash Management</h3>
              <p className="text-default-600 max-w-md text-lg">Hold USD or Naira Cash in The Best Yielding Money Market Funds, Earn Interest Daily, And Spend Your Funds Anytime.</p>
            </div>

            <div className="relative mb-7.5 overflow-hidden">
              <Image src={dashboard18} alt="Dashboard Image" className="mx-auto w-62 rounded-lg object-cover md:h-75 md:w-100" />
            </div>

            {/* <div className="relative overflow-hidden">
              <div className="animate-marquee flex w-max gap-5 pb-5 lg:pb-20">
                {streakRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-full bg-white py-2.5 ps-2.5 pe-5 backdrop-blur-sm">
                    <div className={`flex size-8 items-center justify-center rounded-full ${rule.bgColorClass}`}>
                      <Image src={rule.icon} alt="" className="size-3.25" />
                    </div>
                    <span className="text-ink text-sm font-medium whitespace-nowrap">{rule.label}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div className="bg-ink flex flex-col gap-y-5 overflow-hidden rounded-3xl p-3.5 md:p-5 lg:gap-y-12.5 lg:p-10">
            <div>
              <h3 className="mb-2.5 text-xl font-semibold text-white md:text-2xl">Context Aware Advisory</h3>
              <p className="text-lg text-gray-400 lg:w-md">Pie factors your personality, wealth objectives and current market conditions in recommending investment decisions all through your wealth journey.</p>
            </div>

            <div className="relative">
              <Image src={dashboard26} alt="Dashboard Image" className="mx-auto w-full object-contain md:max-h-75" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-black p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg2.src})` }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 grid grid-cols-1 items-center md:gap-10 gap-6 md:grid-cols-2">
                <div className="flex h-full flex-col justify-between">
                  <div className="lg:max-w-md">
                    <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">Goal Based Multi-Currency Portfolios</h3>
                    <p className="md:text-lg text-base leading-relaxed text-default-400 md:mb-7.5 mb-5">Create portfolios for each unique wealth objective and invest in USD and Naira products and opportunities without the hassle of managing multiple accounts.</p>
                    <Link href="/contact" className="group inline-flex relative overflow-hidden rounded-full bg-white md:px-8.5 px-3.5 py-3 md:py-3 md:text-lg text-sm font-medium text-ink transition-all duration-300 hover:scale-95">
                      <span className="relative block overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">Start Investing Now</span>
                        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Start Investing Now</span>
                      </span>
                    </Link>
                  </div>
                  <p className="md:mt-14 mt-5 text-sm text-default-500">*Product logos are for illustration purposes only.</p>
                </div>

                <div className="relative flex items-end justify-center lg:justify-end">
                  <Image src={dashboard28} alt="Dashboard" className="-mb-68 md:w-97 w-60 lg:h-160 md:h-125 pt-5 z-30 object-contain" />
                  <Image src={folder1} alt="Floating Card" className="absolute lg:inset-e-82 inset-e-65 md:top-5 top-20 z-30 lg:size-30 size-25" />
                  <Image src={folder2} alt="Floating Card" className="absolute lg:inset-e-82 inset-e-65 md:top-35 top-20 z-30 lg:size-30 size-25" />
                  <Image src={folder3} alt="Floating Card" className="absolute lg:inset-e-82 inset-e-65 md:top-65 top-20 z-30 lg:size-30 size-25" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl p-3.5 md:p-5 lg:p-10" style={{ backgroundImage: `url(${featureBg3.src})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
            <div className="relative z-10">
              <div className="mb-6 max-w-2xl md:mb-12.5">
                <h3 className="md:text-2xl text-xl font-semibold leading-tight text-white mb-2.5">Wealth Performance Trackers</h3>
                <p className="md:text-lg text-base leading-relaxed text-default-300 md:w-sm">Monitor the wealth metrics that matter and improve your investment performance.</p>
              </div>

              <div className="mx-auto max-w-5xl rounded-3xl bg-black/85 p-7.5 backdrop-blur-xl">
                <h4 className="text-center md:text-lg text-base font-semibold text-white">Core Wealth Metrics</h4>

                <div className="mt-7.5 grid grid-cols-2 gap-7.5 text-center md:grid-cols-3">
                  {reflectionMetrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative flex items-center justify-center">
                        <Image src={metric.icon} alt={metric.alt} className={metric.imgClass} />
                        <div className="absolute flex items-center text-white">
                          <span className="text-xl font-medium">{metric.value}</span>
                          <span className={`mb-1 ${metric.percentClass} font-medium`}>%</span>
                        </div>
                      </div>
                      <p className="text-default-300 mt-3.5 text-base md:text-lg">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7.5 grid grid-cols-2 gap-2 md:gap-7.5">
                {reflectionStats.map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                    <div className="items-start gap-6 md:flex md:justify-between">
                      <div>
                        <p className="text-lg leading-snug text-white">{stat.title}</p>
                      </div>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">{stat.value}</h3>
                    </div>
                    <p className="text-default-400 mt-4 text-lg md:mt-7.5">{stat.footer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-default-900 relative overflow-hidden rounded-3xl p-5 lg:p-10">
            <div className="bg-primary/10 absolute top-1/2 left-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="max-w-xl">
                <h3 className="mb-2.5 text-xl leading-tight font-semibold text-white md:text-2xl">Advisory Alerts</h3>
                <p className="text-default-300 w-sm text-lg leading-relaxed">Never miss out on important investment opportunities; stay up to date on your wealth journey.</p>
              </div>

              <div className="relative mt-6 flex justify-center lg:mt-14">
                <div className="absolute top-1/2 z-20 w-full max-w-md -translate-y-1/2 rounded-2xl p-6">
                  <div className="absolute -top-20 left-0 rotate-[-20deg] md:-top-22 md:left-4">
                    <div className="relative">
                      <Image src={bellImage} alt="Bell" className="size-10 object-contain md:size-18" />
                      <div className="bg-primary-7 absolute top-2 right-2 hidden size-7 items-center justify-center rounded-full text-xs font-bold text-white md:flex">7</div>
                    </div>
                  </div>
                </div>
                <Image src={dashboard24} loading="lazy" alt="Dashboard Image" className="mt-6 h-54 w-90 md:mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
