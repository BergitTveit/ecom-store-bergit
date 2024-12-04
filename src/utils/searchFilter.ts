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
{
  /* Add suggestive text to search bar */
}
