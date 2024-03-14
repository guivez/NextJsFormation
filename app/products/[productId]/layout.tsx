import { Suspense } from "react";
import ProductLoader from "./loading";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<ProductLoader />}>{children}</Suspense>;
};

export default ProductLayout;
