import { EndpointsList } from "@/constants";
import { getTimelineEventData, getTimelineEventsSlugs, getTimelineEventDataBySlug, getTimelineEventsSitemapData } from "@/graphql/timelineEventsQueries";
import { fetchAPI } from "./WordPressFetchAPI";
import { getPostSeoData } from "@/utils/getPostSeoData";
import { YearTimelineEventsCardsListData } from "@/types/WPDataTypes/TimelineEventsDataTypes";
import { PostNodeSlugType, PostSitemapSourceData } from "@/types/WPDataTypes/CommonWPDataTypes";

class TimelineEventDataApi {
  static async getTimelineEventsItemsIDs() {
    const response = await fetch(EndpointsList.TimelineCustomRestEndpoint);
    const data = await response.json();

    return data;
  }

  static async getTimelineEventItemData(id: string, locale: string, idType = 'DATABASE_ID') {
    const variables = {
      id,
      language: locale.toUpperCase(), 
      idType,
    }
    
    const { timelineEvent: { translation } } = await fetchAPI(getTimelineEventData, { variables });

    return translation;
  }

  static async getTimelineEventItemDataBySlug(slug: string, locale: string) {
    const variables = {
      slug,
      language: locale.toUpperCase(),
    }
    
    const fetchedData = await fetchAPI(getTimelineEventDataBySlug, { variables });

    if(!!fetchedData?.timelineEventBy) {
      const { timelineEventBy: { translation } } = fetchedData;

      return {
        postData: translation,
        seo: getPostSeoData(translation, locale),
      };
    }
    
    return {};
  }

  static async getTimelineEvents(locale: string) {    
    const res = await this.getTimelineEventsItemsIDs();
    const resultItems: YearTimelineEventsCardsListData[] = [];

    for (const yearData of res) {
      let eventsListData: YearTimelineEventsCardsListData = {
        year: yearData?.year,
        eventsList: [],
      };

      for (const event of yearData.events) {
        const eventData = await this.getTimelineEventItemData(event.id, locale.toUpperCase());
        eventsListData.eventsList.push(eventData);
      }
      
      resultItems.push(eventsListData);
    }
    
    return resultItems;
  }


  static async getTimelineEventsPaths() {
    const { allTimelineEvent: { edges: nodes } } = await fetchAPI(getTimelineEventsSlugs);

    const paths = nodes.map(({ node }: { node: PostNodeSlugType }) => {
      return {
        params: {
          postSlug: node.slug
        }
      };
    })
        
    return paths;
  }

  static async getTimelineEventsSitemapData() {
    const { allTimelineEvent: { edges: nodes } } = await fetchAPI(getTimelineEventsSitemapData);

    const postsData = nodes.map(({ node }: { node: PostSitemapSourceData }) => {
      return {
        slug: node.slug,
        modified: node.modified,
      };
    })
        
    return postsData;
  }
}

export default TimelineEventDataApi;
