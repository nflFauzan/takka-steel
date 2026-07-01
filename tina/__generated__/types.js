export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const ProductsPartsFragmentDoc = gql`
    fragment ProductsParts on Products {
  __typename
  name
  category
  department
  brand
  badge
  stock
  featured
  priceFrom
  image
  summary
  description
  specs {
    __typename
    label
    value
  }
  uses
}
    `;
export const ArticlesPartsFragmentDoc = gql`
    fragment ArticlesParts on Articles {
  __typename
  title
  excerpt
  date
  author
  image
  body
}
    `;
export const ProductsDocument = gql`
    query products($relativePath: String!) {
  products(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductsParts
  }
}
    ${ProductsPartsFragmentDoc}`;
export const ProductsConnectionDocument = gql`
    query productsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductsFilter) {
  productsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductsParts
      }
    }
  }
}
    ${ProductsPartsFragmentDoc}`;
export const ArticlesDocument = gql`
    query articles($relativePath: String!) {
  articles(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ArticlesParts
  }
}
    ${ArticlesPartsFragmentDoc}`;
export const ArticlesConnectionDocument = gql`
    query articlesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ArticlesFilter) {
  articlesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ArticlesParts
      }
    }
  }
}
    ${ArticlesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    products(variables, options) {
      return requester(ProductsDocument, variables, options);
    },
    productsConnection(variables, options) {
      return requester(ProductsConnectionDocument, variables, options);
    },
    articles(variables, options) {
      return requester(ArticlesDocument, variables, options);
    },
    articlesConnection(variables, options) {
      return requester(ArticlesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
