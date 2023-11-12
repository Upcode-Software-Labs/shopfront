import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { VariantSelector } from './variant-selector';
import { Product } from '@chec/commerce.js/types/product';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            currencyCode={product.price.formatted_with_code}
          />
        </div>
      </div>
      <VariantSelector options={product.assets} variants={product.variant_groups} />

      {product.description ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.description}
        />
      ) : null}

      <AddToCart variants={product.variant_groups} availableForSale={product.active} />
    </>
  );
}
