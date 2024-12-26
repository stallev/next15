import { EndpointsList } from "@/constants";
import { getMinisterData, getMinistersSlugs, getMinistersPostsSitemapData } from "@/graphql/staffQueries";
import { SeoContentDataProps } from "@/types/globalTypes";
import { fetchAPI } from "./WordPressFetchAPI";
import { FetchedStaffPersonDataType, TranslationFetchedData } from "@/types/WPDataTypes/StaffContentDataType";
import { PostNodeSlugType, PostSitemapSourceData } from "@/types/WPDataTypes/CommonWPDataTypes";

class StaffDataApi {
  static getOtherImagesSizesUrls(item: TranslationFetchedData) {
    if (!!item.ministerPhoto) {
      let featuredImageLinks: { [key: string]: string } = {};
      
      item.ministerPhoto.map(({ size, url }: { size: string, url: string }) => {
        featuredImageLinks = { ...featuredImageLinks, [size]: url };
  
        return featuredImageLinks;
      });
      
      delete item.ministerPhoto;
      item.imageLinks = featuredImageLinks;
    }
  
    return item;
  }

  static async getMinisterItemsIDs() {
    const response = await fetch(EndpointsList.MinistersCustomRestEndpoint);
    const data = await response.json();

    return data.map((item: any) => item.id);
  }

  static async getMinisterItemData(id: string, locale: string, idType = 'DATABASE_ID') {
    const variables = {
      id,
      language: locale.toUpperCase(), 
      idType,
    }
    
    const result = await fetchAPI(getMinisterData, { variables })
      .then(({ minister: { translation } }: FetchedStaffPersonDataType) => this.getOtherImagesSizesUrls(translation));
      
    return result;
  }

   static async getMinisterItemDataBySlug(id: string, locale: string) {
    const variables = {
      id,
      language: locale.toUpperCase(), 
      idType: 'SLUG',
    }
    
    const fetchedData = await fetchAPI(getMinisterData, { variables });

    if(!!fetchedData?.minister) {
      const { minister: { translation } } = fetchedData;
      
      const postData  = this.getOtherImagesSizesUrls(translation);
      
      return {
        ...postData,
        seo: this.getMinisterPageSeoData(postData, locale)
      };
    } 

    return {};
  }

  static getMinisterPageSeoData(postData: TranslationFetchedData, locale: string) {
    const featuredImageUrl = !!postData?.imageLinks?.medium?.length ? postData.imageLinks.medium : postData?.imageLinks?.full;
    const otherLanguageCode = postData.translations[0].language.code.toLowerCase();
    const otherTranslationSlug = postData.translations[0].slug;

    const seo: SeoContentDataProps = {
      data: {
        ...postData.seo,
        featuredImageUrl,
        slug: postData.slug,
        title: postData.ministerFirstName + ' ' + postData.ministerLastName,
        alternateLinksSlugs: {
          [locale]: postData.slug,
          [otherLanguageCode]: otherTranslationSlug,
        },
        twitterDescription: postData.seo.metaDesc,
        twitterImage: featuredImageUrl
      },
      isPostType: true,
    }
    
    return seo;
  }

  static async getMinisters(locale: string) {
    const res = await this.getMinisterItemsIDs();
    const resultItems = [];

    for (const item of res) {
      const itemData = await this.getMinisterItemData(item, locale.toUpperCase());
      const { seo, translations, ...ministerData } = itemData;
      
      resultItems.push(ministerData );
    }
    
    return resultItems;
  }

  static async getMinistersPaths() {
    const { ministers: { edges: nodes } } = await fetchAPI(getMinistersSlugs);

    const paths = nodes.map(({ node }: { node: PostNodeSlugType }) => {
      return {
        params: {
          postSlug: node.slug
        }
      };
    })
        
    return paths;
  }

  static async getMinistersSitemapData() {
    const { ministers: { edges: nodes } } = await fetchAPI(getMinistersPostsSitemapData);

    const postsData = nodes.map(({ node }: { node: PostSitemapSourceData }) => {
      return {
        slug: node.slug,
        modified: node.modified,
      };
    })
        
    return postsData;
  }
}

export default StaffDataApi;
