export interface YearTimelineEventsCardsListData {
  year: string
  eventsList: TimelineEventCardDataType[]
}

export interface TimelineEventCardDataType {
  id: number
  title: string
  event_date: string
  featured_image: string
  slug: string
}
