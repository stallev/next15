export interface SermonsCategoriesListTypes {
  biblebooks: string[]
  topics: string[]
  preachers: string[]
}
export interface RenderingSermonCardDataType {
  title: string
  sermonShortDescription: string
  sermonDate: string
  sermonAudio: string
  sermonYoutubeLink: string
  sermonBookChapter: string
  sermonBookChapterTextNumber: string
  biblebooks: string[]
  imageLinks: ImageLinks
  topics: string[]
  preachers: string[]
}

export interface FetchedSermonCardDataType {
  title: string
  sermonShortDescription: string
  sermonDate: string
  sermonAudio: string
  sermonYoutubeLink: string
  sermonBookChapter: string
  sermonBookChapterTextNumber: string
  sermonsTopics: SermonsTopics
  sermonsPreachers: SermonsPreachers
  biblebooks: Biblebooks
  imageLinks: ImageLinks
}

export interface SermonsTopics {
  nodes: Taxonomy[]
}

export interface Taxonomy {
  id: string
  name: string
}

export interface SermonsPreachers {
  nodes: Taxonomy[]
}

export interface Biblebooks {
  nodes: Taxonomy[]
}

export interface ImageLinks {
  full: string
  thumbnail: string
  medium: string
  large: string
}

export interface ImageLinks {
  full: string
  thumbnail: string
  medium: string
  large: string
}
