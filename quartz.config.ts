import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "maulana.md",
    pageTitleSuffix: " - maulana.md",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "null",
    },
    locale: "en-US",
    baseUrl: "maulanamd.my.id",
    ignorePatterns: ["private", "templates", ".obsidian", "**/private"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#e3e7e9", // main page background - sky2
          lightgray: "#69667f", // borders and divider lines - dusk4
          gray: "#5c5d70", // muted text - dusk3
          darkgray: "#505264", // main body text - dusk2
          dark: "#444456", // header text - dusk1
          secondary: "#69a5d3", // main accent, link - day3
          tertiary: "#4c94cc", // hover state, visited link - day4
          highlight: "b8d0e1", // text/block highlight - day1
          textHighlight: "rgba(237, 100, 150, 0.4)", // markdown highlight - arc1
        },
        darkMode: {
          light: "#444456", // main page background - dusk1
          lightgray: "#69667f", // borders and divider lines - dusk4
          gray: "#e0cee7", // muted text, graph links, meta text - sky1
          darkgray: "#fcfcfa", // main body text - sky3
          dark: "#e3e7e9", // header text and icon - sky2
          secondary: "#e3e7e9", // main accent (links, active graph node) - day3
          tertiary: "#9fbfdc", // hover states and visited links - day2
          highlight: "rgba(105, 165, 211, 0.15)", // text/block highlight - day3 w/ opacity
          textHighlight: "rgba(237, 100, 150, 0.4)", // markdown highlights - arc1 w/ opacity
        },
      },
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
      Plugin.CustomOgImages({
        colorScheme: "darkMode",
      }),
    ],
  },
}

export default config
