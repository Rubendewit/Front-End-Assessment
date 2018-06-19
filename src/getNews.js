import { request } from 'graphql-request';

const endpoint = 'https://fashionunited.com/graphql/';

const articleQuery = `
query NewsArticle($id: Int!) {
  fashionunitedNlNewsArticle(id: $id) {
    title
    url
    imageUrl
    description
  }
}
`;

const articlesQuery = `
  query NewsArticles($keywords: [String], $limit: Int, $offset: Int) {
    fashionunitedNlNewsArticles(keywords: $keywords, limit: $limit, offset: $offset) {
      id
      title
      imageUrl
      slug
    }
  }
`;

export function getNewsArticle(variables = {}) {
  return request(endpoint, articleQuery, variables);
}

export function getNewsArticles(variables = {}) {
  return request(endpoint, articlesQuery, variables);
}
