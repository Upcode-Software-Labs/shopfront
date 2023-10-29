import { Cart } from '@chec/commerce.js/types/cart';
import { Product } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from 'lib/constants';
import { ensureStartsWith } from 'lib/utils';
import { NextRequest, NextResponse } from 'next/server';

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

// export async function shopifyFetch<T>({
//   cache = 'force-cache',
//   headers,
//   query,
//   tags,
//   variables
// }: {
//   cache?: RequestCache;
//   headers?: HeadersInit;
//   query: string;
//   tags?: string[];
//   variables?: ExtractVariables<T>;
// }): Promise<{ status: number; body: T } | never> {
//   try {
//     const result = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': key,
//         ...headers
//       },
//       body: JSON.stringify({
//         ...(query && { query }),
//         ...(variables && { variables })
//       }),
//       cache,
//       ...(tags && { next: { tags } })
//     });

//     const body = await result.json();

//     if (body.errors) {
//       throw body.errors[0];
//     }

//     return {
//       status: result.status,
//       body
//     };
//   } catch (e) {
//     if (isShopifyError(e)) {
//       throw {
//         cause: e.cause?.toString() || 'unknown',
//         status: e.status || 500,
//         message: e.message,
//         query
//       };
//     }

//     throw {
//       error: e,
//       query
//     };
//   }
// }

const removeEdgesAndNodes = (array: any) => {
  return [];
};

const reshapeCart = (cart: any): any => {
  return {};
};

export async function createCart(): Promise<Cart> {
  return new Promise(() => {});
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  return new Promise(() => {});
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  return new Promise(() => {});
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  return new Promise(() => {});
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  return new Promise(() => {});
}

//TODO: change return type
export async function getCollection(handle: string): Promise<any | undefined> {
  const merchant = await commerce.merchants.about();
  const categories = await commerce.categories.list;
  const products = await commerce.products.list();
  console.log({ categories, products });
  return {};
  // return reshapeCollection(res.body.data.collection);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<any[]> {
  return [];
}

export async function getCollections(): Promise<any[]> {
  return [];
}

export async function getMenu(handle: string): Promise<any[]> {
  return new Promise((resolve) => resolve([]));
}

export async function getPage(handle: string): Promise<any> {
  return {};
}

export async function getPages(): Promise<any[]> {
  return [];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return new Promise(() => {});
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return new Promise(() => []);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<any[]> {
  return [];
}

// // This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  //   // We always need to respond with a 200 status code to Shopify,
  //   // otherwise it will continue to retry the request.
  //   const collectionWebhooks = ['collections/create', 'collections/delete', 'collections/update'];
  //   const productWebhooks = ['products/create', 'products/delete', 'products/update'];
  //   const topic = headers().get('x-shopify-topic') || 'unknown';
  //   const secret = req.nextUrl.searchParams.get('secret');
  //   const isCollectionUpdate = collectionWebhooks.includes(topic);
  //   const isProductUpdate = productWebhooks.includes(topic);

  //   if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
  //     console.error('Invalid revalidation secret.');
  //     return NextResponse.json({ status: 200 });
  //   }

  //   if (!isCollectionUpdate && !isProductUpdate) {
  //     // We don't need to revalidate anything for any other topics.
  //     return NextResponse.json({ status: 200 });
  //   }

  //   if (isCollectionUpdate) {
  //     revalidateTag(TAGS.collections);
  //   }

  //   if (isProductUpdate) {
  //     revalidateTag(TAGS.products);
  //   }

  //   return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
  return new Promise(() => {});
}
