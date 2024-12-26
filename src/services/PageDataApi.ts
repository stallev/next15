import { getMarkdownPageContentData } from "@/graphql/markdownContentDataQueries";
import { convertGutenbergBlocksData } from "@/utils/convertGutenbergBlocksData";
import { SeoContentDataProps } from "@/types/globalTypes";
import { fetchAPI } from "./WordPressFetchAPI";
import { DEFAULT_FEATURED_IMAGE } from "@/constants/mock";

class PageContentDataApi {
  static async getPageContentData(id: string, idType = 'DATABASE_ID') {
    const variables = {
      id,
      idType,
    }
    
    const { page } = await fetchAPI(getMarkdownPageContentData, { variables });
    const featuredImageUrl = !!page.featuredImage ? page.featuredImage.node.mediaItemUrl : DEFAULT_FEATURED_IMAGE;

    const seo: SeoContentDataProps = {
      data: {
        ...page.seo,
        featuredImageUrl,
        title: page.title,
        slug: page.slug,
      },
      isPostType: false,
    }

    const pageContent = convertGutenbergBlocksData(page.blocks);

    return {
      title: page.title,
      slug: page.slug,
      pageContent,
      seo,
      translations: page?.translations,
      featuredImage: page?.featuredImage,
    };
  }
}

export default PageContentDataApi;
