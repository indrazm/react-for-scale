import { useProducts } from "../hooks/useProducts";

export const ProductList = () => {
  const { products } = useProducts({
    limit: 5,
  });

  return (
    <>
      {products.map((product) => {
        return <div>{product.title}</div>;
      })}
    </>
  );
};
