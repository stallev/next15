import { getPastorsPostData, getPastorsPostsByLang, getAllPastorsPostSlugs, getPastorsPostsSitemapData } from "@/graphql/blogQueries";
import { convertPostListItemFetchedData } from "@/utils/convertPostListItemFetchedData";
import { convertPostFetchedData } from "@/utils/convertPostFetchedData";
import { getAuthorsList } from "@/utils/getAuthorsList";
import { getPostsYearsList } from "@/utils/getPostsYearsList";
import { getPostSeoData } from "@/utils/getPostSeoData";
import { fetchAPI } from "./WordPressFetchAPI";
import { POST_CARD_HOME_PAGE_COUNT } from "@/constants/mock";
import { PostNodeSlugType, PostSitemapSourceData } from "@/types/WPDataTypes/CommonWPDataTypes";

class BlogDataApi {
  static async getPostsDataByLang(locale: string) {
    const variables = {
      language: locale.toUpperCase(),
    }
    
    const { allPastorsPost: { edges } } = await fetchAPI(getPastorsPostsByLang, { variables });
    const postsList = edges
      .map((item: any) => item.node)
      .map((item: any) => convertPostListItemFetchedData(item, locale));
    
    const authorsList = getAuthorsList(postsList);
    const yearsList = getPostsYearsList(postsList);
    
    return {
      postsList,
      authorsList,
      yearsList,
    };
  }

  static async getLastPostsDataHomePageByLang(locale: string) {
    const variables = {
      language: locale.toUpperCase(),
    }
    
    const { allPastorsPost: { edges } } = await fetchAPI(getPastorsPostsByLang, { variables });
    const postsList = edges
      .map((item: any) => item.node)
      .map((item: any) => convertPostListItemFetchedData(item, locale))
      .slice(0, POST_CARD_HOME_PAGE_COUNT);
    
    return postsList;
  }

  static async getPastorsPostItemDataBySlug(id: string, locale: string, idType = 'SLUG') {
    const variables = {
      id,
      language: locale.toUpperCase(), 
      idType,
    };
    
    const fetchedData = await fetchAPI(getPastorsPostData, { variables });

    if(!!fetchedData?.pastorsPost) {
      const { pastorsPost: { translation } } = fetchedData;

      const data = convertPostFetchedData(translation, locale);
    
      return {
        postData: data,
        seo: getPostSeoData (translation, locale),
      };
    }

    return {};
  }

  static async getAllPastorsPostsPaths() {
    const { allPastorsPost: { edges: nodes } } = await fetchAPI(getAllPastorsPostSlugs);

    const paths = nodes.map(({ node }: { node: PostNodeSlugType }) => {
      return {
        params: {
          postSlug: node.slug
        }
      };
    })
        
    return paths;
  }

  static async getPastorsPostsSitemapData() {
    const { allPastorsPost: { edges: nodes } } = await fetchAPI(getPastorsPostsSitemapData);

    const postsData = nodes.map(({ node }: { node: PostSitemapSourceData }) => {
      return {
        slug: node.slug,
        modified: node.modified,
      };
    })
        
    return postsData;
  }
}

export default BlogDataApi;
