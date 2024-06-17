"use client"

import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

interface AccordionProps {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="w-full">
      <div
        className="flex justify-between border-b-2 items-center p-2"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="text-xl">{question}</span>
        {accordionOpen ? (
          <FaChevronUp onClick={() => setAccordionOpen(!accordionOpen)} />
        ) : (
          <FaChevronDown onClick={() => setAccordionOpen(!accordionOpen)} />
        )}
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden p-1">{answer}</div>
      </div>
    </div>
  )
}
