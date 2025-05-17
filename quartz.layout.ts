import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      
      "Telegram": "https://t.me/davajinotes",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
Component.Explorer({
        // در اینجا تابع filterFn را اضافه یا ویرایش کنید
        filterFn: (node) => {
          // اگر نام فایل یا پوشه با "_" شروع شود، آن را نمایش نده (رفتار پیش‌فرض در برخی تنظیمات)
          if (node.name.startsWith("_")) {
            return false
          }
          // بررسی فراداده برای تگ 'explorerexclude'
          if (node.file && node.file.data && node.file.data.frontmatter && node.file.data.frontmatter.tags) {
            const tags = node.file.data.frontmatter.tags as string[] | undefined;
            if (Array.isArray(tags) && tags.includes('explorerexclude')) {
              return false; // این فایل را از Explorer خارج کن
            }
          }
          return true; // در غیر این صورت، فایل را نمایش بده
        }}),
  ],
  right: [],
}
