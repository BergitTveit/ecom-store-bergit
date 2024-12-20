import { useMemo, useState } from "react";
import { filterProductsBySearch } from "../utils/searchFilters";
import { useAppSelector } from "./reduxHooks";

export const useCategoryFilter = () => {
  const { products, selectedTag } = useAppSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedTag) {
      filtered = filtered.filter((product) =>
        product.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filterProductsBySearch(filtered, searchTerm);
    }

    return filtered;
  }, [products, selectedTag, searchTerm]);

  return { filteredProducts, searchTerm, setSearchTerm };
};
