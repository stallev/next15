export interface YouTubeVideosDataType {
  finishedVideos: YouTubeVideoItemType[] | []
  liveVideos: YouTubeVideoItemType[] | []
  upcomingVideos: YouTubeVideoItemType[] | []
}

export interface FinishedVideoItemType  {
  id: string
  title: string
  url: string
  publishedAt: string
  status: string
}
export interface LiveVideoItemType  {
  id: string
  title: string
  url: string
  actualStartTime: string
  status: string
}
export interface UpcomingVideoItemType  {
  id: string
  title: string
  url: string
  scheduledStartTime: string
  status: string
}
export interface YouTubeVideoItemType  {
  id: string
  title: string
  url: string
  scheduledStartTime?: string
  actualStartTime?: string
  publishedAt?: string
  status: string
}

export interface FetchedVideoItemsList {
  finishedVideos: YouTubeVideoItemType[] | []
  liveVideos: YouTubeVideoItemType[] | []
  upcomingVideos: YouTubeVideoItemType[] | []
}

export interface YoutubeVideoItemType {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  liveStreamingDetails: LiveStreamingDetails
}

export interface YoutubePlaylistItemType {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  playlistId: string
  position: number
  resourceId: ResourceId
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
  liveBroadcastContent?: string
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Maxres {
  url: string
  width: number
  height: number
}

export interface ResourceId {
  kind: string
  videoId: string
}

export interface ContentDetails {
  videoId: string
  videoPublishedAt: string
}

export interface LiveStreamingDetails {
  actualStartTime: string
  actualEndTime: string
  scheduledStartTime: string
}
