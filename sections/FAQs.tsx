import Accordion from "@/components/shared/Accordion"

export default function FAQSection() {
  return (
    <section id="faqs" className="p-24 bg-white min-h-screen w-full">
      <div className="flex flex-col items-center container">
        <p className="uppercase text-fuchsia-700 text-2xl font-bold text-center py-6">
          FAQs
        </p>
        <div className="flex flex-col items-center max-w-2xl w-full">
          <Accordion
            question="What's the purpose of Applify?"
            answer="Applify was created to provide developers with a quick and easy way to generate a boilerplate to develop from."
          />
          <Accordion
            question="How many separate apps can I create?"
            answer="Under the starter plan, you can generate up to 5 projects. If you are subscribed to the Pro plan, you can generate up to 12 projects."
          />
          <Accordion
            question="What's the purpose of Applify?"
            answer="Applify was created to provide developers with a quick and easy way to generate a boilerplate to develop from."
          />
          <Accordion
            question="How many separate apps can I create?"
            answer="Under the starter plan, you can generate up to 5 projects. If you are subscribed to the Pro plan, you can generate up to 12 projects."
          />
          <Accordion
            question="What's the purpose of Applify?"
            answer="Applify was created to provide developers with a quick and easy way to generate a boilerplate to develop from."
          />
          <Accordion
            question="How many separate apps can I create?"
            answer="Under the starter plan, you can generate up to 5 projects. If you are subscribed to the Pro plan, you can generate up to 12 projects."
          />
          <Accordion
            question="What's the purpose of Applify?"
            answer="Applify was created to provide developers with a quick and easy way to generate a boilerplate to develop from."
          />
          <Accordion
            question="How many separate apps can I create?"
            answer="Under the starter plan, you can generate up to 5 projects. If you are subscribed to the Pro plan, you can generate up to 12 projects."
          />
        </div>
      </div>
    </section>
  )
}
