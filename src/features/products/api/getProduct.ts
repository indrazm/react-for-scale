import { api } from "../../../shared/utils/api";
import { Product } from "../../../types/entities/product";

export const getProduct = async (id: string | number) => {
  return api.get<Product>(`/products/${id}`);
};
