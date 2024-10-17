import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
 } from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="bg-br py-20">
    <div className="container  flex gap-2 justify-center items-center flex-col md:flex-row md:justify-between md:gap-6">
       <h2 className='text-main'>FAQ&apos;s</h2>
       <div className="flex flex-col gap-4 items-center justify-center   py-4 md:py-10 w-full md:w-3/4">
          <h3 className='text-main'>Got questions?</h3>
          <p>Get the answers to your questions about GosQuest.</p>

          <Accordion
             type="single"
             collapsible
             className="w-full"
          >
             <AccordionItem
                value="item-1"
                className="border-b border-black/30 py-4"
             >
                <AccordionTrigger>
                   What is Ziba Pay?
                </AccordionTrigger>
                <AccordionContent>
                   Ziba Pay is a payment processing platform designed
                   to streamline payment collection for businesses of
                   all sizes.
                </AccordionContent>
             </AccordionItem>
             <AccordionItem
                value="item-2"
                className="border-b border-black/30 py-4"
             >
                <AccordionTrigger>
                   How does Ziba Pay work?
                </AccordionTrigger>
                <AccordionContent>
                   Ziba Pay integrates with various payment gateways,
                   including MTN MoMo and Airtel Money, to enable
                   businesses to accept payments from customers via
                   mobile money. The platform provides a seamless
                   interface for managing transactions, tracking
                   payments, and generating reports.
                </AccordionContent>
             </AccordionItem>
             <AccordionItem
                value="item-3"
                className="border-b border-black/30 py-4"
             >
                <AccordionTrigger>
                   What payment methods does Ziba Pay support?
                </AccordionTrigger>
                <AccordionContent>
                   Ziba Pay supports multiple payment methods,
                   including credit and debit cards, mobile money
                   (MTN MoMo and Airtel Money), and bank transfers.
                </AccordionContent>
             </AccordionItem>
             <AccordionItem
                value="item-4"
                className="border-b border-black/30 py-4"
             >
                <AccordionTrigger>
                   Is Ziba Pay secure?
                </AccordionTrigger>
                <AccordionContent>
                   Yes, Ziba Pay employs advanced security measures,
                   including encryption and fraud detection, to
                   ensure that all transactions are secure and that
                   customer data is protected.
                </AccordionContent>
             </AccordionItem>
          </Accordion>
       </div>
    </div>
 </div>
  )
}

export default Faqs
