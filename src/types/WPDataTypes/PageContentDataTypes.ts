import { ConvertedGutenbergBlockType } from "./GutenbergBlocksTypes";
import { SeoContentDataProps } from "@/types/globalTypes";
import { WPPostSeoType } from "./CommonWPDataTypes";

export interface FetchedPageContentDataType {
  title: string
  slug: string
  blocks: GutenbergBlockType[]
  translations: Translation[]
  date: string
  featuredImage: any
  seo: WPPostSeoType
}

export interface PageContentDataType {
  title: string
  slug: string
  pageContent: ConvertedGutenbergBlockType[]
  seo: SeoContentDataProps
  translations: Translation[]
  featuredImage: string
}

export interface GutenbergBlockType {
  name?: string
  order: number
  saveContent: string
  mediaItem: MediaItem
  attributes: Attributes
  originalContent: string
  innerBlocks: InnerBlock[]
}

export interface Attributes {
  level: number
  src: string
  href: string
  textLinkHref: string
  caption: string
}

export interface InnerBlock {
  originalContent: string
  mediaItem: MediaItem
  name?: string
  order: number
}

export interface MediaItem {
  node: {
    mediaItemUrl: string
    caption: any
  }
}

export interface Translation {
  language: Language
  slug: string
}

export interface Language {
  slug: string
}
