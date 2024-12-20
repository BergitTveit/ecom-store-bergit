import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setSelectedTag } from "../../store/slices/productSlice";

export const Logo = () => {
  const dispatch = useAppDispatch();

  const handleLogoClick = () => {
    dispatch(setSelectedTag(null));
  };

  return (
    <div className="font-bold text-xl md:text-2xl text-secondary hover:text-black">
      <Link
        to="/"
        onClick={handleLogoClick}
        className="flex items-center gap-2"
      >
        O / P
      </Link>
    </div>
  );
};
