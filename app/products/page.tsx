import Link from "next/link";
import { fetchFakeStore } from "../lib/fakeStoreService";
import { Product } from "../lib/types";

const getProductsData = async () => {
  const productsList = await fetchFakeStore<Product[]>("/products");

  return productsList;
};

export default async function ProductsPage() {
  const products: Product[] = await getProductsData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <Link
              href={`/products/${product.id}`}
              target="_blank"
              rel="noopener"
            >
              Product id: {product.id}
            </Link>
            <p>Product title: {product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
