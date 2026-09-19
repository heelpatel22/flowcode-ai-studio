import { FlowCodeLogo } from "./FlowCodeLogo";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  Clock,
  Zap,
  MessageSquare,
  Workflow,
  Database,
  Globe,
  Megaphone,
  Bot,
  Settings,
  Palette,
  DollarSign,
  Search,
  ClipboardList,
  Rocket,
  Star,
  ChevronDown,
  User,
  Send,
  Wrench,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

/* ---------- HERO ---------- */
export function Hero() {
  const { openBookingModal } = useBooking();
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* background orbs */}
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-[120px] animate-pulse-glow" />
      <div
        className="pointer-events-none absolute top-40 -right-24 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/20 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
            AI-Powered Solutions ✦ 2026
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Intelligent Websites & <span className="gradient-text">AI Automation</span> That Save
            15+ Hours a Week
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Stop wasting hours on manual tasks, lead follow-ups, and repetitive support questions. 
            We build modern custom web platforms and automated B2B pipelines that run on autopilot.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={openBookingModal}
              className="group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 font-medium text-foreground transition-all hover:bg-white/[0.05] hover:border-white/30"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { k: "10+", v: "Projects" },
              { k: "3x", v: "Faster Delivery" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.v} className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold gradient-text">{s.k}</span>
                <span className="text-sm text-muted-foreground">{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right mockup */}
        <div className="relative reveal">
          <div className="relative mx-auto max-w-lg">
            {/* Browser */}
            <div className="rounded-2xl glass-strong p-1 shadow-2xl glow-blue animate-float">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <div className="mx-auto rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-muted-foreground">
                  flowcodeai.com/dashboard
                </div>
              </div>
              <div className="rounded-xl bg-[#0a0a0f] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    <p className="font-display text-2xl font-bold gradient-text">₹4,82,000</p>
                  </div>
                  <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">
                    +34%
                  </div>
                </div>
                <div className="mt-4 flex h-24 items-end gap-1.5">
                  {[40, 55, 30, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm gradient-bg"
                      style={{ height: `${h}%`, opacity: 0.4 + i * 0.05 }}
                    />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Leads", "Visits", "Convert"].map((l, i) => (
                    <div key={l} className="rounded-lg bg-white/[0.03] p-2">
                      <p className="text-[10px] text-muted-foreground">{l}</p>
                      <p className="font-display text-sm font-bold">
                        {["248", "12.4k", "8.2%"][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating automation card */}
            <div
              className="absolute -bottom-10 -left-6 w-64 rounded-2xl glass-strong p-4 shadow-xl glow-cyan animate-float"
              style={{ animationDelay: "1s" }}
            >
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-[#06B6D4]">
                Live Automation
              </p>
              <div className="space-y-2">
                {[
                  { icon: ClipboardList, label: "Form" },
                  { icon: Database, label: "CRM" },
                  { icon: Mail, label: "Email" },
                  { icon: MessageSquare, label: "WhatsApp" },
                ].map((s, i, arr) => (
                  <div key={s.label}>
                    <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2">
                      <s.icon className="h-3.5 w-3.5 text-[#06B6D4]" />
                      <span className="text-xs">{s.label}</span>
                    </div>
                    {i < arr.length - 1 && <div className="ml-5 h-3 w-px flow-line-v" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
export function TrustBar() {
  const items = [
    "Responsive Websites",
    "AI Automation",
    "Website Maintenance",
    "Fast Delivery",
    "Ongoing Support",
    "AI Chatbots",
    "WhatsApp Automation",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/5 bg-white/[0.02] py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {row.concat(row).map((t, i) => (
          <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-[#06B6D4]">✓</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business websites designed to convert visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    desc: "High-converting landing pages for ads and campaigns.",
  },
  { icon: Bot, title: "AI Chatbots", desc: "24/7 customer support and lead generation." },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Automate repetitive business tasks and save hours weekly.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your website secure, fast, and up-to-date with our regular updates.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="gradient-text">Services</span> We Offer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything your business needs to grow online
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group reveal relative overflow-hidden rounded-2xl glass p-6 glow-hover"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 text-[#06B6D4]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const whys = [
  {
    icon: Zap,
    title: "Faster Delivery",
    desc: "AI-powered workflow reduces development time by 3x.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    desc: "Professional, conversion-focused websites that stand out.",
  },
  {
    icon: Settings,
    title: "Automation Expertise",
    desc: "Save hours every week with smart automations.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Agency-quality services at competitive rates.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Why Businesses Choose <span className="gradient-text">FLOWCODE AI</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whys.map((w, i) => (
            <div
              key={w.title}
              className="reveal rounded-2xl glass p-6 text-center glow-hover"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-bg glow-blue">
                <w.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const steps = [
  {
    icon: Search,
    title: "Discovery Call",
    desc: "Understand your goals, audience, and requirements.",
  },
  {
    icon: ClipboardList,
    title: "Strategy Planning",
    desc: "We map out the perfect solution for your business.",
  },
  {
    icon: Palette,
    title: "Design & Development",
    desc: "Modern, mobile-first build with your brand.",
  },
  {
    icon: Settings,
    title: "Automation Setup",
    desc: "Connect your tools and automate your workflows.",
  },
  { icon: Rocket, title: "Launch & Support", desc: "Go live with confidence + ongoing support." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A clear, transparent process from start to launch
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-transparent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative reveal md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div
                  className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                >
                  <div className="rounded-2xl glass p-6 glow-hover inline-block text-left">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-[#06B6D4]" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-full gradient-bg font-display font-bold text-white shadow-xl glow-blue md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
function EstateFlowPreview() {
  return (
    <div className="w-full h-full bg-[#030308] relative overflow-hidden flex flex-col justify-between p-3 select-none text-white font-sans">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      {/* Mini Header */}
      <div className="flex justify-between items-center z-10 border-b border-white/5 pb-2">
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-bold tracking-tight font-display bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            EstateFlow
          </span>
          <span className="w-1 h-1 rounded-full bg-cyan-400" />
        </div>
        <div className="flex gap-2.5 text-[5px] text-white/50">
          <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded-sm">
            Home
          </span>
          <span>Browse Properties</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[5px] text-white/60">Sign In</span>
          <span className="text-[5px] bg-[#4F46E5] px-1.5 py-0.5 rounded-sm font-medium">
            Get Started
          </span>
        </div>
      </div>

      {/* Mini Hero Content */}
      <div className="my-auto flex flex-col items-center text-center z-10 px-2">
        <h4 className="text-[9px] font-bold font-display leading-tight max-w-[220px] text-center tracking-tight">
          <div className="text-white">Discover the Future of</div>
          <span className="bg-gradient-to-r from-[#6366F1] to-[#a855f7] bg-clip-text text-transparent">
            Modern Living
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent">
            Luxury Real Estate
          </span>
        </h4>
        <p className="text-[4px] text-white/40 max-w-[190px] mt-1 leading-normal">
          A premium real-world property marketplace connecting buyers, renters, and agents with
          interactive geographic discovery and full analytical agent tools.
        </p>

        {/* Mini Search Bar */}
        <div className="mt-2 w-full max-w-[230px] bg-white/[0.02] border border-white/10 rounded-md p-0.5 pl-1 flex items-center justify-between gap-1 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <Search className="w-1.5 h-1.5 text-white/40 shrink-0" />
            <span className="text-[3.5px] text-white/30 truncate">
              Search by city, state, or ke...
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <div className="border-l border-white/5 pl-1 flex items-center text-[3.5px] text-white/50 gap-0.5">
              <span>All Types</span>
              <ChevronDown className="w-[3px] h-[3px] text-white/30" />
            </div>
            <div className="border-l border-white/5 pl-1 flex items-center text-[3.5px] text-white/50 gap-0.5">
              <span>Buy or Rent</span>
              <ChevronDown className="w-[3px] h-[3px] text-white/30" />
            </div>
            <div className="border-l border-white/5 pl-1 pr-0.5 flex items-center text-[3.5px] text-white/50 gap-0.5">
              <span>Max Price</span>
              <ChevronDown className="w-[3px] h-[3px] text-white/30" />
            </div>
            <button className="bg-[#4F46E5] text-white rounded-[3px] px-1 py-0.5 flex flex-col items-center justify-center gap-px shrink-0">
              <Search className="w-1 h-1 shrink-0" />
              <span className="text-[3px] font-bold">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrightMouthPreview() {
  return (
    <div className="w-full h-full bg-[#f8fafc] relative overflow-hidden flex flex-col justify-between p-3.5 select-none text-slate-800 font-sans">
      {/* Background soft gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Mini Header */}
      <div className="flex justify-between items-center z-10 border-b border-slate-100 pb-1.5">
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded bg-[#0d9488] flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h3l2.5-6 3.5 12 2.5-9 2.5 5 2 2h4" />
            </svg>
          </div>
          <span className="text-[8px] font-bold tracking-tight text-slate-900 font-display">
            Brightsmile
          </span>
        </div>
        <div className="flex gap-2 text-[5px] text-slate-500 font-medium">
          <span>Sign in</span>
          <span className="text-white bg-[#0d9488] px-1.5 py-0.5 rounded-sm font-semibold">
            Create account
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="my-auto flex flex-col items-center text-center z-10 px-2 py-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-0.5 bg-teal-50 border border-teal-100 rounded-full px-1.5 py-0.5 text-[4px] text-teal-700 font-medium mb-1">
          <svg
            className="w-1.5 h-1.5 text-teal-600 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 11 2 2 4-4" />
          </svg>
          HIPAA-aware patient portal
        </div>

        {/* Title */}
        <h4 className="text-[10px] font-extrabold text-slate-900 leading-tight tracking-tight">
          Your dental care, <span className="text-[#0d9488]">connected.</span>
        </h4>

        {/* Subtitle */}
        <p className="text-[4px] text-slate-500 max-w-[210px] mt-0.5 leading-normal">
          Access your reports, follow personalized health tips from your dental team, and chat with
          our AI assistant — anytime, anywhere.
        </p>

        {/* Buttons */}
        <div className="mt-1.5 flex gap-1">
          <button className="bg-[#0d9488] text-white rounded-[2px] px-2 py-0.5 text-[4px] font-semibold">
            Patient sign in
          </button>
          <button className="bg-white text-slate-700 border border-slate-200 rounded-[2px] px-2 py-0.5 text-[4px] font-semibold">
            Staff sign in
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-1 mt-auto z-10">
        <div className="bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between">
          <div>
            <div className="w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5">
              <svg
                className="w-2 h-2 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h5 className="text-[5px] font-bold text-slate-800 leading-tight">Dental reports</h5>
            <p className="text-[3px] text-slate-400 mt-0.5 leading-tight">
              View, download, and track every report.
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between">
          <div>
            <div className="w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5">
              <svg
                className="w-2 h-2 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h5 className="text-[5px] font-bold text-slate-800 leading-tight">AI assistant</h5>
            <p className="text-[3px] text-slate-400 mt-0.5 leading-tight">
              Friendly answers to your questions 24/7.
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between">
          <div>
            <div className="w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5">
              <svg
                className="w-2 h-2 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h5 className="text-[5px] font-bold text-slate-800 leading-tight">Health tips</h5>
            <p className="text-[3px] text-slate-400 mt-0.5 leading-tight">
              Personalized guidance from our doctors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "EstateFlow",
    type: "Real Estate Website",
    desc: "Property listings with search filters and contact forms.",
    gradient: "from-amber-400 to-orange-700",
    preview: <EstateFlowPreview />,
  },
  {
    name: "Bright Smile",
    type: "Dental Clinic Website",
    desc: "Online appointment booking, services, and dental profiles.",
    gradient: "from-sky-400 to-blue-700",
    preview: <BrightMouthPreview />,
  },
  {
    name: "FitZone Gym",
    type: "Fitness Website",
    desc: "Membership plans, trainer profiles, class schedules.",
    gradient: "from-lime-400 to-emerald-600",
    preview: null,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A glimpse of what we build</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="reveal group overflow-hidden rounded-2xl glass glow-hover"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.preview ? (
                  p.preview
                ) : (
                  <div className={`relative w-full h-full bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 grid-dots opacity-30" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-display text-lg font-bold text-white mb-2">{p.name}</h4>
                <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-[#06B6D4]">
                  {p.type}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-[#06B6D4]">
                  Live Demo <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AUTOMATIONS ---------- */
function FlowDiagram({
  title,
  steps,
}: {
  title: string;
  steps: { icon: React.ComponentType<{ className?: string }>; label: string }[];
}) {
  return (
    <div className="rounded-2xl glass p-8 glow-hover">
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <div className="mt-6 space-y-3">
        {steps.map((s, i) => (
          <div key={s.label}>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
              <span className="grid h-8 w-8 place-items-center rounded-full gradient-bg">
                <s.icon className="h-4 w-4 text-white" />
              </span>
              <span className="font-medium">{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className="ml-9 h-6 w-px flow-line-v" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Automations() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Automations <span className="gradient-text">We Build</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            This is what separates us from regular web agencies
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="reveal">
            <FlowDiagram
              title="Lead Generation Automation"
              steps={[
                { icon: ClipboardList, label: "Website Form" },
                { icon: Database, label: "CRM" },
                { icon: Mail, label: "Email" },
                { icon: MessageSquare, label: "WhatsApp" },
                { icon: User, label: "Lead Follow-Up" },
              ]}
            />
          </div>
          <div className="reveal">
            <FlowDiagram
              title="Social Media Automation"
              steps={[
                { icon: Instagram, label: "Instagram DM" },
                { icon: Bot, label: "AI Chatbot" },
                { icon: Clock, label: "Appointment Booking" },
                { icon: Mail, label: "Confirmation Email" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS / EARLY ACCESS ---------- */
export function EarlyAccess() {
  const { openBookingModal } = useBooking();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
        </div>
        <div className="reveal relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl glass-strong p-10 text-center border-gradient">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-bg glow-cyan">
            <Star className="h-7 w-7 text-white" fill="currentColor" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
            Exclusive Automation Accelerator
          </h3>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            We limit our enrollment to just 3 active clients per quarter to ensure white-glove setup, 
            custom pipeline engineering, and dedicated 24/7 support. Lock in your spot now.
          </p>
          <button
            onClick={openBookingModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105 cursor-pointer"
          >
            Claim Your Accelerator Spot <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "How long does a website take?", a: "Usually 1–3 weeks depending on complexity." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance packages post-launch." },
  {
    q: "Can you automate my business processes?",
    a: "Absolutely. We specialize in WhatsApp, email, CRM, and workflow automation.",
  },
  { q: "Do you work with international clients?", a: "Yes, we work with clients globally." },
  { q: "Do you provide hosting?", a: "Yes, we can manage hosting and domain setup for you." },
  {
    q: "What makes FLOWCODE AI different?",
    a: "We combine web development with AI and automation — not just design, but complete business systems.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="reveal rounded-2xl glass overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#06B6D4] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            About <span className="gradient-text">FLOWCODE AI</span>
          </h2>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h3 className="font-display text-2xl font-bold sm:text-4xl leading-tight">
              Building the Future of <span className="gradient-text">Business Operations</span>
            </h3>
            <p className="mt-6 text-muted-foreground">
              FLOWCODE AI helps businesses build powerful online presences and automate repetitive
              tasks using modern web technologies and AI-powered solutions. Our mission is to help
              businesses save time, increase efficiency, and scale faster — whether you're a
              startup, local business, or growing enterprise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Web Dev", "AI Automation", "Website Maintenance"].map((t) => (
                <span key={t} className="rounded-full glass px-4 py-2 text-sm">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-[#06B6D4] pl-4 text-foreground/80 italic">
              We believe every business deserves enterprise-level tools — accessible, affordable,
              and results-driven.
            </p>
          </div>

          <div className="reveal">
            <div className="relative mx-auto max-w-sm rounded-3xl glass-strong p-8 text-center border-gradient">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#06B6D4]/30">
                <User className="h-14 w-14 text-foreground/60" strokeWidth={1.5} />
              </div>
              <p className="mt-6 font-display text-xl font-bold">Heel Patel</p>
              <p className="mt-1 text-sm text-muted-foreground">Founder & Developer</p>
              <p className="mt-0.5 text-xs text-muted-foreground/80">FLOWCODE AI</p>
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="https://linkedin.com/in/flowcodeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-[#06B6D4]" />
                </a>
                <a
                  href="https://www.instagram.com/flowcodeai22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4 text-[#06B6D4]" />
                </a>
                <a
                  href="mailto:flowcodeai22@gmail.com"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer"
                  title="Email"
                >
                  <Mail className="h-4 w-4 text-[#06B6D4]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const [loading, setLoading] = useState(false);
  const [pipelineStep, setPipelineStep] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    serviceNeeded: "Website Development",
    budgetRange: "Let's Discuss",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message detailing your project");
      return;
    }

    setLoading(true);
    setPipelineStep(0);

    const stepDuration = 800; // ms per automation step
    const totalSteps = 4;

    for (let i = 0; i <= totalSteps; i++) {
      setTimeout(async () => {
        if (i < totalSteps) {
          setPipelineStep(i);
        } else {
          setLoading(false);
          setPipelineStep(totalSteps);

          // Webhook POST integration
          const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_API_URL;
          if (sheetUrl) {
            try {
              await fetch(sheetUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  formType: "Contact Form",
                  ...formData,
                  timestamp: new Date().toISOString(),
                }),
              });
            } catch (err) {
              console.error("Sheet submission error:", err);
            }
          }

          toast.success("Project inquiry automated and sent!");
          setFormData({
            name: "",
            email: "",
            businessName: "",
            serviceNeeded: "Website Development",
            budgetRange: "Let's Discuss",
            message: "",
          });
        }
      }, i * stepDuration);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Let's Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and we'll get back within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="reveal rounded-3xl glass-strong p-8">
            {pipelineStep !== null ? (
              <div className="space-y-6 py-4">
                <h4 className="text-lg font-semibold uppercase tracking-wider text-[#06B6D4] flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4] animate-ping" />
                  Executing Automation Pipeline...
                </h4>
                <div className="space-y-4 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  {[
                    "Analyzing project requirements & budget tier",
                    "Writing contact record to agency database",
                    "Sending webhook alert to Heel's Slack channel",
                    "Scheduling automatic follow-up sequence"
                  ].map((stepLabel, idx) => {
                    const isDone = pipelineStep > idx;
                    const isActive = pipelineStep === idx;
                    return (
                      <div key={idx} className="flex items-center gap-4 text-base transition-all duration-300">
                        {isDone ? (
                          <span className="text-green-500 font-bold text-lg shrink-0">✓</span>
                        ) : isActive ? (
                          <span className="h-5 w-5 border-2 border-t-transparent border-[#06B6D4] rounded-full animate-spin shrink-0" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-white/20 shrink-0 ml-1.5" />
                        )}
                        <span className={isDone ? "text-foreground/70 line-through decoration-white/20" : isActive ? "text-[#06B6D4] font-semibold animate-pulse" : "text-muted-foreground"}>
                          {stepLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {pipelineStep >= 4 && (
                  <div className="text-center pt-4 animate-fade-up">
                    <span className="text-green-400 font-bold block mb-2 text-lg">🎉 Inquiry Successfully Processed!</span>
                    <p className="text-sm text-muted-foreground mb-6">
                      Our automation sequence has been triggered. Heel will contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setPipelineStep(null)}
                      className="rounded-full gradient-bg px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      className={inputCls}
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      className={inputCls}
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Field>
                  <Field label="Business Name">
                    <input
                      className={inputCls}
                      placeholder="Acme Inc."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </Field>
                  <Field label="Service Needed">
                    <select
                      className={inputCls}
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    >
                      {[
                        "Website Development",
                        "Landing Page",
                        "AI Chatbot",
                        "Business Automation",
                        "Website Maintenance",
                        "Full Package",
                      ].map((o) => (
                        <option key={o} className="bg-[#0a0a0f]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget Range" full>
                    <select
                      className={inputCls}
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    >
                      {[
                        "₹25,000 - ₹50,000 ($300 - $600 USD)",
                        "₹50,000 - ₹1,50,000 ($600 - $1,800 USD)",
                        "₹1,50,000 - ₹3,00,000 ($1,800 - $3,600 USD)",
                        "₹3,00,000+ ($3,600+ USD)",
                        "Let's Discuss",
                      ].map((o) => (
                        <option key={o} className="bg-[#0a0a0f]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" full>
                    <textarea
                      rows={5}
                      className={inputCls}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-4 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? "Sending..." : "Let's Build Something Great"}
                  {!loading && (
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="reveal space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "flowcodeai22@gmail.com",
                href: "mailto:flowcodeai22@gmail.com",
              },
              {
                icon: Phone,
                label: "Mobile",
                value: "+91 73591 86276",
                href: "tel:+917359186276",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "/in/flowcodeai",
                href: "https://linkedin.com/in/flowcodeai",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@flowcodeai",
                href: "https://www.instagram.com/flowcodeai22",
              },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((c) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 shrink-0">
                    <c.icon className="h-5 w-5 text-[#06B6D4]" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </>
              );
              if ("href" in c && c.href) {
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-2xl glass p-5 glow-hover flex items-center gap-4 cursor-pointer"
                  >
                    {content}
                  </a>
                );
              }
              return (
                <div
                  key={c.label}
                  className="rounded-2xl glass p-5 glow-hover flex items-center gap-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#06B6D4]/60 focus:bg-white/[0.05]";

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#home" className="group inline-block">
              <FlowCodeLogo size="md" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-Powered Websites & Automation Solutions
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          <FooterCol
            title="Services"
            links={[
              { label: "Web Development", href: "#services" },
              { label: "AI Chatbots", href: "#services" },
              { label: "Automation", href: "#services" },
              { label: "Website Maintenance", href: "#services" },
            ]}
          />

          <FooterCol
            title="Connect"
            links={[
              { label: "Email", href: "mailto:patelheel2211@gmail.com" },
              { label: "Mobile", href: "tel:+917359186276" },
              { label: "LinkedIn", href: "https://linkedin.com/in/flowcodeai" },
              { label: "Instagram", href: "https://instagram.com/flowcodeai" },
            ]}
          />
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-xs text-muted-foreground text-center">
          <p>© 2026 FLOWCODE AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-display text-sm font-bold">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-[#06B6D4]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
