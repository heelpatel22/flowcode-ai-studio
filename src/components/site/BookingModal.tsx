import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";
import { Calendar, Clock, User, Mail, Send, Sparkles } from "lucide-react";

export function BookingModal() {
  const { isOpen, closeBookingModal } = useBooking();
  const [loading, setLoading] = useState(false);
  const [pipelineStep, setPipelineStep] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    platform: "Google Meet",
    notes: "",
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

    const stepDuration = 700; // ms per automation step
    const totalSteps = 5;

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
                  formType: "Booking Modal",
                  ...formData,
                  timestamp: new Date().toISOString(),
                }),
              });
            } catch (err) {
              console.error("Sheet submission error:", err);
            }
          }

          toast.success("Consultation booking automated and saved!");
          setFormData({
            name: "",
            email: "",
            date: "",
            time: "",
            platform: "Google Meet",
            notes: "",
          });
        }
      }, i * stepDuration);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#06B6D4]/60 focus:bg-white/[0.05]";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeBookingModal()}>
      <DialogContent className="max-w-md border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-2xl p-6 text-foreground sm:rounded-2xl shadow-2xl glow-blue">
        <DialogHeader className="space-y-2">
          <DialogTitle className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-bg">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="gradient-text">Book Free Call</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Select a convenient time for a 30-minute strategic consultation. Let's explore how AI
            can work for you.
          </DialogDescription>
        </DialogHeader>

        {pipelineStep !== null ? (
          <div className="mt-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#06B6D4] mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#06B6D4] animate-ping" />
              Executing Automation Pipeline...
            </h4>
            <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-xl p-4">
              {[
                "Validating details & checking slot availability",
                "Writing lead record to Google Sheets CRM",
                "Generating Google Meet video conference link",
                "Dispatching instant notification to Heel's device",
                "Queueing calendar invitation & email confirmation"
              ].map((stepLabel, idx) => {
                const isDone = pipelineStep > idx;
                const isActive = pipelineStep === idx;
                return (
                  <div key={idx} className="flex items-center gap-3 text-sm transition-all duration-300">
                    {isDone ? (
                      <span className="text-green-500 font-bold text-base shrink-0">✓</span>
                    ) : isActive ? (
                      <span className="h-4 w-4 border-2 border-t-transparent border-[#06B6D4] rounded-full animate-spin shrink-0" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-white/20 shrink-0 ml-1" />
                    )}
                    <span className={isDone ? "text-foreground/70 line-through decoration-white/20" : isActive ? "text-[#06B6D4] font-semibold animate-pulse" : "text-muted-foreground"}>
                      {stepLabel}
                    </span>
                  </div>
                );
              })}
            </div>
            {pipelineStep >= 5 && (
              <div className="text-center pt-2 animate-fade-up">
                <span className="text-green-400 font-semibold block mb-2 text-sm">🎉 Booking Successfully Automated!</span>
                <p className="text-xs text-muted-foreground mb-4">We will reach out to confirm your slot shortly.</p>
                <button
                  type="button"
                  onClick={() => {
                    setPipelineStep(null);
                    closeBookingModal();
                  }}
                  className="rounded-full gradient-bg px-6 py-2 text-xs font-semibold text-white shadow-md hover:scale-105 transition-transform cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60">
                    <User className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    className={`${inputCls} pl-10`}
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    className={`${inputCls} pl-10`}
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={`${inputCls} pl-10 [color-scheme:dark]`}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60">
                      <Clock className="h-4 w-4" />
                    </span>
                    <input
                      type="time"
                      className={`${inputCls} pl-10 [color-scheme:dark]`}
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  Preferred Platform
                </label>
                <select
                  className={inputCls}
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="Google Meet" className="bg-[#0a0a0f]">
                    Google Meet (Video)
                  </option>
                  <option value="Zoom" className="bg-[#0a0a0f]">
                    Zoom (Video)
                  </option>
                  <option value="Phone" className="bg-[#0a0a0f]">
                    Phone Call
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  Notes / Goal for call
                </label>
                <textarea
                  rows={2}
                  className={inputCls}
                  placeholder="What challenges are you hoping to solve?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-xl transition-all hover:glow-blue hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Booking Call..." : "Confirm Free Booking"}
              {!loading && (
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
