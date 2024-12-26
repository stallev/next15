import { Locale } from "@/i18n.config"

export interface PathProps {
  params: {
    postSlug: string
  }
}
export interface PagePathProps {
  params: {
    locale: Locale
  }
}

export interface TranslationsType {
  translations: Record<string, string>
}

export interface PagePathDataProps {
  path: string
  locale: Locale
}

export interface SeoPagePathDataProps {
  asPath: string,
  locale: Locale
  defaultLocale: Locale
}

export interface GetSeoDataProps {
  seoContentData: SeoContentDataProps
  seoPathData: SeoPagePathDataProps
}

export interface SeoContentDataProps {
  data: {
    metaDesc: string
    metaRobotsNofollow: string
    metaRobotsNoindex: string
    readingTime: number
    schema: Schema
    title: string
    twitterDescription: string
    twitterImage: string
    featuredImageUrl?: string
    slug?: string
    canonicalUrl?: string
    alternateLinksSlugs?: {
      [locale: string]: string;
    };
  }
  isPostType?: boolean,
}

export interface Schema {
  pageType: string[]
}

export interface NavBarLinkProps {
  link: string
  label: string
}

export type NavBarMenuItemProps =  {
  link: string
  label: string
  children: NavBarLinkProps[] | []
} | false;

export interface MobileMenuStateProps {
  isMenuOpen: boolean
  activeDropDownMenuItem: NavBarMenuItemProps
}
