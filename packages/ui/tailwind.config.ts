import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, 'darkMode' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  presets: [sharedConfig],
};

export default config;
