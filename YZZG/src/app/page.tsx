import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-6 sm:p-8">
      <main className="flex flex-grow flex-col items-center justify-center text-center animate-in fade-in-0 duration-1000">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-chart-2 sm:h-20 sm:w-20">
          <Check className="h-12 w-12 text-white sm:h-16 sm:w-16" strokeWidth={3} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          验证成功
        </h1>
      </main>

      <footer className="w-full max-w-xs pb-4">
        <Button asChild className="w-full" size="lg">
          <Link href="/">再次体验</Link>
        </Button>
      </footer>
    </div>
  );
}
