import { useProducts } from "../features/products/hooks/useProducts";

export const ProductsPage = () => {
  const { products, isPending, error } = useProducts({
    category: "home",
  });

  console.log("Products:", products);
  console.log("Error:", error);
  console.log("Loading:", isPending);

  if (error) {
    return <div>Can't get data</div>;
  }

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
};
