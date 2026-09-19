import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useBooking } from "@/context/BookingContext";
import { FlowCodeLogoIcon } from "./FlowCodeLogo";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  choices?: string[];
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi there! 👋 I'm the FlowCode AI assistant. I can help explain our custom websites, business automation pipelines, and how we help you scale. What would you like to explore today?",
      timestamp: new Date(),
      choices: [
        "What services do you offer?",
        "How much does it cost?",
        "How does automation work?",
        "I want to book a call!",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const { openBookingModal } = useBooking();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let choices: string[] = [];

      const query = text.toLowerCase();

      if (query.includes("service") || query.includes("offer") || query.includes("what do you do")) {
        replyText =
          "We specialize in building modern, fast React/Next.js websites, high-converting landing pages, interactive AI chatbots (like this one!), and custom workflow automations (connecting CRMs, WhatsApp, email, and Google Sheets). Our goal is to save your business 10-20+ hours of manual labor per week.";
        choices = ["How much does it cost?", "How does automation work?", "Book a free call"];
      } else if (query.includes("cost") || query.includes("price") || query.includes("charge") || query.includes("budget")) {
        replyText =
          "Our projects typically start around ₹25,000 (~$300 USD) for custom landing pages and basic chatbots, and scale up for comprehensive B2B CRM and messaging pipelines. We design systems that usually pay for themselves in labor savings within the first 60 days.";
        choices = ["What services do you offer?", "How does automation work?", "Book a free call"];
      } else if (query.includes("automation") || query.includes("work")) {
        replyText =
          "Automation means connecting your business apps so they talk to each other without you lifting a finger. For example: a new lead fills a form on your site -> we instantly write it to Google Sheets CRM -> send a WhatsApp message to the lead -> notify your Slack channel -> schedule an email follow-up. Fully hands-free!";
        choices = ["What services do you offer?", "How much does it cost?", "Book a free call"];
      } else if (query.includes("book") || query.includes("call") || query.includes("consult") || query.includes("meet")) {
        replyText =
          "Awesome! I'd love to get a strategic consultation scheduled for you. Click the button below to open our booking calendar!";
        choices = ["Book a free call", "Ask another question"];
      } else {
        replyText =
          "I want to make sure I answer that correctly! We build custom AI chatbots, responsive web apps, and automated workflows. Would you like to schedule a quick 30-minute discovery call to discuss your project?";
        choices = ["Yes, book a call", "What services do you offer?", "How much does it cost?"];
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          timestamp: new Date(),
          choices,
        },
      ]);
    }, 1000);
  };

  const handleChoiceClick = (choice: string) => {
    if (choice.toLowerCase().includes("book a call") || choice.toLowerCase().includes("book a free call") || choice.toLowerCase().includes("yes, book a call")) {
      // open booking modal and close chat
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
          timestamp: new Date(),
          choices: [
            "What services do you offer?",
            "How much does it cost?",
            "How does automation work?",
          ],
        },
      ]);
      return;
    }

    handleSendMessage(choice);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] rounded-2xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden glow-blue animate-fade-up">
          {/* Header */}
          <div className="gradient-bg p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 p-1">
                  <FlowCodeLogoIcon className="h-7 w-7" />
                </span>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0f] bg-green-500" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">FlowCode AI Agent</p>
                <p className="text-[10px] text-white/80 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-cyan-300" /> Live assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin select-none">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#06B6D4]/20 p-0.5">
                    <FlowCodeLogoIcon className="h-5 w-5" />
                  </div>
                )}
                <div className="max-w-[75%] space-y-2">
                  <div
                    className={`rounded-2xl p-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "gradient-bg text-white rounded-tr-none"
                        : "bg-white/[0.04] border border-white/5 text-foreground rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Render Quick Choices */}
                  {msg.choices && msg.choices.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.choices.map((choice) => (
                        <button
                          key={choice}
                          onClick={() => handleChoiceClick(choice)}
                          className="text-[11px] rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/5 hover:bg-[#06B6D4]/20 hover:border-[#06B6D4] text-[#06B6D4] px-3 py-1 font-medium transition-all cursor-pointer"
                        >
                          {choice}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#06B6D4]/20 p-0.5">
                  <FlowCodeLogoIcon className="h-5 w-5" />
                </div>
                <div className="bg-white/[0.04] border border-white/5 text-muted-foreground rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1">
                  <span>AI Agent is thinking</span>
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 border-t border-white/5 bg-[#0e0e15] flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask us anything..."
              className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#06B6D4]/60 transition-all"
            />
            <button
              type="submit"
              className="p-2 rounded-xl gradient-bg text-white hover:scale-105 transition-transform flex items-center justify-center cursor-pointer shadow-lg"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNewMessage(false);
        }}
        className="relative group p-4 rounded-full gradient-bg text-white shadow-2xl hover:scale-110 active:scale-95 transition-all hover:glow-blue flex items-center justify-center cursor-pointer"
        aria-label="Contact AI Chatbot"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}

        {/* Pulsing indicator if unread */}
        {!isOpen && hasNewMessage && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#06B6D4]" />
          </span>
        )}

        {/* Hover label */}
        {!isOpen && (
          <div className="absolute right-16 bg-[#0a0a0f] border border-white/10 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            Talk to our AI Agent
          </div>
        )}
      </button>
    </div>
  );
}
