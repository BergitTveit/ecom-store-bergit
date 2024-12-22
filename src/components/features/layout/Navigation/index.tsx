import { MobileMenu } from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setSelectedTag } from "../../../../store/slices/productSlice";
import { MAIN_CATEGORIES } from "./categories/constants";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedTag } = useAppSelector((state) => state.products);

  const handleTagClick = (categoryName: string) => {
    dispatch(
      setSelectedTag(selectedTag === categoryName ? null : categoryName)
    );
    navigate("/");
  };

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-12 lg:gap-16">
          {MAIN_CATEGORIES.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => handleTagClick(category.name)}
                className={`flex items-center text-black no-underline gap-2 p-2 
                hover:text-secondary transition-colors lg:text-base lg:px-4
                ${selectedTag === category.name ? "text-secondary" : ""}`}
              >
                <h3 className="m-0 text-sm capitalize">{category.name}</h3>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </>
  );
};
