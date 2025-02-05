export interface ProductQueryParams {
  limit?: number;
  offset?: number;
  filter?: string;
  category?: string;
  sort?: "asc" | "desc";
}
