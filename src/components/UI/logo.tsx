import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="font-bold text-xl md:text-2xl text-secondary hover:text-black ">
      <Link to="/" className="flex items-center gap-2">
        O / P
      </Link>
    </div>
  );
};
