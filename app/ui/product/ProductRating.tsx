import { PageProps } from "@/.next/types/app/layout";
import { fetchFakeStore } from "@/app/lib/fakeStoreService";
import { Product } from "@/app/lib/types";

const ProductRating = async ({ productId }: { productId: string }) => {
  const product = await fetchFakeStore<Product>(`/products/${productId}`);
  return (
    <div>
      <h2>Notes des acheteurs</h2>
      <p>
        {product.rating.rate} / 10 ({product.rating.count})
      </p>
    </div>
  );
};

export default ProductRating;
