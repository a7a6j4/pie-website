'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

type AccordionItemType = {
  id: string
  question: string
  answer: string
}

const faqItemsData: AccordionItemType[] = [
  {
    id: 'hs-collapse-one',
    question: 'Does Pie Hold My Investments?',
    answer: 'Pie does not hold your investments. Your investments are held with our trust account with regulated custodians who ensure your assets are secure and invested as your approved.',
  },
  {
    id: 'hs-collapse-two',
    question: 'How does Pie Make Decisions?',
    answer: 'Pie uses a combination of algorithms and human expertise to make investment decisions. It considers your risk tolerance, investment goals, and market conditions to find the most suitable investments with the best risk adjusted returns across Nigeria and the world.',
  },
  {
    id: 'hs-collapse-three',
    question: 'Can I Make Decisions Myself?',
    answer: 'Yes, you can make decisions yourself. Pie provides you with the information and tools to make the best decisions for your unique wealth objectives, but you have the ultimate control to make the final decisions.',
  },
  {
    id: 'hs-collapse-four',
    question: 'Is Pie Regulated?',
    answer: 'No, Pie is currently working on acquiring the necessary regulatory licenses to operate in Nigeria.',
  },
  {
    id: 'hs-collapse-five',
    question: 'Is Pie Free to Use?',
    answer: 'Pie is free to use with essential features available at no cost. You can track your investments, make decisions, and set basic reminders.',
  },
]

const Faq = () => {
  const [activeId, setActiveId] = useState<string | null>('hs-collapse-one')

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="py-6 md:pb-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-3 lg:grid-cols-12 lg:gap-25">
          <div className="col-span-1 space-y-10 lg:col-span-5 lg:space-y-20">
            <div className="space-y-4">
              <span className="border-default-200 text-ink mb-2.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Common Questions</span>
              <h2 className="text-ink text-2xl leading-normal font-medium tracking-normal md:text-4xl lg:text-5xl">Frequently asked questions</h2>
            </div>

            <div className="space-y-6 rounded-2xl bg-white p-5 shadow-xl shadow-zinc-200/50 md:p-7.5">
              <div className="bg-primary-1 flex size-12.5 items-center justify-center rounded-full shadow-lg">
                <Icon icon="lucide:headset" className="size-6 text-white" />
              </div>
              <div className="space-y-6">
                <h3 className="text-ink mb-3.5 text-xl font-medium md:text-2xl">Can't find your answer?</h3>
                <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ink px-8.5 text-nowrap text-white shadow-xl transition-all duration-300 hover:scale-95">
                  <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                    <span className="flex h-14 items-center gap-3">
                      <span className="font-medium">Contact us</span>
                    </span>
                    <span className="absolute top-full flex h-14 items-center gap-3">
                      <span className="font-medium">Contact us</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-4 lg:col-span-7">
            <div className="space-y-2.5 lg:col-span-7 lg:space-y-4">
              {faqItemsData.map((item) => {
                const isOpen = activeId === item.id
                return (
                  <div key={item.id} className={`rounded-2xl border border-zinc-100 bg-white shadow-sm ${isOpen ? 'shadow-md' : ''} transition-all duration-300`}>
                    <button onClick={() => toggleAccordion(item.id)} className={`inline-flex w-full items-center justify-between p-3.5 text-start font-bold transition hover:text-zinc-500 lg:p-5 ${isOpen ? 'text-ink' : 'text-ink'}`} aria-controls={item.id}>
                      <h3 className="text-base font-medium md:text-xl">{item.question}</h3>
                      <div className={`bg-default-200 relative flex size-6.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 md:size-8.5 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        <Icon icon="lucide:plus" className="text-ink size-3 md:size-5" />
                      </div>
                    </button>
                    <div id={item.id} className={`w-full overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-3.5 pb-3.5 text-base leading-normal text-zinc-500 md:text-lg md:leading-relaxed lg:px-5 lg:pb-5">{item.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
