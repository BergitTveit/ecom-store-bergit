import { useMemo, useState } from "react";
import { filterProductsBySearch } from "../utils/searchFilters";
import { useAppSelector } from "./reduxHooks";
import { MAIN_CATEGORIES } from "../components/features/layout/Navigation/categories/constants";

export const useCategoryFilter = () => {
  const { products, selectedTag } = useAppSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedTag && selectedTag !== "All") {
      const selectedCategory = MAIN_CATEGORIES.find(
        (cat) => cat.name === selectedTag
      );

      if (selectedCategory) {
        filtered = filtered.filter((product) =>
          product.tags.some((productTag) =>
            selectedCategory.tags.includes(productTag.toLowerCase())
          )
        );
      }
    }

    if (searchTerm) {
      filtered = filterProductsBySearch(filtered, searchTerm);
    }

    return filtered;
  }, [products, selectedTag, searchTerm]);

  return { filteredProducts, searchTerm, setSearchTerm };
};
