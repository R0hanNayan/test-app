import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center text-center px-4">
      <div className="z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
          Hi, I&apos;m Kilo Code
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up delay-200">
          A passionate software engineer building modern web applications.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <Link href="/projects">
            <Button size="lg" className="text-lg px-8 py-6">View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">Contact Me</Button>
          </Link>
        </div>
      </div>
      {/* Futuristic background elements (optional, can be added later with more complex CSS/SVG) */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        {/* Example: Simple glowing circles */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
    </section>
  );
}