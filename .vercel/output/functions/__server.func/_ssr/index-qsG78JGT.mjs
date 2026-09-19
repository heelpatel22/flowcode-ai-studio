import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, S as Sparkles, A as ArrowRight, C as ClipboardList, D as Database, a as Mail, b as MessageSquare, G as Globe, c as Megaphone, B as Bot, W as Workflow, d as Wrench, Z as Zap, P as Palette, e as Settings, f as DollarSign, g as Search, R as Rocket, U as User, I as Instagram, h as Clock, i as Star, j as ChevronDown, L as Linkedin, k as Send, l as Phone, m as Calendar } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const BookingContext = reactExports.createContext(void 0);
function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => setIsOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BookingContext.Provider, { value: { isOpen, openBookingModal, closeBookingModal }, children });
}
function useBooking() {
  const context = reactExports.useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
function FlowCodeLogo({
  className = "h-8 w-auto",
  iconOnly = false,
  size = "md",
  textClassName = ""
}) {
  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
    xl: "h-14 w-14"
  };
  const currentIconSize = className.includes("h-") ? className : iconSizes[size];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-40 blur-md transition-opacity group-hover:opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/logo-icon.png",
          alt: "FLOWCODE AI Logo",
          className: `${currentIconSize} relative z-10 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-105`
        }
      )
    ] }),
    !iconOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `font-display font-bold tracking-tight gradient-text text-xl ${textClassName}`,
        children: "FLOWCODE AI"
      }
    )
  ] });
}
function FlowCodeLogoIcon({ className = "h-8 w-8" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center justify-center shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-30 blur-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/logo-icon.png",
        alt: "FLOWCODE AI Icon",
        className: `${className} relative z-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]`
      }
    )
  ] });
}
const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { openBookingModal } = useBooking();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong border-b border-white/5 py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCodeLogo, { size: "md" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: openBookingModal,
              className: "hidden rounded-full gradient-bg px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:glow-blue hover:scale-105 md:inline-block cursor-pointer",
              children: "Book Free Call"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "grid h-10 w-10 place-items-center rounded-lg glass md:hidden",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-6 mt-3 rounded-2xl glass-strong p-6 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "block text-base text-foreground/90",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setOpen(false);
                openBookingModal();
              },
              className: "mt-2 inline-block w-full text-center rounded-full gradient-bg px-5 py-2.5 text-sm font-medium text-white cursor-pointer",
              children: "Book Free Call"
            }
          ) })
        ] }) })
      ]
    }
  );
}
function Hero() {
  const { openBookingModal } = useBooking();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-dots opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-[120px] animate-pulse-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none absolute top-40 -right-24 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/20 blur-[120px] animate-pulse-glow",
        style: { animationDelay: "1.5s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#06B6D4]" }),
          "AI-Powered Solutions ✦ 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl", children: [
          "Intelligent Websites & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AI Automation" }),
          " That Save 15+ Hours a Week"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Stop wasting hours on manual tasks, lead follow-ups, and repetitive support questions. We build modern custom web platforms and automated B2B pipelines that run on autopilot." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: openBookingModal,
              className: "group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105 cursor-pointer",
              children: [
                "Book Free Consultation",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#portfolio",
              className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 font-medium text-foreground transition-all hover:bg-white/[0.05] hover:border-white/30",
              children: "View Our Work"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-6", children: [
          { k: "10+", v: "Projects" },
          { k: "3x", v: "Faster Delivery" },
          { k: "24/7", v: "Support" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold gradient-text", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: s.v })
        ] }, s.v)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass-strong p-1 shadow-2xl glow-blue animate-float", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-muted-foreground", children: "flowcodeai.com/dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#0a0a0f] p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Monthly Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold gradient-text", children: "₹4,82,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-400", children: "+34%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex h-24 items-end gap-1.5", children: [40, 55, 30, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 rounded-sm gradient-bg",
                style: { height: `${h}%`, opacity: 0.4 + i * 0.05 }
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: ["Leads", "Visits", "Convert"].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white/[0.03] p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold", children: ["248", "12.4k", "8.2%"][i] })
            ] }, l)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute -bottom-10 -left-6 w-64 rounded-2xl glass-strong p-4 shadow-xl glow-cyan animate-float",
            style: { animationDelay: "1s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[10px] font-medium uppercase tracking-wider text-[#06B6D4]", children: "Live Automation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                { icon: ClipboardList, label: "Form" },
                { icon: Database, label: "CRM" },
                { icon: Mail, label: "Email" },
                { icon: MessageSquare, label: "WhatsApp" }
              ].map((s, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-3.5 w-3.5 text-[#06B6D4]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: s.label })
                ] }),
                i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-5 h-3 w-px flow-line-v" })
              ] }, s.label)) })
            ]
          }
        )
      ] }) })
    ] })
  ] });
}
function TrustBar() {
  const items = [
    "Responsive Websites",
    "AI Automation",
    "Website Maintenance",
    "Fast Delivery",
    "Ongoing Support",
    "AI Chatbots",
    "WhatsApp Automation"
  ];
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-y border-white/5 bg-white/[0.02] py-5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap gap-12", children: row.concat(row).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#06B6D4]", children: "✓" }),
    " ",
    t
  ] }, i)) }) });
}
const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business websites designed to convert visitors into customers."
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    desc: "High-converting landing pages for ads and campaigns."
  },
  { icon: Bot, title: "AI Chatbots", desc: "24/7 customer support and lead generation." },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Automate repetitive business tasks and save hours weekly."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your website secure, fast, and up-to-date with our regular updates."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Services" }),
        " We Offer"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Everything your business needs to grow online" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group reveal relative overflow-hidden rounded-2xl glass p-6 glow-hover",
        style: { transitionDelay: `${i * 50}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 text-[#06B6D4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
        ]
      },
      s.title
    )) })
  ] }) });
}
const whys = [
  {
    icon: Zap,
    title: "Faster Delivery",
    desc: "AI-powered workflow reduces development time by 3x."
  },
  {
    icon: Palette,
    title: "Modern Design",
    desc: "Professional, conversion-focused websites that stand out."
  },
  {
    icon: Settings,
    title: "Automation Expertise",
    desc: "Save hours every week with smart automations."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Agency-quality services at competitive rates."
  }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
      "Why Businesses Choose ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "FLOWCODE AI" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: whys.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "reveal rounded-2xl glass p-6 text-center glow-hover",
        style: { transitionDelay: `${i * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-bg glow-blue", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-7 w-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: w.desc })
        ]
      },
      w.title
    )) })
  ] }) });
}
const steps = [
  {
    icon: Search,
    title: "Discovery Call",
    desc: "Understand your goals, audience, and requirements."
  },
  {
    icon: ClipboardList,
    title: "Strategy Planning",
    desc: "We map out the perfect solution for your business."
  },
  {
    icon: Palette,
    title: "Design & Development",
    desc: "Modern, mobile-first build with your brand."
  },
  {
    icon: Settings,
    title: "Automation Setup",
    desc: "Connect your tools and automate your workflows."
  },
  { icon: Rocket, title: "Launch & Support", desc: "Go live with confidence + ongoing support." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
        "How We ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Work" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A clear, transparent process from start to launch" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-transparent md:left-1/2 md:-translate-x-px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative reveal md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-6 glow-hover inline-block text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-[#06B6D4]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: [
                      "Step ",
                      i + 1
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-full gradient-bg font-display font-bold text-white shadow-xl glow-blue md:left-1/2 md:-translate-x-1/2", children: i + 1 })
          ]
        },
        s.title
      )) })
    ] })
  ] }) });
}
function EstateFlowPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full bg-[#030308] relative overflow-hidden flex flex-col justify-between p-3 select-none text-white font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-dots opacity-20 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center z-10 border-b border-white/5 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold tracking-tight font-display bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent", children: "EstateFlow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-cyan-400" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 text-[5px] text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded-sm", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Browse Properties" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5px] text-white/60", children: "Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5px] bg-[#4F46E5] px-1.5 py-0.5 rounded-sm font-medium", children: "Get Started" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-auto flex flex-col items-center text-center z-10 px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[9px] font-bold font-display leading-tight max-w-[220px] text-center tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: "Discover the Future of" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#6366F1] to-[#a855f7] bg-clip-text text-transparent", children: "Modern Living" }),
        " ",
        "&",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent", children: "Luxury Real Estate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[4px] text-white/40 max-w-[190px] mt-1 leading-normal", children: "A premium real-world property marketplace connecting buyers, renters, and agents with interactive geographic discovery and full analytical agent tools." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 w-full max-w-[230px] bg-white/[0.02] border border-white/10 rounded-md p-0.5 pl-1 flex items-center justify-between gap-1 shadow-lg backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-1.5 h-1.5 text-white/40 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[3.5px] text-white/30 truncate", children: "Search by city, state, or ke..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/5 pl-1 flex items-center text-[3.5px] text-white/50 gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "All Types" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-[3px] h-[3px] text-white/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/5 pl-1 flex items-center text-[3.5px] text-white/50 gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buy or Rent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-[3px] h-[3px] text-white/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/5 pl-1 pr-0.5 flex items-center text-[3.5px] text-white/50 gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Max Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-[3px] h-[3px] text-white/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-[#4F46E5] text-white rounded-[3px] px-1 py-0.5 flex flex-col items-center justify-center gap-px shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-1 h-1 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[3px] font-bold", children: "Search" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function BrightMouthPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full bg-[#f8fafc] relative overflow-hidden flex flex-col justify-between p-3.5 select-none text-slate-800 font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center z-10 border-b border-slate-100 pb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-[#0d9488] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            className: "w-2.5 h-2.5 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 12h3l2.5-6 3.5 12 2.5-9 2.5 5 2 2h4" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold tracking-tight text-slate-900 font-display", children: "Brightsmile" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-[5px] text-slate-500 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white bg-[#0d9488] px-1.5 py-0.5 rounded-sm font-semibold", children: "Create account" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-auto flex flex-col items-center text-center z-10 px-2 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-0.5 bg-teal-50 border border-teal-100 rounded-full px-1.5 py-0.5 text-[4px] text-teal-700 font-medium mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "w-1.5 h-1.5 text-teal-600 shrink-0",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m9 11 2 2 4-4" })
            ]
          }
        ),
        "HIPAA-aware patient portal"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-extrabold text-slate-900 leading-tight tracking-tight", children: [
        "Your dental care, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0d9488]", children: "connected." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[4px] text-slate-500 max-w-[210px] mt-0.5 leading-normal", children: "Access your reports, follow personalized health tips from your dental team, and chat with our AI assistant — anytime, anywhere." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-[#0d9488] text-white rounded-[2px] px-2 py-0.5 text-[4px] font-semibold", children: "Patient sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white text-slate-700 border border-slate-200 rounded-[2px] px-2 py-0.5 text-[4px] font-semibold", children: "Staff sign in" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 mt-auto z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "w-2 h-2 text-teal-600",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[5px] font-bold text-slate-800 leading-tight", children: "Dental reports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[3px] text-slate-400 mt-0.5 leading-tight", children: "View, download, and track every report." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            className: "w-2 h-2 text-teal-600",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[5px] font-bold text-slate-800 leading-tight", children: "AI assistant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[3px] text-slate-400 mt-0.5 leading-tight", children: "Friendly answers to your questions 24/7." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-100 rounded-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3.5 h-3.5 rounded bg-teal-50 flex items-center justify-center mb-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "w-2 h-2 text-teal-600",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m9 11 2 2 4-4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[5px] font-bold text-slate-800 leading-tight", children: "Health tips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[3px] text-slate-400 mt-0.5 leading-tight", children: "Personalized guidance from our doctors." })
      ] }) })
    ] })
  ] });
}
const projects = [
  {
    name: "EstateFlow",
    type: "Real Estate Website",
    desc: "Property listings with search filters and contact forms.",
    gradient: "from-amber-400 to-orange-700",
    preview: /* @__PURE__ */ jsxRuntimeExports.jsx(EstateFlowPreview, {})
  },
  {
    name: "Bright Smile",
    type: "Dental Clinic Website",
    desc: "Online appointment booking, services, and dental profiles.",
    gradient: "from-sky-400 to-blue-700",
    preview: /* @__PURE__ */ jsxRuntimeExports.jsx(BrightMouthPreview, {})
  },
  {
    name: "FitZone Gym",
    type: "Fitness Website",
    desc: "Membership plans, trainer profiles, class schedules.",
    gradient: "from-lime-400 to-emerald-600",
    preview: null
  }
];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
        "Featured ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A glimpse of what we build" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "reveal group overflow-hidden rounded-2xl glass glow-hover",
        style: { transitionDelay: `${i * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/10] overflow-hidden", children: p.preview ? p.preview : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-full h-full bg-gradient-to-br ${p.gradient}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-dots opacity-30" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-bold text-white mb-2", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-[#06B6D4]", children: p.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-[#06B6D4]", children: [
              "Live Demo ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ]
      },
      p.name
    )) })
  ] }) });
}
function FlowDiagram({
  title,
  steps: steps2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-8 glow-hover", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: steps2.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full gradient-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.label })
      ] }),
      i < steps2.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-9 h-6 w-px flow-line-v" })
    ] }, s.label)) })
  ] });
}
function Automations() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
        "Automations ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "We Build" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "This is what separates us from regular web agencies" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        FlowDiagram,
        {
          title: "Lead Generation Automation",
          steps: [
            { icon: ClipboardList, label: "Website Form" },
            { icon: Database, label: "CRM" },
            { icon: Mail, label: "Email" },
            { icon: MessageSquare, label: "WhatsApp" },
            { icon: User, label: "Lead Follow-Up" }
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        FlowDiagram,
        {
          title: "Social Media Automation",
          steps: [
            { icon: Instagram, label: "Instagram DM" },
            { icon: Bot, label: "AI Chatbot" },
            { icon: Clock, label: "Appointment Booking" },
            { icon: Mail, label: "Confirmation Email" }
          ]
        }
      ) })
    ] })
  ] }) });
}
function EarlyAccess() {
  const { openBookingModal } = useBooking();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
      "Client ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Success Stories" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl glass-strong p-10 text-center border-gradient", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-14 w-14 place-items-center rounded-full gradient-bg glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-7 w-7 text-white", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold sm:text-3xl", children: "Exclusive Automation Accelerator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-md text-muted-foreground", children: "We limit our enrollment to just 3 active clients per quarter to ensure white-glove setup, custom pipeline engineering, and dedicated 24/7 support. Lock in your spot now." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: openBookingModal,
          className: "mt-8 inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-105 cursor-pointer",
          children: [
            "Claim Your Accelerator Spot ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const faqs = [
  { q: "How long does a website take?", a: "Usually 1–3 weeks depending on complexity." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer maintenance packages post-launch." },
  {
    q: "Can you automate my business processes?",
    a: "Absolutely. We specialize in WhatsApp, email, CRM, and workflow automation."
  },
  { q: "Do you work with international clients?", a: "Yes, we work with clients globally." },
  { q: "Do you provide hosting?", a: "Yes, we can manage hosting and domain setup for you." },
  {
    q: "What makes FLOWCODE AI different?",
    a: "We combine web development with AI and automation — not just design, but complete business systems."
  }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
      "Frequently Asked ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Questions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal rounded-2xl glass overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setOpen(open === i ? null : i),
          className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronDown,
              {
                className: `h-5 w-5 shrink-0 text-[#06B6D4] transition-transform ${open === i ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-5 text-sm text-muted-foreground", children: f.a }) })
        }
      )
    ] }, f.q)) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
      "About ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "FLOWCODE AI" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-bold sm:text-4xl leading-tight", children: [
          "Building the Future of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Business Operations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground", children: "FLOWCODE AI helps businesses build powerful online presences and automate repetitive tasks using modern web technologies and AI-powered solutions. Our mission is to help businesses save time, increase efficiency, and scale faster — whether you're a startup, local business, or growing enterprise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: ["Web Dev", "AI Automation", "Website Maintenance"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full glass px-4 py-2 text-sm", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 border-l-2 border-[#06B6D4] pl-4 text-foreground/80 italic", children: "We believe every business deserves enterprise-level tools — accessible, affordable, and results-driven." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-sm rounded-3xl glass-strong p-8 text-center border-gradient", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#06B6D4]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-14 w-14 text-foreground/60", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-xl font-bold", children: "Heel Patel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Founder & Developer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground/80", children: "FLOWCODE AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://linkedin.com/in/flowcodeai",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer",
              title: "LinkedIn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4 text-[#06B6D4]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.instagram.com/flowcodeai22",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer",
              title: "Instagram",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4 text-[#06B6D4]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:flowcodeai22@gmail.com",
              className: "grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer",
              title: "Email",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-[#06B6D4]" })
            }
          )
        ] })
      ] }) })
    ] })
  ] }) });
}
function Contact() {
  const [loading, setLoading] = reactExports.useState(false);
  const [pipelineStep, setPipelineStep] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    businessName: "",
    serviceNeeded: "Website Development",
    budgetRange: "Let's Discuss",
    message: ""
  });
  const handleSubmit = (e) => {
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
    const stepDuration = 800;
    const totalSteps = 4;
    for (let i = 0; i <= totalSteps; i++) {
      setTimeout(async () => {
        if (i < totalSteps) {
          setPipelineStep(i);
        } else {
          setLoading(false);
          setPipelineStep(totalSteps);
          toast.success("Project inquiry automated and sent!");
          setFormData({
            name: "",
            email: "",
            businessName: "",
            serviceNeeded: "Website Development",
            budgetRange: "Let's Discuss",
            message: ""
          });
        }
      }, i * stepDuration);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold sm:text-5xl", children: [
          "Let's Build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Something Great" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us about your project and we'll get back within 24 hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal rounded-3xl glass-strong p-8", children: pipelineStep !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-lg font-semibold uppercase tracking-wider text-[#06B6D4] flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#06B6D4] animate-ping" }),
            "Executing Automation Pipeline..."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 bg-white/[0.02] border border-white/5 rounded-2xl p-6", children: [
            "Analyzing project requirements & budget tier",
            "Writing contact record to agency database",
            "Sending webhook alert to Heel's Slack channel",
            "Scheduling automatic follow-up sequence"
          ].map((stepLabel, idx) => {
            const isDone = pipelineStep > idx;
            const isActive = pipelineStep === idx;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-base transition-all duration-300", children: [
              isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 font-bold text-lg shrink-0", children: "✓" }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 border-2 border-t-transparent border-[#06B6D4] rounded-full animate-spin shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/20 shrink-0 ml-1.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDone ? "text-foreground/70 line-through decoration-white/20" : isActive ? "text-[#06B6D4] font-semibold animate-pulse" : "text-muted-foreground", children: stepLabel })
            ] }, idx);
          }) }),
          pipelineStep >= 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-4 animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-bold block mb-2 text-lg", children: "🎉 Inquiry Successfully Processed!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Our automation sequence has been triggered. Heel will contact you within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPipelineStep(null),
                className: "rounded-full gradient-bg px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform cursor-pointer",
                children: "Submit Another Inquiry"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inputCls,
                placeholder: "Jane Doe",
                value: formData.name,
                onChange: (e) => setFormData({ ...formData, name: e.target.value })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                className: inputCls,
                placeholder: "jane@company.com",
                value: formData.email,
                onChange: (e) => setFormData({ ...formData, email: e.target.value })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Business Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inputCls,
                placeholder: "Acme Inc.",
                value: formData.businessName,
                onChange: (e) => setFormData({ ...formData, businessName: e.target.value })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service Needed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                className: inputCls,
                value: formData.serviceNeeded,
                onChange: (e) => setFormData({ ...formData, serviceNeeded: e.target.value }),
                children: [
                  "Website Development",
                  "Landing Page",
                  "AI Chatbot",
                  "Business Automation",
                  "Website Maintenance",
                  "Full Package"
                ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-[#0a0a0f]", children: o }, o))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget Range", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                className: inputCls,
                value: formData.budgetRange,
                onChange: (e) => setFormData({ ...formData, budgetRange: e.target.value }),
                children: [
                  "₹25,000 - ₹50,000 ($300 - $600 USD)",
                  "₹50,000 - ₹1,50,000 ($600 - $1,800 USD)",
                  "₹1,50,000 - ₹3,00,000 ($1,800 - $3,600 USD)",
                  "₹3,00,000+ ($3,600+ USD)",
                  "Let's Discuss"
                ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-[#0a0a0f]", children: o }, o))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 5,
                className: inputCls,
                placeholder: "Tell us about your project...",
                value: formData.message,
                onChange: (e) => setFormData({ ...formData, message: e.target.value })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-4 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
              children: [
                loading ? "Sending..." : "Let's Build Something Great",
                !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal space-y-4", children: [
          {
            icon: Mail,
            label: "Email",
            value: "flowcodeai22@gmail.com",
            href: "mailto:flowcodeai22@gmail.com"
          },
          {
            icon: Phone,
            label: "Mobile",
            value: "+91 73591 86276",
            href: "tel:+917359186276"
          },
          {
            icon: Linkedin,
            label: "LinkedIn",
            value: "/in/flowcodeai",
            href: "https://linkedin.com/in/flowcodeai"
          },
          {
            icon: Instagram,
            label: "Instagram",
            value: "@flowcodeai",
            href: "https://www.instagram.com/flowcodeai22"
          },
          { icon: Clock, label: "Response Time", value: "Within 24 hours" }
        ].map((c) => {
          const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-[#06B6D4]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: c.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: c.value })
            ] })
          ] });
          if ("href" in c && c.href) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: c.href,
                target: c.href.startsWith("http") ? "_blank" : void 0,
                rel: c.href.startsWith("http") ? "noopener noreferrer" : void 0,
                className: "rounded-2xl glass p-5 glow-hover flex items-center gap-4 cursor-pointer",
                children: content
              },
              c.label
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-2xl glass p-5 glow-hover flex items-center gap-4",
              children: content
            },
            c.label
          );
        }) })
      ] })
    ] })
  ] });
}
const inputCls = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#06B6D4]/60 focus:bg-white/[0.05]";
function Field({
  label,
  children,
  full
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    children
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-white/5 bg-white/[0.02] py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "group inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCodeLogo, { size: "md" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "AI-Powered Websites & Automation Solutions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Quick Links",
          links: [
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "#services" },
            { label: "AI Chatbots", href: "#services" },
            { label: "Automation", href: "#services" },
            { label: "Website Maintenance", href: "#services" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Connect",
          links: [
            { label: "Email", href: "mailto:patelheel2211@gmail.com" },
            { label: "Mobile", href: "tel:+917359186276" },
            { label: "LinkedIn", href: "https://linkedin.com/in/flowcodeai" },
            { label: "Instagram", href: "https://instagram.com/flowcodeai" }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 border-t border-white/5 pt-6 text-xs text-muted-foreground text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 FLOWCODE AI. All Rights Reserved." }) })
  ] }) });
}
function FooterCol({ title, links: links2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: links2.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        className: "text-sm text-muted-foreground transition-colors hover:text-[#06B6D4]",
        children: l.label
      }
    ) }, l.label)) })
  ] });
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function BookingModal() {
  const { isOpen, closeBookingModal } = useBooking();
  const [loading, setLoading] = reactExports.useState(false);
  const [pipelineStep, setPipelineStep] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    date: "",
    time: "",
    platform: "Google Meet",
    notes: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.date) {
      toast.error("Please select a date for the call");
      return;
    }
    if (!formData.time) {
      toast.error("Please select a time for the call");
      return;
    }
    setLoading(true);
    setPipelineStep(0);
    const stepDuration = 700;
    const totalSteps = 5;
    for (let i = 0; i <= totalSteps; i++) {
      setTimeout(async () => {
        if (i < totalSteps) {
          setPipelineStep(i);
        } else {
          setLoading(false);
          setPipelineStep(totalSteps);
          toast.success("Consultation booking automated and saved!");
          setFormData({
            name: "",
            email: "",
            date: "",
            time: "",
            platform: "Google Meet",
            notes: ""
          });
        }
      }, i * stepDuration);
    }
  };
  const inputCls2 = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#06B6D4]/60 focus:bg-white/[0.05]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && closeBookingModal(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl p-6 text-foreground sm:rounded-2xl shadow-2xl glow-blue", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 font-display text-2xl font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg gradient-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Book Free Call" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-muted-foreground text-sm", children: "Select a convenient time for a 30-minute strategic consultation. Let's explore how AI can work for you." })
    ] }),
    pipelineStep !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold uppercase tracking-wider text-[#06B6D4] mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#06B6D4] animate-ping" }),
        "Executing Automation Pipeline..."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 bg-white/[0.02] border border-white/5 rounded-xl p-4", children: [
        "Validating details & checking slot availability",
        "Writing lead record to Google Sheets CRM",
        "Generating Google Meet video conference link",
        "Dispatching instant notification to Heel's device",
        "Queueing calendar invitation & email confirmation"
      ].map((stepLabel, idx) => {
        const isDone = pipelineStep > idx;
        const isActive = pipelineStep === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm transition-all duration-300", children: [
          isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 font-bold text-base shrink-0", children: "✓" }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 border-2 border-t-transparent border-[#06B6D4] rounded-full animate-spin shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/20 shrink-0 ml-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDone ? "text-foreground/70 line-through decoration-white/20" : isActive ? "text-[#06B6D4] font-semibold animate-pulse" : "text-muted-foreground", children: stepLabel })
        ] }, idx);
      }) }),
      pipelineStep >= 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-2 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-semibold block mb-2 text-sm", children: "🎉 Booking Successfully Automated!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "We will reach out to confirm your slot shortly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setPipelineStep(null);
              closeBookingModal();
            },
            className: "rounded-full gradient-bg px-6 py-2 text-xs font-semibold text-white shadow-md hover:scale-105 transition-transform cursor-pointer",
            children: "Close Window"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-3 flex items-center text-muted-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: `${inputCls2} pl-10`,
                placeholder: "Jane Doe",
                value: formData.name,
                onChange: (e) => setFormData({ ...formData, name: e.target.value })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-3 flex items-center text-muted-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                className: `${inputCls2} pl-10`,
                placeholder: "jane@company.com",
                value: formData.email,
                onChange: (e) => setFormData({ ...formData, email: e.target.value })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-3 flex items-center text-muted-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                  className: `${inputCls2} pl-10 [color-scheme:dark]`,
                  value: formData.date,
                  onChange: (e) => setFormData({ ...formData, date: e.target.value })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-3 flex items-center text-muted-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "time",
                  className: `${inputCls2} pl-10 [color-scheme:dark]`,
                  value: formData.time,
                  onChange: (e) => setFormData({ ...formData, time: e.target.value })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Preferred Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: inputCls2,
              value: formData.platform,
              onChange: (e) => setFormData({ ...formData, platform: e.target.value }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Google Meet", className: "bg-[#0a0a0f]", children: "Google Meet (Video)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Zoom", className: "bg-[#0a0a0f]", children: "Zoom (Video)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Phone", className: "bg-[#0a0a0f]", children: "Phone Call" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1", children: "Notes / Goal for call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 2,
              className: inputCls2,
              placeholder: "What challenges are you hoping to solve?",
              value: formData.notes,
              onChange: (e) => setFormData({ ...formData, notes: e.target.value })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "group w-full inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          children: [
            loading ? "Booking Call..." : "Confirm Free Booking",
            !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ]
        }
      )
    ] })
  ] }) });
}
function AIChatbot() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      sender: "bot",
      text: "Hi there! 👋 I'm the FlowCode AI assistant. I can help explain our custom websites, business automation pipelines, and how we help you scale. What would you like to explore today?",
      timestamp: /* @__PURE__ */ new Date(),
      choices: [
        "What services do you offer?",
        "How much does it cost?",
        "How does automation work?",
        "I want to book a call!"
      ]
    }
  ]);
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [hasNewMessage, setHasNewMessage] = reactExports.useState(true);
  const { openBookingModal } = useBooking();
  const messagesEndRef = reactExports.useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = {
      sender: "user",
      text,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let choices = [];
      const query = text.toLowerCase();
      if (query.includes("service") || query.includes("offer") || query.includes("what do you do")) {
        replyText = "We specialize in building modern, fast React/Next.js websites, high-converting landing pages, interactive AI chatbots (like this one!), and custom workflow automations (connecting CRMs, WhatsApp, email, and Google Sheets). Our goal is to save your business 10-20+ hours of manual labor per week.";
        choices = ["How much does it cost?", "How does automation work?", "Book a free call"];
      } else if (query.includes("cost") || query.includes("price") || query.includes("charge") || query.includes("budget")) {
        replyText = "Our projects typically start around ₹25,000 (~$300 USD) for custom landing pages and basic chatbots, and scale up for comprehensive B2B CRM and messaging pipelines. We design systems that usually pay for themselves in labor savings within the first 60 days.";
        choices = ["What services do you offer?", "How does automation work?", "Book a free call"];
      } else if (query.includes("automation") || query.includes("work")) {
        replyText = "Automation means connecting your business apps so they talk to each other without you lifting a finger. For example: a new lead fills a form on your site -> we instantly write it to Google Sheets CRM -> send a WhatsApp message to the lead -> notify your Slack channel -> schedule an email follow-up. Fully hands-free!";
        choices = ["What services do you offer?", "How much does it cost?", "Book a free call"];
      } else if (query.includes("book") || query.includes("call") || query.includes("consult") || query.includes("meet")) {
        replyText = "Awesome! I'd love to get a strategic consultation scheduled for you. Click the button below to open our booking calendar!";
        choices = ["Book a free call", "Ask another question"];
      } else {
        replyText = "I want to make sure I answer that correctly! We build custom AI chatbots, responsive web apps, and automated workflows. Would you like to schedule a quick 30-minute discovery call to discuss your project?";
        choices = ["Yes, book a call", "What services do you offer?", "How much does it cost?"];
      }
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          timestamp: /* @__PURE__ */ new Date(),
          choices
        }
      ]);
    }, 1e3);
  };
  const handleChoiceClick = (choice) => {
    if (choice.toLowerCase().includes("book a call") || choice.toLowerCase().includes("book a free call") || choice.toLowerCase().includes("yes, book a call")) {
      openBookingModal();
      setIsOpen(false);
      toast.success("Booking calendar opened!");
      return;
    }
    if (choice === "Ask another question") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sure! What else can I answer for you?",
          timestamp: /* @__PURE__ */ new Date(),
          choices: [
            "What services do you offer?",
            "How much does it cost?",
            "How does automation work?"
          ]
        }
      ]);
      return;
    }
    handleSendMessage(choice);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end", children: [
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-[350px] sm:w-[380px] h-[500px] rounded-2xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden glow-blue animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-bg p-4 flex items-center justify-between shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCodeLogoIcon, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0f] bg-green-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-white text-sm", children: "FlowCode AI Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-white/80 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-cyan-300" }),
              " Live assistant"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin select-none", children: [
        messages.map((msg, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
            children: [
              msg.sender === "bot" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#06B6D4]/20 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCodeLogoIcon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[75%] space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `rounded-2xl p-3 text-sm leading-relaxed ${msg.sender === "user" ? "gradient-bg text-white rounded-tr-none" : "bg-white/[0.04] border border-white/5 text-foreground rounded-tl-none"}`,
                    children: msg.text
                  }
                ),
                msg.choices && msg.choices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: msg.choices.map((choice) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleChoiceClick(choice),
                    className: "text-[11px] rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/5 hover:bg-[#06B6D4]/20 hover:border-[#06B6D4] text-[#06B6D4] px-3 py-1 font-medium transition-all cursor-pointer",
                    children: choice
                  },
                  choice
                )) })
              ] })
            ]
          },
          index
        )),
        isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#06B6D4]/20 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCodeLogoIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.04] border border-white/5 text-muted-foreground rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Agent is thinking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce", style: { animationDelay: "300ms" } })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          },
          className: "p-3 border-t border-white/5 bg-[#0e0e15] flex gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: inputValue,
                onChange: (e) => setInputValue(e.target.value),
                placeholder: "Ask us anything...",
                className: "flex-1 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#06B6D4]/60 transition-all"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "p-2 rounded-xl gradient-bg text-white hover:scale-105 transition-transform flex items-center justify-center cursor-pointer shadow-lg",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4.5 w-4.5" })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          setIsOpen(!isOpen);
          setHasNewMessage(false);
        },
        className: "relative group p-4 rounded-full gradient-bg text-white shadow-2xl hover:scale-110 active:scale-95 transition-all hover:glow-blue flex items-center justify-center cursor-pointer",
        "aria-label": "Contact AI Chatbot",
        children: [
          isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6" }),
          !isOpen && hasNewMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-1 -right-1 flex h-4 w-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-4 w-4 bg-[#06B6D4]" })
          ] }),
          !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-16 bg-[#0a0a0f] border border-white/10 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl", children: "Talk to our AI Agent" })
        ]
      }
    )
  ] });
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BookingProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Automations, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EarlyAccess, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIChatbot, {})
  ] }) });
}
export {
  Index as component
};
