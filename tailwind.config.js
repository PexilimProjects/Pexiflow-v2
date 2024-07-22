/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Grey: "#F6F7F9",
        TextGrey: "#9EA5AD",
        Grey200: "#E5E7EA",
        Gradient1Start: "#A83AFF",
        Gradient1End: "#FF8A00",
        Success: "#6AD09D",
        Grey900: "#24292E",
        Gray700: "#454C52",
      },
      backgroundImage: {
        Gradient: "linear-gradient(to right, #A83AFF, #FF8A00)",
        "custom-gradient":
          "linear-gradient(93deg, #1A1D1F 30.66%, #363636 81.39%)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
