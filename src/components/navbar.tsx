import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-2xl font-bold">
        Portfolio
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/experience" className="hover:underline">
          Experience
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}