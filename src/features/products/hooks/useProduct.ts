import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";

export const useProduct = (id: string | number) => {
  const {
    data: product,
    isPending: isProductLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });

  return {
    product,
    isProductLoading,
    isError,
    error,
  };
};
