import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { ProductQueryParams } from "../types/products";

export const useProducts = (params: ProductQueryParams) => {
  const { data: products, isPending: isProductLoading } = useQuery({
    initialData: [],
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });

  return { products, isProductLoading };
};
