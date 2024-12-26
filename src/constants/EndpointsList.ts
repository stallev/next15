const SiteUrl = 'https://testchurchapi.stallevs.ru';

export const PostsQueryMaxCount = 10000;

export const EndpointsList = {
  PagesStandartRestEndpoint: `${SiteUrl}/wp-json/wp/v2/pages/`,
  MediaStandartRestEndpoint: `${SiteUrl}/wp-json/wp/v2/media/`,
  UpcomingEventsCustomRestEndpoint: `${SiteUrl}/wp-json/events/upcoming-events-list`,
  MinistersCustomRestEndpoint: `${SiteUrl}/wp-json/ministers/selected-ministers-list`,
  TimelineCustomRestEndpoint: `${SiteUrl}/wp-json/timeline/timeline-data`,
}

export const InnerApiEndponts = {
  GetInTouch: '/api/get-in-touch',
  SubscribeEvent: '/api/subscribe-event',
}

export const ContactFormsEndpointsIndex = {
  getInTouch: 'getInTouch',
  sendParticipationInfo: 'sendParticipationInfo',
  prayerRequest: 'prayerRequest',
}

export const ContactFormsEndpoints = {
  getInTouch: 'https://u6gzu94upe.execute-api.us-east-1.amazonaws.com/default/ContactUsRequest',
  sendParticipationInfo: 'https://rp9hqa2oj1.execute-api.us-east-1.amazonaws.com/default/WorshipParticipationRequest',
  prayerRequest: 'https://2coz8t7e9k.execute-api.us-east-1.amazonaws.com/default/PrayerRequest',
} as const;


export type EndpointKeys = keyof typeof ContactFormsEndpoints;

export const SubscribeToEventsEndpoint = {
  dev: 'https://d7e55bt4k6.execute-api.us-east-1.amazonaws.com/default/SubscribeToUpcomingEventsNotifier',
}

export const WordpressGraphQLEndpoint = {
  dev: `${SiteUrl}/graphql`,
}
