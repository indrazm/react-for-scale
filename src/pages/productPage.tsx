import { useParams } from "react-router";
import { useProduct } from "../features/products/hooks/useProduct";

export const ProductPage = () => {
  const params = useParams();
  const { product, isError } = useProduct(params.id as string);

  if (isError) {
    return <div>Error Getting Product</div>;
  }

  return <pre>{JSON.stringify(product, null, 2)}</pre>;
};
