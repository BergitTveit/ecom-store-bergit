import { Product } from '../../api/api.types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img 
        src={product.image.url} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;