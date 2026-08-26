import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            404 - Page Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Lost in Cyberspace?
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The page or case study you are looking for does not exist or has been moved.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 font-semibold shadow-md shadow-primary/20">
                <Home className="h-4 w-4" />
                Return to Homepage
              </Button>
            </Link>
            <Link href="/work/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <ArrowLeft className="h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
