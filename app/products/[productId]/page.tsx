import { Product } from "@/app/lib/types";
import { PageProps } from "@/.next/types/app/layout";
import Image from "next/image";
import { fetchFakeStore } from "@/app/lib/fakeStoreService";

const getProductData = async (productId: string) => {
  const productItem = await fetchFakeStore<Product>(`/products/${productId}`);
  return productItem;
};

export default async function ProductPage({
  params: { productId },
}: PageProps) {
  const product = await getProductData(productId);

  return (
    <div>
      {product && (
        <ul>
          <li>Product id: {product.id}</li>
          <li>Product title: {product.title}</li>
          <li>
            <Image
              alt={product.description}
              src={product.image}
              height={300}
              width={150}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
