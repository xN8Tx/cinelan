import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-c1": "#4361EE",
        " primary-c2": "#E8ECFD",
        "primary-c3": "#899DFC",
        "success-c1": "#17C964",
        "neutral-black": "#000000",
        "neutral-white": "#ffffff",
        "body-bg": { lignt: "#F4F5F9", dark: "#171923" },
        "heading-c1": { lignt: "#171923", dark: "#F0F1F" },
        "heading-c2": { lignt: "#5B5D67", dark: "#D7D9E3" },
        "p-text-c1": { lignt: "#5B5D67", dark: "#BEC0C9" },
        "card-bg-c1": { lignt: "#FCFCFC", dark: "#212330" },
        "card-bg-c2": { lignt: "##FFFFFF", dark: "#000000" },
        "nav-active-c1": { lignt: "#EAEDFB", dark: "#303343" },
        "story-active-c1": { lignt: "#A0B0FC", dark: "#51556B" },
        "add-story-c1": { lignt: "#EAEDFB", dark: "#4D526D" },
        "card-promo-bg-c1": { lignt: "#EDEFFB", dark: "#303343" },
        "card-promo-elements-c1": { lignt: "#E8ECFD", dark: "#343747" },
        "form-placeh-c1": { lignt: "#8C8F9F", dark: "#7D8096" },
        "form-input-s-c1": { lignt: "#E7E8EF", dark: "#434557" },
        "form-input-c1": { lignt: "#FAFBFF", dark: "#2A2D3D" },
        "body-captiontext-c1": { lignt: "#8C8F9F", dark: "#B3B6C4" },
        "icon-c1": { lignt: "#C3C5CD", dark: "#8C91AA" },
        "icon-fill-c1": { lignt: "#DEE3FB", dark: "#3E425" },
        "body-divider-c1": { lignt: "#E7E8EF", dark: "#2C2F41" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
