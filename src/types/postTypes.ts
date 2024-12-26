import { BlogCardProps } from "@/ui/components/page-specific/blog/BlogCard/types";
import { PageContentDataType } from "./WPDataTypes/PageContentDataTypes";

export interface StandartPageDataType {
  pageData: PageContentDataType
}
export interface BlogPageCardsListProps {
  postsList: BlogCardProps[]
  authorsList: PostCategoryListItem[]
  yearsList: PostCategoryListItem[]
}

export interface AuthorNodeProps {
  node: authorSourceContent
}

export interface authorSourceContent {
  slug: string
  id: string
  firstName?: any
  lastName?: any
  name: string
  avatar: Avatar
  description: string
}

export interface authorFinishedContentProps {
  id: string
  authorFullName: string
  slug: string
  avatarUrl: string
  description: string
}

export interface FormattedPostDateProps {
  postDateFormattedValue: string
  timestamp: number
  year: string
  month: number
  day: number
}

export interface PostCategoryListItem {
  id: string;
  value: string;
}

export interface Avatar {
  url: string
}

export interface FeaturedImageMediaItemUrlProps {
  node?: {
    mediaItemUrl?: string
  }
}

export interface SeoPostProps {
  metaDesc: string
  metaRobotsNofollow?: string
  metaRobotsNoindex?: string
  readingTime?: number
  schema: Schema
  title: string
  twitterDescription: string
  twitterImage: TwitterImage
}

export interface Schema {
  pageType: string[]
}

export interface TwitterImage {
  altText?: string
  mediaItemUrl?: string
}

export interface BlockProps {
  name: string
  order: number
  attributes: Attributes
}

export interface Attributes {
  src?: string
  content: string  
  textLinkHref?: string
  level?: number
}

export interface BlogPostProps {
  title: string
  slug: string
  excerpt: string
  date: string
  author: authorFinishedContentProps
  blocks: any
  featuredImageData: PostFeaturedImageData
  seo: SeoPostProps
}

export interface PostFeaturedImageData {
  isExist: boolean
  featuredImageUrl: string
}

export interface postSitemapFieldsItemProps {
  slug: string
  modified: string
}

export interface PostParams {
  postSlug: string;
}
