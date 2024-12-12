import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to parse price (removing '$' and converting to number)
export const parsePrice = (price: string): number => {
  return parseFloat(price.replace("$", "").trim());
};
