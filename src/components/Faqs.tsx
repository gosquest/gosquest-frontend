import React from "react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
   return (
      <div className="bg-br py-20">
         <div className="container flex gap-2 justify-center items-center flex-col md:flex-row md:justify-between md:gap-6">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">FAQ&apos;s</h2>
            <div className="flex flex-col gap-4 items-center justify-center py-4 md:py-10 w-full md:w-3/4">
               <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">Got questions?</h3>
               <p className="text-main">Find answers to your questions about GosQuest.</p>

               <Accordion
                  type="single"
                  collapsible
                  className="w-full"
               >
                  <AccordionItem
                     value="item-1"
                     className="relative py-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-main before:via-blue-400 before:to-pink-200"
                  >
                     <AccordionTrigger className="text-[#36485C]">What is GosQuest?</AccordionTrigger>
                     <AccordionContent className="text-blue-500">
                        GosQuest is a Gospel gateway designed to provide
                        inspiring, educational, and uplifting Gospel content.
                        It&apos;s your go-to source for sermons, Bible studies,
                        worship music, and spiritual resources.
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                     value="item-2"
                     className="relative py-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-main before:via-blue-400 before:to-pink-200"
                  >
                     <AccordionTrigger className="text-[#36485C]">
                        What types of content does GosQuest offer?
                     </AccordionTrigger>
                     <AccordionContent className="text-blue-500">
                        GosQuest offers a wide range of Gospel-centered content,
                        including daily devotionals, worship music playlists,
                        Bible studies, articles on Christian living, and
                        inspiring testimonies to help you grow in your faith.
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                     value="item-3"
                     className="relative py-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-main before:via-blue-400 before:to-pink-200"
                  >
                     <AccordionTrigger className="text-[#36485C]">
                        Is GosQuest free to use?
                     </AccordionTrigger>
                     <AccordionContent className="text-blue-500">
                        Yes, GosQuest is free to use. Our mission is to make
                        Gospel content accessible to everyone, regardless of
                        their financial situation. We do offer options to
                        support our ministry if you feel led to contribute.
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                     value="item-4"
                     className="relative py-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-main before:via-blue-400 before:to-pink-200"
                  >
                     <AccordionTrigger className="text-[#36485C]">
                        How can I support GosQuest?
                     </AccordionTrigger>
                     <AccordionContent className="text-blue-500">
                        You can support GosQuest by sharing it with others,
                        praying for our mission, or making a voluntary donation.
                        We are grateful for any support that helps us continue
                        to provide Gospel content to a wider audience.
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                     value="item-5"
                     className="relative py-4 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-main before:via-blue-400 before:to-pink-200"
                  >
                     <AccordionTrigger className="text-[#36485C]">
                        Can I submit content to GosQuest?
                     </AccordionTrigger>
                     <AccordionContent className="text-blue-500">
                        Yes, we welcome submissions of Gospel-centered content
                        from individuals passionate about sharing God’s Word.
                        Reach out to us with your content ideas, and we’ll guide
                        you through the submission process.
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>
         </div>
      </div>
   );
};

export default Faqs;
