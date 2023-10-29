import { ProductCollection } from '@chec/commerce.js/features/products';
import { Cart } from '@chec/commerce.js/types/cart';
import { Product } from '@chec/commerce.js/types/product';
import { COMMERCE_JS_API_ENDPOINT } from 'lib/constants';
import { NextRequest, NextResponse } from 'next/server';

const endpoint = COMMERCE_JS_API_ENDPOINT;
const key = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY!;

export async function commerceJSFetch<T>({
  method = 'GET',
  cache = 'force-cache',
  headers,
  path,
  body,
  parameters
}: {
  method?: string;
  cache?: RequestCache;
  headers?: HeadersInit;
  path: string;
  tags?: string[];
  body?: object;
  parameters?: object;
}): Promise<T | never> {
  try {
    let queries = getPathParms(parameters);
    console.log({ url: `${endpoint}${path}${queries ? '?' + queries : ''}` });

    const result = await fetch(`${endpoint}${path}${queries ? '?' + queries : ''}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': key,
        ...headers
      },
      body:
        body != undefined
          ? JSON.stringify({
              ...body
            })
          : undefined,
      cache
    });

    const response = await result.json();

    if (response.errors) {
      throw response.errors[0];
    }

    return response;
  } catch (e) {
    throw {
      error: e,
      path
    };
  }
}

export async function getProductsFromCommerceJs<T>({
  parameters
}: {
  parameters?: object;
}): Promise<ProductCollection | never> {
  return commerceJSFetch<ProductCollection>({ path: 'products', parameters });
}

function getPathParms(parameters?: object) {
  if (!parameters) {
    return null;
  }

  const params = new URLSearchParams();

  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      params.append(key, (parameters as any)[key]);
    }
  }
  return params.toString();
}

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
  // const merchant = await commerce.merchants.about();
  // const categories = await commerce.categories.list();
  // const products = await commerce.products.list();
  // console.log({ categories, products });
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
}): Promise<ProductCollection> {
  // let list = commerce.products.list({
  //   limit: 20, category_id: collection, sortBy: sortKey, sortDirection: reverse? 'desc': 'asc',
  //   category_slug: ['shoes']

  // }).then(response => {
  //   console.log("test")
  // }
  // )

  // return list;
  return getProductsFromCommerceJs({
    parameters: {
      limit: 5
    }
  });
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
