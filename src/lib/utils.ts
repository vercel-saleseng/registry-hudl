import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import registry from "@/registry";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Component {
  name: string;
  title: string;
  description?: string;
}

export function getComponent(name: string): Component {
  const component = registry.items.find(
    (item: { name: string }) => item.name === name,
  );

  if (component == null) {
    throw new Error(`Component "${name}" not found`);
  }

  return component;
}
