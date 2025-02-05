import { api } from "../../../shared/utils/api";
import { Product } from "../../../types/entities/product";
import { ProductQueryParams } from "../types/products";

export async function getProducts(params: ProductQueryParams) {
  return api.get<Product[]>("/products", { params: params as Record<string, string> });
}
