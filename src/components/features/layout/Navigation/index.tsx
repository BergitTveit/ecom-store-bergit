import { MobileMenu } from "./MobileMenu";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { setSelectedTag } from "../../../../store/slices/productSlice";
import { fetchTags } from "../../../../store/slices/tagSlice";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { selectedTag } = useAppSelector((state) => state.products);
  const { tags, loading } = useAppSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  if (loading || tags.length === 0) return null;

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-12 lg:gap-16">
          {tags.map((tag: string, index: number) => (
            <li key={index}>
              <button
                onClick={() =>
                  dispatch(setSelectedTag(selectedTag === tag ? null : tag))
                }
                className={`flex items-center text-black no-underline gap-2 p-2 
                hover:text-secondary transition-colors lg:text-base lg:px-4
                ${selectedTag === tag ? "text-secondary" : ""}`}
              >
                <h3 className="m-0 text-sm capitalize">{tag}</h3>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </>
  );
};
