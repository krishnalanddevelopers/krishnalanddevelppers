"use client";

import { dismissToast, getServerToasts, getToasts, subscribeToasts } from "@/lib/toast";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";
import { useSyncExternalStore } from "react";

const STYLES = {
  success: { icon: CheckCircle2, accent: "text-emerald-500", bar: "bg-emerald-500" },
  error: { icon: AlertCircle, accent: "text-red-500", bar: "bg-red-500" },
  info: { icon: Info, accent: "text-[#2C578B]", bar: "bg-[#2C578B]" },
};

export default function Toaster() {
  const toasts = useSyncExternalStore(subscribeToasts, getToasts, getServerToasts);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-[82px] z-[100] flex flex-col items-center gap-2.5 px-4 sm:inset-x-auto sm:right-5 sm:items-end"
    >
      <AnimatePresence initial={false}>
        {toasts.map(t => {
          const { icon: Icon, accent, bar } = STYLES[t.type];
          return (
            <motion.div
              key={t.id}
              layout
              role={t.type === "error" ? "alert" : "status"}
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.18 } }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto relative flex w-full max-w-[380px] items-start gap-3 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white py-3.5 pl-4 pr-10 shadow-[0_16px_40px_rgba(11,37,69,0.14)]"
            >
              <span className={`absolute inset-y-0 left-0 w-1 ${bar}`} aria-hidden="true" />
              <Icon size={19} className={`mt-px shrink-0 ${accent}`} />
              <p className="font-sans text-[13.5px] font-medium leading-[20px] text-[#0B2545]">
                {t.message}
              </p>
              <button
                type="button"
                aria-label="Dismiss notification"
                onClick={() => dismissToast(t.id)}
                className="absolute right-2.5 top-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
