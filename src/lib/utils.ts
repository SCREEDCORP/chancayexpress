import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(priceInCents: number) {
  return Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(priceInCents / 100);
}

export function createCode() {
  return crypto.randomBytes(5).toString("hex").toUpperCase();
}
