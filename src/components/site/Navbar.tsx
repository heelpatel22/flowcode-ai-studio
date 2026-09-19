import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { FlowCodeLogo } from "./FlowCodeLogo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group">
          <FlowCodeLogo size="md" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={openBookingModal}
          className="hidden rounded-full gradient-bg px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:glow-blue hover:scale-105 md:inline-block cursor-pointer"
        >
          Book Free Call
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-3 rounded-2xl glass-strong p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-foreground/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  openBookingModal();
                }}
                className="mt-2 inline-block w-full text-center rounded-full gradient-bg px-5 py-2.5 text-sm font-medium text-white cursor-pointer"
              >
                Book Free Call
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
