import { EndpointsList } from "@/constants";

class RestApiService {
  static async getPageData(id: string) {
    const response = await fetch(`${EndpointsList.PagesStandartRestEndpoint}${id}`);
    const {
      id: postID,
      lang,
      status,
      featured_media,
      complex,
      page_info,
      content: { rendered: contentData },
      excerpt: { rendered: excerptData },
      title: { rendered: titleData },
      yoast_head_json,
    } = await response.json();

    const data = {
      id: postID,
      lang,
      status,
      complex,
      pageInfo: {
        pageDescription: page_info[0]?.page_description || '',
      },
      contentData,
      excerptData,
      featured_media,
      titleData,
      metaData: {
        metaTitle: yoast_head_json?.title,
        metaDescription: yoast_head_json?.description,
        canonical: yoast_head_json?.canonical,
        modifiedTime: yoast_head_json?.article_modified_time ? yoast_head_json?.article_modified_time : '',
        og_locale: yoast_head_json?.og_locale,
        og_type: yoast_head_json?.og_type,
        og_image: {
          type: yoast_head_json?.og_image[0].type ? yoast_head_json?.og_image[0].type : '',
          url: yoast_head_json?.og_image[0].url
        },
        schema: yoast_head_json?.schema,
        twitter_card: yoast_head_json?.twitter_card,
      }
    };

    return data;
  }
}

export default RestApiService;
