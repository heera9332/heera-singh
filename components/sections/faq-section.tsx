import Link from "next/link";
import { HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqsData } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="py-20 bg-background/50 border-b border-border/50">
      <Container>
        <AnimateIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Everything You Need to Know
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Have questions about contracts, timelines, tech stacks, or communication? Here are the most common answers.
            </p>
          </div>
        </AnimateIn>

        <div className="max-w-3xl mx-auto">
          <AnimateIn delay={150} direction="up">
            <Accordion defaultValue={faqsData[0]?.id}>
              {faqsData.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateIn>

          <AnimateIn delay={250} direction="up" className="mt-12">
            <div className="text-center p-6 rounded-2xl border border-border/80 bg-card/60 space-y-3">
              <h4 className="text-base font-bold text-foreground">
                Have a specific question not listed here?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                Feel free to reach out directly via email or WhatsApp. I usually respond within a few hours.
              </p>
              <Link href="/contact/">
                <Button variant="outline" size="sm" className="gap-2 font-semibold mt-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Ask a Question
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
