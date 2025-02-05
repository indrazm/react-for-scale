import { useParams } from "react-router";
import { useProduct } from "../features/products/hooks/useProduct";

export const ProductPage = () => {
  const params = useParams();
  const { product } = useProduct(params.id as string);

  return <pre>{JSON.stringify(product, null, 2)}</pre>;
};
