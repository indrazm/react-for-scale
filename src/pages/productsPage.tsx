import { useProducts } from "../features/products/hooks/useProducts";

export const ProductsPage = () => {
  const { products, isError } = useProducts({
    limit: 5,
    offset: 15,
  });

  if (isError) {
    return <div>Can't get data</div>;
  }

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
};
