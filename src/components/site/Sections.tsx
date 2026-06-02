import { ArrowRight, Sparkles, Mail, Linkedin, Instagram, Clock, Zap, MessageSquare, Workflow, Database, Wrench, Globe, Megaphone, Bot, Settings, Palette, DollarSign, Search, ClipboardList, Rocket, Star, ChevronDown, User, Send } from "lucide-react";
import { useState } from "react";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* background orbs */}
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-40 -right-24 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
            AI-Powered Solutions ✦ 2026
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            AI-Powered Websites &{" "}
            <span className="gradient-text">Automation Systems</span>{" "}
            That Help Businesses Grow Faster
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We build modern websites, AI chatbots, and business automation solutions that save time, generate leads, and increase revenue.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 font-medium text-foreground transition-all hover:bg-white/[0.05] hover:border-white/30">
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
                <div className="mx-auto rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-muted-foreground">flowcodeai.com/dashboard</div>
              </div>
              <div className="rounded-xl bg-[#0a0a0f] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    <p className="font-display text-2xl font-bold gradient-text">₹4,82,000</p>
                  </div>
                  <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400">+34%</div>
                </div>
                <div className="mt-4 flex h-24 items-end gap-1.5">
                  {[40, 55, 30, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm gradient-bg" style={{ height: `${h}%`, opacity: 0.4 + i * 0.05 }} />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Leads", "Visits", "Convert"].map((l, i) => (
                    <div key={l} className="rounded-lg bg-white/[0.03] p-2">
                      <p className="text-[10px] text-muted-foreground">{l}</p>
                      <p className="font-display text-sm font-bold">{["248", "12.4k", "8.2%"][i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating automation card */}
            <div className="absolute -bottom-10 -left-6 w-64 rounded-2xl glass-strong p-4 shadow-xl glow-cyan animate-float" style={{ animationDelay: "1s" }}>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-[#06B6D4]">Live Automation</p>
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
  const items = ["Responsive Websites", "AI Automation", "CRM Integration", "Fast Delivery", "Ongoing Support", "AI Chatbots", "WhatsApp Automation"];
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
  { icon: Globe, title: "Website Development", desc: "Business websites designed to convert visitors into customers." },
  { icon: Megaphone, title: "Landing Pages", desc: "High-converting landing pages for ads and campaigns." },
  { icon: Bot, title: "AI Chatbots", desc: "24/7 customer support and lead generation." },
  { icon: Workflow, title: "Business Automation", desc: "Automate repetitive business tasks and save hours weekly." },
  { icon: Database, title: "CRM Integration", desc: "Centralize and manage your customer data effortlessly." },
  { icon: Wrench, title: "Website Maintenance", desc: "Regular updates, performance monitoring, and support." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="gradient-text">Services</span> We Offer
          </h2>
          <p className="mt-4 text-muted-foreground">Everything your business needs to grow online</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group reveal relative overflow-hidden rounded-2xl glass p-6 glow-hover" style={{ transitionDelay: `${i * 50}ms` }}>
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
  { icon: Zap, title: "Faster Delivery", desc: "AI-powered workflow reduces development time by 3x." },
  { icon: Palette, title: "Modern Design", desc: "Professional, conversion-focused websites that stand out." },
  { icon: Settings, title: "Automation Expertise", desc: "Save hours every week with smart automations." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Agency-quality services at competitive rates." },
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
            <div key={w.title} className="reveal rounded-2xl glass p-6 text-center glow-hover" style={{ transitionDelay: `${i * 60}ms` }}>
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
  { icon: Search, title: "Discovery Call", desc: "Understand your goals, audience, and requirements." },
  { icon: ClipboardList, title: "Strategy Planning", desc: "We map out the perfect solution for your business." },
  { icon: Palette, title: "Design & Development", desc: "Modern, mobile-first build with your brand." },
  { icon: Settings, title: "Automation Setup", desc: "Connect your tools and automate your workflows." },
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
          <p className="mt-4 text-muted-foreground">A clear, transparent process from start to launch</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-transparent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.title} className={`relative reveal md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-2xl glass p-6 glow-hover inline-block text-left">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-[#06B6D4]" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Step {i + 1}</span>
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
const projects = [
  { name: "Bella Cucina", type: "Restaurant Website", desc: "Beautiful menu-driven website with reservations.", gradient: "from-orange-500 to-red-600" },
  { name: "FitZone Gym", type: "Fitness Website", desc: "Membership plans, trainer profiles, class schedules.", gradient: "from-lime-400 to-emerald-600" },
  { name: "UrbanNest Realty", type: "Real Estate", desc: "Property listings with filters and contact forms.", gradient: "from-amber-400 to-orange-700" },
  { name: "MedCare Clinic", type: "Healthcare", desc: "Doctor profiles, appointment booking, services.", gradient: "from-sky-400 to-blue-700" },
  { name: "Alex Chen", type: "Personal Portfolio", desc: "Creative developer portfolio with project showcase.", gradient: "from-fuchsia-500 to-purple-700" },
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
            <div key={p.name} className="reveal group overflow-hidden rounded-2xl glass glow-hover" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-dots opacity-30" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-2xl font-bold text-white">{p.name}</p>
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-[#06B6D4]">{p.type}</span>
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
function FlowDiagram({ title, steps }: { title: string; steps: { icon: any; label: string }[] }) {
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
            {i < steps.length - 1 && (
              <div className="ml-9 h-6 w-px flow-line-v" />
            )}
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
          <p className="mt-4 text-muted-foreground">This is what separates us from regular web agencies</p>
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
            Currently Accepting Our First Batch of Clients
          </h3>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Be among the first to experience AI-powered growth for your business. Early clients get priority support and special rates.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105">
            Claim Your Spot <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "How long does a website take?", a: "Usually 1–3 weeks depending on complexity." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance packages post-launch." },
  { q: "Can you automate my business processes?", a: "Absolutely. We specialize in WhatsApp, email, CRM, and workflow automation." },
  { q: "Do you work with international clients?", a: "Yes, we work with clients globally." },
  { q: "Do you provide hosting?", a: "Yes, we can manage hosting and domain setup for you." },
  { q: "What makes FLOWCODE AI different?", a: "We combine web development with AI and automation — not just design, but complete business systems." },
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
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#06B6D4] transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
              FLOWCODE AI helps businesses build powerful online presences and automate repetitive tasks using modern web technologies and AI-powered solutions. Our mission is to help businesses save time, increase efficiency, and scale faster — whether you're a startup, local business, or growing enterprise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Web Dev", "AI Automation", "CRM Systems"].map((t) => (
                <span key={t} className="rounded-full glass px-4 py-2 text-sm">{t}</span>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-[#06B6D4] pl-4 text-foreground/80 italic">
              We believe every business deserves enterprise-level tools — accessible, affordable, and results-driven.
            </p>
          </div>

          <div className="reveal">
            <div className="relative mx-auto max-w-sm rounded-3xl glass-strong p-8 text-center border-gradient">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#06B6D4]/30">
                <User className="h-14 w-14 text-foreground/60" strokeWidth={1.5} />
              </div>
              <p className="mt-6 font-display text-lg font-bold">Founder & Lead Developer</p>
              <p className="mt-1 text-sm text-muted-foreground">FLOWCODE AI</p>
              <div className="mt-6 flex justify-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full glass"><Linkedin className="h-4 w-4 text-[#06B6D4]" /></span>
                <span className="grid h-9 w-9 place-items-center rounded-full glass"><Instagram className="h-4 w-4 text-[#06B6D4]" /></span>
                <span className="grid h-9 w-9 place-items-center rounded-full glass"><Mail className="h-4 w-4 text-[#06B6D4]" /></span>
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
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Let's Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us about your project and we'll get back within 24 hours.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <form className="reveal rounded-3xl glass-strong p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name"><input className={inputCls} placeholder="Jane Doe" /></Field>
              <Field label="Email"><input type="email" className={inputCls} placeholder="jane@company.com" /></Field>
              <Field label="Business Name"><input className={inputCls} placeholder="Acme Inc." /></Field>
              <Field label="Service Needed">
                <select className={inputCls}>
                  {["Website Development", "Landing Page", "AI Chatbot", "Business Automation", "CRM Integration", "Website Maintenance", "Full Package"].map(o => <option key={o} className="bg-[#0a0a0f]">{o}</option>)}
                </select>
              </Field>
              <Field label="Budget Range" full>
                <select className={inputCls}>
                  {["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000+", "Let's Discuss"].map(o => <option key={o} className="bg-[#0a0a0f]">{o}</option>)}
                </select>
              </Field>
              <Field label="Message" full>
                <textarea rows={5} className={inputCls} placeholder="Tell us about your project..." />
              </Field>
            </div>
            <button className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-4 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-[1.01]">
              Let's Build Something Great <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="reveal space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@flowcodeai.com" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/flowcodeai" },
              { icon: Instagram, label: "Instagram", value: "@flowcodeai" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl glass p-5 glow-hover flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20">
                  <c.icon className="h-5 w-5 text-[#06B6D4]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#06B6D4]/60 focus:bg-white/[0.05]";

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
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
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg">
                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="gradient-text">FLOWCODE AI</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">AI-Powered Websites & Automation Solutions</p>
          </div>

          <FooterCol title="Quick Links" links={[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]} />

          <FooterCol title="Services" links={[
            { label: "Web Development", href: "#services" },
            { label: "AI Chatbots", href: "#services" },
            { label: "Automation", href: "#services" },
            { label: "CRM Setup", href: "#services" },
          ]} />

          <FooterCol title="Connect" links={[
            { label: "Email", href: "mailto:hello@flowcodeai.com" },
            { label: "LinkedIn", href: "#" },
            { label: "Instagram", href: "#" },
          ]} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 FLOWCODE AI. All Rights Reserved.</p>
          <p>Made with <span className="text-[#06B6D4]">❤</span> and AI</p>
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
          <li key={l.label}><a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-[#06B6D4]">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
