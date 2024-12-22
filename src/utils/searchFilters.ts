import { Product } from "../api";

export const filterProductsBySearch = (
  products: Product[],
  searchTerm: string
) => {
  if (!searchTerm) return products;

  const term = searchTerm.toLowerCase();

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
  );
};

export const getSearchProductSuggestions = (
  products: Product[],
  searchTerm: string,
  maxSuggestions = 5
): string[] => {
  if (!searchTerm) return [];
  const term = searchTerm.toLowerCase();

  return products
    .filter((p) => p.title.toLowerCase().includes(term))
    .map((p) => p.title)
    .slice(0, maxSuggestions);
};
