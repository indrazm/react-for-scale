import { useProducts } from "../features/products/hooks/useProducts";

export const ProductsPage = () => {
  const { products } = useProducts({
    limit: 5,
    offset: 15,
  });

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
};
