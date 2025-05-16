import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

// Define Color Palettes
const colorPalettes = {
  original: {
    lightMode: {
      light: "#faf8f8",
      lightgray: "#e5e5e5",
      gray: "#b8b8b8",
      darkgray: "#4e4e4e",
      dark: "#2b2b2b",
      secondary: "#284b63",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#fff23688",
    },
    darkMode: {
      light: "#161618",
      lightgray: "#393639",
      gray: "#646464",
      darkgray: "#d4d4d4",
      dark: "#ebebec",
      secondary: "#7b97aa",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
  coolBlues: {
    lightMode: {
      light: "#f0f4f8",
      lightgray: "#d9e2ec",
      gray: "#b0c4de",
      darkgray: "#778899",
      dark: "#3b4b59",
      secondary: "#4682b4",
      tertiary: "#6a9fbf",
      highlight: "rgba(70, 130, 180, 0.15)",
      textHighlight: "#add8e688",
    },
    darkMode: {
      light: "#1c2025",
      lightgray: "#2d3748",
      gray: "#4a5568",
      darkgray: "#a0aec0",
      dark: "#e2e8f0",
      secondary: "#63b3ed",
      tertiary: "#81e6d9",
      highlight: "rgba(99, 179, 237, 0.15)",
      textHighlight: "#4fd1c588",
    },
  },
  warmEarth: {
    lightMode: {
      light: "#fdf5e6",
      lightgray: "#f5e9d5",
      gray: "#e0d1b0",
      darkgray: "#a08c6c",
      dark: "#5d4a36",
      secondary: "#8b4513",
      tertiary: "#cd853f",
      highlight: "rgba(139, 69, 19, 0.1)",
      textHighlight: "#ffdab988",
    },
    darkMode: {
      light: "#2a2015",
      lightgray: "#403020",
      gray: "#604830",
      darkgray: "#bfa98c",
      dark: "#f0e6d8",
      secondary: "#d2691e",
      tertiary: "#f4a460",
      highlight: "rgba(210, 105, 30, 0.15)",
      textHighlight: "#e9967a88",
    },
  },
  forestGreen: {
    lightMode: {
      light: "#f0fff0",
      lightgray: "#e0f0e0",
      gray: "#c0e0c0",
      darkgray: "#556b2f",
      dark: "#2e452e",
      secondary: "#228b22",
      tertiary: "#6b8e23",
      highlight: "rgba(34, 139, 34, 0.1)",
      textHighlight: "#90ee9088",
    },
    darkMode: {
      light: "#182818",
      lightgray: "#283828",
      gray: "#384838",
      darkgray: "#a7bd7a",
      dark: "#d9e9d9",
      secondary: "#55ae55",
      tertiary: "#9acd32",
      highlight: "rgba(85, 174, 85, 0.15)",
      textHighlight: "#7cfc0088",
    },
  },
  royalPurple: {
    lightMode: {
      light: "#f8f0ff",
      lightgray: "#e8d9ff",
      gray: "#d8c0ff",
      darkgray: "#6a0dad",
      dark: "#4b0082",
      secondary: "#800080",
      tertiary: "#9932cc",
      highlight: "rgba(128, 0, 128, 0.1)",
      textHighlight: "#da70d688",
    },
    darkMode: {
      light: "#201028",
      lightgray: "#302038",
      gray: "#403048",
      darkgray: "#c399e5",
      dark: "#f0e0ff",
      secondary: "#ba55d3",
      tertiary: "#dda0dd",
      highlight: "rgba(186, 85, 211, 0.15)",
      textHighlight: "#d8bfd888",
    },
  },
  oceanicTeal: {
    lightMode: {
      light: "#f0ffff",
      lightgray: "#e0ffff",
      gray: "#c0f0f0",
      darkgray: "#20b2aa",
      dark: "#008080",
      secondary: "#00ced1",
      tertiary: "#48d1cc",
      highlight: "rgba(0, 206, 209, 0.1)",
      textHighlight: "#afeeee88",
    },
    darkMode: {
      light: "#182828",
      lightgray: "#283838",
      gray: "#384848",
      darkgray: "#98e0e0",
      dark: "#e0ffff",
      secondary: "#40e0d0",
      tertiary: "#7fffd4",
      highlight: "rgba(64, 224, 208, 0.15)",
      textHighlight: "#66cdaa88",
    },
  },
  monochrome: {
    lightMode: {
      light: "#ffffff",
      lightgray: "#f0f0f0",
      gray: "#dcdcdc",
      darkgray: "#a9a9a9",
      dark: "#696969",
      secondary: "#808080",
      tertiary: "#c0c0c0",
      highlight: "rgba(128, 128, 128, 0.1)",
      textHighlight: "#d3d3d388",
    },
    darkMode: {
      light: "#1e1e1e",
      lightgray: "#2d2d2d",
      gray: "#3c3c3c",
      darkgray: "#b0b0b0",
      dark: "#e0e0e0",
      secondary: "#9e9e9e",
      tertiary: "#757575",
      highlight: "rgba(158, 158, 158, 0.15)",
      textHighlight: "#5e5e5e88",
    },
  },
  vintageCream: {
    lightMode: {
      light: "#fdf6e3",
      lightgray: "#eee8d5",
      gray: "#93a1a1",
      darkgray: "#839496",
      dark: "#657b83",
      secondary: "#b58900",
      tertiary: "#cb4b16",
      highlight: "rgba(181, 137, 0, 0.1)",
      textHighlight: "#fdf6e388",
    },
    darkMode: {
      light: "#002b36",
      lightgray: "#073642",
      gray: "#586e75",
      darkgray: "#839496",
      dark: "#eee8d5",
      secondary: "#268bd2",
      tertiary: "#2aa198",
      highlight: "rgba(38, 139, 210, 0.15)",
      textHighlight: "#07364288",
    },
  },
  devDark: { // A more developer-focused dark theme, similar to common IDE themes
    lightMode: { // Keeping a light mode variant for consistency, though less "dev-dark"
      light: "#f5f5f5",
      lightgray: "#e0e0e0",
      gray: "#bdbdbd",
      darkgray: "#616161",
      dark: "#212121",
      secondary: "#0d47a1", // Dark blue
      tertiary: "#00695c", // Dark teal
      highlight: "rgba(13, 71, 161, 0.1)",
      textHighlight: "#fff17688", // Light yellow
    },
    darkMode: {
      light: "#1e1e1e", // Common dark bg
      lightgray: "#2c2c2c", // Slightly lighter dark
      gray: "#424242", // Medium dark
      darkgray: "#bdbdbd", // Light gray for text
      dark: "#e0e0e0", // Lighter gray for main text
      secondary: "#bb86fc", // Purple accent (Material Design Dark)
      tertiary: "#03dac6", // Teal accent (Material Design Dark)
      highlight: "rgba(187, 134, 252, 0.15)", // Purple highlight
      textHighlight: "#fce86b88", // Yellow text highlight
    },
  },
  oceanVibes: {
    lightMode: {
      light: "#ECEFCA",
      lightgray: "#F5F7E0",
      gray: "#94B4C1",
      darkgray: "#547792",
      dark: "#213448",
      secondary: "#547792",
      tertiary: "#94B4C1",
      highlight: "rgba(84, 119, 146, 0.1)",
      textHighlight: "#21344833",
    },
    darkMode: {
      light: "#213448",
      lightgray: "#1A2A38",
      gray: "#547792",
      darkgray: "#94B4C1",
      dark: "#ECEFCA",
      secondary: "#94B4C1",
      tertiary: "#ECEFCA",
      highlight: "rgba(148, 180, 193, 0.15)",
      textHighlight: "#ECEFCA88",
    },
  },
  halloween: {
    lightMode: {
      light: "#F8EEDF",
      lightgray: "#F0E8D8",
      gray: "#E8C999",
      darkgray: "#8E1616",
      dark: "#000000",
      secondary: "#8E1616",
      tertiary: "#E8C999",
      highlight: "rgba(232, 201, 153, 0.15)",
      textHighlight: "#8E161633",
    },
    darkMode: {
      light: "#000000",
      lightgray: "#1D1D1D",
      gray: "#3A3A3A",
      darkgray: "#E8C999",
      dark: "#F8EEDF",
      secondary: "#8E1616",
      tertiary: "#E8C999",
      highlight: "rgba(142, 22, 22, 0.2)",
      textHighlight: "#F8EEDF88",
    },
  },
  neon: {
    lightMode: {
      light: "#F5F5F5",
      lightgray: "#EAEAEA",
      gray: "#C0C0C0",
      darkgray: "#4A4A4A",
      dark: "#1E1E1E",
      secondary: "#D900D9",
      tertiary: "#00BFBF",
      highlight: "rgba(217, 0, 217, 0.1)",
      textHighlight: "#FFBF0088",
    },
    darkMode: {
      light: "#0D020D",
      lightgray: "#1A031A",
      gray: "#501F50",
      darkgray: "#E6E6FA",
      dark: "#FFFFFF",
      secondary: "#FF00FF",
      tertiary: "#00FFFF",
      highlight: "rgba(255, 0, 255, 0.2)",
      textHighlight: "#FFFF00A0",
    },
  },
  sunset: { // Replaces sunsetVibes
    lightMode: {
      light: "#FCEFCB",
      lightgray: "#FAD59A",
      gray: "#E9A319",
      darkgray: "#C57D18",
      dark: "#A86523",
      secondary: "#E9A319",
      tertiary: "#A86523",
      highlight: "rgba(233, 163, 25, 0.15)",
      textHighlight: "#A865234D",
    },
    darkMode: {
      light: "#2A1B07",
      lightgray: "#452C0D",
      gray: "#6B4513",
      darkgray: "#E9A319",
      dark: "#FCEFCB",
      secondary: "#E9A319",
      tertiary: "#FAD59A",
      highlight: "rgba(233, 163, 25, 0.15)",
      textHighlight: "#FCEFCB88",
    },
  },
  persianAzure: {
    lightMode: {
      light: "#FAF0E6",
      lightgray: "#F0E6D8",
      gray: "#D8C8B8",
      darkgray: "#B08D57",
      dark: "#5C3A1A",
      secondary: "#2A9D8F",
      tertiary: "#DAA520",
      highlight: "rgba(42, 157, 143, 0.1)",
      textHighlight: "rgba(42, 157, 143, 0.25)",
    },
    darkMode: {
      light: "#08304A",
      lightgray: "#001F33",
      gray: "#307879",
      darkgray: "#D8C8B8",
      dark: "#FAF0E6",
      secondary: "#FFD700",
      tertiary: "#70CAD1",
      highlight: "rgba(255, 215, 0, 0.1)",
      textHighlight: "rgba(255, 215, 0, 0.3)",
    },
  },
  sakuraDreams: {
    lightMode: {
      light: "#FFF0F5",
      lightgray: "#FFDFE6",
      gray: "#D8BFD8",
      darkgray: "#90A490",
      dark: "#4A5D4A",
      secondary: "#FFB6C1",
      tertiary: "#A2BFAA",
      highlight: "rgba(255, 182, 193, 0.1)",
      textHighlight: "rgba(255, 182, 193, 0.3)",
    },
    darkMode: {
      light: "#3B313D",
      lightgray: "#2C242D",
      gray: "#785F70",
      darkgray: "#FFDDE2",
      dark: "#FFF8FA",
      secondary: "#FF8099",
      tertiary: "#C1D8C1",
      highlight: "rgba(255, 128, 153, 0.1)",
      textHighlight: "rgba(221, 221, 255, 0.3)",
    },
  },
  cyberpunkCity: {
    lightMode: {
      light: "#E8E8EA",
      lightgray: "#D1D1D6",
      gray: "#A9A9B3",
      darkgray: "#4A5568",
      dark: "#1A202C",
      secondary: "#007FFF",
      tertiary: "#E500E5",
      highlight: "rgba(0, 127, 255, 0.1)",
      textHighlight: "rgba(0, 127, 255, 0.25)",
    },
    darkMode: {
      light: "#0A0F1A",
      lightgray: "#182233",
      gray: "#33415C",
      darkgray: "#A0AEC0",
      dark: "#E2E8F0",
      secondary: "#38BDF8",
      tertiary: "#F472B6",
      highlight: "rgba(56, 189, 248, 0.1)",
      textHighlight: "rgba(0, 255, 255, 0.3)",
    },
  },
  autumnGrove: {
    lightMode: {
      light: "#FFF8DC",
      lightgray: "#F5EBCD",
      gray: "#D2B48C",
      darkgray: "#8B4513",
      dark: "#5C4033",
      secondary: "#D2691E",
      tertiary: "#DAA520",
      highlight: "rgba(210, 105, 30, 0.1)",
      textHighlight: "rgba(204, 85, 0, 0.25)",
    },
    darkMode: {
      light: "#3D2B1F",
      lightgray: "#533E2D",
      gray: "#7C4728",
      darkgray: "#F5DEB3",
      dark: "#FFF5E1",
      secondary: "#E64A19",
      tertiary: "#FFC107",
      highlight: "rgba(230, 74, 25, 0.1)",
      textHighlight: "rgba(255, 193, 7, 0.3)",
    },
  },
}

// Select your desired palette here
// Available palettes: original, coolBlues, warmEarth, forestGreen, royalPurple, oceanicTeal, monochrome, vintageCream, devDark, oceanVibes, halloween, neon, sunset, persianAzure, sakuraDreams, cyberpunkCity, autumnGrove
// type PaletteName = keyof typeof colorPalettes; // This line might cause issues with older TS
const currentPaletteName: keyof typeof colorPalettes = "original"

const selectedPalette = colorPalettes[currentPaletteName]

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Davaji Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "davajinotes.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: selectedPalette,
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
