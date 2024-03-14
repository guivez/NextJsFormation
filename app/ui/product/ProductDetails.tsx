import { fetchFakeStore } from "@/app/lib/fakeStoreService";
import { Product } from "@/app/lib/types";

const ProductDetails = async ({ productId }: { productId: string }) => {
  const product = await fetchFakeStore<Product>(`/products/${productId}`);
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.description}></img>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
