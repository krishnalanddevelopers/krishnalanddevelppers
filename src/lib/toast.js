// Tiny global toast store. Call toast.success/error/info from anywhere on the client;
// <Toaster /> (mounted once in the root layout) renders them.

const DURATION = 4000;

let toasts = [];
let nextId = 1;
const timers = new Map();
const listeners = new Set();

const emit = () => listeners.forEach(listener => listener());

export function dismissToast(id) {
  clearTimeout(timers.get(id));
  timers.delete(id);
  toasts = toasts.filter(t => t.id !== id);
  emit();
}

function show(type, message) {
  // A repeated message reuses the visible toast and restarts its timer instead of stacking
  const existing = toasts.find(t => t.type === type && t.message === message);
  const id = existing?.id ?? nextId++;
  clearTimeout(timers.get(id));
  timers.set(id, setTimeout(() => dismissToast(id), DURATION));
  if (!existing) {
    // Newest first, keep at most 3 on screen
    toasts.slice(2).forEach(t => {
      clearTimeout(timers.get(t.id));
      timers.delete(t.id);
    });
    toasts = [{ id, type, message }, ...toasts.slice(0, 2)];
    emit();
  }
  return id;
}

export const toast = {
  success: message => show("success", message),
  error: message => show("error", message),
  info: message => show("info", message),
};

export function subscribeToasts(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const getToasts = () => toasts;

const EMPTY = [];
export const getServerToasts = () => EMPTY;
