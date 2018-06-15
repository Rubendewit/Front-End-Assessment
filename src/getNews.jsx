import { request } from 'graphql-request';

const endpoint = 'https://fashionunited.com/graphql/';

const articleQuery = `
query NewsArticle($id: Int!) {
  fashionunitedNlNewsArticle(id: $id) {
    id
    title
    imageUrl
    description
    text
  }
}
`;

const articlesQuery = `
  query NewsArticles($keywords: [String]) {
    fashionunitedNlNewsArticles(keywords: $keywords) {
      id
      title
      url
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
